/**
 * Harman media model — every homepage image has one job.
 *
 * Audit (SECTION → ASSET → WHY):
 * Arrive  → aerialDay         — property landscape hero
 * Place   → aerialGolden      — scroll zoom into estate
 * Land    → vinesClose / vineyardPortrait + mosaic tiles
 * Family  → portrait (+ portraitAlt)
 * Craft   → grapes / cellarMoment
 * Wine    → Ecwid bottles via seed (not here)
 * Table   → pizza + foodWine
 * Gather  → cellarInterior / pergolaView / picnicLawn (distinct)
 * Region  → coastCue (optional plate)
 * Return  → sunsetClose
 * Awards  → seed awards only (badges optional)
 */

export type FocalPoint = `${number}% ${number}%`;

export type MediaAspect =
  | "cinematic"
  | "landscape"
  | "portrait"
  | "square"
  | "editorial";

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  role: string;
  section: string;
  aspect: MediaAspect;
  /** Desktop object-position */
  focalPoint: FocalPoint;
  /** Mobile object-position (portrait crop) */
  focalPointMobile?: FocalPoint;
};

export const media = {
  heroVineyard: {
    id: "hero-vineyard",
    src: "/images/harman/dji_fly_20240124_153604_0002_1706413557790_photo-1-scaled.jpg",
    alt: "Aerial view of Harman Wines vineyard and cellar door at Wattle Bank",
    role: "hero",
    section: "arrive",
    aspect: "cinematic",
    focalPoint: "50% 42%",
    focalPointMobile: "48% 55%",
  },
  placeAerial: {
    id: "place-aerial",
    src: "/images/harman/dji_fly_20240124_180554_0009_1706413548051_photo-1-scaled.jpg",
    alt: "Golden-hour aerial over South Gippsland farmland toward Harman Wines",
    role: "scroll-zoom",
    section: "place",
    aspect: "cinematic",
    focalPoint: "52% 38%",
    focalPointMobile: "45% 50%",
  },
  landVines: {
    id: "land-vines",
    src: "/images/harman/Brown_D_Harman_Wines_0025-2-2-scaled.jpg",
    alt: "Close rows of vines at Harman Wines",
    role: "winter-plate",
    section: "land",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  landPortrait: {
    id: "land-portrait",
    src: "/images/harman/Brown_D_Harman_Wines_0285-scaled.jpg",
    alt: "Vineyard and property in soft coastal light",
    role: "spring-plate",
    section: "land",
    aspect: "portrait",
    focalPoint: "45% 40%",
  },
  mosaicVines: {
    id: "mosaic-vines",
    src: "/images/harman/cropped-vines-1.jpg",
    alt: "Vine canopy detail",
    role: "farm-mosaic",
    section: "land",
    aspect: "square",
    focalPoint: "50% 50%",
  },
  mosaicGarden: {
    id: "mosaic-garden",
    src: "/images/harman/IMG_1732-1-scaled.jpg",
    alt: "Garden and picnic ground at Harman Wines",
    role: "farm-mosaic",
    section: "land",
    aspect: "portrait",
    focalPoint: "50% 40%",
  },
  mosaicDetail: {
    id: "mosaic-detail",
    src: "/images/harman/grapes.jpg",
    alt: "Estate grapes",
    role: "farm-mosaic",
    section: "land",
    aspect: "square",
    focalPoint: "50% 50%",
  },
  familyPortrait: {
    id: "family-portrait",
    src: "/images/harman/O7I6321-2_16fb36fc16fa1db0bcd69160f2fffe80.jpg",
    alt: "David and Nicole Harman at the vineyard",
    role: "monograph",
    section: "family",
    aspect: "portrait",
    focalPoint: "50% 28%",
    focalPointMobile: "50% 25%",
  },
  craftGrapes: {
    id: "craft-grapes",
    src: "/images/harman/grapes-2.jpg",
    alt: "Hand-harvested grapes",
    role: "vine",
    section: "craft",
    aspect: "portrait",
    focalPoint: "50% 45%",
  },
  craftCellar: {
    id: "craft-cellar",
    src: "/images/harman/Brown_D_Harman_Wines_0364-1-scaled.jpg",
    alt: "Inside the winery cellar",
    role: "cellar",
    section: "craft",
    aspect: "portrait",
    focalPoint: "48% 40%",
  },
  winePaddles: {
    id: "wine-paddles",
    src: "/images/harman/9-Image-Wine-Paddles-scaled.jpeg",
    alt: "Wine tasting paddles at Harman Wines",
    role: "wine-intro",
    section: "wine",
    aspect: "editorial",
    focalPoint: "50% 50%",
  },
  tablePizza: {
    id: "table-pizza",
    src: "/images/harman/HW-pizza-june_2026-scaled.jpg",
    alt: "Wood-fired pizza at Harman Wines",
    role: "food-hero",
    section: "table",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  tableFoodWine: {
    id: "table-food-wine",
    src: "/images/harman/Food-and-Wine-1.png",
    alt: "Food and wine at the cellar door",
    role: "food-secondary",
    section: "table",
    aspect: "editorial",
    focalPoint: "40% 50%",
  },
  gatherInside: {
    id: "gather-inside",
    src: "/images/harman/cropped-Brown_D_Harman_Wines_0364-1-scaled-2.jpg",
    alt: "Inside the cellar door by the fire",
    role: "environment",
    section: "gather",
    aspect: "portrait",
    focalPoint: "50% 35%",
  },
  gatherPergola: {
    id: "gather-pergola",
    src: "/images/harman/IMG_4700-scaled.jpg",
    alt: "Gathering under the pergola with vineyard views",
    role: "environment",
    section: "gather",
    aspect: "portrait",
    focalPoint: "50% 55%",
  },
  gatherPicnic: {
    id: "gather-picnic",
    src: "/images/harman/IMG_1732-1-scaled.jpg",
    alt: "Picnic tables beside the garden",
    role: "environment",
    section: "gather",
    aspect: "portrait",
    focalPoint: "50% 45%",
  },
  regionCoast: {
    id: "region-coast",
    src: "/images/harman/DJI_0007.jpg",
    alt: "South Gippsland landscape near Bass Coast",
    role: "region-plate",
    section: "region",
    aspect: "landscape",
    focalPoint: "50% 40%",
  },
  sunsetClose: {
    id: "sunset-close",
    src: "/images/harman/cropped-sunset-1-e1547421800738-1.jpg",
    alt: "Soft light over the Harman Wines property",
    role: "closing-heroic",
    section: "return",
    aspect: "cinematic",
    focalPoint: "50% 45%",
    focalPointMobile: "50% 50%",
  },
  sustainabilitySolar: {
    id: "sustainability-solar",
    src: "/images/harman/solar-power.jpg",
    alt: "Solar power at Harman Wines",
    role: "sustainability",
    section: "craft",
    aspect: "landscape",
    focalPoint: "50% 40%",
  },
  eventsMusic: {
    id: "events-music",
    src: "/images/harman/Music2-scaled.jpeg",
    alt: "Live music at Harman Wines",
    role: "gathering",
    section: "region",
    aspect: "landscape",
    focalPoint: "50% 40%",
  },
} as const satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof media;

export function focalClass(asset: MediaAsset, mobile = false): string {
  const fp = mobile && asset.focalPointMobile ? asset.focalPointMobile : asset.focalPoint;
  return fp;
}
