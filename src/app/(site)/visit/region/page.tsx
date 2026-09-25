import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";
import { getRegionPlaces } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Region",
  description:
    "Explore Inverloch, Bass Coast and South Gippsland around Harman Wines — coast, Prom, stays and more.",
};

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
    when: "Sunset",
    what: "A glass on the pergola",
    image: media.gatherPergola,
  },
  {
    when: "Evening",
    what: "South Gippsland — local stay",
    image: media.regionEvening,
  },
];

export default function RegionPage() {
  const places = getRegionPlaces();

  return (
    <>
      <section
        className="relative min-h-[70svh] md:min-h-[78svh] flex flex-col justify-end overflow-hidden chapter-ground bg-dusk grain-dusk"
        aria-labelledby="region-hero-heading"
      >
        <div className="absolute inset-0 overflow-hidden duotone-dusk">
          <MediaImage
            asset={media.regionBunurong}
            priority
            sizes="100vw"
            className="hero-ken-burns"
          />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,30,23,0.58)_0%,rgba(27,30,23,0.22)_40%,rgba(27,30,23,0.8)_100%)]"
          aria-hidden
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20 pt-28">
          <p className="label-ui text-linen/70">While you’re here</p>
          <h1
            id="region-hero-heading"
            className="font-display text-linen text-[clamp(2.75rem,8vw,5.5rem)] mt-3 leading-[1.05] tracking-tight"
          >
            Our Region
          </h1>
        </div>
      </section>

      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight text-balance">
              Explore Our Region: Inverloch, Bass Coast &amp; South Gippsland
            </h2>
            <p className="mt-6 font-body text-loam text-lg leading-relaxed">
              At Harman Wines, we are proud to call the beautiful Bass Coast region home. Our
              winery is nestled just minutes from Inverloch and surrounded by the natural beauty,
              vibrant communities, and exceptional experiences that define South Gippsland. Whether
              you’re planning a weekend getaway or a longer stay, there’s so much to discover.
            </p>
            <p className="mt-4 font-body text-loam leading-relaxed">
              Discover the best of Inverloch, Bass Coast, and South Gippsland — including things to
              do, places to eat, and where to stay.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20" aria-label="A day in the region">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {day.map((item) => (
              <li key={item.when}>
                <div className="relative aspect-[3/4] overflow-hidden grain">
                  <MediaImage asset={item.image} sizes="(max-width:1024px) 50vw, 25vw" />
                </div>
                <p className="label-ui text-loam mt-4">{item.when}</p>
                <p className="font-display text-xl md:text-2xl mt-2 text-balance leading-tight text-dusk">
                  {item.what}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-linen py-16 md:py-24" aria-labelledby="discover-heading">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam">Discover</p>
          <h2
            id="discover-heading"
            className="font-display text-3xl md:text-4xl text-dusk mt-3 leading-tight"
          >
            Places nearby
          </h2>

          <ul className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {places.map((p) => {
              const contain = p.imageFit === "contain";
              return (
                <li key={p.id} className="flex flex-col">
                  <div
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden",
                      contain ? "bg-paper" : "bg-dusk/5",
                    )}
                  >
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className={contain ? "object-contain p-6 md:p-8" : "object-cover"}
                      />
                    )}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-dusk mt-4 leading-tight text-balance">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-loam font-body flex-1">{p.blurb}</p>
                  {p.url && (
                    <a
                      href={p.url}
                      className="inline-block mt-3 label-ui link-quiet link-claret"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-5 border-t border-dusk/10 pt-12">
            <p className="font-display text-2xl md:text-3xl text-dusk flex-1 text-balance">
              Make Harman part of your day
            </p>
            <Button href="/visit/book" size="lg">
              Book a Table
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
