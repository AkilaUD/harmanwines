import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EcwidStorefront } from "@/components/shop/EcwidProvider";
import { EcwidScripts } from "@/components/shop/EcwidScripts";
import { siteSettings } from "@/content/seed";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Buy Harman Wines online — Australian delivery. Packed at the cellar door, tracked with Australia Post.",
};

export default function ShopPage() {
  return (
    <>
      <EcwidScripts />
      <PageHero label="Shop" title="Wine to your door" tone="cream">
        <p>
          Orders packed at the Cellar Door. Australia only.{" "}
          <Link href="/wine" className="text-wine hover:underline">
            Prefer the editorial collection?
          </Link>
        </p>
      </PageHero>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <EcwidStorefront />

          <div className="mt-16 max-w-2xl text-sm text-stone space-y-3 leading-relaxed">
            <h2 className="font-display text-2xl text-charcoal leading-tight">Delivery</h2>
            <p>{siteSettings.shipping.capitals}</p>
            <p>{siteSettings.shipping.mostLocations}</p>
            <p>{siteSettings.shipping.local}</p>
            <p>These times exclude weekends, public holidays, and circumstances beyond our control.</p>
            <p>International shipping is not currently offered.</p>
            <h2 className="font-display text-2xl text-charcoal leading-tight pt-6">Privacy</h2>
            <p>
              Information you provide will only be used for the purpose it is collected. Harman Wines
              will not sell, send, trade or otherwise disclose personal information outside Harman
              Wines.
            </p>
            <h2 className="font-display text-2xl text-charcoal leading-tight pt-6">Alcohol</h2>
            <p>
              WARNING: Under the Liquor Control Reform Act 1998 it is an offence to supply alcohol to
              a person under the age of 18 years (Penalty exceeds $8,000); for a person under the age
              of 18 years to purchase or receive liquor (Penalty exceeds $700). Liquor Licence No.{" "}
              {siteSettings.liquorLicence}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
