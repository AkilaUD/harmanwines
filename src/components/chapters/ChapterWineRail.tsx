import Image from "next/image";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { getWines } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { WineStrip } from "@/components/wine/WineStrip";
import { images } from "@/content/images";

export function ChapterWineRail() {
  const wines = getWines();

  return (
    <section
      id="wine"
      className="chapter-ground bg-cream py-24 md:py-32"
      aria-labelledby="wine-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end mb-4">
          <div>
            <SectionLabel>Drink</SectionLabel>
            <EditorialHeading id="wine-heading">The collection</EditorialHeading>
            <p className="mt-4 max-w-lg text-stone">
              Estate cool-climate wines — Chardonnay, Pinot Gris, Sauvignon Blanc, Rosé, Pinot Noir,
              Shiraz and Merlot — handmade on site.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden hidden lg:block">
            <Image
              src={images.winePaddles}
              alt="Wine paddles at Harman Wines"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="flex justify-end mb-8">
          <Button href="/wine" variant="secondary">
            View all wines
          </Button>
        </div>

        <WineStrip wines={wines} className="mt-4" />
      </div>
    </section>
  );
}
