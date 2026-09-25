import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Takeaway",
  description:
    "Takeaway from Harman Wines cellar door — wood-fired pizza and shared plates to enjoy at home.",
};

export default function TakeawayPage() {
  return (
    <>
      <PageHero label="Takeaway" title="Take the table home" media={media.tableFoodWine}>
        <p>
          From our kitchen to your table — takeaway crafted with fresh local produce, to pair with
          estate wine at home.
        </p>
      </PageHero>

      <section className="bg-linen pb-20 md:pb-28">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <p className="font-body text-loam text-lg leading-relaxed">
            Confirm current takeaway availability when booking or by phone. For the full list of
            dishes and drinks, see the menu — or book a table if you’d rather stay among the vines.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/visit/menu">See the menu</Button>
            <Button href="/visit/book" variant="secondary">
              Book a Table
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
