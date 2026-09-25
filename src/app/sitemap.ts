import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.harmanwines.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/our-story",
    "/wine",
    "/shop",
    "/visit",
    "/visit/book",
    "/visit/cellar-door",
    "/visit/menu",
    "/visit/events",
    "/visit/region",
    "/functions",
    "/gift",
    "/journal",
    "/contact",
    "/faq",
    "/accessibility",
    "/careers",
    "/legal/privacy",
    "/legal/terms",
    "/legal/alcohol",
    "/legal/cookies",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
