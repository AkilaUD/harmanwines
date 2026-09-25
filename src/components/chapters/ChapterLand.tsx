"use client";

import Image from "next/image";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { images } from "@/content/images";

const seasons = [
  {
    id: "summer",
    name: "Summer",
    light: "Long light, sea breeze across the rows",
    activity: "Ripening fruit · kitchen garden fullness",
    ground: "#c4b48a",
    ink: "#1f1c19",
    image: null as string | null,
  },
  {
    id: "autumn",
    name: "Autumn",
    light: "Gold on the vines, harvest days",
    activity: "Vintage · paddock-to-plate abundance",
    ground: "#a67c5d",
    ink: "#1f1c19",
    image: null as string | null,
  },
  {
    id: "winter",
    name: "Winter",
    light: "Bare canes, fire indoors",
    activity: "Pruning · firelit cellar door",
    ground: "#2c3a28",
    ink: "#f3efe6",
    image: images.vinesClose,
  },
  {
    id: "spring",
    name: "Spring",
    light: "New growth, soft coastal air",
    activity: "Budburst · garden waking",
    ground: "#6b7a4e",
    ink: "#f3efe6",
    image: images.vineyardPortrait,
  },
];

/** Beat 2 — seasonal paper; winter/spring earn plates; summer/autumn stay type-and-ink. */
export function ChapterLand() {
  const [season, setSeason] = useState(0);
  const s = seasons[season];

  return (
    <section
      id="land"
      className="chapter-ground py-24 md:py-32 transition-colors duration-700 relative overflow-hidden"
      style={{ backgroundColor: s.ground, color: s.ink }}
      aria-labelledby="land-heading"
    >
      {s.image && (
        <div className="absolute inset-y-0 right-0 w-full md:w-[48%] opacity-55 md:opacity-70 pointer-events-none">
          <Image
            src={s.image}
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${s.ground} 0%, transparent 35%)`,
            }}
            aria-hidden
          />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel className="opacity-70">The land · The farm</SectionLabel>
          <EditorialHeading id="land-heading">Twenty acres, one unbroken world</EditorialHeading>
          <p className="mt-5 max-w-xl text-lg opacity-85">
            Vines, soil, kitchen garden, chickens, sheep, alpacas, and native wildlife — a working
            farm beside a cool-climate vineyard.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Seasons">
          {seasons.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={season === i}
              onClick={() => setSeason(i)}
              className={cn(
                "px-4 py-2 text-xs tracking-[0.16em] uppercase border transition-colors",
                season === i
                  ? "border-current bg-current/10"
                  : "border-current/25 opacity-70 hover:opacity-100",
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 grid md:grid-cols-2 gap-10 max-w-4xl">
          <div>
            <p className="label-micro opacity-60 mb-3">Light</p>
            <p className="font-display text-3xl md:text-4xl">{s.light}</p>
          </div>
          <div>
            <p className="label-micro opacity-60 mb-3">On the farm</p>
            <p className="font-display text-3xl md:text-4xl">{s.activity}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
