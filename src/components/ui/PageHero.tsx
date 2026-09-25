import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MediaImage } from "@/components/ui/MediaImage";
import type { MediaAsset } from "@/content/media";

export function PageHero({
  label,
  title,
  children,
  tone = "linen",
  media,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
  tone?: "linen" | "dusk" | "paper" | "cream" | "forest" | "photo";
  /** Full-bleed photo behind title (implies photo tone) */
  media?: MediaAsset;
}) {
  const isPhoto = Boolean(media) || tone === "photo";
  const resolved = isPhoto
    ? "photo"
    : tone === "cream"
      ? "linen"
      : tone === "forest"
        ? "dusk"
        : tone;

  if (resolved === "photo" && media) {
    return (
      <header className="relative min-h-[52svh] md:min-h-[58svh] flex flex-col justify-end overflow-hidden bg-dusk grain-dusk">
        <div className="absolute inset-0 overflow-hidden duotone-dusk">
          <MediaImage asset={media} priority sizes="100vw" className="hero-ken-burns" />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,30,23,0.62)_0%,rgba(27,30,23,0.28)_38%,rgba(27,30,23,0.22)_55%,rgba(27,30,23,0.88)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 pb-14 md:pb-20 pt-28 md:pt-36">
          {label && (
            <p className="font-display text-lg md:text-xl italic mb-3 text-linen/70">{label}</p>
          )}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl max-w-4xl text-balance leading-[1.05] tracking-tight text-linen">
            {title}
          </h1>
          {children && (
            <div className="mt-5 max-w-2xl text-lg font-body text-linen/80">{children}</div>
          )}
        </div>
      </header>
    );
  }

  const tones = {
    linen: "bg-linen text-dusk",
    dusk: "bg-dusk text-linen",
    paper: "bg-paper text-dusk",
  };

  return (
    <header className={cn(tones[resolved as keyof typeof tones], "pt-28 md:pt-36 pb-12 md:pb-16")}>
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
