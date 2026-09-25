/**
 * Content flags for client review — see CLIENT_FLAGS.md
 * (stale events, DATA REQUIRED gaps, hours, mailto-only forms).
 */
import type {
  Award,
  EventItem,
  FaqItem,
  JournalPost,
  MenuCategory,
  RegionPlace,
  SiteSettings,
  Space,
  Supplier,
  Wine,
} from "@/types/content";

export const siteSettings: SiteSettings = {
  name: "Harman Wines",
  tagline: "Meet · Eat · Drink",
  phone: "(03) 5611 3857",
  email: "info@harmanwines.com.au",
  address: {
    line1: "612 Korumburra-Inverloch Road",
    line2: "C441",
    suburb: "Wattle Bank",
    state: "VIC",
    postcode: "3995",
    country: "Australia",
  },
  liquorLicence: "32806591",
  hours: [
    { day: "Friday", sessions: ["12pm–4:30pm lunch", "6pm–8:30pm dinner"] },
    { day: "Saturday", sessions: ["12pm–4:30pm lunch", "6pm–8:30pm dinner"] },
    { day: "Sunday", sessions: ["12pm–4:30pm"] },
  ],
  social: {
    facebook: "https://www.facebook.com/harmanwines/",
    instagram: "https://www.instagram.com/harmanwines/",
  },
  booking: {
    accountId: "5fb22ccc-8e16-48b8-8320-bd1f538351b3",
    venueId: "5951",
    maxOnlineGuests: 18,
    advanceDays: 45,
  },
  shipping: {
    australiaOnly: true,
    capitals:
      "Please allow between 1–4 business days for shipping to capital cities (Melbourne, Canberra and Sydney).",
    mostLocations:
      "Generally wine will arrive within 5 business days to most locations in Australia.",
    local:
      "Wine deliveries to Bass Coast and South Gippsland are normally delivered within 2 business days.",
  },
  analyticsId: "G-WBZVD8QPKL",
};

export const wines: Wine[] = [
  {
    id: "blanc-de-blanc-18",
    slug: "blanc-de-blanc-18",
    name: "Blanc De Blanc 18",
    variety: "Chardonnay",
    vintage: "2018",
    description:
      "Estate sparkling drawn from cool-climate Chardonnay grown at Wattle Bank.",
    tastingNotes: ["DATA REQUIRED — full tasting notes from winery"],
    region: "South Gippsland",
    style: "Sparkling",
    price: 38,
    currency: "AUD",
    ecwidProductId: "361034399",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/17450415/3879092890.jpg",
    availability: "in-stock",
    category: "current",
    colour: "sparkling",
    groundColor: "#D4C48A",
  },
  {
    id: "rose-2024",
    slug: "rose-2024",
    name: "Rosé 2024",
    variety: "Rosé",
    vintage: "2024",
    description:
      "A fresh coastal-climate rosé from the Harman vineyard.",
    tastingNotes: ["DATA REQUIRED — full tasting notes from winery"],
    region: "South Gippsland",
    style: "Dry Rosé",
    price: 34,
    currency: "AUD",
    ecwidProductId: "738426861",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/17450415/4252254877.jpg",
    availability: "in-stock",
    category: "current",
    colour: "rose",
    groundColor: "#C9A0A8",
  },
  {
    id: "612-estate-pinot-noir-2023",
    slug: "612-estate-pinot-noir-2023",
    name: "612 Estate Pinot Noir 2023",
    variety: "Pinot Noir",
    vintage: "2023",
    description:
      "Estate Pinot Noir shaped by maritime influence and slow ripening at Wattle Bank.",
    tastingNotes: ["DATA REQUIRED — full tasting notes from winery"],
    region: "South Gippsland",
    style: "Cool-climate red",
    price: 48,
    currency: "AUD",
    ecwidProductId: "738426874",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/17450415/4840637777.jpg",
    availability: "in-stock",
    category: "current",
    colour: "red",
    groundColor: "#5B1220",
  },
  {
    id: "sauvignon-blanc-2024",
    slug: "sauvignon-blanc-2024",
    name: "Sauv Blanc 2024",
    variety: "Sauvignon Blanc",
    vintage: "2024",
    description:
      "Bright Sauvignon Blanc from South Gippsland’s cool coastal climate.",
    tastingNotes: ["DATA REQUIRED — full tasting notes from winery"],
    region: "South Gippsland",
    style: "Fresh white",
    price: 32,
    currency: "AUD",
    ecwidProductId: "790364406",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/17450415/5280810023.jpg",
    availability: "in-stock",
    category: "current",
    colour: "white",
    groundColor: "#B8C49A",
  },
  {
    id: "gippsland-syrah-2022",
    slug: "gippsland-syrah-2022",
    name: "Gippsland Syrah 2022",
    variety: "Shiraz / Syrah",
    vintage: "2022",
    description:
      "Gippsland Syrah crafted with David’s minimal-intervention approach.",
    tastingNotes: ["DATA REQUIRED — full tasting notes from winery"],
    region: "South Gippsland",
    style: "Cool-climate red",
    price: 48,
    currency: "AUD",
    ecwidProductId: "738426854",
    image: "https://d2j6dbq0eux0bg.cloudfront.net/images/17450415/4840578171.jpg",
    availability: "in-stock",
    category: "current",
    colour: "red",
    groundColor: "#3D0C16",
  },
];

