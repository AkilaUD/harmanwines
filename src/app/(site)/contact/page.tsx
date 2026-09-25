import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteSettings } from "@/content/seed";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Harman Wines — phone, email, address and opening hours at Wattle Bank.",
};

export default function ContactPage() {
  const { address, phone, email, hours } = siteSettings;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address.line1}, ${address.suburb} ${address.state} ${address.postcode}`,
  )}`;

  return (
    <>
      <PageHero label="Contact" title="Have an enquiry? Just ask." tone="linen">
        <p>We’re here Friday to Sunday — or anytime by phone and email.</p>
      </PageHero>

      {/* Live-style dusk help band with ship logo + portrait */}
      <section className="bg-dusk text-linen">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <BrandLogo tone="light" width={180} className="opacity-95" />
            <h2 className="font-display text-3xl md:text-4xl mt-8 leading-tight text-balance">
              How can we help you?
            </h2>
            <p className="mt-4 font-body text-linen/80 max-w-md leading-relaxed">
              Drop into the cellar door for wood-fired pizza and estate wine — or reach out anytime.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/visit/book" variant="on-dark">
                Book a Table
              </Button>
              <Button
                href={`tel:${phone.replace(/\s/g, "")}`}
                variant="secondary"
                className="border-linen/35 text-linen hover:border-linen"
              >
                Call us
              </Button>
            </div>
            <div className="mt-10 space-y-3 font-ui text-sm text-linen/80">
              <p>
                {address.line1}
                <br />
                {address.suburb} {address.state} {address.postcode}
              </p>
              <p>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="no-underline hover:underline">
                  {phone}
                </a>
                {" · "}
                <a href={`mailto:${email}`} className="no-underline hover:underline">
                  {email}
                </a>
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden grain max-w-md lg:max-w-none lg:ml-auto w-full">
            <Image
              src={media.familyStudio.src}
              alt={media.familyStudio.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
              style={{ objectPosition: media.familyStudio.focalPoint }}
            />
          </div>
        </div>
      </section>

      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14">
          <div className="space-y-8">
            <div>
              <p className="label-ui text-loam mb-2">Hours</p>
              <ul className="text-sm space-y-1 text-dusk">
                {hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.sessions.join("; ")}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={maps} variant="secondary">
                Get directions
              </Button>
            </div>
            <div className="aspect-[16/10] bg-mist border border-dusk/10 overflow-hidden">
              <iframe
                title="Map of Harman Wines"
                className="w-full h-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${address.line1}, ${address.suburb} VIC`,
                )}&z=13&output=embed`}
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
