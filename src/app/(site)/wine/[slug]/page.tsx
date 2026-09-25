import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getWineBySlug, getWines } from "@/lib/content";
import { formatPrice } from "@/lib/utils";
import { EcwidBuyButton } from "@/components/shop/EcwidProvider";
import { siteSettings } from "@/content/seed";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getWines().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) return { title: "Wine" };
  return {
    title: wine.name,
    description: wine.description,
  };
}

export default async function WineDetailPage({ params }: Props) {
  const { slug } = await params;
  const wine = getWineBySlug(slug);
  if (!wine) notFound();

  const related = getWines().filter((w) => w.id !== wine.id).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: wine.name,
          description: wine.description,
          image: wine.image,
          brand: { "@type": "Brand", name: "Harman Wines" },
          offers: {
            "@type": "Offer",
            priceCurrency: "AUD",
            price: wine.price,
            availability:
              wine.availability === "sold-out"
                ? "https://schema.org/OutOfStock"
                : "https://schema.org/InStock",
          },
        }}
      />
      <article className="pt-28 md:pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative aspect-[3/4] bg-linen flex items-center justify-center px-6 py-8">
            {wine.image ? (
              <Image
                src={wine.image}
                alt={`${wine.name} bottle`}
                width={480}
                height={720}
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="h-full w-auto max-h-full object-contain"
              />
            ) : (
              <span className="label-micro text-stone/50">Bottle photo soon</span>
            )}
          </div>

          <div>
            <p className="label-micro">
              {wine.variety} · {wine.vintage} · {wine.region}
            </p>
            <h1 className="font-display text-5xl md:text-6xl mt-3 text-balance">{wine.name}</h1>
            <p className="mt-4 text-2xl">{formatPrice(wine.price)}</p>
            <p className="mt-6 text-stone text-lg leading-relaxed">{wine.description}</p>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <EcwidBuyButton productId={wine.ecwidProductId} />
              <Link href="/shop" className="label-micro text-stone no-underline hover:underline">
                View cart / checkout
              </Link>
            </div>

            <dl className="mt-12 space-y-6 border-t border-charcoal/10 pt-8">
              <div>
                <dt className="label-micro">Style</dt>
                <dd className="mt-2">{wine.style}</dd>
              </div>
              {wine.tastingNotes && (
                <div>
                  <dt className="label-micro">Tasting</dt>
                  <dd className="mt-2 text-stone">{wine.tastingNotes.join(" · ")}</dd>
                </div>
              )}
              {wine.foodPairings && (
                <div>
                  <dt className="label-micro">Food pairing</dt>
                  <dd className="mt-2 text-stone">{wine.foodPairings.join(", ")}</dd>
                </div>
              )}
              <div>
                <dt className="label-micro">Origin</dt>
                <dd className="mt-2 text-stone">
                  Estate fruit, Wattle Bank, South Gippsland. Cool maritime climate; minimal
                  intervention winemaking by David Harman.
                </dd>
              </div>
            </dl>

            <aside className="mt-10 text-xs text-stone leading-relaxed border-t border-charcoal/10 pt-6">
              <p>{siteSettings.shipping.capitals}</p>
              <p className="mt-2">{siteSettings.shipping.mostLocations}</p>
              <p className="mt-2">{siteSettings.shipping.local}</p>
              <p className="mt-2">International wine delivery is not currently offered.</p>
              <p className="mt-4">
                Liquor Licence No. {siteSettings.liquorLicence}. Under 18s may not purchase alcohol.
              </p>
            </aside>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mx-auto max-w-7xl px-5 md:px-8 mt-20">
            <h2 className="font-display text-3xl">Related wines</h2>
            <ul className="mt-8 grid sm:grid-cols-3 gap-8">
              {related.map((w) => (
                <li key={w.id}>
                  <Link
                    href={`/wine/${w.slug}`}
                    className="group block no-underline hover:text-burgundy"
                  >
                    {w.image && (
                      <div className="relative aspect-[3/4] bg-linen mb-4 flex items-end justify-center px-3 pt-4 pb-2 overflow-hidden">
                        <Image
                          src={w.image}
                          alt=""
                          width={240}
                          height={360}
                          sizes="200px"
                          className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:-translate-y-1"
                        />
                      </div>
                    )}
                    <p className="label-micro">{w.variety}</p>
                    <p className="font-display text-2xl mt-1 text-balance group-hover:underline decoration-1 underline-offset-4">
                      {w.name}
                    </p>
                    <p className="text-sm text-stone mt-2">{formatPrice(w.price)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </>
  );
}
