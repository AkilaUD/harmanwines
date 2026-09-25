"use client";

import Image from "next/image";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { craftStages } from "@/content/seed";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { images } from "@/content/images";

/** Three beats only — Vine / Cellar earn photos; Glass is type-led into the wine strip. */
const stageImages: (string | null)[] = [
  images.grapes,
  images.cellarMoment,
  null,
];

export function ChapterCraft() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="craft"
      className="chapter-ground bg-charcoal text-cream py-24 md:py-32"
      aria-labelledby="craft-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Reveal>
              <SectionLabel className="text-cream/50">From land to bottle</SectionLabel>
              <EditorialHeading id="craft-heading" className="text-cream">
                David’s hands on every vintage
              </EditorialHeading>
              <p className="mt-5 max-w-xl text-cream/75 text-lg">
                Cool climate, maritime influence, slow ripening, wild fermentation — wines that
                speak of place and season.
              </p>
            </Reveal>

            <div className="mt-12 flex flex-wrap gap-2" role="tablist">
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
                      : "border-cream/20 text-cream/50 hover:text-cream/80",
                  )}
                >
                  {stage.label}
                </button>
              ))}
            </div>

            <Reveal delay={0.1} className="mt-12 max-w-2xl">
              <p className="font-display text-4xl md:text-5xl">{craftStages[active].label}</p>
              <p className="mt-4 text-lg text-cream/75 leading-relaxed">
                {craftStages[active].body}
              </p>
              <Link
                href="/our-story#winemaking"
                className="inline-block mt-8 label-micro text-dry-grass no-underline hover:underline"
              >
                Winemaking philosophy →
              </Link>
            </Reveal>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-forest flex items-end p-8 md:p-10">
            {stageImages[active] ? (
              <Image
                src={stageImages[active]!}
                alt={craftStages[active].label}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover opacity-90"
              />
            ) : (
              <div className="relative z-10">
                <p className="label-micro text-cream/50">Next</p>
                <p className="font-display text-4xl md:text-5xl text-cream mt-3">
                  The collection
                </p>
                <Link
                  href="#wine"
                  className="inline-block mt-6 label-micro text-dry-grass no-underline hover:underline"
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
