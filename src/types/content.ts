export type Wine = {
  id: string;
  slug: string;
  name: string;
  variety: string;
  vintage: string;
  description: string;
  tastingNotes?: string[];
  region: string;
  style: string;
  alcohol?: string;
  price: number;
  currency: "AUD";
  ecwidProductId?: string;
  /** Bottle photo — Ecwid CDN or local /images/harman/wines path */
  image?: string;
  foodPairings?: string[];
  servingSuggestion?: string;
  awards?: string[];
  availability: "in-stock" | "limited" | "sold-out";
  category: "current" | "previous";
  colour: "white" | "rose" | "red" | "sparkling";
};

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  time?: string;
  description: string;
  category: "live-music" | "seasonal" | "special";
  bookingUrl?: string;
};

export type Award = {
  id: string;
  year: string;
  title: string;
  organisation: string;
  category?: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  dietary?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export type Supplier = {
  id: string;
  name: string;
  location: string;
};

export type JournalPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Vineyard" | "Winemaking" | "Food" | "People" | "Events" | "Season" | "Region";
  publishedAt: string;
  body: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Space = {
  id: string;
  name: string;
  slug: "inside" | "pergola" | "picnic";
  mood: string[];
  capacity: string;
  description: string;
  petFriendly: boolean;
};

export type RegionPlace = {
  id: string;
  name: string;
  blurb: string;
  url?: string;
};

export type SiteSettings = {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
  };
  liquorLicence: string;
  hours: { day: string; sessions: string[] }[];
  social: { facebook: string; instagram: string };
  booking: {
    accountId: string;
    venueId: string;
    maxOnlineGuests: number;
    advanceDays: number;
  };
  shipping: {
    australiaOnly: boolean;
    capitals: string;
    mostLocations: string;
    local: string;
  };
  analyticsId: string;
};
