import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { media } from "@/content/media";

const day = [
  { when: "Morning", what: "Bass Coast — Inverloch & Bunurong" },
  { when: "Afternoon", what: "Harman Wines — lunch among the vines" },
  { when: "Golden hour", what: "A glass on the pergola" },
  { when: "Evening", what: "South Gippsland — local stay" },
];

export function ChapterRegion() {
  return (
    <section
      id="region"
      className="chapter-ground bg-paper py-24 md:py-32"
      aria-labelledby="region-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <Reveal>
            <SectionLabel>While you’re here</SectionLabel>
            <EditorialHeading id="region-heading">Bass Coast, in one day</EditorialHeading>
            <p className="mt-5 max-w-xl text-stone text-lg">
              Harman sits inside a wider Gippsland journey — coast, vineyard, and evening light.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[3/2] overflow-hidden grain">
              <MediaImage asset={media.regionCoast} sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </Reveal>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {day.map((item) => (
            <li key={item.when} className="border-t border-charcoal/15 pt-5">
              <p className="label-micro text-stone">{item.when}</p>
              <p className="font-display text-2xl mt-3 text-balance leading-tight">{item.what}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12">
          <Link
            href="/visit/region"
            className="label-micro text-wine no-underline hover:underline transition-opacity"
          >
            Explore the region →
          </Link>
        </p>
      </div>
    </section>
  );
}
