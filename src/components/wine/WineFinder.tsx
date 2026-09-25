"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Wine } from "@/types/content";
import { formatPrice } from "@/lib/utils";

export function WineFinder({ wines }: { wines: Wine[] }) {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState<"any" | Wine["colour"]>("any");
  const [style, setStyle] = useState<"any" | "fresh" | "rich">("any");

  const results = useMemo(() => {
    return wines.filter((w) => {
      if (colour !== "any" && w.colour !== colour) return false;
      if (style === "fresh" && !/fresh|dry|sparkling|white|rose/i.test(w.style + w.colour))
        return false;
      if (style === "rich" && !/red|cool-climate red/i.test(w.style + w.colour)) return false;
      return true;
    });
  }, [wines, colour, style]);

  return (
    <div className="border-t border-charcoal/10 pt-12">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="label-micro text-burgundy underline-offset-4 hover:underline"
        aria-expanded={open}
      >
        {open ? "Close wine finder" : "Optional — Find your wine"}
      </button>

      {open && (
        <div className="mt-8 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-6">
            <fieldset>
              <legend className="label-micro mb-3">Colour</legend>
              <div className="flex flex-wrap gap-2">
                {(["any", "white", "rose", "red", "sparkling"] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColour(c)}
                    className={`px-3 py-2 text-xs tracking-wide border ${
                      colour === c ? "border-burgundy text-burgundy" : "border-charcoal/15"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="label-micro mb-3">Feel</legend>
              <div className="flex flex-wrap gap-2">
                {(["any", "fresh", "rich"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStyle(s)}
                    className={`px-3 py-2 text-xs tracking-wide border ${
                      style === s ? "border-burgundy text-burgundy" : "border-charcoal/15"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
          <ul className="space-y-3">
            {results.map((w) => (
              <li key={w.id}>
                <Link
                  href={`/wine/${w.slug}`}
                  className="flex justify-between gap-4 border-b border-charcoal/10 py-3 no-underline hover:text-burgundy"
                >
                  <span>{w.name}</span>
                  <span className="text-stone text-sm">{formatPrice(w.price)}</span>
                </Link>
              </li>
            ))}
            {results.length === 0 && (
              <li className="text-stone text-sm">No matches — try another combination.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
