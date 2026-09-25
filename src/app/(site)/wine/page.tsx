import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getWines } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { WineFinder } from "@/components/wine/WineFinder";
import { WineStrip } from "@/components/wine/WineStrip";

export const metadata: Metadata = {
  title: "Wine",
  description:
    "Estate cool-climate wines from Harman Wines, Wattle Bank — shop current releases online across Australia.",
};

export default function WinePage() {
  const wines = getWines();

  return (
    <>
      <PageHero label="Wine" title="The collection" tone="dusk">
        <p>
          Handcrafted on site — cool-climate wines expressive of vintage and place. Delivered within
          Australia.
        </p>
      </PageHero>

      <section className="pb-20 bg-dusk text-linen">
        <div className="pl-5 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] mb-16 pt-10">
          <WineStrip wines={wines} label="Current releases" dominant className="pr-5 md:pr-8" />
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8 bg-linen text-dusk py-16 -mx-0">
          <WineFinder wines={wines} />

          <div className="mt-16 flex flex-wrap gap-3">
            <Button href="/shop">Open shop</Button>
            <Button href="/gift" variant="secondary">
              Gift vouchers
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
