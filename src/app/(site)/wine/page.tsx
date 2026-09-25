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
      <PageHero label="Wine" title="The collection" tone="cream">
        <p>
          Handcrafted on site — cool-climate wines expressive of vintage and place. Delivered within
          Australia.
        </p>
      </PageHero>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <WineStrip wines={wines} label="Current releases" className="mb-16" />

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
