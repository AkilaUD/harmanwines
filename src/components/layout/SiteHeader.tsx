"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteSettings } from "@/content/seed";
import { EcwidBagButton } from "@/components/shop/EcwidProvider";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/our-story",
    children: [
      { label: "Our Story", href: "/our-story" },
      { label: "Our Region", href: "/visit/region" },
      { label: "Awards", href: "/awards" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Cellar Door",
    href: "/visit/cellar-door",
    children: [
      { label: "Book a Table", href: "/visit/book" },
      { label: "Menu", href: "/visit/menu" },
      { label: "Takeaway", href: "/takeaway" },
      { label: "FAQ", href: "/faq" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "Wine", href: "/shop" },
      { label: "Gift Vouchers", href: "/gift" },
    ],
  },
  { label: "Events", href: "/visit/events" },
  { label: "Functions", href: "/functions" },
  { label: "News", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  const duskSurface =
    pathname === "/" ||
    pathname === "/wine" ||
    pathname.startsWith("/wine/") ||
    pathname === "/shop" ||
    pathname === "/visit" ||
    pathname.startsWith("/visit/") ||
    pathname === "/our-story" ||
    pathname === "/journal" ||
    pathname.startsWith("/journal/") ||
    pathname === "/functions" ||
    pathname === "/gift" ||
    pathname === "/takeaway" ||
    pathname === "/careers" ||
    pathname === "/faq";
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
    setDesktopOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    firstFocusRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(null);
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

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setDesktopOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDesktopOpen(null);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const linkTone = onHero
    ? "text-linen hover:text-linen/90"
    : "text-dusk/75 hover:text-dusk";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "bg-linen/95 backdrop-blur-md border-b border-dusk/8 py-3"
            : onHero
              ? "bg-dusk/88 backdrop-blur-md border-b border-linen/10 py-4"
              : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
          <Link href="/" className="group flex flex-col no-underline gap-1 shrink-0">
            <BrandLogo
              tone={onHero ? "light" : "dark"}
              width={onHero ? 132 : 120}
              className="w-[7.5rem] md:w-[9.25rem]"
              priority
            />
            <span
              className={cn(
                "label-ui transition-colors duration-300 hidden sm:block",
                onHero ? "text-linen/65" : "text-loam",
              )}
            >
              Wattle Bank, South Gippsland
            </span>
          </Link>

          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isOpen = desktopOpen === item.label;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "font-ui text-sm no-underline px-2.5 py-2 transition-colors duration-300",
                      linkTone,
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDesktopOpen(item.label)}
                  onMouseLeave={() => setDesktopOpen(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "font-ui text-sm px-2.5 py-2 inline-flex items-center gap-1 transition-colors duration-300 bg-transparent border-0 cursor-pointer",
                      linkTone,
                      isOpen && (onHero ? "text-linen" : "text-dusk"),
                    )}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`${menuId}-${item.label}`}
                    onClick={() =>
                      setDesktopOpen((cur) => (cur === item.label ? null : item.label))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setDesktopOpen(item.label);
                      }
                    }}
                  >
                    {item.label}
                    <span className="text-[0.65em] opacity-70" aria-hidden>
                      ▾
                    </span>
                  </button>
                  <div
                    id={`${menuId}-${item.label}`}
                    role="menu"
                    hidden={!isOpen}
                    className={cn(
                      "absolute left-0 top-full pt-2 min-w-[12rem]",
                      !isOpen && "invisible pointer-events-none",
                    )}
                  >
                    <ul className="bg-linen border border-dusk/10 py-2 shadow-sm">
                      {item.children!.map((child) => (
                        <li key={child.href + child.label} role="none">
                          <Link
                            role="menuitem"
                            href={child.href}
                            className="block px-4 py-2.5 font-ui text-sm text-dusk/80 no-underline hover:bg-paper hover:text-dusk"
                            onClick={() => setDesktopOpen(null)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <EcwidBagButton
              className={cn(
                "label-ui transition-colors",
                onHero
                  ? "text-linen hover:text-linen/90"
                  : "text-dusk/70 hover:text-dusk",
              )}
            />
            <Button
              href="/shop"
              variant={onHero ? "on-dark" : "secondary"}
              size="sm"
              className="hidden xl:inline-flex"
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
                  ? "text-linen hover:text-linen/90"
                  : "text-dusk/70 hover:text-dusk",
              )}
            />
            <button
              ref={toggleRef}
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
                onHero
                  ? "border-linen/50 hover:border-linen"
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
          "fixed inset-0 z-40 bg-linen pt-24 px-6 pb-10 overflow-y-auto transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible",
        )}
        aria-hidden={!open}
        {...(!open ? { inert: true as const } : {})}
      >
        <div className="mb-8">
          <BrandLogo tone="dark" width={120} />
        </div>
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navItems.map((item, i) => {
            const hasChildren = Boolean(item.children?.length);
            const expanded = mobileOpen === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  ref={(el) => {
                    if (i === 0) firstFocusRef.current = el;
                  }}
                  href={item.href}
                  className="font-display text-3xl leading-tight text-dusk no-underline py-2 transition-opacity hover:opacity-70"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="border-b border-dusk/8 py-2">
                <button
                  type="button"
                  ref={(el) => {
                    if (i === 0) firstFocusRef.current = el;
                  }}
                  className="w-full flex items-center justify-between gap-3 bg-transparent border-0 p-0 cursor-pointer text-left"
                  aria-expanded={expanded}
                  onClick={() =>
                    setMobileOpen((cur) => (cur === item.label ? null : item.label))
                  }
                >
                  <span className="font-display text-3xl leading-tight text-dusk">
                    {item.label}
                  </span>
                  <span className="label-ui text-loam" aria-hidden>
                    {expanded ? "−" : "+"}
                  </span>
                </button>
                {expanded && (
                  <ul className="mt-3 mb-2 space-y-2 pl-1">
                    {item.children!.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          className="font-ui text-base text-loam no-underline hover:text-dusk"
                          onClick={() => {
                            setOpen(false);
                            setMobileOpen(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          <div className="mt-8 flex flex-col gap-3" onClick={() => setOpen(false)}>
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
