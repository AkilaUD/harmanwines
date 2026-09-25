import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";

const day = [
  { when: "Morning", what: "Coast — Inverloch & Bunurong" },
  { when: "Afternoon", what: "Harman Wines — lunch among the vines" },
  { when: "Sunset", what: "A glass on the pergola" },
  { when: "Evening", what: "Local stay in Bass Coast" },
];

export function ChapterRegion() {
  return (
    <section
      id="region"
      className="chapter-ground bg-[linear-gradient(180deg,#e8e0d0_0%,#c4b48a_100%)] py-24 md:py-32"
      aria-labelledby="region-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>While you’re here</SectionLabel>
          <EditorialHeading id="region-heading">Bass Coast, in one day</EditorialHeading>
          <p className="mt-5 max-w-xl text-charcoal/75 text-lg">
            Wilsons Promontory, coastal drives, glamping, day spas — Harman sits inside a wider
            Gippsland journey.
          </p>
        </Reveal>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {day.map((item, i) => (
            <Reveal key={item.when} delay={i * 0.06}>
              <li className="border-t border-charcoal/20 pt-4">
                <p className="label-micro">{item.when}</p>
                <p className="font-display text-2xl mt-3">{item.what}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <p className="mt-12">
          <Link href="/visit/region" className="label-micro no-underline hover:underline">
            Explore the region →
          </Link>
        </p>
      </div>
    </section>
  );
}
