import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EcwidStorefront } from "@/components/shop/EcwidProvider";
import { EcwidScripts } from "@/components/shop/EcwidScripts";
import { siteSettings } from "@/content/seed";
import { getWines } from "@/lib/content";
import { WineStrip } from "@/components/wine/WineStrip";
import Link from "next/link";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Buy Harman Wines online — Australian delivery. Packed at the cellar door, tracked with Australia Post.",
};

export default function ShopPage() {
  const wines = getWines();

  return (
    <>
      <EcwidScripts />
      <PageHero label="Shop" title="Wine to your door" media={media.winePaddles}>
        <p>
          Orders packed at the Cellar Door. Australia only.{" "}
          <Link href="/wine" className="link-quiet link-harvest">
            Prefer the editorial collection?
          </Link>
        </p>
      </PageHero>

      <section className="bg-dusk text-linen pt-10 md:pt-12 pb-12 md:pb-16">
        <div className="pl-5 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p className="font-display italic text-linen/55 mb-8 pr-5">Current releases</p>
          <WineStrip wines={wines} label="Shop current releases" className="pr-5 md:pr-8" />
        </div>
      </section>

      <section id="checkout" className="bg-linen pb-8 md:pb-20 pt-10 md:pt-14 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 mb-6 md:mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight">Checkout</h2>
          <p className="mt-3 text-loam max-w-xl font-body">
            Cart and payment run through our secure store. Add bottles below, then proceed to
            checkout.
          </p>
        </div>

        <div className="px-3 sm:px-5 md:px-8 lg:mx-auto lg:max-w-[90rem]">
          <div className="border border-dusk/10 bg-paper p-2 md:p-4 overflow-hidden">
            <EcwidStorefront />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 md:mt-16">
          <details className="group border-t border-dusk/10 pt-6 max-w-2xl">
            <summary className="font-display text-2xl text-dusk cursor-pointer list-none flex justify-between gap-4 items-baseline">
              Delivery &amp; notices
              <span className="label-ui text-loam group-open:hidden">+</span>
              <span className="label-ui text-loam hidden group-open:inline">−</span>
            </summary>
            <div className="mt-5 text-sm text-loam space-y-3 leading-relaxed font-body">
              <p>{siteSettings.shipping.capitals}</p>
              <p>{siteSettings.shipping.mostLocations}</p>
              <p>{siteSettings.shipping.local}</p>
              <p>
                These times exclude weekends, public holidays, and circumstances beyond our control.
                International shipping is not currently offered.
              </p>
              <p>
                Privacy: information you provide will only be used for the purpose it is collected.
                See our{" "}
                <Link href="/legal/privacy" className="link-quiet link-claret">
                  privacy notice
                </Link>
                . Alcohol sale:{" "}
                <Link href="/legal/alcohol" className="link-quiet link-claret">
                  liquor notice
                </Link>{" "}
                (Licence {siteSettings.liquorLicence}).
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
