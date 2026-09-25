import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteSettings } from "@/content/seed";

export const metadata: Metadata = {
  title: "Alcohol notice",
  description: "Liquor licence and under-18 purchase warnings for Harman Wines.",
};

export default function AlcoholPage() {
  return (
    <>
      <PageHero label="Legal" title="Alcohol notice" tone="cream" />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-stone space-y-4 leading-relaxed">
          <p>
            WARNING: Under the Liquor Control Reform Act 1998 it is an offence: to supply alcohol to
            a person under the age of 18 years (Penalty exceeds $8,000); for a person under the age
            of 18 years to purchase or receive liquor (Penalty exceeds $700).
          </p>
          <p>Liquor Licence No. {siteSettings.liquorLicence}</p>
        </div>
      </section>
    </>
  );
}
