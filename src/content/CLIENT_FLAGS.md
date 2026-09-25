# Client data flags (do not invent answers)

Items that need Harman / client confirmation before launch. Do not invent copy.

## Generated stand-in plates

- Season plates (`season-summer/winter/spring.jpg` — autumn now uses real vine rows), farm animal tiles (`farm-banjo`, `farm-alpacas`; chickens use real `cropped-O7I6351`), region day stand-ins replaced with real coast/sunset where possible; `place-map-path` and `recognition-texture` under `public/images/harman/generated/` remain **AI stand-ins**. `returnDusk`, `eatFire`, `craftGlass`, and `farmGardenHands` now use real plates.
- `landPortrait` retargeted from mislabeled food file to estate aerial.

## Stale events

- `seed.ts` `events` still lists **September 2025** Sunday sessions. Confirm current season dates or clear “upcoming” until updated.

## DATA REQUIRED placeholders

- Wine `tastingNotes` for all five current releases
- Menu item lists for **shared plates** and **non-alcoholic** (wood-fired pizzas + extras are wired from client food menu)
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
