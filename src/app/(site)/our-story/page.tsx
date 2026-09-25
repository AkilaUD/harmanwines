import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, EditorialHeading } from "@/components/ui/Reveal";
import { FamilyFolio } from "@/components/ui/FamilyFolio";
import {
  accreditationBadges,
  craftStages,
  philosophyPillars,
  sustainabilityPillars,
} from "@/content/seed";
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
        label="About"
        title="The Harmans"
        media={media.aboutVineyard}
      >
        <p>
          A family-owned vineyard, winery and cellar door at Wattle Bank — Meet, Eat &amp; Drink.
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
                We’re David and Nicole Harman, the founders and proud owners of Harman Wines.
                Together with our two children, Jenna and James, our dog Banjo, a few sheep,
                alpacas, and some free-roaming chickens, we’ve created something truly special
                here.
              </p>
              <p>
                Our journey began in 2004 when we purchased a 10-acre former horse stud. Armed with
                big dreams and determination, we gradually transformed the land — planting
                vineyards, establishing orchards and a kitchen garden, and building our winery,
                cellar door, and restaurant.
              </p>
              <p>
                Harman Wines officially opened in November 2018. Since then, our family-owned and
                operated vineyard and winery in Wattle Bank has become a beloved destination for
                visitors from across the country.
              </p>
              <p>
                Now known as one of the region’s premier wine tourism experiences, we take pride in
                sharing what we’ve built with every guest who walks through our doors.
              </p>
              <p>
                Our motto, “Meet, Eat &amp; Drink,” says it all: Meet — connect with family and
                friends. Eat — savour our full menu of tapas and woodfired pizzas, made with fresh,
                local ingredients. Drink — enjoy our cool-climate wines alongside a selection of
                local beverages, alcoholic and non-alcoholic. All of this comes together in a
                relaxed, welcoming setting with sweeping views of the peaceful landscape we call
                home.
              </p>
            </div>
          </div>
          <div className="relative space-y-3">
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
            <ul className="grid grid-cols-2 gap-3">
              <li className="relative aspect-[4/3] overflow-hidden grain">
                <Image
                  src={media.familyTogether.src}
                  alt={media.familyTogether.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: media.familyTogether.focalPoint }}
                />
              </li>
              <li className="relative aspect-[4/3] overflow-hidden grain">
                <Image
                  src={media.farmChickens.src}
                  alt={media.farmChickens.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 22vw"
                  className="object-cover"
                  style={{ objectPosition: media.farmChickens.focalPoint }}
                />
              </li>
            </ul>
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
              src={media.aboutVineyard.src}
              alt={media.aboutVineyard.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: media.aboutVineyard.focalPoint }}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="label-ui text-linen/50 mb-4">Our vineyards</p>
            <h2 className="font-display text-4xl md:text-5xl">Our Vineyards</h2>
            <div className="mt-6 space-y-4 text-linen/80 font-body max-w-xl">
              <p>
                Nestled on a 20-acre farm just 7 kilometres inland from the Bass Strait coastline,
                our vineyard is located in the picturesque rural setting of Wattle Bank, near
                Inverloch, in Victoria’s beautiful Bass Coast region.
              </p>
              <p>
                This unique location benefits from a cool, maritime-influenced climate. In the
                warmer months, gentle sea breezes moderate temperatures across the vineyard,
                allowing for a slow and consistent ripening process — ideal for developing complex,
                balanced flavours in our fruit.
              </p>
              <p>
                Our first vines were planted in 2008, and we’ve continued expanding ever since. The
                vineyard is established on rich loam soils over clay, and we manage the land with a
                sustainable approach that blends traditional farming practices with soil health
                being the central theme.
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
                Meet the Winemaker – David Harman
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-loam text-lg font-body">
                <p>
                  Owner and winemaker David Harman leads the winemaking at Harman Wines with
                  passion, precision, and a deep respect for place. Originally trained in the IT
                  industry, David eventually followed a calling he could no longer ignore — one
                  rooted in his love for Pinot Noir and long-standing ties to the South Gippsland
                  coast. The decision to plant vines and craft wines in this cool,
                  maritime-influenced region came naturally.
                </p>
                <p>
                  Over many vintages, and with the establishment of the vineyard, winery, and
                  cellar door, David’s winemaking style has matured through hands-on experimentation
                  and a return to time-honoured, old-world techniques — many of which are often
                  overlooked in today’s fast-paced industry.
                </p>
                <p>
                  David focuses on producing premium, cool-climate wines that are expressive of
                  their origin and vintage. All wines are handmade with minimal intervention: wild
                  fermentations are common, while fining and filtering are rarely used. The result
                  is a range of wines that speak authentically of the land they’re grown on and the
                  season in which they were born.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/4] max-h-[36rem] overflow-hidden grain lg:justify-self-end w-full">
              <Image
                src={media.craftCellar.src}
                alt={media.craftCellar.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: media.craftCellar.focalPoint }}
              />
            </div>
          </div>
          <ol className="mt-14 grid sm:grid-cols-3 gap-6">
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
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl text-dusk">Sustainability</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-loam font-body">
            <p>
              Sustainability isn’t a separate strategy at Harman Wines — it’s part of how we run
              our vineyard, winery, cellar door and kitchen every day.
            </p>
            <p>
              As a family-owned business deeply connected to Gippsland, we are always looking for
              practical ways to reduce our environmental impact, care for our land and make our
              farm more sustainable and regenerative for the future.
            </p>
            <p>
              Our winery operates using solar power and battery storage, powering everything from
              refrigeration and air conditioning to our bottling line. Rainwater from our roofs is
              captured and stored in tanks for use throughout the cellar door and winery. Our
              environmentally friendly worm farm septic system naturally treats wastewater and
              biodegradable waste from across the property. The resulting nutrients are returned to
              our gardens, lawns and vineyard.
            </p>
            <p>
              Our expanded kitchen garden is an important part of our paddock-to-plate philosophy,
              producing seasonal fruit, vegetables and herbs used by our chefs in our pizzas,
              tapas, relishes and sauces. Produce is sourced from our own property or where
              possible, within 30km of Harman Wines. Visitors are welcome to wander through the
              garden, see what’s growing and experience another part of the connection between our
              farm and their plate.
            </p>
            <p>
              Our chickens happily help with vineyard maintenance and enjoy kitchen scraps while
              providing natural manure for our kitchen garden and vines. We continue to reduce
              chemical inputs and use practices such as flame weeding to help care for our soils
              and surrounding environment. We are proud to see our soils becoming healthier and
              native wildlife continuing to thrive across the property — including the occasional
              resident koala.
            </p>
            <p>
              Our commitment to responsible tourism has been recognised through Sustainable Tourism
              Accreditation and EcoStar Accreditation, and we have completed the Tourism Emissions
              Reduction Commitment (TERC) Program. We are also proud past winners of the Bass Coast
              Business Awards for Environment and Sustainability — recognition that continues to
              inspire us to find new ways to do better.
            </p>
            <p>
              For us, sustainability is about continuous improvement: looking after our land,
              supporting our local community and ensuring Harman Wines remains a special place for
              generations to come.
            </p>
          </div>

          <ul className="mt-14 flex flex-wrap items-center gap-8 md:gap-12">
            {accreditationBadges.map((b) => (
              <li key={b.id} className="relative h-16 w-28 md:h-20 md:w-36">
                <Image src={b.src} alt={b.alt} fill sizes="144px" className="object-contain" />
              </li>
            ))}
          </ul>

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

      <section className="py-20 md:py-28 bg-linen" id="philosophy">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="label-ui text-loam mb-4">Passions &amp; philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-dusk">
              Our Passions &amp; Philosophy
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] overflow-hidden grain">
              <Image
                src={media.familyTogether.src}
                alt={media.familyTogether.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: media.familyTogether.focalPoint }}
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden grain">
              <Image
                src={media.farmChickens.src}
                alt={media.farmChickens.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: media.farmChickens.focalPoint }}
              />
            </div>
          </div>

          <ul className="mt-14 grid md:grid-cols-3 gap-10 md:gap-12">
            {philosophyPillars.map((p, i) => (
              <li key={p.id} className="border-t border-dusk/10 pt-5">
                <Reveal delay={0.05 * i}>
                  <h3 className="font-display text-2xl text-dusk uppercase tracking-wide">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-loam font-body">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/visit/cellar-door">Our Cellar Door</Button>
            <Button href="/wine" variant="secondary">
              Our Wines
            </Button>
            <Button href="/visit/menu" variant="secondary">
              Our Menu
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper" id="awards">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="label-ui text-loam mb-4">Awards &amp; achievements</p>
          <h2 className="font-display text-4xl md:text-5xl text-dusk">
            We are super proud of our achievements &amp; awards
          </h2>

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
            <Button href="/contact">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
