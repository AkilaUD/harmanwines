import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { media } from "@/content/media";

export function ChapterArrive() {
  return (
    <section
      id="arrive"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden chapter-ground grain"
      aria-label="Arrive at Harman Wines"
    >
      <div className="absolute inset-0 overflow-hidden">
        <MediaImage
          asset={media.heroVineyard}
          priority
          sizes="100vw"
          className="hero-ken-burns"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,34,30,0.1)_0%,rgba(36,34,30,0.05)_40%,rgba(36,34,30,0.72)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28 pt-32">
        <p className="label-micro text-cream/65">
          Wattle Bank · South Gippsland · Victoria
        </p>
        <h1 className="font-display text-cream text-[clamp(3.25rem,11vw,7.5rem)] mt-5 max-w-4xl leading-[1.05] tracking-tight">
          Harman Wines
        </h1>
        <p className="mt-5 max-w-md text-cream/85 text-lg md:text-xl font-light leading-relaxed">
          A family vineyard, working farm, and cellar door on the Gippsland coast.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button href="/visit/book" variant="on-dark" size="lg">
            Book a Table
          </Button>
          <Link
            href="/wine"
            className="label-micro text-cream/80 no-underline hover:text-cream hover:underline underline-offset-4"
          >
            Explore the wine
          </Link>
        </div>
      </div>

      <a
        href="#place"
        className="scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream no-underline hover:opacity-100"
      >
        Scroll to arrive
      </a>
    </section>
  );
}
