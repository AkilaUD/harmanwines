import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { FamilyFolio } from "@/components/ui/FamilyFolio";
import { craftStages, sustainabilityPillars } from "@/content/seed";
import { getAwards } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "David and Nicole Harman — family vineyard, winemaking, sustainability and awards at Wattle Bank, South Gippsland.",
};

export default function OurStoryPage() {
  const awards = getAwards();
  const badged = awards.filter((a) => a.badge);

  return (
    <>
      <PageHero
        label="Our Story"
        title="Born from a bare patch of farmland"
        media={media.landVines}
      >
        <p>
          What began in 2004 as a former horse stud became a lifelong dream — vines, orchard,
          kitchen garden, winery and cellar door, opened in November 2018.
        </p>
      </PageHero>

      <section
        className="py-20 md:py-28 bg-[color-mix(in_oklab,var(--linen)_88%,var(--garden)_12%)]"
        id="family"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="label-ui text-garden mb-4">The Harmans</p>
            <EditorialHeading className="text-dusk">Meet · Eat · Drink</EditorialHeading>
            <div className="prose-harman mt-6 text-loam max-w-xl">
              <p>
                We’re David and Nicole Harman, founders and owners of Harman Wines. Together with
                our two children, Jenna and James, our dog Banjo, sheep, alpacas and free-roaming
                chickens, we’ve created something special here.
              </p>
              <p>
                Meet — connect with family and friends. Eat — wood-fired pizzas and tapas from fresh
                local ingredients. Drink — cool-climate wines and local beverages, in a relaxed
                setting with sweeping views.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden grain">
              <Image
                src={media.familyStudio.src}
                alt={media.familyStudio.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: media.familyStudio.focalPoint }}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8 mt-20 md:mt-28">
          <FamilyFolio />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-dusk text-linen" id="vineyard">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden grain order-2 lg:order-1">
            <Image
              src={media.landVines.src}
              alt={media.landVines.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: media.landVines.focalPoint }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="label-ui text-linen/50 mb-4">The vineyard</p>
            <h2 className="font-display text-4xl md:text-5xl">Cool climate, coastal air</h2>
            <div className="mt-6 space-y-4 text-linen/80 font-body max-w-xl">
              <p>
                Nestled on a 20-acre farm just 7 kilometres inland from Bass Strait, our vineyard
                benefits from a cool, maritime-influenced climate. In warmer months, gentle sea
                breezes moderate temperatures — ideal for slow, consistent ripening.
              </p>
              <p>
                First vines planted in 2008 on rich loam soils over clay. We manage the land with a
                sustainable approach that keeps soil health at the centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-linen" id="winemaking">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="label-ui text-loam mb-4">Winemaking</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-dusk">
                Meet the winemaker — David Harman
              </h2>
              <p className="mt-6 max-w-2xl text-loam text-lg font-body">
                Originally trained in IT, David followed a calling rooted in Pinot Noir and long
                ties to the South Gippsland coast. All wines are handmade with minimal intervention:
                wild fermentations are common; fining and filtering rarely used.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden grain">
              <Image
                src={media.craftCellar.src}
                alt={media.craftCellar.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: media.craftCellar.focalPoint }}
              />
            </div>
          </div>
          <ol className="mt-14 grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {craftStages.map((s) => (
              <li key={s.id} className="border-t border-dusk/10 pt-4">
                <p className="label-ui text-claret">{s.label}</p>
                <p className="mt-2 text-sm text-loam">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper" id="sustainability">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam mb-4">Sustainability</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-dusk">
            Not a slogan — how the farm runs
          </h2>
          <p className="mt-5 max-w-2xl text-loam font-body">
            Solar and battery storage, rainwater tanks, worm-farm septic returning nutrients to
            gardens and vines, kitchen garden paddock-to-plate, flame weeding, Sustainable Tourism
            and EcoStar accreditation, and the Tourism Emissions Reduction Commitment program.
          </p>
          <ul className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityPillars.map((p) => (
              <li key={p.id}>
                <h3 className="font-display text-2xl text-dusk">{p.title}</h3>
                <p className="mt-2 text-loam text-sm">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-linen" id="awards">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam mb-4">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl text-dusk">Awards</h2>

          {badged.length > 0 && (
            <ul className="mt-12 flex flex-wrap gap-8 md:gap-10">
              {badged.map((a) => (
                <li key={`badge-${a.id}`} className="w-[6.5rem] md:w-28 text-center">
                  <div className="relative mx-auto aspect-square w-full">
                    <Image
                      src={a.badge!}
                      alt={`${a.title} — ${a.organisation}`}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 font-display text-lg text-claret">{a.year}</p>
                  <p className="mt-1 label-ui text-loam leading-snug">{a.title}</p>
                </li>
              ))}
            </ul>
          )}

          <ol className="mt-14 divide-y divide-dusk/10">
            {awards.map((a) => (
              <li
                key={a.id}
                className="py-5 grid sm:grid-cols-[5rem_1fr] gap-4 items-baseline"
              >
                <span className="font-display text-2xl text-claret">{a.year}</span>
                <div>
                  <p className="font-medium text-dusk">
                    {a.title}
                    {a.category ? ` — ${a.category}` : ""}
                  </p>
                  <p className="text-sm text-loam mt-1">{a.organisation}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button href="/visit/book">Book a Table</Button>
          </div>
        </div>
      </section>
    </>
  );
}
