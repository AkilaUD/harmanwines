import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FunctionEnquiryForm } from "@/components/forms/FunctionEnquiryForm";
import { siteSettings } from "@/content/seed";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Functions",
  description:
    "Weddings, celebrations and corporate events at Harman Wines — seated up to 60, cocktail-style up to 120.",
};

export default function FunctionsPage() {
  return (
    <>
      <PageHero
        label="Private functions"
        title="Host your gathering among the vines"
        media={media.gatherPergola}
      >
        <p>
          An intimate vineyard setting for weddings, celebrations, corporate retreats and long-table
          lunches — just minutes from Inverloch.
        </p>
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14">
          <div className="space-y-8 prose-harman text-loam">
            <div>
              <h2 className="font-display text-3xl text-dusk">Weddings & celebrations</h2>
              <p className="mt-3">
                Seated events for up to 60 guests. Standing / cocktail-style for up to 120 guests
                (FAQ). Exclusive use available. Flexible indoor and alfresco spaces.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-dusk">Corporate & private</h2>
              <p className="mt-3">
                Team retreats, brand launches, staff celebrations, midweek business lunches
                (Mon–Thurs). Seasonal menus, wine pairings, AV on request.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl text-dusk">Food & wine</h2>
              <p className="mt-3">
                Menus crafted from the kitchen garden and local growers, paired with estate
                cool-climate wines.
              </p>
            </div>
            <p className="text-sm">
              Prefer to talk first? Call{" "}
              <a href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}>{siteSettings.phone}</a> or
              email{" "}
              <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>.
            </p>
          </div>
          <FunctionEnquiryForm />
        </div>
      </section>
    </>
  );
}
