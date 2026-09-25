import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { FamilyFolio } from "@/components/ui/FamilyFolio";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { media } from "@/content/media";

export function ChapterFamily() {
  return (
    <section
      id="family"
      className="relative chapter-ground overflow-hidden py-24 md:py-36 bg-linen"
      aria-labelledby="family-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_1.1fr] gap-12 lg:gap-16 xl:gap-24 items-center mb-20 md:mb-28">
          {/* Mobile: logo first */}
          <Reveal className="lg:hidden">
            <BrandLogo tone="dark" width={160} className="w-[9rem]" />
          </Reveal>

          <Reveal>
            <div className="group relative mx-auto lg:mx-0 w-full max-w-md lg:max-w-none aspect-[3/4] overflow-hidden grain rounded-none">
              <MediaImage
                asset={media.familyStudio}
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pt-4">
              <div className="hidden lg:block mb-10">
                <BrandLogo tone="dark" width={176} className="w-[10rem]" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-8 bg-dusk/25" aria-hidden />
                <p className="font-ui text-[0.6875rem] uppercase tracking-[0.18em] text-dusk/70">
                  Meet · Est. 2004
                </p>
              </div>

              <h2
                id="family-heading"
                className="font-display font-normal text-[clamp(2.75rem,5vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-balance text-dusk"
              >
                David, Nicole, and the land they kept
              </h2>
              <p className="mt-7 max-w-md font-body text-base md:text-lg text-loam leading-relaxed">
                Together with children Jenna and James, dog Banjo, sheep, alpacas and free-roaming
                chickens — a family who turned a former horse stud into a vineyard home.
              </p>
              <p className="mt-6 font-ui text-[0.6875rem] uppercase tracking-[0.14em] text-loam">
                David + Nicole Harman, Founders / Winemaker / Hosts
              </p>
            </div>
          </Reveal>
        </div>

        <FamilyFolio />

        <p className="mt-10 md:mt-14 text-center">
          <Link
            href="/our-story"
            className="font-ui text-[0.6875rem] uppercase tracking-[0.16em] text-loam underline underline-offset-4 decoration-dusk/25 hover:text-claret hover:decoration-claret/40 transition-colors"
          >
            Read the full story
          </Link>
        </p>
      </div>
    </section>
  );
}
