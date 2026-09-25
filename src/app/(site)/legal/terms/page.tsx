import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Harman Wines website and booking terms.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms" tone="cream" />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-stone space-y-4 leading-relaxed">
          <p>
            Bookings: a credit card may be taken for pre-authorisation only. Cancellation within 24
            hours or no-show may incur a per-person fee as per cellar door terms.
          </p>
          <p>15% surcharge applies on Victorian public holidays.</p>
          <p>Cake surcharge $2.50 per person when bringing a celebration cake. No BYO food or drink.</p>
          <p>Full terms of sale for online wine — as presented at Ecwid checkout.</p>
        </div>
      </section>
    </>
  );
}
