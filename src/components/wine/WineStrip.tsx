import Image from "next/image";
import Link from "next/link";
import type { Wine } from "@/types/content";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Props = {
  wines: Wine[];
  label?: string;
  className?: string;
  dominant?: boolean;
};

function inkForGround(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) || 0;
  const g = parseInt(h.slice(2, 4), 16) || 0;
  const b = parseInt(h.slice(4, 6), 16) || 0;
  const luma = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luma > 0.55 ? "#1B1E17" : "#EDE6D6";
}

/**
 * Dusk shelf — each bottle on its vintage ground colour.
 */
export function WineStrip({
  wines,
  label = "Wine collection",
  className = "",
  dominant = false,
}: Props) {
  return (
    <div
      className={cn("wine-rail", dominant && "wine-rail-dominant", className)}
      tabIndex={0}
      aria-label={label}
    >
      {wines.map((wine, i) => {
        const ground = wine.groundColor || "#E8E0CE";
        const ink = inkForGround(ground);
        return (
          <article key={wine.id} className="group">
            <Link
              href={`/wine/${wine.slug}`}
              className="block no-underline outline-none focus-visible:ring-2 focus-visible:ring-linen/50 focus-visible:ring-offset-2 focus-visible:ring-offset-dusk"
            >
              <div
                className="relative aspect-[3/4] md:aspect-[2/3] flex items-end justify-center px-4 pt-8 pb-4 overflow-hidden"
                style={{ backgroundColor: ground }}
              >
                {wine.image ? (
                  <Image
                    src={wine.image}
                    alt={`${wine.name} bottle`}
                    width={520}
                    height={780}
                    sizes={
                      dominant
                        ? "(max-width: 768px) 85vw, 50vw"
                        : "(max-width: 768px) 70vw, 280px"
                    }
                    priority={i < 2}
                    className="h-[94%] w-auto max-w-full object-contain object-bottom"
                  />
                ) : (
                  <span className="label-ui self-center opacity-50" style={{ color: ink }}>
                    Photo soon
                  </span>
                )}
              </div>
            <div className="mt-5 min-h-[7.5rem] flex flex-col">
              <p className="label-ui text-linen/55">
                {wine.variety}, {wine.vintage}
              </p>
              <h3 className="font-display italic text-2xl md:text-3xl mt-2 leading-[1.15] text-balance text-linen decoration-1 underline-offset-4 group-hover:underline">
                {wine.name}
              </h3>
              <p className="mt-auto pt-3 font-ui text-sm tracking-wide text-linen/70">
                {formatPrice(wine.price)}
              </p>
            </div>
            </Link>
            <div className="mt-4 flex flex-wrap gap-5">
              <Link
                href={`/wine/${wine.slug}`}
                className="link-quiet link-harvest label-ui"
              >
                View wine
              </Link>
              <Link href="/shop#checkout" className="link-quiet label-ui text-linen/55 hover:text-linen">
                Buy
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
