import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getSpaces } from "@/lib/content";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";
import { cn } from "@/lib/utils";

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

        <div className="mt-12 md:mt-16 space-y-16 md:space-y-28">
          {spaces.map((space, i) => {
            const asset = spaceMedia[space.slug] ?? media.gatherPergola;
            const isHero = i === 0;
            const reverse = i === 1;

            return (
              <Reveal key={space.id} delay={i * 0.05}>
                <Link
                  href="/visit/cellar-door"
                  className={cn(
                    "grid gap-6 lg:gap-12 items-center no-underline group",
                    isHero
                      ? "lg:grid-cols-1"
                      : "lg:grid-cols-2",
                    reverse && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden grain",
                      isHero
                        ? "aspect-[16/10] md:aspect-[21/9]"
                        : "aspect-[16/10] md:aspect-[4/5] max-w-xl lg:max-w-none",
                      !isHero && i === 2 && "lg:ml-auto w-full lg:max-w-[85%]",
                    )}
                  >
                    <MediaImage
                      asset={asset}
                      sizes={
                        isHero
                          ? "100vw"
                          : "(max-width: 1024px) 100vw, 45vw"
                      }
                      className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className={cn("min-w-0", isHero && "max-w-2xl")}>
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
