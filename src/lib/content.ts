import {
  awards,
  events,
  faqs,
  journalPosts,
  menuCategories,
  regionPlaces,
  siteSettings,
  spaces,
  suppliers,
  wines,
} from "@/content/seed";
import type { Wine } from "@/types/content";

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
