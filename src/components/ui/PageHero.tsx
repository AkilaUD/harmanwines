import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  label,
  title,
  children,
  tone = "linen",
}: {
  label?: string;
  title: string;
  children?: ReactNode;
  tone?: "linen" | "dusk" | "paper" | "cream" | "forest";
}) {
  const resolved =
    tone === "cream" ? "linen" : tone === "forest" ? "dusk" : tone;

  const tones = {
    linen: "bg-linen text-dusk",
    dusk: "bg-dusk text-linen",
    paper: "bg-paper text-dusk",
  };

  return (
    <header className={cn(tones[resolved], "pt-28 md:pt-36 pb-12 md:pb-16")}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {label && (
          <p
            className={cn(
              "font-display text-lg md:text-xl italic mb-3 opacity-70",
              resolved === "dusk" ? "text-linen/70" : "text-loam",
            )}
          >
            {label}
          </p>
        )}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl max-w-4xl text-balance leading-[1.05] tracking-tight">
          {title}
        </h1>
        {children && (
          <div
            className={cn(
              "mt-5 max-w-2xl text-lg font-body",
              resolved === "dusk" ? "text-linen/75" : "text-loam",
            )}
          >
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
