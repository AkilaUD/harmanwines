import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteSettings } from "@/content/seed";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Harman Wines — join the cellar door and vineyard team in South Gippsland.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero label="Careers" title="Work with us" media={media.heroVineyard}>
        <p>
          Occasional roles across cellar door, kitchen and vineyard. Current openings — DATA
          REQUIRED from the live careers page.
        </p>
      </PageHero>
      <section className="pb-20 bg-linen">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-loam space-y-4 font-body">
          <p>
            Send a short note and CV to{" "}
            <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a> with the subject line
            “Careers”.
          </p>
          <Button href={`mailto:${siteSettings.email}?subject=Careers`}>Email the team</Button>
        </div>
      </section>
    </>
  );
}
