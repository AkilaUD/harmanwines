import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getSuppliers } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";

const chapters = [
  { label: "Fire", detail: "Wood-fired pizza from the oven" },
  { label: "Garden", detail: "Kitchen garden & estate produce" },
  { label: "Gippsland", detail: "Local growers within ~30 km" },
];

export function ChapterTable() {
  const suppliers = getSuppliers();

  return (
    <section
      id="table"
      className="chapter-ground bg-paper py-24 md:py-32"
      aria-labelledby="table-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Eat</SectionLabel>
          <EditorialHeading id="table-heading">Fire, garden, and Gippsland plates</EditorialHeading>
        </Reveal>

        <div className="mt-12 relative aspect-[16/10] md:aspect-[21/9] overflow-hidden grain">
          <MediaImage asset={media.tablePizza} sizes="100vw" />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8 border-t border-charcoal/10 pt-10">
          {chapters.map((c) => (
            <div key={c.label}>
              <p className="font-display text-3xl">{c.label}</p>
              <p className="mt-2 text-stone">{c.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-lg text-stone leading-relaxed max-w-xl">
              Wood-fired pizzas and shared plates from the kitchen garden and local growers — made
              to sit beside estate wine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/visit/menu">See the menu</Button>
              <Button href="/visit/book" variant="secondary">
                Book a table
              </Button>
            </div>
            <p className="mt-6 text-sm text-stone">
              Prefer takeaway?{" "}
              <Link href="/visit/menu#takeaway" className="text-wine">
                Menu to go
              </Link>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <MediaImage
                asset={media.tableFoodWine}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="label-micro mb-6">Local producers</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            {suppliers.map((s) => (
              <li key={s.id} className="border-t border-charcoal/10 pt-3">
                <p className="font-medium">{s.name}</p>
                <p className="text-sm text-stone mt-1">{s.location}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
