"use client";

import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { EditorialTabs } from "@/components/ui/EditorialTabs";
import { media } from "@/content/media";
import { useState } from "react";
import { cn } from "@/lib/utils";

const annotations = [
  { label: "20 acres", detail: "Working farm & vineyard" },
  { label: "7 km", detail: "From Bass Strait" },
  { label: "Cool maritime", detail: "Slow ripening climate" },
  { label: "Loam over clay", detail: "Estate soils" },
];

const seasons = [
  {
    id: "summer",
    name: "Summer",
    line: "Long light across the rows.",
    ground: "#c4b48a",
    ink: "#24221e",
    image: null as null,
  },
  {
    id: "autumn",
    name: "Autumn",
    line: "Harvest settles into the cellar.",
    ground: "#9a6248",
    ink: "#f6f1e7",
    image: null as null,
  },
  {
    id: "winter",
    name: "Winter",
    line: "Rain, pruning, fire.",
    ground: "#263a2a",
    ink: "#f6f1e7",
    image: media.landVines,
  },
  {
    id: "spring",
    name: "Spring",
    line: "New growth begins.",
    ground: "#657055",
    ink: "#f6f1e7",
    image: media.landPortrait,
  },
];

const mosaic = [media.mosaicVines, media.mosaicGarden, media.mosaicDetail] as const;

export function ChapterLand() {
  const [season, setSeason] = useState(0);
  const s = seasons[season];

  return (
    <section id="land" className="chapter-ground" aria-labelledby="land-heading">
      <div className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>The land</SectionLabel>
            <EditorialHeading id="land-heading">Twenty acres, one unbroken world</EditorialHeading>
          </Reveal>

          <div className="mt-12 relative">
            <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden grain">
              <MediaImage asset={media.landPortrait} sizes="100vw" />
            </div>

            <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {annotations.map((a) => (
                <li key={a.label} className="border-t border-charcoal/15 pt-4">
                  <p className="font-display text-2xl md:text-3xl leading-tight">{a.label}</p>
                  <p className="label-micro mt-2 text-stone">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="py-20 md:py-28 transition-colors duration-700 relative overflow-hidden"
        style={{ backgroundColor: s.ground, color: s.ink }}
      >
        {s.image && (
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 opacity-50 md:opacity-65 pointer-events-none">
            <MediaImage asset={s.image} sizes="50vw" />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, ${s.ground} 0%, transparent 40%)`,
              }}
              aria-hidden
            />
          </div>
        )}
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-micro opacity-70">Seasons</p>
          <EditorialTabs
            className="mt-8"
            label="Seasons"
            index={season}
            onIndexChange={setSeason}
            items={seasons.map((item) => ({
              id: item.id,
              label: item.name,
              panel: (
                <p className="font-display text-4xl md:text-6xl max-w-2xl text-balance leading-[1.05]">
                  {item.line}
                </p>
              ),
            }))}
            tabClassName={(selected) =>
              cn(
                "px-4 py-2 text-xs tracking-[0.16em] uppercase border transition-colors",
                selected
                  ? "border-current bg-current/10"
                  : "border-current/25 opacity-70 hover:opacity-100",
              )
            }
          />
        </div>
      </div>

      <div className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionLabel>The farm</SectionLabel>
            <p className="font-display text-3xl md:text-4xl mt-3 max-w-xl leading-tight">
              Vineyard, kitchen garden, and the life between the rows
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-12 md:col-span-7 relative aspect-[4/3] overflow-hidden">
              <MediaImage asset={mosaic[0]} sizes="(max-width:768px) 100vw, 60vw" />
            </div>
            <div className="col-span-6 md:col-span-5 relative aspect-[4/5] overflow-hidden">
              <MediaImage asset={mosaic[1]} sizes="(max-width:768px) 50vw, 40vw" />
            </div>
            <div className="col-span-6 md:col-span-4 relative aspect-square overflow-hidden md:-mt-24">
              <MediaImage asset={mosaic[2]} sizes="(max-width:768px) 50vw, 30vw" />
            </div>
            <div className="col-span-12 md:col-span-8 flex items-end pb-2">
              <p className="text-stone text-lg max-w-md leading-relaxed">
                Vines, soil, kitchen garden, chickens, sheep, alpacas, and native wildlife — a
                working farm beside a cool-climate vineyard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
