import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { getSpaces } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";

export const metadata: Metadata = {
  title: "Cellar Door",
  description:
    "Harman Wines cellar door — inside by the fire, covered pergola, or picnic tables by the kitchen garden.",
};

const spaceMedia: Record<string, MediaAsset> = {
  inside: media.gatherInside,
  pergola: media.gatherPergola,
  picnic: media.gatherPicnic,
};

export default function CellarDoorPage() {
  const spaces = getSpaces();

  return (
    <>
      <PageHero label="Cellar Door" title="Three ways to gather" media={media.gatherInside}>
        <p>
          Reserve a leisurely lunch or dinner, share seasonal fare, and unwind among the vines.
        </p>
      </PageHero>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 space-y-16">
          {spaces.map((space) => {
            const asset = spaceMedia[space.slug] ?? media.gatherPergola;
            return (
              <article
                key={space.id}
                id={space.slug}
                className="grid md:grid-cols-2 gap-10 items-center border-t border-charcoal/10 pt-12"
              >
                <div className="relative aspect-[4/5] overflow-hidden grain">
                  <MediaImage asset={asset} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div>
                  <p className="label-ui text-claret">{space.mood.join(", ")}</p>
                  <h2 className="font-display text-4xl mt-3 text-dusk">{space.name}</h2>
                  <p className="mt-4 text-loam leading-relaxed font-body">{space.description}</p>
                  <p className="mt-4 text-sm">{space.capacity}</p>
                  {space.petFriendly && (
                    <p className="mt-3 text-sm text-olive">
                      Pets on lead welcome here only — note your pet when booking.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button href="/visit/book">Book a Table</Button>
            <Button href="/visit/menu" variant="secondary">
              View menu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
