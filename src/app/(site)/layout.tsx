import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileBookBar } from "@/components/layout/MobileBookBar";
import { siteSettings } from "@/content/seed";
import { JsonLd } from "@/components/seo/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.harmanwines.com.au";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-linen text-dusk pb-20 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-linen focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": ["Winery", "Restaurant", "LocalBusiness"],
          name: siteSettings.name,
          telephone: siteSettings.phone,
          email: siteSettings.email,
          url: siteUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteSettings.address.line1,
            addressLocality: siteSettings.address.suburb,
            addressRegion: siteSettings.address.state,
            postalCode: siteSettings.address.postcode,
            addressCountry: "AU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -38.55,
            longitude: 145.68,
          },
          sameAs: [siteSettings.social.facebook, siteSettings.social.instagram],
        }}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <MobileBookBar />
    </div>
  );
}
