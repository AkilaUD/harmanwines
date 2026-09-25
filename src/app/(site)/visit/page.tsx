import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Plan your visit to Harman Wines cellar door — book a table, see the menu, events and the Bass Coast region.",
};

const links = [
  {
    href: "/visit/book",
    title: "Book a Table",
    body: "Lunch and dinner among the vines.",
  },
  {
    href: "/visit/cellar-door",
    title: "Cellar Door",
    body: "Inside, pergola, or picnic — choose the atmosphere.",
  },
  {
    href: "/visit/menu",
    title: "Menu",
    body: "Wood-fired pizza, shared plates, local produce.",
  },
  {
    href: "/visit/events",
    title: "Events",
    body: "Sunday live music and seasonal gatherings.",
  },
  {
    href: "/visit/region",
    title: "The Region",
    body: "While you’re here in Bass Coast & South Gippsland.",
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero label="Visit" title="Come to Wattle Bank" tone="dusk">
        <p>Open Friday–Sunday. Bookings highly recommended.</p>
      </PageHero>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ul className="divide-y divide-charcoal/10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 py-8 no-underline"
                >
                  <span className="font-display text-3xl md:text-4xl group-hover:text-claret transition-colors">
                    {l.title}
                  </span>
                  <span className="text-loam md:text-right max-w-md font-body">{l.body}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/visit/book">Book a Table</Button>
          </div>
        </div>
      </section>
    </>
  );
}
