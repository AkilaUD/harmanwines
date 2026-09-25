import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { siteSettings } from "@/content/seed";
import { media } from "@/content/media";

export function ChapterReturn() {
  return (
    <section
      id="return"
      className="relative chapter-ground text-linen min-h-[85svh] flex items-end overflow-hidden bg-dusk grain-dusk"
      aria-labelledby="return-heading"
    >
      <div className="absolute inset-0 overflow-hidden duotone-dusk">
        <MediaImage
          asset={media.returnDusk}
          sizes="100vw"
          className="hero-ken-burns"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,30,23,0.55)_0%,rgba(27,30,23,0.25)_40%,rgba(27,30,23,0.88)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 md:px-8 pb-28 md:pb-28 pt-32">
        <p className="label-ui text-linen/55">Come visit</p>
        <h2
          id="return-heading"
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] mt-4 max-w-3xl text-balance leading-[1.05]"
        >
          Come for the wine.
          <br />
          Stay for the place.
        </h2>
        <p className="mt-6 max-w-md font-body text-linen/75 text-lg">
          Golden hour over South Gippsland — then the table. {siteSettings.address.line1},{" "}
          {siteSettings.address.suburb}. Bookings highly recommended.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/visit/book" variant="on-dark" size="lg">
            Book a Table
          </Button>
          <Button
            href="/wine"
            variant="secondary"
            size="lg"
            className="border-linen/35 text-linen hover:border-linen"
          >
            Shop the wine
          </Button>
        </div>
      </div>
    </section>
  );
}
