import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionLabel, EditorialHeading } from "@/components/ui/Reveal";
import { familyTimeline } from "@/content/seed";
import { images } from "@/content/images";

/** Beat 3 — wine-monograph portrait page + print folio timeline. */
export function ChapterFamily() {
  return (
    <section
      id="family"
      className="chapter-ground bg-paper py-24 md:py-32"
      aria-labelledby="family-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start mb-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5">
              <Image
                src={images.portrait}
                alt="David and Nicole Harman at the vineyard"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 label-micro text-stone">David &amp; Nicole · Wattle Bank</p>
          </Reveal>

          <Reveal delay={0.08} className="lg:pt-8">
            <SectionLabel>Meet</SectionLabel>
            <EditorialHeading id="family-heading">
              David, Nicole, and the land they kept
            </EditorialHeading>
            <p className="mt-5 max-w-xl text-lg text-stone leading-relaxed">
              Together with children Jenna and James, dog Banjo, sheep, alpacas and free-roaming
              chickens — a family who turned a former horse stud into a vineyard home.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-charcoal/15 pt-12">
          <p className="label-micro mb-10">A short folio</p>
          <ol className="space-y-0">
            {familyTimeline.map((item) => (
              <li
                key={item.year}
                className="grid sm:grid-cols-[6rem_1fr] gap-4 sm:gap-10 py-6 border-b border-charcoal/10"
              >
                <Reveal>
                  <p className="font-display text-3xl text-burgundy">{item.year}</p>
                </Reveal>
                <Reveal delay={0.04}>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-2 text-stone max-w-xl leading-relaxed">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12">
          <Link href="/our-story" className="label-micro text-burgundy no-underline hover:underline">
            Read the full story →
          </Link>
        </p>
      </div>
    </section>
  );
}
