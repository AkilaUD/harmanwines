"use client";

import Link from "next/link";

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-dusk/10 bg-linen/95 backdrop-blur-md px-4 py-3 safe-pb">
      <div className="flex gap-2">
        <Link
          href="/visit/book"
          className="font-ui flex-1 text-center rounded-sm bg-claret text-linen py-3 text-sm no-underline transition-colors hover:bg-plum"
        >
          Book a Table
        </Link>
        <Link
          href="/wine"
          className="font-ui flex-1 text-center rounded-sm border border-dusk/25 py-3 text-sm no-underline transition-colors hover:border-dusk/50"
        >
          Shop Wine
        </Link>
      </div>
    </div>
  );
}
