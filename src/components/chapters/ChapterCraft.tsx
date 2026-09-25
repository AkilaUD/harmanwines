"use client";

import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { EditorialTabs } from "@/components/ui/EditorialTabs";
import { craftStages } from "@/content/seed";
import { media } from "@/content/media";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { MediaAsset } from "@/content/media";

const stageImages: MediaAsset[] = [
  media.craftGrapes,
  media.craftCellar,
  media.craftGlass,
];

const stageThemes = [
  {
    // Vine — cool green-white
    ground: "#E8EDE4",
    ink: "#1B1E17",
    muted: "text-loam",
    tabSelected: "border-dusk text-dusk",
    tabIdle: "border-dusk/20 text-loam hover:text-dusk",
    link: "link-quiet link-claret",
  },
  {
    // Cellar — dusk / claret
    ground: "#1B1E17",
    ink: "#EDE6D6",
    muted: "text-linen/70",
    tabSelected: "border-linen text-linen",
    tabIdle: "border-linen/20 text-linen/45 hover:text-linen/80",
    link: "link-quiet link-harvest",
  },
  {
    // Glass — harvest
    ground: "#C99A4E",
    ink: "#1B1E17",
    muted: "text-dusk/75",
    tabSelected: "border-dusk text-dusk",
    tabIdle: "border-dusk/25 text-dusk/60 hover:text-dusk",
    link: "link-quiet link-claret",
  },
] as const;

export function ChapterCraft() {
  const [active, setActive] = useState(0);
  const theme = stageThemes[active];

  return (
    <section
      id="craft"
      className="chapter-ground py-20 md:py-32 transition-colors duration-700"
      style={{ backgroundColor: theme.ground, color: theme.ink }}
      aria-labelledby="craft-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className={cn("label-ui", theme.muted)}>From land to bottle</p>
              <EditorialHeading id="craft-heading" className="mt-3">
                David’s hands on every vintage
              </EditorialHeading>
              <p className={cn("mt-5 max-w-xl font-body text-base md:text-lg", theme.muted)}>
                Cool climate, maritime influence, slow ripening, wild fermentation — wines that
                speak of place and season.
              </p>
            </Reveal>

            <EditorialTabs
              className="mt-8 md:mt-10"
              label="Winemaking stages"
              index={active}
              onIndexChange={setActive}
              items={craftStages.map((stage) => ({
                id: stage.id,
                label: stage.label,
                panel: (
                  <div className="max-w-2xl">
                    <p className="font-display text-3xl md:text-5xl leading-tight">{stage.label}</p>
                    <p className={cn("mt-4 text-base md:text-lg font-body leading-relaxed", theme.muted)}>
                      {stage.body}
                    </p>
                    <Link
                      href="/our-story#winemaking"
                      className={cn("inline-block mt-8 label-ui", theme.link)}
                    >
                      Winemaking philosophy
                    </Link>
                  </div>
                ),
              }))}
              tabClassName={(selected) =>
                cn(
                  "px-4 py-2 label-ui border transition-colors",
                  selected ? theme.tabSelected : theme.tabIdle,
                )
              }
            />
          </div>

          <div className="relative aspect-[16/10] lg:aspect-[4/5] overflow-hidden grain order-1 lg:order-2">
            <MediaImage
              asset={stageImages[active]}
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {active === 2 && (
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10 bg-gradient-to-t from-[#C99A4E]/95 to-transparent">
                <p className="label-ui text-dusk/60">Next</p>
                <p className="font-display text-3xl md:text-4xl text-dusk mt-2 leading-tight">
                  The collection
                </p>
                <Link href="#wine" className="inline-block mt-4 label-ui link-quiet link-claret">
                  Taste the vintage
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
