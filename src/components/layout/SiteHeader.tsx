"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-charcoal/8 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
          <Link href="/" className="group flex flex-col no-underline">
            <span className="font-display text-xl md:text-2xl tracking-tight text-charcoal group-[.on-hero]:text-cream">
              Harman Wines
            </span>
            <span className="label-micro mt-0.5 text-[0.6rem]">
              Wattle Bank · South Gippsland
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-charcoal/75 hover:text-charcoal no-underline transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <EcwidBagButton className="label-micro text-charcoal/70 hover:text-charcoal" />
            <Button href="/wine" variant="secondary" size="sm">
              Shop Wine
            </Button>
            <Button href="/visit/book" size="sm">
              Book a Table
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <EcwidBagButton className="label-micro text-charcoal/70 px-2" />
            <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/20"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={cn(
                  "block h-px w-5 bg-charcoal transition-transform",
                  open && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-charcoal transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-charcoal transition-transform",
                  open && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 bg-cream pt-24 px-6 transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible",
        )}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-3xl no-underline"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3" onClick={() => setOpen(false)}>
            <Button href="/visit/book">Book a Table</Button>
            <Button href="/shop" variant="secondary">
              Shop
            </Button>
            <Button href="/wine" variant="secondary">
              Shop Wine
            </Button>
            <a href={`tel:${siteSettings.phone.replace(/\s/g, "")}`} className="text-sm text-stone mt-2">
              Call {siteSettings.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
