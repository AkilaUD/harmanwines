import Image from "next/image";
import Link from "next/link";
import type { Wine } from "@/types/content";
import { formatPrice } from "@/lib/utils";

type Props = {
  wines: Wine[];
  label?: string;
  className?: string;
};

/**
 * Cardless editorial wine strip — tall bottle photos on warm linen ground,
 * variety micro-label, name, price, quiet link. No borders or shadows.
 */
export function WineStrip({ wines, label = "Wine collection", className = "" }: Props) {
  return (
    <div className={`wine-rail ${className}`.trim()} tabIndex={0} aria-label={label}>
      {wines.map((wine, i) => {
        const ground = i % 2 === 0 ? "bg-linen" : "bg-parchment";
        return (
          <Link
            key={wine.id}
            href={`/wine/${wine.slug}`}
            className="group block no-underline outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-2"
          >
            <div
              className={`relative aspect-[2/3] ${ground} flex items-end justify-center px-3 pt-5 pb-3 overflow-hidden`}
            >
              {wine.image ? (
                <Image
                  src={wine.image}
                  alt={`${wine.name} bottle`}
                  width={400}
                  height={600}
                  sizes="(max-width: 768px) 70vw, 240px"
                  priority={i < 3}
                  className="h-[92%] w-auto max-w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:-translate-y-2"
                />
              ) : (
                <span className="label-micro self-center text-stone/50">Photo soon</span>
              )}
            </div>
            <p className="label-micro mt-4 text-stone">
              {wine.variety} · {wine.vintage}
            </p>
            <h3 className="font-display text-2xl mt-1.5 leading-[1.15] text-balance group-hover:underline decoration-1 underline-offset-4">
              {wine.name}
            </h3>
            <p className="mt-2 text-sm text-stone">{formatPrice(wine.price)}</p>
          </Link>
        );
      })}
    </div>
  );
}
