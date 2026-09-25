import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { getEvents } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Live music and seasonal events at Harman Wines cellar door, Wattle Bank, South Gippsland.",
};

const gallery = [
  media.eventMusicDuoIndoor,
  media.eventMusicDuoTent,
  media.eventMusicDuoCheck,
  media.eventMusicBand,
] as const;

export default function EventsPage() {
  const events = getEvents();
  const featured = events[events.length - 1] ?? events[0];

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
      <PageHero label="Events" title="Sunday live music" media={media.eventMusicDuoTent}>
        <p>
          Enjoy a relaxed afternoon at the cellar door with the soothing sounds of great local
          artists.
        </p>
      </PageHero>

      <section className="bg-linen pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display italic text-xl text-loam">Upcoming Sunday sessions</p>
            <p className="mt-2 font-ui text-sm text-loam">12:30pm–3:30pm</p>

            {featured && (
              <div className="mt-10">
                <p className="font-display text-3xl md:text-4xl text-dusk leading-tight">
                  {formatDate(featured.date)} — {featured.title}
                </p>
                <div className="mt-8 flex justify-center">
                  <Button href="/visit/book" size="lg">
                    Book a Table
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Live site gallery — same four performance plates */}
          <ul className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((asset) => (
              <li key={asset.id} className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{ objectPosition: asset.focalPoint }}
                />
              </li>
            ))}
          </ul>

          <div className="mt-16 md:mt-20 border-t border-dusk/10 pt-12">
            <p className="label-ui text-loam mb-6">Full Sunday line-up</p>
            <ul className="divide-y divide-dusk/10">
              {events.map((e) => (
                <li
                  key={e.id}
                  className="py-8 grid md:grid-cols-[8rem_1fr_auto] gap-4 items-baseline"
                >
                  <time dateTime={e.date} className="label-ui text-claret">
                    {formatDate(e.date)}
                  </time>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-dusk">{e.title}</h2>
                    <p className="mt-2 text-loam font-body">{e.description}</p>
                    {e.time && <p className="mt-2 text-sm text-loam">{e.time}</p>}
                  </div>
                  <Button href="/visit/book" size="sm" variant="secondary">
                    Book
                  </Button>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-loam max-w-xl">
              Event dates change seasonally — confirm on this page or when booking. Source listing:{" "}
              <a
                href="https://www.harmanwines.com.au/events/"
                className="link-quiet link-claret"
                rel="noopener noreferrer"
                target="_blank"
              >
                harmanwines.com.au/events
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
