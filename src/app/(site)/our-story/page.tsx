import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { familyTimeline, craftStages, sustainabilityPillars } from "@/content/seed";
import { getAwards } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "David and Nicole Harman — family vineyard, winemaking, sustainability and awards at Wattle Bank, South Gippsland.",
};

export default function OurStoryPage() {
  const awards = getAwards();

  return (
    <>
      <PageHero label="Our Story" title="Born from a bare patch of farmland" tone="paper">
        <p>
          What began in 2004 as a former horse stud became a lifelong dream — vines, orchard,
          kitchen garden, winery and cellar door, opened in November 2018.
        </p>
      </PageHero>

      <section className="py-20 md:py-28" id="family">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="label-ui text-loam mb-4">The Harmans</p>
            <h2 className="font-display text-4xl md:text-5xl text-dusk">Meet · Eat · Drink</h2>
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
          <ol className="space-y-8">
            {familyTimeline.map((t) => (
              <li key={t.year} className="border-t border-charcoal/10 pt-4">
                <p className="font-display text-4xl text-claret">{t.year}</p>
                <h3 className="mt-2 text-xl text-dusk">{t.title}</h3>
                <p className="mt-2 text-loam">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-dusk text-linen" id="vineyard">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="label-ui text-linen/50 mb-4">The vineyard</p>
          <h2 className="font-display text-4xl md:text-5xl">Cool climate, coastal air</h2>
          <div className="mt-6 space-y-4 text-linen/80 font-body">
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
      </section>

      <section className="py-20 md:py-28" id="winemaking">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam mb-4">Winemaking</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-dusk">
            Meet the winemaker — David Harman
          </h2>
          <p className="mt-6 max-w-2xl text-loam text-lg font-body">
            Originally trained in IT, David followed a calling rooted in Pinot Noir and long ties to
            the South Gippsland coast. All wines are handmade with minimal intervention: wild
            fermentations are common; fining and filtering rarely used.
          </p>
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

      <section className="py-20 md:py-28" id="awards">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam mb-4">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl text-dusk">Awards</h2>
          <ol className="mt-12 divide-y divide-dusk/10">
            {awards.map((a) => (
              <li key={a.id} className="py-5 grid sm:grid-cols-[5rem_1fr] gap-4 items-baseline">
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
