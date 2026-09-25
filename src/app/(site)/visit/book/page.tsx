import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BookingShell } from "@/components/booking/BookingShell";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Book lunch or dinner at Harman Wines cellar door, Wattle Bank. Online bookings up to 18 guests.",
};

export default function BookPage() {
  return (
    <>
      <PageHero label="Visit" title="Make a booking" media={media.gatherPergola}>
        <p>Friday & Saturday lunch and dinner · Sunday lunch. Bookings open 45 days ahead.</p>
      </PageHero>
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <BookingShell />
        </div>
      </section>
    </>
  );
}
