import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { getWines } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { WineStrip } from "@/components/wine/WineStrip";

export function ChapterWineRail() {
  const wines = getWines();

  return (
    <section
      id="wine"
      className="chapter-ground bg-cream py-24 md:py-32"
      aria-labelledby="wine-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>Drink</SectionLabel>
            <EditorialHeading id="wine-heading">The collection</EditorialHeading>
            <p className="mt-4 max-w-lg text-stone">
              Estate cool-climate wines — handmade on site at Wattle Bank.
            </p>
          </div>
          <Button href="/wine" variant="secondary">
            View all wines
          </Button>
        </Reveal>
      </div>

      <div className="pl-5 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <WineStrip wines={wines} dominant className="pr-5 md:pr-8" />
      </div>
    </section>
  );
}
