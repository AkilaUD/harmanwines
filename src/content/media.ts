/**
 * Harman media model — every homepage image has one job.
 *
 * Audit (SECTION → ASSET → WHY):
 * Arrive  → heroVineyard        — property landscape hero
 * Place   → placeMapPath + placeAerial — intro map + scroll zoom
 * Land    → season* / farm* + mosaic tiles
 * Family  → familyPortrait
 * Craft   → craftGrapes / craftCellar / craftGlass
 * Wine    → Ecwid bottles via seed (not here)
 * Table   → eatFire + pizza + foodWine
 * Gather  → cellarInterior / pergolaView / picnicLawn (distinct)
 * Region  → regionMorning / placeAerial / gatherPergola / regionEvening
 * Return  → returnDusk (sunsetClose aliases same plate)
 * Awards  → recognitionTexture + seed awards
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
  placeMapPath: {
    id: "place-map-path",
    src: "/images/harman/generated/place-map-path.jpg",
    alt: "Path through the vineyard toward the cellar door",
    role: "place-intro",
    section: "place",
    aspect: "landscape",
    focalPoint: "50% 45%",
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
  seasonSummer: {
    id: "season-summer",
    src: "/images/harman/generated/season-summer.jpg",
    alt: "Summer light across the vineyard rows",
    role: "season-plate",
    section: "land",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  seasonAutumn: {
    id: "season-autumn",
    src: "/images/harman/generated/season-autumn.jpg",
    alt: "Autumn harvest colour in the vines",
    role: "season-plate",
    section: "land",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  seasonWinter: {
    id: "season-winter",
    src: "/images/harman/generated/season-winter.jpg",
    alt: "Winter pruning light over the vineyard",
    role: "season-plate",
    section: "land",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  seasonSpring: {
    id: "season-spring",
    src: "/images/harman/generated/season-spring.jpg",
    alt: "Spring growth beginning in the rows",
    role: "season-plate",
    section: "land",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  farmChickens: {
    id: "farm-chickens",
    src: "/images/harman/generated/farm-chickens.jpg",
    alt: "Free-roaming chickens on the farm",
    role: "farm-mosaic",
    section: "land",
    aspect: "square",
    focalPoint: "50% 45%",
  },
  farmBanjo: {
    id: "farm-banjo",
    src: "/images/harman/generated/farm-banjo.jpg",
    alt: "Banjo the farm dog",
    role: "farm-mosaic",
    section: "land",
    aspect: "square",
    focalPoint: "50% 40%",
  },
  farmAlpacas: {
    id: "farm-alpacas",
    src: "/images/harman/generated/farm-alpacas.jpg",
    alt: "Alpacas grazing at Harman Wines",
    role: "farm-mosaic",
    section: "land",
    aspect: "landscape",
    focalPoint: "50% 45%",
  },
  farmGardenHands: {
    id: "farm-garden-hands",
    src: "/images/harman/generated/farm-garden-hands.jpg",
    alt: "Hands in the kitchen garden",
    role: "farm-mosaic",
    section: "land",
    aspect: "portrait",
    focalPoint: "50% 40%",
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
    src: "/images/harman/O7I6337.jpg",
    alt: "David and Nicole Harman at the vineyard",
    role: "monograph",
    section: "family",
    aspect: "landscape",
    focalPoint: "48% 28%",
    focalPointMobile: "50% 22%",
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
  craftGlass: {
    id: "craft-glass",
    src: "/images/harman/generated/craft-glass.jpg",
    alt: "Wine in the glass at Harman Wines",
    role: "glass",
    section: "craft",
    aspect: "portrait",
    focalPoint: "50% 45%",
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
    role: "food-detail",
    section: "table",
    aspect: "portrait",
    focalPoint: "50% 40%",
    focalPointMobile: "50% 35%",
  },
  tableFoodWine: {
    id: "table-food-wine",
    src: "/images/harman/Food-and-Wine-1.png",
    alt: "Food and wine at the cellar door",
    role: "food-hero",
    section: "table",
    aspect: "landscape",
    focalPoint: "45% 48%",
    focalPointMobile: "40% 50%",
  },
  eatFire: {
    id: "eat-fire",
    src: "/images/harman/generated/eat-fire.jpg",
    alt: "Wood fire and pizza oven at the cellar door",
    role: "food-fire",
    section: "table",
    aspect: "landscape",
    focalPoint: "50% 45%",
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
    src: "/images/harman/Brown_D_Harman_Wines_0285-scaled.jpg",
    alt: "South Gippsland landscape near Bass Coast",
    role: "region-plate",
    section: "region",
    aspect: "landscape",
    focalPoint: "50% 40%",
  },
  regionMorning: {
    id: "region-morning",
    src: "/images/harman/generated/region-morning.jpg",
    alt: "Morning light on Bass Coast",
    role: "region-day",
    section: "region",
    aspect: "landscape",
    focalPoint: "50% 40%",
  },
  regionEvening: {
    id: "region-evening",
    src: "/images/harman/generated/region-evening.jpg",
    alt: "Evening light over South Gippsland",
    role: "region-day",
    section: "region",
    aspect: "landscape",
    focalPoint: "50% 42%",
  },
  recognitionTexture: {
    id: "recognition-texture",
    src: "/images/harman/generated/recognition-texture.jpg",
    alt: "Subtle paper texture",
    role: "texture",
    section: "recognition",
    aspect: "editorial",
    focalPoint: "50% 50%",
  },
  returnDusk: {
    id: "return-dusk",
    src: "/images/harman/generated/return-dusk.jpg",
    alt: "Dusk light over the vineyard at Harman Wines",
    role: "closing-heroic",
    section: "return",
    aspect: "cinematic",
    focalPoint: "50% 42%",
    focalPointMobile: "48% 55%",
  },
  sunsetClose: {
    id: "sunset-close",
    src: "/images/harman/generated/return-dusk.jpg",
    alt: "Dusk light over the vineyard at Harman Wines",
    role: "closing-heroic",
    section: "return",
    aspect: "cinematic",
    focalPoint: "50% 42%",
    focalPointMobile: "48% 55%",
  },
  logoWhite: {
    id: "logo-white",
    src: "/images/harman/Harman-Wines-white-01-e1547431145664.png",
    alt: "Harman Wines",
    role: "logo",
    section: "brand",
    aspect: "editorial",
    focalPoint: "50% 50%",
  },
  logoDark: {
    id: "logo-dark",
    src: "/images/harman/Harman-Wines-e1547431536572.jpg",
    alt: "Harman Wines",
    role: "logo",
    section: "brand",
    aspect: "editorial",
    focalPoint: "50% 50%",
  },
  awardsNight: {
    id: "awards-night",
    src: "/images/harman/BCS_B_AWARDS_HARMANS-WINES_009-1_2718f0c5fd9b09205b0f772d8c614acd.jpg",
    alt: "Harman Wines at the Bass Coast awards",
    role: "awards",
    section: "recognition",
    aspect: "landscape",
    focalPoint: "50% 40%",
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

/** @deprecated Prefer `media` — thin aliases for older call sites */
export const images = {
  logoWhite: media.logoWhite.src,
  logoDark: media.logoDark.src,
  aerialDay: media.heroVineyard.src,
  aerialGolden: media.placeAerial.src,
  vineyardPortrait: media.landPortrait.src,
  cellarMoment: media.craftCellar.src,
  vinesClose: media.landVines.src,
  grapes: media.mosaicDetail.src,
  winePaddles: media.winePaddles.src,
  foodWine: media.tableFoodWine.src,
  gathering: media.gatherPergola.src,
  picnicOrGarden: media.gatherPicnic.src,
  awardsNight: media.awardsNight.src,
  portrait: media.familyPortrait.src,
  awardVta2025: "/images/harman/cropped-vta2025-gold-winner-reversed.jpg",
  awardAta2025: "/images/harman/cropped-QTA-2025-Silver.-Tourism-Wineries-1_small.jpeg",
  awardGba2023: "/images/harman/cropped-cropped-cropped-GBA-2023-Award.png",
  wines: {
    blancDeBlanc18: "/images/harman/wines/blanc-de-blanc-18.jpg",
    rose2024: "/images/harman/wines/rose-2024.jpg",
    pinotNoir2023: "/images/harman/wines/612-estate-pinot-noir-2023.jpg",
    sauvBlanc2024: "/images/harman/wines/sauvignon-blanc-2024.jpg",
    syrah2022: "/images/harman/wines/gippsland-syrah-2022.jpg",
  },
} as const;
