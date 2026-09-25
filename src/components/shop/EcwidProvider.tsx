"use client";

import { useCallback, useEffect, useState } from "react";
import { ecwidStoreId } from "@/lib/integrations";
import { cn } from "@/lib/utils";

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
  return <>{children}</>;
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

    // No global Ecwid script — hand off to shop product/cart
    if (!hasMountedStorefront() && !window.Ecwid?.Cart?.addProduct) {
      window.location.href = `/shop#!/p/${productId}`;
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
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let failTimer: number | undefined;

    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    const SCRIPT_ID = "ecwid-store-script";
    const SCRIPT_SRC = `https://app.ecwid.com/script.js?${ecwidStoreId}&data_platform=code`;

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        if (window.xProductBrowser) {
          resolve();
          return;
        }
        const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          // already loaded path
          if (window.xProductBrowser) resolve();
          // poll briefly in case load already fired
          let n = 0;
          const id = window.setInterval(() => {
            n += 1;
            if (window.xProductBrowser || n > 40) {
              window.clearInterval(id);
              resolve();
            }
          }, 250);
          return;
        }
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = SCRIPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.body.appendChild(script);
      });

    const mount = () => {
      if (cancelled) return;
      const el = document.getElementById(containerId);
      if (!el || !window.xProductBrowser) return;
      if (el.dataset.ecwidMounted === "1") {
        setReady(true);
        return;
      }
      el.dataset.ecwidMounted = "1";

      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      window.xProductBrowser(
        isDesktop ? "categoriesPerRow=3" : "categoriesPerRow=2",
        isDesktop
          ? "views=grid(3,3) list(10) table(20)"
          : "views=grid(2,3) list(10) table(20)",
        "categoryView=grid",
        "searchView=list",
        `id=${containerId}`,
      );
      setReady(true);
      if (failTimer) window.clearTimeout(failTimer);
    };

    void ensureScript().then(() => {
      if (cancelled) return;
      whenEcwidReady(mount);
    });

    failTimer = window.setTimeout(() => {
      if (!cancelled && !document.getElementById(containerId)?.dataset.ecwidMounted) {
        setFailed(true);
      }
    }, 15000);

    return () => {
      cancelled = true;
      if (failTimer) window.clearTimeout(failTimer);
    };
  }, [containerId]);

  return (
    <div className="ecwid-storefront relative overflow-x-hidden bg-linen border border-dusk/10 pb-24 md:pb-8 px-2 sm:px-4 md:px-6 pt-4 md:pt-6">
      {!ready && !failed && (
        <div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center font-ui text-sm text-loam"
          aria-live="polite"
        >
          Loading checkout…
        </div>
      )}
      {failed && (
        <div className="py-16 text-center px-4">
          <p className="font-display text-2xl text-dusk">Checkout is taking a moment</p>
          <p className="mt-3 text-loam font-body max-w-md mx-auto">
            Browse wines above, then open Bag when the store is ready — or refresh this page.
          </p>
        </div>
      )}
      <div
        id={containerId}
        className={cn(
          "relative z-10 min-h-[280px] md:min-h-[400px]",
          !ready && "opacity-0",
          failed && "hidden",
        )}
      />
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
        "font-ui text-sm text-dusk/75 hover:text-dusk transition-colors"
      }
      aria-label="Open shopping bag"
    >
      Bag
    </button>
  );
}
