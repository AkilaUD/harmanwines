import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { getSpaces } from "@/lib/content";
import { images } from "@/content/images";

/** Gather-only images — cellarMoment reserved for Craft. */
const spaceImages = {
  inside: images.gathering,
  pergola: images.gathering,
  picnic: images.picnicOrGarden,
} as const;

const spaceObjectPosition = {
  inside: "object-[center_30%]",
  pergola: "object-[center_60%]",
  picnic: "object-cover",
} as const;

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
          <SectionLabel>Where would you like to gather?</SectionLabel>
          <EditorialHeading id="gather-heading">Choose the atmosphere</EditorialHeading>
          <p className="mt-5 max-w-xl text-stone text-lg">
            Inside by the fire, under the pergola with vineyard views, or at a picnic table beside
            the garden.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {spaces.map((space, i) => (
            <Reveal key={space.id} delay={i * 0.08}>
              <Link href="/visit/cellar-door" className="block group no-underline">
                <div className="relative aspect-[4/5] overflow-hidden mb-5 bg-paper">
                  <Image
                    src={spaceImages[space.slug]}
                    alt={space.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover ${spaceObjectPosition[space.slug]}`}
                  />
                </div>
                <p className="label-micro text-burgundy">{space.mood.slice(0, 2).join(" · ")}</p>
                <h3 className="font-display text-3xl mt-3 group-hover:text-burgundy transition-colors">
                  {space.name}
                </h3>
                <p className="mt-3 text-stone text-sm leading-relaxed">{space.description}</p>
                <p className="mt-4 text-xs text-stone">{space.capacity}</p>
                {space.petFriendly && (
                  <p className="mt-2 label-micro text-olive">Pet-friendly area</p>
                )}
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12">
          <Link
            href="/visit/book"
            className="label-micro text-burgundy no-underline hover:underline"
          >
            Book your table →
          </Link>
        </p>
      </div>
    </section>
  );
}