export const spaces: Space[] = [
  {
    id: "inside",
    name: "The Cellar Door",
    slug: "inside",
    mood: ["Warm", "Fire", "Winter", "Intimate"],
    capacity: "Accommodates 30 guests",
    description:
      "Indoors by the wood fire in winter, with air conditioning in summer — an intimate gathering space within the cellar door.",
    petFriendly: false,
  },
  {
    id: "pergola",
    name: "The Pergola",
    slug: "pergola",
    mood: ["Open", "Vineyard", "Groups", "All-season"],
    capacity: "Accommodates 60 guests and group bookings",
    description:
      "Covered pergola with heating and weatherproof blinds — vineyard views with all-season comfort.",
    petFriendly: false,
  },
  {
    id: "picnic",
    name: "The Picnic Table",
    slug: "picnic",
    mood: ["Grass", "Garden", "Outdoor", "Pet-friendly"],
    capacity: "Accommodates 8 per table",
    description:
      "Picnic tables on the grassed area beside the kitchen garden. Open air with umbrellas when weather allows. The only area where dogs on lead are welcome.",
    petFriendly: true,
  },
];

export const awards: Award[] = [
  {
    id: "ata-2025-silver",
    year: "2025",
    title: "Silver Winner",
    organisation: "Australian Tourism Awards",
    category: "Wineries, Distilleries & Breweries",
    badge: "/images/harman/cropped-QTA-2025-Silver.-Tourism-Wineries-1_small.jpeg",
  },
  {
    id: "vta-2025-gold",
    year: "2025",
    title: "Gold Winner",
    organisation: "Victorian Tourism Awards",
    category: "Wineries, Distilleries & Breweries",
    badge: "/images/harman/cropped-vta2025-gold-winner-reversed.jpg",
  },
  {
    id: "vta-2024-gold",
    year: "2024",
    title: "Gold Winner",
    organisation: "Victorian Tourism Awards",
    category: "Wineries, Distilleries & Breweries",
    badge: "/images/harman/cropped-vta2025-gold-winner-reversed.jpg",
  },
  {
    id: "bcba-2026-peoples",
    year: "2026",
    title: "People’s Choice Award",
    organisation: "Bass Coast Business Awards",
    category: "Food & Beverage",
    badge: "/images/harman/cropped-Peoples-Choice-Award.png",
  },
  {
    id: "gba-2023",
    year: "2023",
    title: "Winner",
    organisation: "Gippsland Business Awards",
    category: "Food and Wine Producers",
    badge: "/images/harman/cropped-cropped-cropped-GBA-2023-Award.png",
  },
  {
    id: "bcba-2021-env",
    year: "2021",
    title: "Winner",
    organisation: "Bass Coast Business Awards",
    category: "Environment & Sustainability",
  },
  {
    id: "vta-2021-silver",
    year: "2021",
    title: "Silver Winner",
    organisation: "Victorian Tourism Awards",
    category: "Wineries, Distilleries & Breweries",
  },
  {
    id: "agfg-2022",
    year: "2022",
    title: "Readers Choice Winner",
    organisation: "Australian Good Food Guide",
  },
  {
    id: "restaurant-guru-2022",
    year: "2022",
    title: "Recommendation",
    organisation: "Restaurant Guru",
  },
  {
    id: "bcba-2019-boy",
    year: "2019",
    title: "Business of the Year",
    organisation: "Bass Coast Business Awards",
  },
  {
    id: "bcba-2018-boy",
    year: "2018",
    title: "Business of the Year",
    organisation: "Bass Coast Business Awards",
  },
];

