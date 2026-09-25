import Image from "next/image";
import Link from "next/link";
import type { Wine } from "@/types/content";
import { formatPrice } from "@/lib/utils";

type Props = {
  wines: Wine[];
  label?: string;
  className?: string;
  dominant?: boolean;
};

/**
 * Editorial wine gallery — large bottles, peek of next, catalogue minimal type.
 */
export function WineStrip({
  wines,
  label = "Wine collection",
  className = "",
  dominant = false,
}: Props) {
  return (
    <div
      className={`wine-rail ${dominant ? "wine-rail-dominant" : ""} ${className}`.trim()}
      tabIndex={0}
      aria-label={label}
    >
      {wines.map((wine, i) => (
        <article key={wine.id} className="group">
          <Link
            href={`/wine/${wine.slug}`}
            className="block no-underline outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[2/3] bg-paper flex items-end justify-center px-4 pt-8 pb-4 overflow-hidden">
              {wine.image ? (
                <Image
                  src={wine.image}
                  alt={`${wine.name} bottle`}
                  width={520}
                  height={780}
                  sizes={dominant ? "(max-width: 768px) 85vw, 50vw" : "(max-width: 768px) 70vw, 280px"}
                  priority={i < 2}
                  className="h-[94%] w-auto max-w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:-translate-y-2"
                />
              ) : (
                <span className="label-micro self-center text-stone/50">Photo soon</span>
              )}
            </div>
            <p className="label-micro mt-5 text-stone">
              {wine.variety} · {wine.vintage}
            </p>
            <h3 className="font-display text-3xl md:text-4xl mt-2 leading-[1.1] text-balance group-hover:underline decoration-1 underline-offset-4">
              {wine.name}
            </h3>
            <p className="mt-3 text-meta">{formatPrice(wine.price)}</p>
          </Link>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href={`/wine/${wine.slug}`}
              className="label-micro text-wine no-underline hover:underline"
            >
              View wine
            </Link>
            <Link href="/shop" className="label-micro text-stone no-underline hover:underline">
              Buy
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
