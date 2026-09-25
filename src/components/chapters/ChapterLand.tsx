"use client";

import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
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
    ground: "#2F4A32",
    ink: "#EDE6D6",
    image: media.seasonSummer,
  },
  {
    id: "autumn",
    name: "Autumn",
    line: "Harvest settles into the cellar.",
    ground: "#C99A4E",
    ink: "#1B1E17",
    image: media.seasonAutumn,
  },
  {
    id: "winter",
    name: "Winter",
    line: "Rain, pruning, fire.",
    ground: "#4A5560",
    ink: "#EDE6D6",
    image: media.seasonWinter,
  },
  {
    id: "spring",
    name: "Spring",
    line: "New growth begins.",
    ground: "#7A8F6E",
    ink: "#1B1E17",
    image: media.seasonSpring,
  },
];

const mosaic = [
  media.mosaicVines,
  media.farmGardenHands,
  media.farmChickens,
  media.farmAlpacas,
  media.farmBanjo,
] as const;

export function ChapterLand() {
  const [season, setSeason] = useState(0);
  const s = seasons[season];

  return (
    <section id="land" className="chapter-ground" aria-labelledby="land-heading">
      <div className="bg-[color-mix(in_oklab,var(--linen)_92%,var(--garden)_8%)] py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="label-ui text-loam">The land</p>
            <EditorialHeading id="land-heading">Twenty acres, one unbroken world</EditorialHeading>
          </Reveal>

          <div className="mt-10 md:mt-12 relative">
            <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden grain">
              <MediaImage asset={media.landPortrait} sizes="100vw" />
            </div>

            <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {annotations.map((a) => (
                <li key={a.label} className="border-t border-dusk/15 pt-4">
                  <p className="font-display text-xl md:text-3xl leading-tight text-dusk">{a.label}</p>
                  <p className="label-ui mt-2 text-loam">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="py-16 md:py-28 transition-colors duration-700 relative overflow-hidden"
        style={{ backgroundColor: s.ground, color: s.ink }}
      >
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 pointer-events-none">
          {seasons.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                i === season ? "opacity-70 md:opacity-85" : "opacity-0",
              )}
            >
              <MediaImage asset={item.image} sizes="50vw" />
            </div>
          ))}
          <div
            className="absolute inset-0 transition-colors duration-700"
            style={{
              background: `linear-gradient(90deg, ${s.ground} 0%, transparent 45%)`,
            }}
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui opacity-70">Seasons</p>
          <EditorialTabs
            className="mt-6 md:mt-8"
            label="Seasons"
            index={season}
            onIndexChange={setSeason}
            items={seasons.map((item) => ({
              id: item.id,
              label: item.name,
              panel: (
                <div className="max-w-2xl">
                  <p className="label-ui opacity-60 mb-3">
                    0{seasons.indexOf(item) + 1} / {item.name}
                  </p>
                  <p className="font-display text-3xl md:text-6xl text-balance leading-[1.05]">
                    {item.line}
                  </p>
                  <p className="mt-5 max-w-md font-body text-base md:text-lg opacity-80 leading-relaxed">
                    The farm and vineyard shift with the Bass Coast year — light, work, and the table
                    change together.
                  </p>
                </div>
              ),
            }))}
            tabClassName={(selected) =>
              cn(
                "px-3 md:px-4 py-2 label-ui border transition-colors",
                selected
                  ? "border-current bg-current/10"
                  : "border-current/25 opacity-70 hover:opacity-100",
              )
            }
          />
        </div>
      </div>

      <div className="bg-linen py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="label-ui text-loam">The farm</p>
            <p className="font-display text-2xl md:text-4xl mt-3 max-w-xl leading-tight text-dusk">
              Vineyard, kitchen garden, and the life between the rows
            </p>
          </Reveal>
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-2 md:col-span-7 relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
              <MediaImage asset={mosaic[0]} sizes="(max-width:768px) 100vw, 60vw" />
            </div>
            <div className="col-span-1 md:col-span-5 relative aspect-square md:aspect-[4/5] overflow-hidden">
              <MediaImage asset={mosaic[1]} sizes="(max-width:768px) 50vw, 40vw" />
            </div>
            <div className="col-span-1 md:col-span-4 relative aspect-square overflow-hidden md:-mt-16">
              <MediaImage asset={mosaic[2]} sizes="(max-width:768px) 50vw, 30vw" />
            </div>
            <div className="col-span-1 md:col-span-4 relative aspect-square overflow-hidden">
              <MediaImage asset={mosaic[3]} sizes="(max-width:768px) 50vw, 30vw" />
            </div>
            <div className="col-span-1 md:col-span-4 relative aspect-square overflow-hidden">
              <MediaImage asset={mosaic[4]} sizes="(max-width:768px) 50vw, 30vw" />
            </div>
            <div className="col-span-2 md:col-span-8 flex items-end pb-2 mt-4 md:mt-0">
              <p className="font-body text-loam text-base md:text-lg max-w-md leading-relaxed">
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