/** Homepage laurels pedestals — ATA Silver, VTA Gold (center), GBA Winner */
export const featuredHomepageAwardIds = [
  "ata-2025-silver",
  "vta-2025-gold",
  "gba-2023",
] as const;

/**
 * Full homepage awards order matching live /awards
 * (2018/2019 Business of the Year stay in seed for Our Story only).
 */
export const homepageAwardIds = [
  "ata-2025-silver",
  "vta-2025-gold",
  "vta-2024-gold",
  "bcba-2026-peoples",
  "gba-2023",
  "bcba-2021-env",
  "vta-2021-silver",
  "agfg-2022",
  "restaurant-guru-2022",
] as const;

export const events: EventItem[] = [
  {
    id: "eric-collier",
    slug: "eric-collier-6-sept",
    title: "Eric Collier",
    date: "2025-09-06",
    time: "12:30pm–3:30pm",
    description: "Sunday live music at the cellar door.",
    category: "live-music",
  },
  {
    id: "seth-forge",
    slug: "seth-and-the-forge-13-sept",
    title: "Seth & The Forge",
    date: "2025-09-13",
    time: "12:30pm–3:30pm",
    description: "Sunday live music at the cellar door.",
    category: "live-music",
  },
  {
    id: "craig-amy",
    slug: "craig-amy-27-sept",
    title: "Craig Amy",
    date: "2025-09-27",
    time: "12:30pm–3:30pm",
    description: "Sunday live music at the cellar door.",
    category: "live-music",
  },
];

export const suppliers: Supplier[] = [
  { id: "amber", name: "Amber Creek Farm", location: "Fish Creek" },
  { id: "bassine", name: "Bassine Cheese", location: "Glen Forbes" },
  { id: "flock", name: "Flock Stock and Basil", location: "Tarwin Lower" },
  { id: "prom", name: "Prom Country Cheese", location: "Moyarra" },
  { id: "tarago", name: "Tarago Olives", location: "Jindivick" },
  { id: "ugoose", name: "U Goose", location: "Middle Tarwin" },
  { id: "wattle", name: "Wattle Bank Farm", location: "Wattle Bank" },
  { id: "weyhill", name: "Weyhill Garlic Farm", location: "Ranceby" },
];

