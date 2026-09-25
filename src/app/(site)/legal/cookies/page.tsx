import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Cookie information for harmanwines.com.au",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero label="Legal" title="Cookies" tone="cream" />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-stone space-y-4">
          <p>
            We may use essential cookies for the shop and booking widgets, and analytics (Google
            Analytics {`G-WBZVD8QPKL`}) when enabled. Detailed cookie table — DATA REQUIRED at launch.
          </p>
        </div>
      </section>
    </>
  );
}
