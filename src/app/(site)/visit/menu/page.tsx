import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getMenuCategories, getSuppliers, getWines } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Wood-fired pizzas, shared plates and estate wines at Harman Wines — featuring local Gippsland produce.",
};

export default function MenuPage() {
  const categories = getMenuCategories();
  const suppliers = getSuppliers();
  const wines = getWines().slice(0, 3);

  return (
    <>
      <PageHero label="Food" title="From garden and neighbours to the table" tone="paper">
        <p>
          As in winemaking, the best results come from the finest ingredients — local wherever
          possible.
        </p>
      </PageHero>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <h2 className="font-display text-3xl border-b border-charcoal/10 pb-3">{cat.name}</h2>
                <ul className="mt-6 space-y-5">
                  {cat.items.map((item) => (
                    <li key={item.id}>
                      <div className="flex justify-between gap-4">
                        <h3 className="font-medium">{item.name}</h3>
                        {item.price && <span className="text-stone text-sm">{item.price}</span>}
                      </div>
                      {item.description && (
                        <p className="mt-1 text-sm text-stone">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="mt-16 border border-charcoal/10 p-8 bg-surface">
            <p className="label-micro mb-3">Tonight with pizza</p>
            <h2 className="font-display text-2xl">Suggested estate wines</h2>
            <ul className="mt-6 space-y-3">
              {wines.map((w) => (
                <li key={w.id}>
                  <Link href={`/wine/${w.slug}`} className="flex justify-between no-underline hover:text-burgundy">
                    <span>{w.name}</span>
                    <span className="text-stone text-sm">{formatPrice(w.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-stone">
              Pairings are suggestions for browsing — ask staff for current by-the-glass options.
            </p>
          </aside>

          <div className="mt-16" id="suppliers">
            <h2 className="font-display text-3xl">Local producers</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suppliers.map((s) => (
                <li key={s.id} className="border-t border-charcoal/10 pt-3">
                  <p className="font-medium">{s.name}</p>
                  <p className="text-sm text-stone mt-1">{s.location}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 border-t border-charcoal/10 pt-12" id="takeaway">
            <h2 className="font-display text-3xl">Menu to go</h2>
            <p className="mt-4 max-w-xl text-stone">
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
          </div>
        </div>
      </section>
    </>
  );
}
