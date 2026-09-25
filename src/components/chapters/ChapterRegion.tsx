import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";

const day: { when: string; what: string; image: MediaAsset }[] = [
  {
    when: "Morning",
    what: "Bass Coast — Inverloch & Bunurong",
    image: media.regionMorning,
  },
  {
    when: "Afternoon",
    what: "Harman Wines — lunch among the vines",
    image: media.heroVineyard,
  },
  {
    when: "Golden hour",
    what: "Wilsons Promontory lookout",
    image: media.regionWilsonsProm,
  },
  {
    when: "Evening",
    what: "South Gippsland — local stay",
    image: media.regionEvening,
  },
];

export function ChapterRegion() {
  const [morning, ...rest] = day;

  return (
    <section
      id="region"
      className="chapter-ground bg-linen py-24 md:py-32"
      aria-labelledby="region-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-ui text-loam">While you’re here</p>
          <EditorialHeading id="region-heading">Bass Coast, in one day</EditorialHeading>
          <p className="mt-5 max-w-xl font-body text-loam text-lg">
            Harman sits inside a wider Gippsland journey — coast, vineyard, and evening light.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-stretch">
          <Reveal className="min-w-0">
            <article className="relative h-full">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[28rem] xl:min-h-[32rem] overflow-hidden grain">
                <MediaImage asset={morning.image} sizes="(max-width:1024px) 100vw, 55vw" />
              </div>
              <div className="mt-5 flex items-start gap-4">
                <span className="mt-2 block h-px w-8 shrink-0 bg-claret" aria-hidden />
                <div className="min-w-0">
                  <p className="label-ui text-claret">{morning.when}</p>
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl mt-2 text-balance leading-tight text-dusk">
                    {morning.what}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <ol className="flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center min-w-0">
            {rest.map((item, i) => (
              <Reveal key={item.when} delay={0.06 * (i + 1)} className="min-w-0">
                <li className="grid grid-cols-[minmax(0,5.5rem)_minmax(0,1fr)] sm:grid-cols-[minmax(0,8rem)_minmax(0,1fr)] gap-3 sm:gap-5 items-center">
                  <div className="relative aspect-[4/5] overflow-hidden grain">
                    <MediaImage asset={item.image} sizes="128px" />
                  </div>
                  <div className="border-l border-dusk/15 pl-3 sm:pl-5 min-w-0">
                    <p className="label-ui text-loam">{item.when}</p>
                    <p className="font-display text-lg sm:text-xl md:text-2xl mt-1.5 text-balance leading-tight text-dusk">
                      {item.what}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-12 md:mt-14">
          <Link href="/visit/region" className="link-quiet link-claret label-ui">
            Explore the region
          </Link>
        </p>
      </div>
    </section>
  );
}
