import Link from "next/link";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { getAwards } from "@/lib/content";
import { media } from "@/content/media";

/** Quiet recognition — verified awards from seed only. No logo wall. */
export function ChapterRecognition() {
  const awards = getAwards().slice(0, 6);

  return (
    <section
      id="recognition"
      className="relative chapter-ground bg-linen py-20 md:py-28 overflow-hidden"
      aria-labelledby="recognition-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
      >
        <MediaImage asset={media.recognitionTexture} sizes="100vw" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="label-ui text-loam">Recognition</p>
          <EditorialHeading id="recognition-heading">Quietly noted</EditorialHeading>
        </Reveal>

        <ul className="mt-12 space-y-0 border-t border-dusk/15">
          {awards.map((a) => (
            <li
              key={a.id}
              className="grid sm:grid-cols-[5rem_1fr] gap-4 sm:gap-10 py-5 border-b border-dusk/10"
            >
              <p className="font-display text-2xl text-claret">{a.year}</p>
              <div>
                <p className="label-ui text-loam">{a.title}</p>
                <p className="mt-1 text-lg font-display text-dusk">
                  {a.organisation}
                  {a.category ? `, ${a.category}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link href="/our-story#awards" className="link-quiet link-claret label-ui">
            Full list
          </Link>
        </p>
      </div>
    </section>
  );
}
