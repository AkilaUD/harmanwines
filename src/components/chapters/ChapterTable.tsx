import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { getSuppliers } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { images } from "@/content/images";

export function ChapterTable() {
  const suppliers = getSuppliers();

  return (
    <section
      id="table"
      className="chapter-ground bg-paper py-24 md:py-32"
      aria-labelledby="table-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <Reveal>
            <SectionLabel>Eat</SectionLabel>
            <EditorialHeading id="table-heading">Fire, garden, and Gippsland plates</EditorialHeading>
            <p className="mt-5 max-w-xl text-lg text-stone">
              Wood-fired pizzas and shared plates from the kitchen garden and local growers — made to
              sit beside estate wine.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={images.foodWine}
                alt="Food and wine at Harman Wines cellar door"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
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

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/visit/menu">See the menu</Button>
          <Button href="/visit/book" variant="secondary">
            Book a table
          </Button>
        </div>

        <p className="mt-8 text-sm text-stone">
          Prefer takeaway?{" "}
          <Link href="/visit/menu#takeaway" className="text-burgundy">
            Menu to go
          </Link>
        </p>
      </div>
    </section>
  );
}
