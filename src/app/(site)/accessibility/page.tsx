import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteSettings } from "@/content/seed";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility information for visiting Harman Wines cellar door.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero label="Accessibility" title="Visiting with care" tone="paper">
        <p>
          We want every guest to feel welcome. Full facility details — DATA REQUIRED from the live
          accessibility page / on-site audit. Contact us ahead of your visit so we can help.
        </p>
      </PageHero>
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 prose-harman text-stone space-y-4">
          <p>
            Please share accessibility needs when booking online, by phone ({siteSettings.phone}) or
            email ({siteSettings.email}).
          </p>
          <p>
            Picnic areas are outdoors on grass; pergola and indoor spaces offer covered seating.
            Confirm current access routes and amenities with the team before arrival.
          </p>
        </div>
      </section>
    </>
  );
}
