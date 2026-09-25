# Harman Wines — Digital Experience

Cinematic editorial rebuild of [harmanwines.com.au](https://www.harmanwines.com.au/).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion + optional Three.js vineyard depth
- Sanity CMS (`/studio`) — connect project ID to edit content
- NowBookIt — bookings + gift vouchers
- Ecwid — wine checkout (`NEXT_PUBLIC_ECWID_STORE_ID`)

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Until Sanity is connected, the site reads from `src/content/seed.ts` (audited live business copy). Fields marked **DATA REQUIRED** need client input (full menu items, tasting notes, careers openings, accessibility facility notes, bottle photography).

## Feature matrix

See `content/audit/FEATURE_MATRIX.md`.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
