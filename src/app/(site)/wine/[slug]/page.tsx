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
  const ground = wine.groundColor ?? "#E8E0CE";

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
      <article className="pt-28 md:pt-36 pb-20 bg-linen">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div
            className="relative aspect-[2/3] flex items-end justify-center px-6 pt-10 pb-6"
            style={{ backgroundColor: ground }}
          >
            {wine.image ? (
              <Image
                src={wine.image}
                alt={`${wine.name} bottle`}
                width={480}
                height={720}
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="h-[92%] w-auto max-h-full object-contain object-bottom"
              />
            ) : (
              <span className="font-ui text-sm text-linen/50 self-center">Bottle photo soon</span>
            )}
          </div>

          <div>
            <p className="font-display italic text-lg text-loam">
              {wine.vintage}
              <span className="not-italic font-ui text-sm ml-3 text-loam/80">
                {wine.variety}, {wine.region}
              </span>
            </p>
            <h1 className="font-display text-5xl md:text-6xl mt-3 text-balance leading-tight">
              {wine.name}
            </h1>
            <p className="mt-4 font-ui text-xl">{formatPrice(wine.price)}</p>
            <p className="mt-6 text-loam text-lg leading-relaxed font-body">{wine.description}</p>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <EcwidBuyButton productId={wine.ecwidProductId} />
              <Link
                href="/shop"
                className="font-ui text-sm text-loam link-quiet no-underline hover:underline"
              >
                View cart / checkout
              </Link>
            </div>

            <dl className="mt-12 space-y-6 border-t border-dusk/10 pt-8">
              <div>
                <dt className="font-ui text-sm text-loam">Style</dt>
                <dd className="mt-2">{wine.style}</dd>
              </div>
              {wine.tastingNotes && (
                <div>
                  <dt className="font-ui text-sm text-loam">Tasting</dt>
                  <dd className="mt-2 text-loam">{wine.tastingNotes.join(", ")}</dd>
                </div>
              )}
              {wine.foodPairings && (
                <div>
                  <dt className="font-ui text-sm text-loam">Food pairing</dt>
                  <dd className="mt-2 text-loam">{wine.foodPairings.join(", ")}</dd>
                </div>
              )}
              <div>
                <dt className="font-ui text-sm text-loam">Origin</dt>
                <dd className="mt-2 text-loam">
                  Estate fruit, Wattle Bank, South Gippsland. Cool maritime climate; minimal
                  intervention winemaking by David Harman.
                </dd>
              </div>
            </dl>

            <aside className="mt-10 text-xs text-loam leading-relaxed border-t border-dusk/10 pt-6 font-ui">
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
            <p className="font-display italic text-xl text-loam mb-8">Also in the cellar</p>
            <ul className="grid sm:grid-cols-3 gap-8">
              {related.map((w) => (
                <li key={w.id}>
                  <Link href={`/wine/${w.slug}`} className="group no-underline block">
                    <div
                      className="aspect-[2/3] flex items-end justify-center px-4 pt-6 pb-4 mb-4"
                      style={{ backgroundColor: w.groundColor ?? "#E8E0CE" }}
                    >
                      {w.image && (
                        <Image
                          src={w.image}
                          alt=""
                          width={200}
                          height={300}
                          className="h-[90%] w-auto object-contain object-bottom"
                        />
                      )}
                    </div>
                    <p className="font-display text-2xl group-hover:underline underline-offset-4">
                      {w.name}
                    </p>
                    <p className="font-ui text-sm text-loam mt-1">{formatPrice(w.price)}</p>
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
