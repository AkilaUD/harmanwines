import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { familyTimeline } from "@/content/seed";
import { media } from "@/content/media";

export function ChapterFamily() {
  return (
    <section
      id="family"
      className="chapter-ground bg-linen py-20 md:py-32"
      aria-labelledby="family-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative mb-12 md:mb-16">
          <Reveal>
            <div className="relative aspect-[3/2] overflow-hidden grain">
              <MediaImage
                asset={media.familyPortrait}
                sizes="(max-width: 1024px) 100vw, 90vw"
              />
            </div>
          </Reveal>

          <div className="relative z-10 -mt-10 md:-mt-20 lg:-mt-28 ml-0 md:ml-8 max-w-2xl">
            <Reveal delay={0.08}>
              <p className="label-ui text-loam bg-linen/90 inline-block px-1">Meet</p>
              <h2
                id="family-heading"
                className="font-display text-[clamp(2.25rem,5vw,4.5rem)] mt-3 leading-[1.05] text-balance text-dusk bg-linen/90 px-1"
              >
                David, Nicole, and the land they kept
              </h2>
              <p className="mt-5 max-w-xl font-body text-base md:text-lg text-loam leading-relaxed bg-linen/90 px-1 py-1">
                Together with children Jenna and James, dog Banjo, sheep, alpacas and free-roaming
                chickens — a family who turned a former horse stud into a vineyard home.
              </p>
              <p className="mt-4 label-ui text-loam">
                David + Nicole Harman, Founders / Winemaker / Hosts
              </p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-dusk/15 pt-8 md:pt-10">
          <p className="label-ui mb-6 md:mb-8 text-loam">A short folio</p>
          <ol className="folio-rail gap-8 md:gap-12">
            {familyTimeline.map((item) => (
              <li
                key={item.year}
                className="flex-none min-w-[11.5rem] md:min-w-[14rem] border-l border-dusk/15 pl-5"
              >
                <Reveal>
                  <p className="font-display text-4xl text-claret">{item.year}</p>
                  <h3 className="mt-3 text-lg font-medium text-dusk">{item.title}</h3>
                  <p className="mt-2 text-sm text-loam leading-relaxed font-body">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-10 md:mt-12">
          <Link href="/our-story" className="link-quiet link-claret label-ui">
            Read the full story
          </Link>
        </p>
      </div>
    </section>
  );
}
