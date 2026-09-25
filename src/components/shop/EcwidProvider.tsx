"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import { ecwidStoreId } from "@/lib/integrations";

declare global {
  interface Window {
    ecwid_script_defer?: boolean;
    ecwid_dynamic_widgets?: boolean;
    xProductBrowser?: (...args: string[]) => void;
    Ecwid?: {
      OnAPILoaded?: { add: (cb: () => void) => void };
      Cart?: {
        addProduct: (
          id:
            | string
            | number
            | {
                id: string | number;
                quantity?: number;
                callback?: (success: boolean) => void;
              },
        ) => void;
        get?: (cb: (cart: unknown) => void) => void;
        gotoCheckout?: () => void;
      };
      openPage?: (page: string, params?: Record<string, string>) => void;
    };
  }
}

const storefrontSelector = () => `#my-store-${ecwidStoreId}`;

/** Prefer OnAPILoaded; if Cart already exists (API loaded earlier), run immediately. */
function whenEcwidReady(cb: () => void) {
  if (typeof window === "undefined") return;

  let done = false;
  const runOnce = () => {
    if (done) return;
    done = true;
    try {
      cb();
    } catch {
      // callers handle fallbacks
    }
  };

  // API already available (typical after script warm / OnAPILoaded already fired)
  if (window.Ecwid?.Cart?.addProduct) {
    runOnce();
    return;
  }

  if (window.Ecwid?.OnAPILoaded?.add) {
    window.Ecwid.OnAPILoaded.add(runOnce);
  }

  let tries = 0;
  const id = window.setInterval(() => {
    tries += 1;
    if (window.Ecwid?.Cart?.addProduct) {
      window.clearInterval(id);
      runOnce();
      return;
    }
    if (window.Ecwid?.OnAPILoaded?.add) {
      window.Ecwid.OnAPILoaded.add(runOnce);
    }
    if (tries > 40) {
      window.clearInterval(id);
    }
  }, 250);
}

function hasMountedStorefront() {
  const el = document.querySelector(storefrontSelector());
  return !!(el && (el as HTMLElement).dataset.ecwidMounted === "1");
}

function openCartUi() {
  // Off /shop (e.g. wine PDP): no Product Browser → openPage throws. Navigate into shop cart.
  if (!hasMountedStorefront()) {
    window.location.href = "/shop#!/~/cart";
    return;
  }

  whenEcwidReady(() => {
    try {
      if (window.Ecwid?.openPage) {
        window.Ecwid.openPage("cart");
        return;
      }
    } catch {
      // fall through
    }
    window.location.href = "/shop#!/~/cart";
  });
}

export function EcwidProvider({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Script
        id="ecwid-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.ecwid_script_defer = true; window.ecwid_dynamic_widgets = true;`,
        }}
      />
      <Script
        src={`https://app.ecwid.com/script.js?${ecwidStoreId}&data_platform=code`}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}

export function EcwidBuyButton({
  productId,
  label = "Buy Now",
}: {
  productId?: string;
  label?: string;
}) {
  const [pending, setPending] = useState(false);

  const onClick = useCallback(() => {
    if (!productId) {
      window.location.href = "/shop";
      return;
    }

    const id = Number(productId) || productId;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setPending(false);
    };

    const add = () => {
      const cart = window.Ecwid?.Cart;
      if (!cart?.addProduct) {
        finish();
        window.location.href = `/shop#!/p/${productId}`;
        return;
      }

      cart.addProduct({
        id,
        quantity: 1,
        callback: () => {
          openCartUi();
          finish();
        },
      });
      // If callback is delayed/missing, still leave PDP for the shop cart
      window.setTimeout(() => {
        if (!finished) {
          openCartUi();
          finish();
        }
      }, 1200);
    };

    setPending(true);
    whenEcwidReady(add);

    window.setTimeout(() => {
      if (!finished) {
        finish();
        if (!window.Ecwid?.Cart) {
          window.location.href = `/shop#!/p/${productId}`;
        }
      }
    }, 10000);
  }, [productId]);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className="inline-flex items-center justify-center rounded-sm bg-burgundy text-cream px-6 py-3 text-xs tracking-[0.16em] uppercase hover:bg-plum transition-colors disabled:opacity-60"
    >
      {pending ? "Adding…" : label}
    </button>
  );
}

export function EcwidStorefront() {
  const containerId = `my-store-${ecwidStoreId}`;

  useEffect(() => {
    let cancelled = false;

    const mount = () => {
      if (cancelled) return;
      const el = document.getElementById(containerId);
      if (!el || !window.xProductBrowser) return;
      if (el.dataset.ecwidMounted === "1") return;
      el.dataset.ecwidMounted = "1";
      window.xProductBrowser(
        "categoriesPerRow=3",
        "views=grid(3,3) list(10) table(20)",
        "categoryView=grid",
        "searchView=list",
        `id=${containerId}`,
      );
    };

    whenEcwidReady(mount);

    return () => {
      cancelled = true;
    };
  }, [containerId]);

  return (
    <div className="ecwid-storefront min-h-[480px]">
      <div id={containerId} />
    </div>
  );
}

export function openEcwidCart() {
  if (typeof window === "undefined") return;
  openCartUi();
}

export function EcwidBagButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => openEcwidCart()}
      className={
        className ??
        "text-sm text-charcoal/75 hover:text-charcoal tracking-wide uppercase text-xs"
      }
      aria-label="Open shopping bag"
    >
      Bag
    </button>
  );
}
