import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getRegionPlaces } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Region",
  description:
    "Explore Inverloch, Bass Coast and South Gippsland around Harman Wines — coast, Prom, stays and more.",
};

export default function RegionPage() {
  const places = getRegionPlaces();

  return (
    <>
      <PageHero label="While you’re here" title="Bass Coast & South Gippsland" tone="paper">
        <p>
          Harman sits minutes from Inverloch — part of a wider coastal and regional journey, not a
          directory of everything, a curated day.
        </p>
      </PageHero>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              ["Morning", "Coast"],
              ["Afternoon", "Harman Wines"],
              ["Sunset", "Wine on the pergola"],
              ["Evening", "Local stay"],
            ].map(([when, what]) => (
              <li key={when} className="border-t border-charcoal/15 pt-4">
                <p className="label-ui text-loam">{when}</p>
                <p className="font-display text-2xl mt-2 text-dusk">{what}</p>
              </li>
            ))}
          </ol>

          <ul className="grid md:grid-cols-2 gap-8">
            {places.map((p) => (
              <li key={p.id} className="border-t border-charcoal/10 pt-5">
                <h2 className="font-display text-2xl text-dusk">{p.name}</h2>
                <p className="mt-2 text-loam font-body">{p.blurb}</p>
                {p.url && (
                  <a
                    href={p.url}
                    className="inline-block mt-3 label-ui link-quiet link-claret"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
