import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
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
      className="chapter-ground bg-linen py-20 md:py-32"
      aria-labelledby="gather-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-ui text-loam">Where will you gather?</p>
          <EditorialHeading id="gather-heading">Choose the atmosphere</EditorialHeading>
          <p className="mt-5 max-w-xl font-body text-loam text-base md:text-lg">
            Inside by the fire, under the pergola with vineyard views, or at a picnic table beside
            the garden.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-14 space-y-12 md:space-y-24">
          {spaces.map((space, i) => {
            const asset = spaceMedia[space.slug] ?? media.gatherPergola;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={space.id} delay={i * 0.05}>
                <Link
                  href="/visit/cellar-door"
                  className={`grid lg:grid-cols-2 gap-6 lg:gap-14 items-center no-underline group ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] md:aspect-[3/4] overflow-hidden grain">
                    <MediaImage
                      asset={asset}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <p className="label-ui text-claret">
                      {space.mood.slice(0, 2).join(", ")}
                    </p>
                    <h3 className="font-display text-3xl md:text-5xl mt-3 md:mt-4 text-dusk group-hover:underline decoration-1 underline-offset-4 leading-tight">
                      {space.name}
                    </h3>
                    <p className="mt-4 md:mt-5 font-body text-loam text-base md:text-lg leading-relaxed max-w-md">
                      {space.description}
                    </p>
                    <p className="mt-3 text-meta text-loam">{space.capacity}</p>
                    {space.petFriendly && (
                      <p className="mt-3 label-ui text-garden">Pet-friendly area</p>
                    )}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-12 md:mt-16">
          <Link href="/visit/book" className="link-quiet link-claret label-ui">
            Book your table
          </Link>
        </p>
      </div>
    </section>
  );
}
