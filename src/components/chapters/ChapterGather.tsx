import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getSpaces } from "@/lib/content";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";

const spaceMedia: Record<string, MediaAsset> = {
  inside: media.gatherInside,
  pergola: media.gatherPergola,
  picnic: media.gatherPicnic,
};

export function ChapterGather() {
  const spaces = getSpaces();

  return (
    <section
      id="gather"
      className="chapter-ground bg-cream py-24 md:py-32"
      aria-labelledby="gather-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Where will you gather?</SectionLabel>
          <EditorialHeading id="gather-heading">Choose the atmosphere</EditorialHeading>
          <p className="mt-5 max-w-xl text-stone text-lg">
            Inside by the fire, under the pergola with vineyard views, or at a picnic table beside
            the garden.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:space-y-24">
          {spaces.map((space, i) => {
            const asset = spaceMedia[space.slug] ?? media.gatherPergola;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={space.id} delay={i * 0.05}>
                <Link
                  href="/visit/cellar-door"
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center no-underline group ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden grain">
                    <MediaImage
                      asset={asset}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <p className="label-micro text-wine">
                      {space.mood.slice(0, 2).join(" · ")}
                    </p>
                    <h3 className="font-display text-4xl md:text-5xl mt-4 group-hover:text-wine transition-colors">
                      {space.name}
                    </h3>
                    <p className="mt-5 text-stone text-lg leading-relaxed max-w-md">
                      {space.description}
                    </p>
                    <p className="mt-4 text-meta">{space.capacity}</p>
                    {space.petFriendly && (
                      <p className="mt-3 label-micro text-olive">Pet-friendly area</p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-16">
          <Link
            href="/visit/book"
            className="label-micro text-wine no-underline hover:underline"
          >
            Book your table →
          </Link>
        </p>
      </div>
    </section>
  );
}
