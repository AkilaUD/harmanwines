import { Button } from "@/components/ui/Button";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { siteSettings } from "@/content/seed";

/** Closing page — type on forest paper. No aerial reuse. */
export function ChapterReturn() {
  return (
    <section
      id="return"
      className="relative chapter-ground bg-forest text-cream py-24 md:py-32 overflow-hidden"
      aria-labelledby="return-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel className="text-cream/50">Come visit</SectionLabel>
          <EditorialHeading id="return-heading" className="text-cream max-w-3xl">
            The gate is open Friday to Sunday
          </EditorialHeading>
          <p className="mt-5 max-w-lg text-cream/75 text-lg">
            {siteSettings.address.line1}, {siteSettings.address.suburb}. Bookings highly
            recommended. Wine available online every day.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button href="/visit/book" variant="on-dark" size="lg">
            Book a Table
          </Button>
          <Button
            href="/wine"
            variant="secondary"
            size="lg"
            className="border-cream/35 text-cream hover:border-cream"
          >
            Shop Wine
          </Button>
          <Button
            href="/gift"
            variant="secondary"
            size="lg"
            className="border-cream/35 text-cream hover:border-cream"
          >
            Give Them Harman
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap gap-8 text-sm text-cream/70">
          <a
            href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}
            className="no-underline hover:text-cream"
          >
            Call {siteSettings.phone}
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${siteSettings.address.line1}, ${siteSettings.address.suburb} ${siteSettings.address.state} ${siteSettings.address.postcode}`,
            )}`}
            className="no-underline hover:text-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
          <a href={`mailto:${siteSettings.email}`} className="no-underline hover:text-cream">
            {siteSettings.email}
          </a>
        </div>
      </div>
    </section>
  );
}