/** Menu — wood-fired pizzas from client food menu; shared plates / non-alc still DATA REQUIRED. */
export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: "Wood-Fired Pizzas",
    items: [
      {
        id: "garlic",
        name: "Garlic",
        description: "Garlic, mozzarella, herbs",
        price: "$18",
        dietary: ["VE"],
      },
      {
        id: "margarita",
        name: "Margarita",
        description: "House sugo, mozzarella, herbs",
        price: "$20",
        dietary: ["VE"],
      },
      {
        id: "shack-bay",
        name: "Shack Bay",
        description: "House sugo, ham, pineapple, mozzarella",
        price: "$23",
      },
      {
        id: "the-garden",
        name: "The Garden",
        description: "House sugo, mushroom, onion, capsicum, tomatoes, olives, mozzarella, herbs",
        price: "$25",
        dietary: ["VE"],
      },
      {
        id: "pound-creek",
        name: "Pound Creek",
        description:
          "Local truffle oil, woodfire roasted pumpkin, Bassine feta, onion, pine nuts, herbs, spinach, mozzarella, balsamic glaze",
        price: "$28",
        dietary: ["VE", "N"],
      },
      {
        id: "the-amazon",
        name: "The Amazon",
        description: "House sugo, ham, salami, bacon, onion, capsicum, mozzarella, BBQ sauce",
        price: "$30",
      },
      {
        id: "hot-honey",
        name: "Hot Honey",
        description: "House sugo, salami, mozzarella, goats cheese & hot honey",
        price: "$30",
      },
      {
        id: "the-paddock",
        name: "The Paddock",
        description:
          "House sugo, slow cooked lamb, onion, tomato, Bassine feta, mozzarella, greek yoghurt, roquette",
        price: "$32",
      },
      {
        id: "wattle-bank",
        name: "Wattle Bank",
        description: "House relish, ham, salami, olives, Bassine feta, mozzarella, chilli flakes",
        price: "$32",
      },
      {
        id: "the-oaks",
        name: "The Oaks",
        description:
          "Olive oil, garlic, caramelised onion, blue cheese, prosciutto, parmesan & roquette",
        price: "$32",
      },
      {
        id: "invy-lot",
        name: "Invy ‘Lot’",
        description:
          "House sugo, ham, salami, mushroom, capsicum, onion, olives, tomatoes, mozzarella, herbs — add anchovies +$2",
        price: "$32",
      },
    ],
  },
  {
    id: "pizza-extras",
    name: "Additional Charges",
    items: [
      {
        id: "gf-base",
        name: "Gluten Friendly pizza base",
        price: "$7",
        dietary: ["GF"],
      },
      {
        id: "vegan-cheese",
        name: "Vegan Cheese",
        price: "$4",
        dietary: ["VG"],
      },
    ],
  },
  {
    id: "shared",
    name: "Shared Plates",
    items: [
      {
        id: "shared-note",
        name: "Shared platters & tapas",
        description:
          "Crafted from seasonal produce from the kitchen garden and local growers. Full item list — DATA REQUIRED.",
      },
    ],
  },
  {
    id: "wine-by-glass",
    name: "Wine",
    items: [
      {
        id: "wine-note",
        name: "Estate wines by the glass, bottle & paddle",
        description: "Cool-climate wines crafted on site by David Harman.",
      },
    ],
  },
  {
    id: "non-alc",
    name: "Non-alcoholic",
    items: [
      {
        id: "na-note",
        name: "Local & non-alcoholic beverages",
        description: "Full list — DATA REQUIRED from current menu.",
      },
    ],
  },
];

