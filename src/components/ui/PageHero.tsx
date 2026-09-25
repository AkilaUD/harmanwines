import type { ReactNode } from "react";

export function PageHero({
  label,
  title,
  children,
  tone = "cream",
}: {
  label?: string;
  title: string;
  children?: ReactNode;
  tone?: "cream" | "forest" | "paper";
}) {
  const tones = {
    cream: "bg-cream text-charcoal",
    forest: "bg-forest text-cream",
    paper: "bg-paper text-charcoal",
  };

  return (
    <header className={`${tones[tone]} pt-28 md:pt-36 pb-12 md:pb-16`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {label && (
          <p className={`label-micro mb-4 ${tone === "forest" ? "text-cream/55" : ""}`}>{label}</p>
        )}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl max-w-4xl text-balance">
          {title}
        </h1>
        {children && (
          <div
            className={`mt-5 max-w-2xl text-lg ${tone === "forest" ? "text-cream/75" : "text-stone"}`}
          >
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
