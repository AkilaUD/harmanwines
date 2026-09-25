"use client";

import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { EditorialTabs } from "@/components/ui/EditorialTabs";
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

            <EditorialTabs
              className="mt-8"
              label="Winemaking stages"
              index={active}
              onIndexChange={setActive}
              items={craftStages.map((stage) => ({
                id: stage.id,
                label: stage.label,
                panel: (
                  <div className="max-w-2xl">
                    <p className="font-display text-4xl md:text-5xl leading-tight">{stage.label}</p>
                    <p className="mt-4 text-lg text-cream/70 leading-relaxed">{stage.body}</p>
                    <Link
                      href="/our-story#winemaking"
                      className="inline-block mt-8 label-micro text-olive-on-dark no-underline hover:underline"
                    >
                      Winemaking philosophy →
                    </Link>
                  </div>
                ),
              }))}
              tabClassName={(selected) =>
                cn(
                  "px-4 py-2 label-micro border transition-colors",
                  selected
                    ? "border-cream text-cream"
                    : "border-cream/20 text-cream/45 hover:text-cream/80",
                )
              }
            />
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
                <p className="font-display text-4xl md:text-5xl text-cream mt-3 leading-tight">
                  The collection
                </p>
                <Link
                  href="#wine"
                  className="inline-block mt-6 label-micro text-olive-on-dark no-underline hover:underline"
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
