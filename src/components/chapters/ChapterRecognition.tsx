import Image from "next/image";
import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getHomepageAwards } from "@/lib/content";
import { media } from "@/content/media";
import { cn } from "@/lib/utils";

/** Badge frame — silver banner taller, gold hero, GBA nearer square */
const badgeFrame: Record<string, { box: string; maxW: string }> = {
  "ata-2025-silver": {
    box: "aspect-[3/4] h-[13rem] md:h-[14.5rem]",
    maxW: "max-w-[9.5rem] md:max-w-[10.5rem]",
  },
  "vta-2025-gold": {
    box: "aspect-[3/4] h-[15rem] md:h-[17.5rem]",
    maxW: "max-w-[11rem] md:max-w-[13rem]",
  },
  "gba-2023": {
    box: "aspect-square h-[12rem] md:h-[13.5rem]",
    maxW: "max-w-[11rem] md:max-w-[12.5rem]",
  },
};

/**
 * Homepage laurels — three medal pedestals + animated cascade of all live awards.
 */
export function ChapterRecognition() {
  const { featured, rest } = getHomepageAwards();

  return (
    <section
      id="recognition"
      className="relative chapter-ground overflow-hidden py-20 md:py-28 bg-[color-mix(in_oklab,var(--linen)_86%,var(--garden)_14%)]"
      aria-labelledby="recognition-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden>
        <MediaImage asset={media.landVines} sizes="100vw" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--linen)_92%,transparent)_0%,color-mix(in_oklab,var(--linen)_88%,var(--garden)_12%)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="label-ui text-garden">Laurels</p>
            <EditorialHeading id="recognition-heading" className="mt-3 text-dusk">
              Quietly noted across Victoria
            </EditorialHeading>
            <p className="mt-5 font-body text-loam text-lg leading-relaxed">
              Tourism and regional recognition — cool-climate wine, hospitality, and a working farm
              on Bass Coast.
            </p>
          </div>
        </Reveal>

        {/* Hero pedestals */}
        <ul className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-10 items-end">
          {featured.map((a, i) => {
            const isCenter = a.id === "vta-2025-gold";
            const delay = i === 0 ? 0 : i === 1 ? 0.1 : 0.18;
            const frame = badgeFrame[a.id] ?? {
              box: "aspect-square h-[13rem]",
              maxW: "max-w-[10rem]",
            };

            return (
              <li
                key={a.id}
                className={cn(
                  "flex flex-col items-center text-center",
                  isCenter && "md:-translate-y-8",
                )}
              >
                <Reveal delay={delay} className="w-full flex flex-col items-center">
                  <div
                    className={cn(
                      "relative mx-auto w-full award-float",
                      frame.box,
                      frame.maxW,
                    )}
                    style={{ animationDelay: `${i * 0.7}s` }}
                  >
                    <Image
                      src={a.badge!}
                      alt={`${a.title} — ${a.organisation} ${a.year}`}
                      fill
                      sizes="(max-width: 768px) 160px, 220px"
                      className="object-contain drop-shadow-sm transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <p className="mt-6 font-display text-3xl md:text-4xl text-claret leading-none">
                    {a.year}
                  </p>
                  <h3 className="mt-3 font-display text-xl md:text-2xl text-dusk leading-tight text-balance">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-loam font-body max-w-[14rem] leading-relaxed">
                    {a.organisation}
                    {a.category ? (
                      <>
                        <br />
                        <span className="text-loam/80">{a.category}</span>
                      </>
                    ) : null}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Animated cascade — remaining live awards */}
        {rest.length > 0 && (
          <ul className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((a, i) => (
              <li key={a.id}>
                <Reveal delay={0.05 * i}>
                  <div className="flex gap-4 items-start border-t border-dusk/12 pt-5 h-full">
                    {a.badge ? (
                      <div className="relative h-16 w-14 md:h-20 md:w-16 flex-none shrink-0">
                        <Image
                          src={a.badge}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-contain"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <p className="font-display text-2xl text-claret leading-none">{a.year}</p>
                      <h3 className="mt-2 font-display text-lg md:text-xl text-dusk leading-tight text-balance">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm text-loam font-body leading-relaxed">
                        {a.organisation}
                        {a.category ? ` — ${a.category}` : ""}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-14 md:mt-16 text-center">
          <Link href="/our-story#awards" className="link-quiet link-claret label-ui">
            More on Our Story
          </Link>
        </p>
      </div>
    </section>
  );
}
