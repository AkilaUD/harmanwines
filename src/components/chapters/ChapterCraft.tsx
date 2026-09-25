"use client";

import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { craftStages } from "@/content/seed";
import { media } from "@/content/media";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MediaAsset } from "@/content/media";

const stageImages: (MediaAsset | null)[] = [
  media.craftGrapes,
  media.craftCellar,
  null,
];

const stageMarks = ["From vine", "To cellar", "To glass"];

export function ChapterCraft() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="craft"
      className="chapter-ground bg-deep-vine text-cream py-24 md:py-32"
      aria-labelledby="craft-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <SectionLabel className="text-cream/45">From land to bottle</SectionLabel>
              <EditorialHeading id="craft-heading" className="text-cream">
                David’s hands on every vintage
              </EditorialHeading>
              <p className="mt-5 max-w-xl text-cream/70 text-lg">
                Cool climate, maritime influence, slow ripening, wild fermentation — wines that
                speak of place and season.
              </p>
            </Reveal>

            <p className="mt-10 label-micro text-cream/40 tracking-[0.22em]">
              {stageMarks.join("  ·  ")}
            </p>

            <div className="mt-8 flex flex-wrap gap-2" role="tablist">
              {craftStages.map((stage, i) => (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "px-4 py-2 label-micro border transition-colors",
                    active === i
                      ? "border-cream text-cream"
                      : "border-cream/20 text-cream/45 hover:text-cream/80",
                  )}
                >
                  {stage.label}
                </button>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-12 max-w-2xl">
              <p className="font-display text-4xl md:text-5xl">{craftStages[active].label}</p>
              <p className="mt-4 text-lg text-cream/70 leading-relaxed">
                {craftStages[active].body}
              </p>
              <Link
                href="/our-story#winemaking"
                className="inline-block mt-8 label-micro text-olive no-underline hover:underline"
              >
                Winemaking philosophy →
              </Link>
            </Reveal>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-forest flex items-end p-8 md:p-10 grain">
            {stageImages[active] ? (
              <MediaImage
                asset={stageImages[active]!}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            ) : (
              <div className="relative z-10">
                <p className="label-micro text-cream/45">Next</p>
                <p className="font-display text-4xl md:text-5xl text-cream mt-3">The collection</p>
                <Link
                  href="#wine"
                  className="inline-block mt-6 label-micro text-olive no-underline hover:underline"
                >
                  Taste the vintage →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
