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
    image: media.placeAerial,
  },
  {
    when: "Golden hour",
    what: "A glass on the pergola",
    image: media.gatherPergola,
  },
  {
    when: "Evening",
    what: "South Gippsland — local stay",
    image: media.regionEvening,
  },
];

export function ChapterRegion() {
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

        <ol className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {day.map((item) => (
            <li key={item.when}>
              <div className="relative aspect-[3/4] overflow-hidden grain">
                <MediaImage asset={item.image} sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
              <p className="label-ui text-loam mt-4">{item.when}</p>
              <p className="font-display text-2xl mt-2 text-balance leading-tight text-dusk">
                {item.what}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12">
          <Link href="/visit/region" className="link-quiet link-claret label-ui">
            Explore the region
          </Link>
        </p>
      </div>
    </section>
  );
}
