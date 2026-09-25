import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/seo/Analytics";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.harmanwines.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harman Wines | Wattle Bank · South Gippsland",
    template: "%s | Harman Wines",
  },
  description:
    "Family-owned winery, vineyard and cellar door at Wattle Bank, Bass Coast. Cool-climate wines, wood-fired food, and a place to meet, eat and drink.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Harman Wines",
    title: "Harman Wines | Wattle Bank · South Gippsland",
    description:
      "A family-run vineyard and cellar door in South Gippsland — wine, food, and gathering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harman Wines",
    description: "Meet · Eat · Drink at Wattle Bank, South Gippsland.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
