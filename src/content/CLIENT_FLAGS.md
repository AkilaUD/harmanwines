# Client data flags (do not invent answers)

Items that need Harman / client confirmation before launch. Do not invent copy.

## Generated stand-in plates

- Season plates (`season-summer/autumn/winter/spring.jpg`), farm animal tiles (`farm-chickens`, `farm-banjo`, `farm-alpacas`, `farm-garden-hands`), region day plates (`region-morning`, `region-evening`), plus `place-map-path`, `return-dusk`, `craft-glass`, `recognition-texture`, and `eat-fire` under `public/images/harman/generated/` are **AI stand-ins**. Replace with real Harman photography before launch; keep real aerial/family/gather assets where already wired.

## Stale events

- `seed.ts` `events` still lists **September 2025** Sunday sessions. Confirm current season dates or clear “upcoming” until updated.

## DATA REQUIRED placeholders

- Wine `tastingNotes` for all five current releases
- Menu item lists (pizza, shared plates, non-alcoholic)
- Journal post full bodies
- Cookies / privacy analytics disclosure detail
- Accessibility facility details (partial)

## Hours

- Canonical hours in `siteSettings.hours` are **Friday–Sunday** only.
- Flag any Mon–Thu opening copy if it appears in print/PDFs or third-party listings; align to one source of truth.

## Mailto-only forms

- `ContactForm` and `FunctionEnquiryForm` open the visitor’s mail client — no server inbox integration yet.
- Confirm whether to keep mailto or wire a form endpoint (Formspree, etc.).

## Orphan routes (now linked)

- `/visit`, `/legal/cookies`, `/legal/alcohol` — linked from footer Info / Visit.
