import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getSuppliers } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";

export function ChapterTable() {
  const suppliers = getSuppliers();

  return (
    <section
      id="table"
      className="chapter-ground py-20 md:py-32 bg-[color-mix(in_oklab,var(--linen)_90%,var(--garden)_10%)]"
      aria-labelledby="table-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-ui text-loam">Eat</p>
          <EditorialHeading id="table-heading">Fire, garden, and Gippsland plates</EditorialHeading>
        </Reveal>

        {/* Uneven mosaic: pizza dominant + fire + garden */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 min-w-0">
          <Reveal className="md:col-span-7 relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[5/4] overflow-hidden grain min-w-0">
            <MediaImage
              asset={media.tablePizza}
              sizes="(max-width:768px) 100vw, 58vw"
              className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 md:p-6 bg-gradient-to-t from-dusk/70 to-transparent">
              <p className="font-display text-2xl md:text-3xl text-linen leading-tight">Pizza</p>
              <p className="mt-1 font-body text-sm text-linen/80">Wood-fired from the oven</p>
            </div>
          </Reveal>
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5 min-w-0">
            <Reveal delay={0.06} className="relative min-h-[10rem] sm:min-h-[12rem] aspect-[16/10] md:aspect-auto md:flex-1 overflow-hidden grain">
              <MediaImage asset={media.eatFire} sizes="(max-width:768px) 100vw, 40vw" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-dusk/65 to-transparent">
                <p className="font-display text-xl text-linen">Fire</p>
                <p className="text-sm text-linen/75 font-body">The wood oven</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative min-h-[10rem] sm:min-h-[12rem] aspect-[16/10] md:aspect-auto md:flex-1 overflow-hidden grain">
              <MediaImage asset={media.mosaicDetail} sizes="(max-width:768px) 100vw, 40vw" />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-dusk/65 to-transparent">
                <p className="font-display text-xl text-garden">Garden</p>
                <p className="text-sm text-linen/75 font-body">Estate produce & grapes</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
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
              <Link href="/takeaway" className="link-quiet link-claret">
                Menu to go
              </Link>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden grain">
              <MediaImage
                asset={media.tableFoodWine}
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
