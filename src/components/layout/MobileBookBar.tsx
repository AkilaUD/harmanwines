"use client";

import Link from "next/link";

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-charcoal/10 bg-cream/95 backdrop-blur-md px-4 py-3 safe-pb">
      <div className="flex gap-2">
        <Link
          href="/visit/book"
          className="flex-1 text-center rounded-sm bg-burgundy text-cream py-3 text-xs tracking-[0.16em] uppercase no-underline"
        >
          Book a Table
        </Link>
        <Link
          href="/wine"
          className="flex-1 text-center rounded-sm border border-charcoal/25 py-3 text-xs tracking-[0.16em] uppercase no-underline"
        >
          Shop Wine
        </Link>
      </div>
    </div>
  );
}
