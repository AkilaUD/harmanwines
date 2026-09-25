import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getSuppliers } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";
import type { MediaAsset } from "@/content/media";

const beats: {
  label: string;
  detail: string;
  image: MediaAsset;
  accent?: boolean;
}[] = [
  {
    label: "Fire",
    detail: "Wood-fired pizza from the oven",
    image: media.eatFire,
  },
  {
    label: "Garden",
    detail: "Kitchen garden & estate produce",
    image: media.farmGardenHands,
    accent: true,
  },
  {
    label: "Gippsland",
    detail: "Local growers within ~30 km",
    image: media.tableFoodWine,
  },
];

export function ChapterTable() {
  const suppliers = getSuppliers();

  return (
    <section
      id="table"
      className="chapter-ground bg-linen py-20 md:py-32"
      aria-labelledby="table-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-ui text-loam">Eat</p>
          <EditorialHeading id="table-heading">Fire, garden, and Gippsland plates</EditorialHeading>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {beats.map((c) => (
            <div key={c.label}>
              <div className="relative aspect-[4/5] overflow-hidden grain">
                <MediaImage asset={c.image} sizes="(max-width:640px) 100vw, 33vw" />
              </div>
              <p
                className={`font-display text-2xl md:text-3xl mt-4 leading-tight ${
                  c.accent ? "text-garden" : "text-dusk"
                }`}
              >
                {c.label}
              </p>
              <p className="mt-2 font-body text-loam text-sm md:text-base">{c.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <Reveal>
            <p className="font-body text-base md:text-lg text-loam leading-relaxed max-w-xl">
              Wood-fired pizzas and shared plates from the kitchen garden and local growers — made
              to sit beside estate wine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/visit/menu">See the menu</Button>
              <Button href="/visit/book" variant="secondary">
                Book a table
              </Button>
            </div>
            <p className="mt-6 text-sm text-loam font-body">
              Prefer takeaway?{" "}
              <Link href="/visit/menu#takeaway" className="link-quiet link-claret">
                Menu to go
              </Link>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <MediaImage
                asset={media.tablePizza}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 md:mt-16">
          <p className="label-ui mb-6 text-loam">Local producers</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {suppliers.map((s) => (
              <li key={s.id} className="border-t border-dusk/10 pt-3">
                <p className="font-medium text-dusk">{s.name}</p>
                <p className="text-sm text-loam mt-1 font-body">{s.location}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