export const journalPosts: JournalPost[] = [
  {
    id: "heli",
    slug: "collaboration-with-phillip-island-helicopters",
    title: "Collaboration with Phillip Island Helicopters",
    excerpt:
      "A unique experience with the opportunity to arrive at the winery aboard a private helicopter.",
    category: "Region",
    publishedAt: "2024-01-15",
    body: [
      "We are excited to be collaborating with local helicopter companies offering guests a unique experience with the opportunity to arrive at the winery in style aboard a private helicopter.",
      "Full article body — DATA REQUIRED from live WordPress post.",
    ],
  },
  {
    id: "solar",
    slug: "solar-powered-winery",
    title: "Solar Powered Winery",
    excerpt:
      "Our winery roof took on a new look thanks to the installation of our grid-connected solar panels.",
    category: "Winemaking",
    publishedAt: "2023-06-01",
    body: [
      "Late last year our winery roof took on a new look thanks to the installation of our grid-connected solar panels.",
      "Full article body — DATA REQUIRED from live WordPress post.",
    ],
  },
  {
    id: "pruning",
    slug: "pruning-time",
    title: "Pruning Time",
    excerpt:
      "With winter upon us and the vine leaves gone, it’s the time of year they get their yearly haircut.",
    category: "Vineyard",
    publishedAt: "2023-07-01",
    body: [
      "With winter now upon us and the vines’ leaves all but gone it’s the time of year they get their yearly haircut.",
      "Full article body — DATA REQUIRED from live WordPress post.",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    id: "vouchers",
    question: "Do you sell gift vouchers?",
    answer:
      "We offer gift vouchers which can be purchased via our website. Vouchers are available incrementally from $50 and are valid for 3 years. Gift vouchers purchased online can be emailed directly to yourself or to the recipient immediately — or posted as a gift card via Australia Post. Gift vouchers can also be purchased and collected at the cellar door during opening hours. Harman Wines Gift Vouchers can be redeemed in full at the Cellar Door and Restaurant on any food, wine or produce purchases.",
  },
  {
    id: "voucher-online",
    question: "Can I use my gift voucher to buy wine online?",
    answer:
      "No — all purchases with a voucher are to be redeemed for on-site purchases only. Bring the physical voucher and present it to staff upon payment. Vouchers must be redeemed in full.",
  },
  {
    id: "voucher-expiry",
    question: "What is the expiry date of my gift voucher?",
    answer: "Vouchers are valid for 3 years from the date of purchase.",
  },
  {
    id: "weddings",
    question: "Do you hold weddings at your winery / cellar door?",
    answer:
      "We do host weddings at our venue. We can accommodate a maximum of 60 guests for seated and 120 guests for stand-up cocktail style wedding receptions. Please see our functions page for more information.",
  },
  {
    id: "byo",
    question: "Can we BYO wine?",
    answer:
      "No, we do not allow any food or drinks to be brought in (other than a cake for celebrations).",
  },
  {
    id: "cake",
    question: "Can we bring our own cake?",
    answer:
      "Cakes are allowed for birthdays or special occasions. A cake surcharge of $2.50 per person applies.",
  },
  {
    id: "dietary",
    question: "Do you accommodate dietary requirements and allergies?",
    answer:
      "All dietary requirements should be communicated at the time you make your reservation, either by phone, email or through the online booking system. While we endeavour to accommodate allergies and intolerances, we cannot guarantee allergy-free meals.",
  },
  {
    id: "surcharge",
    question: "Do you charge a surcharge on Sundays or public holidays?",
    answer: "We charge a 15% surcharge on Victorian public holidays.",
  },
  {
    id: "advance",
    question: "How far in advance do you take bookings?",
    answer:
      "Bookings can be made up to 45 days in advance. Bookings are confirmed via automated text message and email, and reminder messages will be sent before your booking date.",
  },
  {
    id: "late",
    question: "What should I do if I’m running late?",
    answer:
      "You may call to advise if you are running late; we allow a 15-minute window for lateness, though running late may impact your experience if your arrival coincides with another sitting.",
  },
  {
    id: "walkins",
    question: "Do you take walk-ins?",
    answer:
      "We do allow walk-ins when tables are available. Popular dates are often booked out weeks in advance — we advise booking ahead.",
  },
  {
    id: "pets",
    question: "Are you pet friendly?",
    answer:
      "Pets are allowed onsite when booking a picnic table. They must be on lead at all times. Due to council regulations, they are not allowed in our cellar door or pergola areas. We are a working farm with animals that can be spooked by dogs — if in doubt, leave pets at home.",
  },
  {
    id: "intl",
    question: "Can you send wines internationally?",
    answer:
      "No, we currently don’t send wine outside of Australia. Stay tuned — we are working on changing this.",
  },
  {
    id: "delivery-time",
    question: "I ordered wine online — how long will it take?",
    answer:
      "Depending on your location, wine will take an average of 5–10 working days. We use Australia Post wine postage services and will send tracking information when permitted. Contact Cellar Door for express or courier options.",
  },
  {
    id: "cancel",
    question: "What is your cancellation policy?",
    answer:
      "At booking we take a credit card number for pre-authorisation only — nothing is debited when booking. If you cancel within 24 hours or don’t show, a cancellation fee per person may apply as per our terms and conditions.",
  },
  {
    id: "shuttle",
    question: "Do you have a shuttle bus?",
    answer:
      "We do not have a shuttle bus. Local transport providers we can recommend include Ambling Along, Bass Coast A to B, Chauffeur So Good, Gallivanting Gippsland Tours, and The Social Ramble.",
  },
];

export const regionPlaces: RegionPlace[] = [
  {
    id: "inverloch",
    name: "In and Around Inverloch",
    blurb: "Coastal town life minutes from the vineyard — things to do, eat and explore.",
    url: "https://www.visitinverloch.co/",
    image: "/images/harman/region/inverloch-coast.webp",
  },
  {
    id: "burunong",
    name: "Bunurong Coastal Drive",
    blurb: "A scenic coastal route along Bass Coast.",
    url: "https://www.visitvictoria.com/regions/gippsland/see-and-do/road-trips-and-itineraries/bunurong-coastal-drive",
    image: "/images/harman/region/bunurong-drive.webp",
  },
  {
    id: "prom",
    name: "Wilsons Promontory National Park",
    blurb: "Iconic wilderness of South Gippsland.",
    url: "https://www.parks.vic.gov.au/places-to-see/parks/wilsons-promontory-national-park",
    image: "/images/harman/region/wilsons-prom.jpg",
  },
  {
    id: "wineries",
    name: "Wine Gippsland",
    blurb: "Fellow growers and makers across the region.",
    url: "https://www.winegippsland.com/",
    image: "/images/harman/region/wine-gippsland.webp",
    imageFit: "contain",
  },
  {
    id: "stay",
    name: "Inverloch Accommodation",
    blurb: "Stay nearby after lunch among the vines.",
    url: "https://inverlochaccommodation.com.au/",
    image: "/images/harman/region/inverloch-stay.webp",
    imageFit: "contain",
  },
  {
    id: "glamping",
    name: "Inverloch Glamping",
    blurb: "A different kind of night under Gippsland skies.",
    url: "https://theinverlochglampingco.com.au/stay",
    image: "/images/harman/region/inverloch-glamping.jpg",
  },
  {
    id: "spa",
    name: "Mind Body Soul Day Spa",
    blurb: "Restore before or after your visit.",
    url: "https://www.mindbodydayspa.com.au/",
    image: "/images/harman/region/mind-body-soul.png",
    imageFit: "contain",
  },
  {
    id: "destination-gippsland",
    name: "Destination Gippsland",
    blurb: "Explore the wider Gippsland region — coast, country and culture.",
    url: "https://www.visitgippsland.com.au/destination-gippsland",
    image: "/images/harman/region/destination-gippsland.png",
    imageFit: "contain",
  },
];

export const familyTimeline = [
  {
    year: "2004",
    title: "Land purchased",
    body: "David and Nicole purchase a 10-acre former horse stud at Wattle Bank.",
  },
  {
    year: "2008",
    title: "First vines",
    body: "The first vines are planted on rich loam soils over clay.",
  },
  {
    year: "2018",
    title: "Cellar door opens",
    body: "Harman Wines officially opens in November 2018.",
  },
  {
    year: "Today",
    title: "Family destination",
    body: "A family-run winery, working farm, and award-winning cellar door experience.",
  },
];

export const craftStages = [
  {
    id: "vine",
    label: "Vine",
    body: "Cool maritime climate and slow ripening — Bass Strait air tempering the warmer months. Hands-on vintage, season by season.",
  },
  {
    id: "cellar",
    label: "Cellar",
    body: "Wild fermentations are common; minimal intervention, time, and traditional technique over shortcuts. Minimal fining and filtration.",
  },
  {
    id: "glass",
    label: "Glass",
    body: "From vineyard to glass under one roof — shared among family and friends. Meet, eat, drink.",
  },
];

export const sustainabilityPillars = [
  {
    id: "soil",
    title: "Soil",
    body: "Reduced chemical inputs and practices such as flame weeding to care for soils.",
  },
  {
    id: "energy",
    title: "Energy",
    body: "Solar power and battery storage power refrigeration, air conditioning and the bottling line.",
  },
  {
    id: "food",
    title: "Food",
    body: "Expanded kitchen garden supplies fruit, vegetables and herbs; produce sourced on-property or within ~30km where possible.",
  },
  {
    id: "water",
    title: "Water",
    body: "Rainwater captured from roofs and stored for cellar door and winery use.",
  },
  {
    id: "biodiversity",
    title: "Biodiversity",
    body: "Healthier soils, native wildlife — including the occasional resident koala — and farm animals as part of the system.",
  },
  {
    id: "community",
    title: "Community",
    body: "Sustainable Tourism Accreditation, EcoStar Accreditation, and the Tourism Emissions Reduction Commitment (TERC) Program.",
  },
];
