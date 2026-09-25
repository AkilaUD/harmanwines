import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { familyTimeline } from "@/content/seed";
import { media } from "@/content/media";

export function ChapterFamily() {
  return (
    <section
      id="family"
      className="chapter-ground bg-paper py-24 md:py-32"
      aria-labelledby="family-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-end mb-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden grain">
              <MediaImage
                asset={media.familyPortrait}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 label-micro">
              David + Nicole Harman · Founders / Winemaker / Hosts
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:pb-8">
            <SectionLabel>Meet</SectionLabel>
            <EditorialHeading id="family-heading">
              David, Nicole, and the land they kept
            </EditorialHeading>
            <p className="mt-5 max-w-xl text-lg text-stone leading-relaxed">
              Together with children Jenna and James, dog Banjo, sheep, alpacas and free-roaming
              chickens — a family who turned a former horse stud into a vineyard home.
            </p>
          </Reveal>
        </div>

        {/* Horizontal folio timeline */}
        <div className="border-t border-charcoal/15 pt-10">
          <p className="label-micro mb-8">A short folio</p>
          <ol className="flex gap-8 md:gap-12 overflow-x-auto pb-4 scrollbar-thin">
            {familyTimeline.map((item) => (
              <li
                key={item.year}
                className="flex-none min-w-[12rem] md:min-w-[14rem] border-l border-charcoal/15 pl-5"
              >
                <Reveal>
                  <p className="font-display text-4xl text-wine">{item.year}</p>
                  <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone leading-relaxed">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12">
          <Link href="/our-story" className="label-micro text-wine no-underline hover:underline">
            Read the full story →
          </Link>
        </p>
      </div>
    </section>
  );
}
