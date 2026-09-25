import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { images } from "@/content/images";

export function ChapterArrive() {
  return (
    <section
      id="arrive"
      className="relative min-h-[100svh] flex items-end overflow-hidden chapter-ground"
      aria-label="Arrive at Harman Wines"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images.aerialDay}
          alt="Aerial view of Harman Wines vineyard and cellar door at Wattle Bank"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hero-ken-burns"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,28,25,0.12)_0%,rgba(31,28,25,0.08)_45%,rgba(31,28,25,0.68)_100%)]"
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
        <p className="label-micro text-cream/70">Wattle Bank · Bass Coast · South Gippsland</p>
        <h1 className="font-display text-cream text-[clamp(3rem,10vw,7.5rem)] mt-4 max-w-4xl">
          Harman Wines
        </h1>
        <p className="mt-5 max-w-md text-cream/85 text-lg md:text-xl font-light leading-relaxed">
          A family vineyard and working farm on the Gippsland coast — wine, food, and gathering
          shaped by Bass Strait light.
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
    </section>
  );
}
