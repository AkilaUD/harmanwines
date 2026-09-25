"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { siteSettings } from "@/content/seed";
import { EcwidBagButton } from "@/components/shop/EcwidProvider";

const links = [
  { href: "/#place", label: "Explore" },
  { href: "/wine", label: "Wine" },
  { href: "/visit/cellar-door", label: "Cellar Door" },
  { href: "/visit/menu", label: "Food" },
  { href: "/visit/events", label: "Events" },
  { href: "/functions", label: "Functions" },
  { href: "/our-story", label: "Our Story" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  /** Linen ink over dusk heroes (home + wine collection) */
  const duskSurface =
    pathname === "/" || pathname === "/wine" || pathname.startsWith("/wine/");
  const onHero = duskSurface && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "bg-linen/90 backdrop-blur-md border-b border-dusk/8 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
          <Link href="/" className="group flex flex-col no-underline">
            <span
              className={cn(
                "font-display text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300",
                onHero ? "text-linen" : "text-dusk",
              )}
            >
              Harman Wines
            </span>
            <span
              className={cn(
                "label-ui mt-0.5 transition-colors duration-300",
                onHero ? "text-linen/65" : "text-loam",
              )}
            >
              Wattle Bank, South Gippsland
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "font-ui text-sm no-underline transition-colors duration-300",
                  onHero
                    ? "text-linen/75 hover:text-linen"
                    : "text-dusk/75 hover:text-dusk",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <EcwidBagButton
              className={cn(
                "label-ui transition-colors",
                onHero
                  ? "text-linen/70 hover:text-linen"
                  : "text-dusk/70 hover:text-dusk",
              )}
            />
            <Button
              href="/wine"
              variant={onHero ? "on-dark" : "secondary"}
              size="sm"
            >
              Shop Wine
            </Button>
            <Button href="/visit/book" size="sm" variant={onHero ? "on-dark" : "primary"}>
              Book a Table
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <EcwidBagButton
              className={cn(
                "label-ui px-2 transition-colors",
                onHero
                  ? "text-linen/70 hover:text-linen"
                  : "text-dusk/70 hover:text-dusk",
              )}
            />
            <button
              ref={toggleRef}
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                onHero
                  ? "border-linen/35 hover:border-linen/60"
                  : "border-dusk/20 hover:border-dusk/40",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span
                  className={cn(
                    "block h-px w-5 transition-transform",
                    onHero ? "bg-linen" : "bg-dusk",
                    open && "translate-y-[3.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-5 transition-opacity",
                    onHero ? "bg-linen" : "bg-dusk",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-5 transition-transform",
                    onHero ? "bg-linen" : "bg-dusk",
                    open && "-translate-y-[3.5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-40 bg-linen pt-24 px-6 transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible",
        )}
        aria-hidden={!open}
        {...(!open ? { inert: true as const } : {})}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={l.href}
              className="font-display text-3xl leading-tight text-dusk no-underline transition-opacity hover:opacity-70"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3" onClick={() => setOpen(false)}>
            <Button href="/visit/book">Book a Table</Button>
            <Button href="/shop" variant="secondary">
              Shop Wine
            </Button>
            <a
              href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}
              className="font-ui text-sm text-loam mt-2 transition-colors hover:text-dusk"
            >
              Call {siteSettings.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
