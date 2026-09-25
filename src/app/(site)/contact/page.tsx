import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteSettings } from "@/content/seed";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

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
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14">
          <div className="space-y-8">
            <div>
              <p className="label-ui text-loam mb-2">Address</p>
              <p>
                {address.line1} ({address.line2})
                <br />
                {address.suburb} {address.postcode}
                <br />
                {address.state}, {address.country}
              </p>
            </div>
            <div>
              <p className="label-ui text-loam mb-2">Phone</p>
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-lg no-underline hover:underline">
                {phone}
              </a>
            </div>
            <div>
              <p className="label-ui text-loam mb-2">Email</p>
              <a href={`mailto:${email}`} className="text-lg no-underline hover:underline">
                {email}
              </a>
            </div>
            <div>
              <p className="label-ui text-loam mb-2">Hours</p>
              <ul className="text-sm space-y-1">
                {hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.sessions.join("; ")}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`tel:${phone.replace(/\s/g, "")}`}>Call</Button>
              <Button href={maps} variant="secondary">
                Get directions
              </Button>
              <Button href="/visit/book" variant="secondary">
                Book a Table
              </Button>
            </div>
            <div className="aspect-[16/10] bg-mist border border-charcoal/10 overflow-hidden">
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
