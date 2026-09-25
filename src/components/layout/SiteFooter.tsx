import Link from "next/link";
import { siteSettings } from "@/content/seed";

const footerNav = [
  {
    title: "Visit",
    links: [
      { href: "/visit/book", label: "Book a Table" },
      { href: "/visit/menu", label: "Menu" },
      { href: "/visit/cellar-door", label: "Cellar Door" },
      { href: "/visit/events", label: "Events" },
      { href: "/visit/region", label: "The Region" },
    ],
  },
  {
    title: "Wine",
    links: [
      { href: "/wine", label: "Collection" },
      { href: "/shop", label: "Shop" },
      { href: "/gift", label: "Gift Vouchers" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/our-story", label: "Our Story" },
      { href: "/functions", label: "Functions" },
      { href: "/journal", label: "Journal" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Info",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/alcohol", label: "Alcohol notice" },
    ],
  },
];

export function SiteFooter() {
  const { address, phone, email, liquorLicence, hours, social } = siteSettings;

  return (
    <footer className="bg-forest text-cream mt-auto">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-3xl md:text-4xl">Harman Wines</p>
            <p className="label-micro mt-3 text-cream/60">
              Wattle Bank · Bass Coast · South Gippsland
            </p>
            <p className="mt-6 max-w-sm text-cream/80 text-sm leading-relaxed">
              A family-owned vineyard, winery and cellar door where friends gather
              to meet, eat and drink.
            </p>
            <div className="mt-8 space-y-2 text-sm text-cream/85">
              <p>
                {address.line1}
                <br />
                {address.suburb} {address.state} {address.postcode}
              </p>
              <p>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="no-underline hover:underline">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="no-underline hover:underline">
                  {email}
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <a href={social.facebook} className="no-underline hover:underline" rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
              <a href={social.instagram} className="no-underline hover:underline" rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="label-micro text-cream/50 mb-4">{col.title}</p>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="no-underline text-cream/85 hover:text-cream">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/15 grid gap-6 md:grid-cols-2 text-xs text-cream/55 leading-relaxed">
          <div>
            <p className="label-micro text-cream/40 mb-3">Opening hours</p>
            <ul className="space-y-1">
              {hours.map((h) => (
                <li key={h.day}>
                  <span className="text-cream/75">{h.day}</span> — {h.sessions.join("; ")}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              WARNING: Under the Liquor Control Reform Act 1998 it is an offence to
              supply alcohol to a person under the age of 18 years (Penalty exceeds
              $8,000); for a person under the age of 18 years to purchase or receive
              liquor (Penalty exceeds $700).
            </p>
            <p className="mt-2">Liquor Licence No. {liquorLicence}</p>
            <p className="mt-4">© {new Date().getFullYear()} Harman Wines</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
