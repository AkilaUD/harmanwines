import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { getEvents } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Live music and seasonal events at Harman Wines cellar door, Wattle Bank, South Gippsland.",
};

export default function EventsPage() {
  const events = getEvents();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: events.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Event",
              name: e.title,
              startDate: e.date,
              description: e.description,
              location: {
                "@type": "Place",
                name: "Harman Wines",
                address: "612 Korumburra-Inverloch Road, Wattle Bank VIC 3995",
              },
            },
          })),
        }}
      />
      <PageHero label="Events" title="An invitation to gather" tone="dusk">
        <p>Live music each Sunday and over long weekends — talented local musicians.</p>
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam mb-6">Upcoming Sunday sessions · 12:30pm–3:30pm</p>
          <ul className="divide-y divide-dusk/10">
            {events.map((e) => (
              <li key={e.id} className="py-10 grid md:grid-cols-[8rem_1fr_auto] gap-4 items-baseline">
                <time dateTime={e.date} className="label-ui text-claret">
                  {formatDate(e.date)}
                </time>
                <div>
                  <h2 className="font-display text-3xl text-dusk">{e.title}</h2>
                  <p className="mt-2 text-loam font-body">{e.description}</p>
                  {e.time && <p className="mt-2 text-sm text-loam">{e.time}</p>}
                </div>
                <Button href="/visit/book" size="sm">
                  Book
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-loam">
            Event dates change seasonally — confirm on this page or when booking.
          </p>
        </div>
      </section>
    </>
  );
}
