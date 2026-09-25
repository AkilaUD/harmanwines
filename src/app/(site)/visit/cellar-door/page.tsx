import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { getSpaces } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { images } from "@/content/images";

export const metadata: Metadata = {
  title: "Cellar Door",
  description:
    "Harman Wines cellar door — inside by the fire, covered pergola, or picnic tables by the kitchen garden.",
};

const spaceImages = {
  inside: images.cellarMoment,
  pergola: images.gathering,
  picnic: images.picnicOrGarden,
} as const;

export default function CellarDoorPage() {
  const spaces = getSpaces();

  return (
    <>
      <PageHero label="Cellar Door" title="Three ways to gather" tone="cream">
        <p>
          Reserve a leisurely lunch or dinner, share seasonal fare, and unwind among the vines.
        </p>
      </PageHero>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 space-y-16">
          {spaces.map((space) => (
            <article
              key={space.id}
              id={space.slug}
              className="grid md:grid-cols-2 gap-10 items-center border-t border-charcoal/10 pt-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={spaceImages[space.slug]}
                  alt={space.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="label-micro text-burgundy">{space.mood.join(" · ")}</p>
                <h2 className="font-display text-4xl mt-3">{space.name}</h2>
                <p className="mt-4 text-stone leading-relaxed">{space.description}</p>
                <p className="mt-4 text-sm">{space.capacity}</p>
                {space.petFriendly && (
                  <p className="mt-3 text-sm text-olive">
                    Pets on lead welcome here only — note your pet when booking.
                  </p>
                )}
              </div>
            </article>
          ))}
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
