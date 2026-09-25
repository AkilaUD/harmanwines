import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { getMenuCategories, getSuppliers, getWines } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { media } from "@/content/media";
import { MediaImage } from "@/components/ui/MediaImage";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Wood-fired pizzas, shared plates and estate wines at Harman Wines — featuring local Gippsland produce.",
};

const dietaryLegend = [
  { code: "GF", label: "Gluten Friendly" },
  { code: "GFO", label: "Gluten Friendly option" },
  { code: "VE", label: "Vegetarian" },
  { code: "VG", label: "Vegan" },
  { code: "VGO", label: "Vegan option" },
  { code: "DF", label: "Dairy Free option" },
  { code: "N", label: "Contains Nuts" },
];

export default function MenuPage() {
  const categories = getMenuCategories();
  const suppliers = getSuppliers();
  const wines = getWines().slice(0, 3);

  return (
    <>
      <PageHero
        label="Food"
        title="From garden and neighbours to the table"
        media={media.tablePizza}
      >
        <p>
          As in winemaking, the best results come from the finest ingredients — local wherever
          possible.
        </p>
      </PageHero>

      <section className="pb-16 bg-linen">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-16">
          <Reveal className="mb-12 md:mb-16 relative aspect-[21/9] overflow-hidden grain max-w-5xl">
            <MediaImage asset={media.tableFoodWine} sizes="(max-width:1024px) 100vw, 80vw" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {categories.map((cat, i) => (
              <Reveal
                key={cat.id}
                delay={0.04 * i}
                className={cat.id === "pizza" ? "md:col-span-2" : undefined}
              >
                <div id={cat.id}>
                  <h2 className="font-display text-3xl border-b border-dusk/10 pb-3 text-dusk">
                    {cat.name}
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {cat.items.map((item) => (
                      <li key={item.id}>
                        <div className="flex justify-between gap-4 items-baseline">
                          <h3 className="font-medium text-dusk">
                            {item.name}
                            {item.dietary && item.dietary.length > 0 && (
                              <span className="ml-2 font-ui text-[0.65rem] uppercase tracking-wider text-loam font-normal">
                                ({item.dietary.join(" · ")})
                              </span>
                            )}
                          </h3>
                          {item.price && (
                            <span className="text-loam text-sm tabular-nums shrink-0">
                              {item.price}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-sm text-loam max-w-2xl">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 border-t border-dusk/10 pt-10 max-w-2xl">
            <h2 className="font-display text-2xl text-dusk">Dietary information</h2>
            <p className="mt-3 text-sm text-loam font-body">
              Please ask our friendly staff if you have any questions.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {dietaryLegend.map((d) => (
                <li key={d.code} className="font-ui text-sm text-loam">
                  <span className="text-dusk font-medium">({d.code})</span> {d.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-16 border border-dusk/10 p-8 bg-paper">
            <p className="label-ui text-loam mb-3">Tonight with pizza</p>
            <h2 className="font-display text-2xl text-dusk">Suggested estate wines</h2>
            <ul className="mt-6 space-y-3">
              {wines.map((w) => (
                <li key={w.id}>
                  <Link
                    href={`/wine/${w.slug}`}
                    className="flex justify-between no-underline hover:text-claret"
                  >
                    <span>{w.name}</span>
                    <span className="text-loam text-sm">{formatPrice(w.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-loam">
              Pairings are suggestions for browsing — ask staff for current by-the-glass options.
            </p>
          </Reveal>

          <div id="suppliers">
            <Reveal className="mt-16">
              <h2 className="font-display text-3xl text-dusk">Local producers</h2>
              <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {suppliers.map((s) => (
                  <li key={s.id} className="border-t border-dusk/10 pt-3">
                    <p className="font-medium text-dusk">{s.name}</p>
                    <p className="text-sm text-loam mt-1">{s.location}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div id="takeaway" className="mt-16 border-t border-dusk/10 pt-12">
            <Reveal>
              <h2 className="font-display text-3xl text-dusk">Menu to go</h2>
              <p className="mt-4 max-w-xl text-loam font-body">
                From our kitchen to your table — takeaway crafted with fresh local produce, to pair
                with estate wine at home. Confirm current takeaway availability when booking or by
                phone.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/visit/book">Book a Table</Button>
                <Button href="tel:0356113857" variant="secondary">
                  Call for takeaway
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
