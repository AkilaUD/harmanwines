import {
  awards,
  events,
  faqs,
  featuredHomepageAwardIds,
  homepageAwardIds,
  journalPosts,
  menuCategories,
  regionPlaces,
  siteSettings,
  spaces,
  suppliers,
  wines,
} from "@/content/seed";
import type { Award, Wine } from "@/types/content";

/** Content accessors — swap to Sanity fetchers when NEXT_PUBLIC_SANITY_PROJECT_ID is set. */
export function getSiteSettings() {
  return siteSettings;
}

export function getWines() {
  return wines;
}

export function getWineBySlug(slug: string): Wine | undefined {
  return wines.find((w) => w.slug === slug);
}

export function getSpaces() {
  return spaces;
}

export function getAwards() {
  return awards;
}

function resolveAwardsByIds(ids: readonly string[]): Award[] {
  return ids
    .map((id) => awards.find((a) => a.id === id))
    .filter((a): a is Award => Boolean(a));
}

/** Homepage three-medal showcase, ordered ATA → VTA Gold → GBA */
export function getFeaturedHomepageAwards() {
  return resolveAwardsByIds(featuredHomepageAwardIds).filter((a) => Boolean(a.badge));
}

/** Homepage laurels: featured pedestals + remaining live awards for cascade */
export function getHomepageAwards(): { featured: Award[]; rest: Award[] } {
  const featured = getFeaturedHomepageAwards();
  const featuredIds = new Set(featured.map((a) => a.id));
  const rest = resolveAwardsByIds(homepageAwardIds).filter((a) => !featuredIds.has(a.id));
  return { featured, rest };
}

export function getEvents() {
  return events;
}

export function getSuppliers() {
  return suppliers;
}

export function getMenuCategories() {
  return menuCategories;
}

export function getJournalPosts() {
  return journalPosts;
}

export function getJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}

export function getFaqs() {
  return faqs;
}

export function getRegionPlaces() {
  return regionPlaces;
}
