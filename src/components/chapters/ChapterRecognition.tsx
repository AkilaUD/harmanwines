import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { getAwards } from "@/lib/content";

/** Quiet recognition — verified awards from seed only. No logo wall. */
export function ChapterRecognition() {
  const awards = getAwards().slice(0, 6);

  return (
    <section
      id="recognition"
      className="chapter-ground bg-cream py-20 md:py-28"
      aria-labelledby="recognition-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Recognition</SectionLabel>
          <EditorialHeading id="recognition-heading">Quietly noted</EditorialHeading>
        </Reveal>

        <ul className="mt-12 space-y-0 border-t border-charcoal/15">
          {awards.map((a) => (
            <li
              key={a.id}
              className="grid sm:grid-cols-[5rem_1fr] gap-4 sm:gap-10 py-5 border-b border-charcoal/10"
            >
              <p className="font-display text-2xl text-wine">{a.year}</p>
              <div>
                <p className="label-micro text-stone">{a.title}</p>
                <p className="mt-1 text-lg">
                  {a.organisation}
                  {a.category ? ` · ${a.category}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href="/our-story#awards" className="label-micro text-wine no-underline hover:underline">
            Full list →
          </Link>
        </p>
      </div>
    </section>
  );
}
