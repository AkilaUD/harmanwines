import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { getWines } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { WineStrip } from "@/components/wine/WineStrip";
import { MediaImage } from "@/components/ui/MediaImage";
import { media } from "@/content/media";

export function ChapterWineRail() {
  const wines = getWines();

  return (
    <section
      id="wine"
      className="chapter-ground bg-dusk text-linen py-24 md:py-32 overflow-hidden"
      aria-labelledby="wine-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10 md:mb-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-end">
          <Reveal>
            <p className="label-ui text-linen/55">Drink</p>
            <EditorialHeading id="wine-heading" className="text-linen">
              The collection
            </EditorialHeading>
            <p className="mt-4 max-w-lg font-body text-linen/70">
              Estate cool-climate wines — handmade on site at Wattle Bank.
            </p>
            <div className="mt-8">
              <Button href="/wine" variant="on-dark">
                View all wines
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden grain-dusk hidden md:block">
            <MediaImage
              asset={media.winePaddles}
              sizes="(max-width:1024px) 50vw, 40vw"
              className="opacity-90"
            />
          </Reveal>
        </div>
      </div>

      <div className="pl-5 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <WineStrip wines={wines} dominant className="pr-5 md:pr-8" />
      </div>
    </section>
  );
}
