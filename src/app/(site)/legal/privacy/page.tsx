import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Harman Wines privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy" tone="cream" />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-stone space-y-4 leading-relaxed">
          <p>
            Information that you provide will only be used for the purpose it is collected. Harman
            Wines will not sell, send, trade or otherwise disclose the personal information you have
            provided to anyone outside Harman Wines.
          </p>
          <p>
            Booking and gift-voucher data is processed by NowBookIt. Online shop data is processed by
            Ecwid and their payment providers. Full cookie / analytics disclosure — DATA REQUIRED for
            GA4 and any marketing tools.
          </p>
        </div>
      </section>
    </>
  );
}
