import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { media } from "@/content/media";

export function ChapterArrive() {
  return (
    <section
      id="arrive"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden chapter-ground bg-dusk grain-dusk"
      aria-label="Arrive at Harman Wines"
    >
      <div className="absolute inset-0 overflow-hidden duotone-dusk">
        <MediaImage
          asset={media.heroVineyard}
          priority
          sizes="100vw"
          className="hero-ken-burns"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,30,23,0.35)_0%,rgba(27,30,23,0.08)_32%,rgba(27,30,23,0.12)_48%,rgba(27,30,23,0.82)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-28 md:pb-28 pt-28 md:pt-32">
        <div className="max-w-xl text-left">
          <p className="label-ui text-linen/70">Wattle Bank, South Gippsland</p>
          <h1 className="font-display text-linen text-[clamp(3rem,10.5vw,7.5rem)] mt-4 md:mt-5 leading-[1.05] tracking-tight">
            Harman Wines
          </h1>
          <p className="mt-4 md:mt-5 max-w-md font-body text-linen/85 text-base md:text-xl font-light leading-relaxed">
            A family vineyard, working farm, and cellar door on the Gippsland coast.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-5 md:gap-6">
            <Button href="/visit/book" variant="on-dark" size="lg">
              Book a Table
            </Button>
            <Link href="/wine" className="link-quiet link-harvest label-ui">
              Explore the wine
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#place"
        className="scroll-cue absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-10 text-linen no-underline hover:opacity-100 hidden sm:block"
      >
        Scroll to arrive
      </a>
    </section>
  );
}
