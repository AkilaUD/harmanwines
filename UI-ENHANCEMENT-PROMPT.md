# Harman Wines — Premium UI Enhancement Master Prompt

> Use this entire document as the implementation prompt for the existing Harman Wines repository. The redesign must be executed in the current codebase, not delivered as a static mockup.
>
> Direction assumption: “vine, farm, royale” means **wine, farm, and royal**. Interpret “royal” as confidence, provenance, precision, and generous hospitality—not literal monarchy.

---

## 1. Role and objective

Act as a senior brand designer, creative frontend engineer, and accessibility specialist working together as one team.

Elevate the existing Harman Wines website into a distinctive, premium, editorial experience for a family-run vineyard, working farm, winery, cellar door, restaurant, event venue, and regional destination.

The finished experience must feel:

- Coastal rather than generic “luxury”
- Agricultural rather than rustic or costume-like
- Regal rather than ornate
- Cinematic without feeling like a template
- Editorial without becoming difficult to use
- Warm and inviting rather than dark, cold, or intimidating
- Local to Wattle Bank and Gippsland rather than interchangeable with any vineyard
- Conversion-focused without feeling commercial or pushy

Do not reproduce the current live WordPress site or its visual theme. Use it only as a content and business reference. The new design must be meaningfully more original, more premium, and more memorable.

---

## 2. Creative concept: “The Harman Estate Folio”

Create the site as a contemporary **estate folio**: part private guest book, part regional field journal, part modern winery monograph.

The concept should combine:

- **Farm:** real people, working land, vines, soil, seasons, kitchen garden, regional producers, and documentary photography
- **Wine:** vintage, provenance, bottle craft, vineyard-to-cellar process, tasting, and considered product presentation
- **Royal:** disciplined spacing, editorial confidence, provenance labels, precise details, quiet ceremony, and a sense of a well-run private estate
- **Coastal Gippsland:** cool light, maritime air, salt, eucalyptus, field patterns, long horizons, and Bass Strait

### Signature visual language

Use a restrained visual system based on:

- Estate ledger lines and margin notes
- Vineyard-row geometry
- Crop marks and registration details
- Vintage, harvest, acreage, distance, and coordinates as editorial metadata
- Pressed-paper and ink treatments
- A subtle embossed typographic `H` monogram used as an editorial device, not a fabricated official crest
- Fine rules, quiet numbering, and catalogue-style labels
- One or two subtle seal-like moments for awards, provenance, or membership, only when backed by real facts and approved assets

### What “royal” must not become

Do not use:

- Literal crowns, castles, lions, shields, fake heraldry, medieval typography, or royal portraits
- Gold gradients, excessive metallic effects, glossy luxury clichés, or black-and-gold “five-star” styling
- Purple gradients, glassmorphism, oversized glowing buttons, fake glass panels, or generic AI-style visual effects
- Rounded card grids for every piece of content
- Generic wine clichés such as floating grapes, ornate goblets, vineyard line icons, or repeated bottle illustrations
- Faux aristocratic language or invented family history
- Purple, glossy, or high-gloss treatments that conflict with the agricultural brand

The desired result is **private-house refinement with rural soul**.

---

## 3. Existing project context

Work inside the existing Next.js application.

Current stack:

- Next.js `16.3.6`, App Router, React Server Components
- React `19.2.8`
- TypeScript strict mode
- Tailwind CSS v4 using CSS-first `@theme`
- Framer Motion `13.4.3`
- Cormorant Garamond and Outfit loaded through `next/font`
- `next/image`
- Ecwid commerce integration
- NowBookIt booking iframe
- Sanity schemas that are not currently connected to page data

Important files:

- `AGENTS.md`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/page.tsx`
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/SiteFooter.tsx`
- `src/components/layout/MobileBookBar.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/PageHero.tsx`
- `src/components/ui/MediaImage.tsx`
- `src/components/ui/Reveal.tsx`
- `src/components/chapters/*.tsx`
- `src/components/wine/*`
- `src/components/shop/EcwidProvider.tsx`
- `src/components/booking/*`
- `src/components/forms/*`
- `src/content/seed.ts`
- `src/content/media.ts`
- `src/content/images.ts`
- `public/images/harman/*`

The working tree may contain partial foundation work while this prompt is being used. Recent local changes may already include layered CSS, a darker muted token, scoped Ecwid scripts, responsive `MediaImage` focal variables, an `EditorialTabs` primitive, and baseline loading/error/404 files. Preserve valid in-progress work, verify it, and complete it rather than reverting or reimplementing it blindly.

Before changing code:

1. Read `AGENTS.md`.
2. Read the relevant local guides under `node_modules/next/dist/docs/`.
3. Trust the installed Next.js documentation over prior knowledge.
4. Inspect current components, content, and assets before changing patterns.
5. Do not add a UI framework, component library, CSS-in-JS solution, icon package, or animation package unless the existing project cannot satisfy the requirement.

Do not add code comments unless explicitly asked.

---

## 4. Current-state problems to resolve

The current local project has a strong foundation but needs a complete coherence and craft pass.

### Foundation defects

- CSS is now partially layered, but typography and component rules remain split across layers and several display/transition declarations overlap. Finish the cascade using intentional `@layer reset, tokens, base, components, utilities`; do not rely on accidental source order.
- `font-display` and `label-micro` still reference themselves inside the same custom-property block. Replace these aliases with actual values; they are not expanding to a usable font.
- The current `stone` muted text color and `olive-on-dark` token contain partial contrast work. Verify every cream/charcoal/deep-vine pairing and replace remaining low-opacity labels on dark surfaces.
- Micro labels have been raised to 12px in the current tree. Preserve that improvement, check every call site, and treat 12px as the absolute floor rather than returning to 9–11px tracking-heavy labels.
- The focus ring can still disappear on dark green and burgundy surfaces. Use a high-contrast focus indicator with an offset or dual ring.
- Define or remove the undefined `safe-pb` and `scrollbar-thin` utilities.
- Align the web manifest colors with the actual design tokens.

### Navigation and layout defects

- The transparent header renders charcoal text over the dark hero. The current `.on-hero` mechanism is never applied.
- The header has no active navigation state.
- The mobile menu lacks Escape handling, focus trapping, focus restoration, and proper dialog semantics.
- At tablet widths, the desktop navigation is hidden and the mobile menu trigger is also hidden, leaving no complete navigation.
- The `/visit` page is orphaned.
- `/legal/cookies` is missing from navigation/footer coverage.
- The `Explore` link targets `/#place`, but the Place section has no matching `id`.
- The mobile and desktop information architecture duplicate shopping and wine entry points.
- `Shop Wine` and the Bag actions need a clear relationship between editorial discovery and commerce.

### Homepage problems

- The current 11-chapter sequence is visually long—approximately 17,000px on desktop—and repeats a similar alternating image/text rhythm too often.
- Many sections share the same eyebrow-heading-paragraph-CTA grammar.
- The `ChapterRegion` list contains invalid wrapper markup between `<ol>` and `<li>` elements.
- An `EditorialTabs` primitive now exists, but the homepage season/craft controls are not consistently integrated with it and still lack complete tab semantics and keyboard behavior.
- The closing `sunsetClose` asset now points to a higher-resolution image, but it duplicates the Place aerial and is still forced into a tall 85svh crop; choose a distinct closing image or make the reuse editorially intentional.
- Several source images are rendered in aspect ratios that do not match their actual dimensions.
- `MediaImage` now exposes desktop/mobile focal variables. Verify the implementation and all wrapper/fill call sites rather than replacing the primitive.
- The local bottle mirrors remain unused while remote Ecwid bottle images are used.
- Awards are not consistently ordered by date.
- Home-page email inputs do not use a real submission flow.

### Interior-page problems

- `PageHero` is a flat color band on almost every interior page despite a large photography library.
- `Our Story`, `Careers`, and parts of the legal/accessibility pages are overly text-heavy.
- Journal index and article pages lack meaningful editorial imagery and hierarchy.
- The cellar-door page lacks deep-linkable spaces and sufficiently rich photography.
- The gift page does not provide a gift-voucher journey.
- Events are stale and need clear past/upcoming states.
- Forms use `mailto:` and display a false success state without confirmation.
- The custom booking steps now reveal the live widget, but they remain a parallel interface rather than a reliable, accessible, stateful booking flow; extend this work rather than adding a second shell.
- Baseline loading, error, and not-found routes now exist. Evolve them into branded, accessible states with useful recovery actions, stable layouts, and no sensitive error details in the browser.

### Performance and integration concerns

- Ecwid scripts are now scoped to `/shop` through `EcwidScripts`; preserve this boundary and verify that the storefront still initializes and that the no-op `EcwidProvider` does not become an accidental global dependency.
- Ecwid still uses hard `window.location.href` navigation for internal product/cart fallbacks; replace these with the project’s client-side navigation pattern where appropriate and clear the related lint warnings.
- The wine rail applies deprecated image priority treatment to multiple cards.
- `sizes` values do not consistently reflect actual rendered widths.
- Third-party booking and commerce embeds look visually disconnected and have weak fallback/loading behavior, despite partial shells and loading states now being present.

---

## 5. Visual system requirements

### 5.1 Color

Retain the property-derived green, wine, cream, clay, and earth foundation, but consolidate the palette into clear roles instead of duplicate aliases.

Use semantic roles such as:

- `canvas` for cream and parchment surfaces
- `ink` for primary charcoal text
- `ink-muted` for accessible secondary text
- `vine` and `cellar` for deep green surfaces
- `estate-wine` and `oxblood` for premium action and emphasis
- `clay` and `earth` for agricultural warmth
- `brass` for small decorative accents only
- `rule` for borders and dividers
- `on-dark` and `on-dark-muted` for legible text over photography

Suggested starting palette, subject to measured contrast validation:

- Deep vine: `#142019`
- Cellar forest: `#22352A`
- Estate wine: `#512D31`
- Oxblood: `#321B20`
- Chalk cream: `#F4EFE4`
- Warm paper: `#E9E1D1`
- Graphite: `#22211E`
- Soil: `#6B5946`
- Muted ink: `#5B584F`
- Antique brass: `#B59A65`
- Light rule: `#CFC7B8`

Rules:

- Normal text must reach WCAG AA contrast on its actual background.
- Do not use a single muted color universally across light and dark surfaces.
- Brass must not be used for small text on cream unless contrast is verified.
- Keep the palette restrained; do not add a large rainbow of season colors.
- If seasonal colors are used, derive them from the core palette and crossfade them subtly.
- Move hard-coded hex and RGBA values from components into tokens.
- Create shared scrim tokens for image overlays.
- Do not use gradients as decoration; use gradients only where they improve image legibility.

### 5.2 Typography

Keep Cormorant Garamond for expressive display typography and Outfit for UI/body text. Do not add a third font unless the client explicitly approves it.

Use:

- A fluid hero scale such as `clamp(3.75rem, 9vw, 7rem)` rather than viewport-driven text that becomes excessive
- Interior H1 scale around `clamp(3rem, 6vw, 5.5rem)`
- Section H2 scale around `clamp(2.5rem, 4.5vw, 4.5rem)`
- Body copy between 16–18px with approximately 1.6–1.7 line-height
- Maximum reading measure around 62–70 characters
- Micro labels no smaller than 12px
- Numerals, vintages, prices, years, and coordinates with consistent tabular treatment
- Balanced headline wrapping without awkward single-word lines

Typography behavior:

- `.font-display` should only set the family; weight, leading, and tracking must be locally controllable.
- Avoid excessively tight leading on multi-line headings.
- Use restrained negative tracking only for large display text.
- Preserve a calm typographic contrast between refined serif headlines and precise sans-serif metadata.
- Do not center long body text or paragraphs.

### 5.3 Grid, spacing, and shape

- Use a flexible 12-column desktop grid and a 4-column mobile grid.
- Create a shared container primitive instead of repeating `mx-auto max-w-7xl px-5 md:px-8`.
- Use a consistent spacing scale based on 4px/8px increments.
- Use fluid vertical section rhythm with `clamp()`.
- Prefer asymmetry, overlaps, edge alignment, and large editorial image crops over equal-width repeated cards.
- Keep corners restrained: square, softly squared, or minimally rounded. Avoid pill-shaped containers except tags or controls.
- Use hairlines and rules as structural elements.
- Preserve generous whitespace around premium interactions.
- Do not make every section a boxed module.

### 5.4 Surfaces and components

Design a small, coherent system of reusable primitives:

- Shared `Container`
- `SectionHeader`
- `EditorialHeading`
- `Button` with primary, outline, quiet, on-dark, and on-image states
- `MediaImage` with correct desktop/mobile art direction
- `Field` for labels, inputs, selects, errors, and help text
- `Card` patterns only where cards are genuinely appropriate
- `WineCard`
- `EventRow`
- `SectionRail` for horizontal curated content
- Branded loading, empty, error, and not-found states

Buttons should be precise and calm. Avoid oversized pill CTAs. Use a maximum hover movement of 1–2px and subtle border/background changes rather than dramatic shadows.

Prefer borders, rules, and surface shifts over drop shadows. If shadows are used, keep them soft, low-opacity, and reserved for overlays such as menus or dialogs.

---

## 6. Information architecture and navigation

### Primary navigation

Reduce the header to clear visitor tasks:

- Our Story
- Wines
- Visit
- Cellar Door
- Functions
- Journal

Persistent actions:

- Shop
- Book a Table

Use these routes as the current source of truth:

- `/our-story`
- `/wine`
- `/visit`
- `/visit/cellar-door`
- `/functions`
- `/journal`
- `/shop`
- `/visit/book`

Ensure:

- Active routes have `aria-current` and a clear visual state.
- A full desktop navigation appears only at the width where all links and actions fit comfortably.
- Tablet widths use the compact menu instead of losing navigation.
- The transparent-header treatment is used only over known dark hero surfaces.
- Interior pages receive the correct solid header treatment.
- The mobile menu is a proper accessible dialog with Escape handling, focus trap, focus restoration, and a close action.
- The mobile sticky booking bar respects safe-area insets and does not obscure content or controls.
- Bag, Shop, and Buy actions have distinct, understandable behavior.
- Do not add redundant calls to “Shop Wine,” “Shop,” and “Bag” in the mobile menu.

### Commerce relationship

Treat `/wine` as the editorial product discovery experience and `/shop` as the transactional storefront.

- Wine cards may link to editorial product details and a clearly labeled purchase action.
- Bag actions should open the real cart.
- Internal commerce navigation should use Next.js routing where integration constraints allow it.
- Do not introduce three competing storefront entry points with unclear labels.

---

## 7. Homepage redesign

Restructure the homepage from 11 repetitive chapters into approximately 8–10 purposeful chapters while preserving the strongest existing content and links.

The new homepage should use at least three distinct layout grammars rather than alternating the same two-column composition throughout.

### Recommended narrative

1. **Arrival**
   - Full-height aerial or estate hero
   - One strong proposition: a coastal Gippsland vineyard, cellar door, and gathering place
   - Primary action: Book a Table
   - Secondary action: Explore the wines
   - Small location, distance, or estate metadata
   - Visible but restrained scroll or chapter cue

2. **The Estate**
   - Asymmetric introduction using the property, people, or land
   - A concise story supported by one strong fact set
   - Avoid repeating a generic “About” block

3. **The Land Through the Seasons**
   - Immersive seasonal image treatment
   - Accessible season tabs with crossfading imagery
   - Include soil, climate, acreage, and distance only when backed by source content
   - Do not add invented seasonal facts

4. **From Vine to Glass**
   - Horizontal or progressive craft narrative
   - Use documentary images and a clear Vine / Cellar / Glass structure
   - Avoid decorative process icons when real photography communicates the work better

5. **The Collection**
   - Dominant first bottle, with a refined horizontal rail for the remaining wines
   - Use bottle labels, vintage, varietal, and price as catalogue metadata
   - Add clear previous/next controls and visible mobile overflow affordance
   - Avoid making every wine equally dominant

6. **The Long Table**
   - Combine food, fire, garden, regional produce, and gathering
   - Use a rich split composition rather than three identical cards
   - Connect directly to menu and booking actions

7. **Choose Your Atmosphere**
   - Make Cellar Door, Pergola, and Picnic Table deep-link to actual sections
   - Include atmosphere, capacity, weather suitability, and pet/access details only from verified content
   - Use three distinct editorial panels, not a generic icon-card grid

8. **The People and the Region**
   - Give the Harman family and Gippsland journey meaningful but compact space
   - Integrate a regional itinerary without overwhelming the winery story

9. **Recognition**
   - Present awards as a quiet chronological editorial timeline
   - Use one or two real award images only if they are approved, legible assets
   - Do not create a badge wall

10. **Return / Visit**
    - Use a distinct, high-resolution closing image; the current `sunsetClose` asset duplicates the Place aerial and should not be the default choice
    - Make the final action unmistakably useful: hours, address, book, and directions
    - Keep the closing line emotionally strong but concise

### Homepage signature element

Create one memorable, subtle signature interaction: a slim desktop “estate index” or progress rail that identifies the current chapter—Land, Craft, Wine, Table, or Visit.

It should:

- Remain visually quiet
- Use real section labels
- Update based on scroll position
- Collapse gracefully on mobile and touch devices
- Be fully usable by keyboard and screen reader
- Avoid hijacking normal page scrolling

This is an optional progressive enhancement, not a reason to break native navigation.

---

## 8. Interior page requirements

### `/our-story`

- Use a strong documentary hero rather than a flat color band
- Include a concise family timeline with real dates
- Use the family and property as a visual narrative
- Give winemaking, sustainability, and recognition distinct but coordinated sections
- Do not present the page as a long text wall
- Correct the three-item craft grid that currently assumes five columns
- Do not invent heritage, traditions, or royal history

### `/wine`

- Begin with a refined collection introduction and a featured wine
- Keep filters clear, keyboard accessible, and announce result changes
- Use a responsive catalogue/grid on the index rather than a long horizontal rail
- Use local bottle images first, with remote fallback
- Include a clear path to `/shop`
- Preserve correct vintage, varietal, price, and product relationships

### `/wine/[slug]`

- Use a premium product monograph layout
- Place the bottle in a controlled editorial frame, not a generic card
- Show producer, vintage, varietal, price, tasting notes, cellaring, and serving information only when available
- Use actual related wines
- Give related wine names proper heading semantics
- Do not expose `DATA REQUIRED` in production

### `/visit`

- Make this a true visit hub and link it in navigation/footer
- Surface address, hours, current booking status, directions, and the three main guest intentions
- Do not orphan the route

### `/visit/cellar-door`

- Add stable anchors for Cellar Door, Pergola, and Picnic Table
- Use a sticky or indexed space selector
- Give each space real imagery, capacity, atmosphere, and access information
- Ensure homepage atmosphere cards deep-link to the correct section
- Add a clear booking CTA after each relevant section

### `/visit/menu`

- Design as a refined, highly legible menu folio
- Keep categories, prices, dietary information, and availability clear
- Do not show bottle prices as if they were by-the-glass prices
- Add an effective date or seasonal note only when supplied
- Include a download or share action only if a real menu document exists
- Add visible booking and takeaway paths

### `/visit/book`

- Keep the booking experience direct and trustworthy
- Custom steps must correspond to actual booking state, or be removed
- Pass available date/party/space context into NowBookIt when supported
- Give the iframe a branded shell, loading state, clear height, and useful fallback
- Do not pretend a decorative stepper controls the iframe
- Ensure the booking flow works on mobile and short landscape viewports

### `/visit/events`

- Use a chronological editorial timeline or list, not a generic card wall
- Separate upcoming and past events correctly
- Add time, booking state, sold-out state, and direct action where available
- Do not label 2025 events as upcoming in 2026
- Add complete Event JSON-LD time data where known

### `/functions`

- Lead with a strong venue image and verified capacity
- Explain spaces, suitable occasions, and the enquiry process
- Use a real gallery and venue-specific details
- Build a proper form with validation, loading, success, and error states
- Never show a false success state for a `mailto:` submission
- If no backend is available, use an honest email fallback rather than pretending the message was sent

### `/gift`

- Present gift vouchers as a premium product, not an unrelated restaurant page
- Use a voucher preview if supported
- Provide real purchase, redemption, and terms information
- Do not add fake denominations or expiry terms

### `/journal`

- Create a distinctive editorial index with one featured story and a quieter archive
- Add real article images where available
- Include category/date/reading-time metadata
- Avoid publishing empty or placeholder article bodies

### `/journal/[slug]`

- Use an editorial article template with a strong image treatment
- Include author/byline only if real
- Add pull quotes, related articles, and share behavior only when useful
- Do not fabricate authorship

### `/contact`

- Lead with address, hours, phone, email, map, and directions
- Give the map an accessible title
- Use a validated contact form with real submission states
- Keep `tel:`, `mailto:`, and directions actions obvious

### `/faq`, `/careers`, `/accessibility`, and legal pages

- Use a focused, highly readable text system
- Group FAQ items by useful categories
- Fix shipping/hours contradictions only when the client supplies the correct fact
- Remove `DATA REQUIRED` from production
- Include last-updated dates for legal and accessibility content where known
- Add table-of-contents treatment only to genuinely long documents
- Do not hide important content behind decorative interactions

---

## 9. Imagery and art direction

Use the real Harman photography as the visual foundation.

Required actions:

- Audit every rendered image against its actual pixel dimensions and displayed aspect ratio
- Replace the duplicated `sunsetClose`/Place aerial choice when used as a large closing hero; the asset is no longer the earlier 960×282 file, but the editorial reuse and tall crop still need a decision
- Correct the family, pizza, gather, craft, and food/wine crops where declared and rendered aspect ratios disagree
- Stop stretching or upscaling low-resolution files into large containers
- Use the existing unused high-resolution photography where it improves the story
- Complete and standardize the existing desktop/mobile focal-point implementation; do not expose a separate unused `mobileFocal` boolean
- Use accurate `sizes` for every responsive image
- Load only the actual hero eagerly
- Do not mark entire carousels or rails as high priority
- Use the current local Next.js image recommendations from the installed documentation
- Keep local bottle images as the primary source and remote Ecwid images as fallback
- Remove duplicate image registrations and make one media model authoritative
- Remove orphaned Create Next App assets after confirming no usage

Art direction:

- Prefer real environmental portraits over generic posed lifestyle imagery
- Show actual work, hands, vines, food, rooms, and regional setting
- Use documentary sharpness for farm/craft sections
- Use softer coastal light for hospitality and family sections
- Use bottle macro photography for product moments
- Keep overlays subtle and consistent
- Never place body copy over an image without a tested contrast-safe scrim
- Use meaningful alt text; decorative images should have empty alt text
- Do not use a texture so strong that it resembles parchment filters

---

## 10. Motion and interaction

Motion should feel like a camera settling, not a slideshow.

Implement:

- Shared motion easing and duration tokens
- Restrained section reveals
- Subtle image scale no greater than approximately 1.03–1.04
- Crossfades for season and craft panels
- Smooth internal navigation that respects reduced motion
- Header transition between transparent hero and solid interior states
- Wine rail controls with clear active/disabled states
- Button and card hover/focus feedback
- Loading and error transitions for forms and third-party embeds

Avoid:

- Long repeated fade-up animations on every element
- Fast parallax
- Cursor followers
- Scroll-jacking
- Large scale jumps
- Animated gradients
- Continuous motion
- Motion that shifts layout or causes CLS

All nonessential motion must respect `prefers-reduced-motion`. The site must remain fully usable with animation disabled.

---

## 11. Responsive requirements

Validate at minimum:

- 360×800
- 390×844
- 768×1024
- 1024×768
- 1280×800
- 1440×1000
- 1920×1080

Requirements:

- No page-level horizontal overflow
- Horizontal overflow is allowed only inside intentional rails, and the next-item peek must be visible
- All body text remains at least 16px unless it is a nonessential legal micro-label that still meets usability requirements
- Interactive targets are at least 44×44px
- The mobile header has complete navigation
- Tablet has complete navigation
- The sticky booking bar respects iOS safe areas and does not cover the final call to action
- Hero copy and primary action remain visible in the first viewport
- Image focal points are intentional at every breakpoint
- Multi-column content becomes a logical single-column reading order
- Tables and long product data become readable cards or stacked rows
- No horizontal page scroll may be caused by decorative transforms
- Landscape mobile and short viewports must not clip menus, dialogs, or booking content
- 200% zoom and 320px CSS width must remain usable where possible

Do not add arbitrary one-off breakpoints. Prefer a small set of coherent layout changes.

---

## 12. Accessibility requirements

Target WCAG 2.2 AA.

Required work:

- Fix all known text contrast failures
- Use surface-specific muted text colors
- Use a visible focus ring on light, dark, and image backgrounds
- Implement real ARIA tabs for season and craft controls, including arrow-key behavior
- Fix invalid ordered-list markup in `ChapterRegion`
- Add accessible names and descriptions to all icon-only controls
- Add proper dialog semantics, Escape handling, focus trap, and focus restoration to the mobile navigation
- Ensure hidden interactive content is removed from the tab order
- Give the map iframe an accessible title
- Associate every form control with a visible label
- Add field-level validation, summary errors, focus management, loading, success, and failure states
- Preserve logical heading hierarchy and one H1 per page
- Use `aria-current` for the active route
- Ensure touch targets and focus states are visible
- Preserve content if JavaScript or third-party embeds fail
- Do not use color as the only status indicator
- Ensure reduced-motion mode is complete

---

## 13. Forms, commerce, and booking

### Forms

- Do not simulate a successful request.
- Do not immediately display “sent” after opening a mail client.
- Use a real endpoint if one exists.
- If no endpoint exists, use an honest email fallback and label it clearly.
- Add validation, loading, error, and retry behavior.
- Do not log personal information.

### Ecwid

- Scope Ecwid loading to routes that need it
- Do not load the storefront globally on story, journal, legal, or accessibility pages
- Use Next.js navigation for internal destinations where possible
- Ensure bag, cart, buy, and pending states are visually consistent
- Add loading and unavailable states
- Do not duplicate the Button system inside the Ecwid components

### NowBookIt

- Brand the embed without hiding that it is a booking widget
- Give it a clear loading state, fallback, and error state
- Ensure responsive height and no clipping
- Connect the existing booking steps to real state, or remove the parallel stepper if the provider cannot accept those choices
- Preserve direct booking as the highest-priority conversion

---

## 14. Loading, error, and empty states

Evolve the baseline loading, error, and not-found routes into complete on-brand states for:

- Route loading
- Product and wine loading
- Journal loading
- Booking embed loading
- Booking embed failure
- Storefront unavailable
- Form errors
- Empty filters
- No upcoming events
- 404
- Route-level error
- Cart unavailable

Do not use a generic spinner as the entire experience. Use a quiet skeleton, crop frame, rule, or editorial placeholder that matches the design system.

Every error state must offer a useful retry, fallback, contact path, or navigation action.

---

## 15. Content and factual integrity

Use only facts already present in the project or explicitly supplied by the client.

Do not invent:

- Awards
- Opening hours
- Prices
- Capacities
- Awards dates
- Family history
- Sustainability claims
- Product tasting notes
- Shipping policies
- Gift terms
- Function packages
- Event dates
- Royal lineage
- Certifications

Before finishing, surface all remaining content blockers. The production UI must not display:

- `DATA REQUIRED`
- Fake success messages
- Stale events marked as upcoming
- Contradictory hours or shipping statements
- Broken navigation paths
- Empty buttons or decorative controls

When content is missing, hide or gracefully degrade the affected block rather than inventing a replacement.

---

## 16. SEO, metadata, and brand assets

Improve:

- Per-route metadata
- Open Graph and social images
- Favicon and app icons
- Web manifest colors
- Canonicals where needed
- Product, Event, Restaurant, Winery, and FAQ structured data
- Breadcrumb semantics where useful
- Sitemap coverage
- `lang="en-AU"`
- Social preview composition

Use real approved logo and award assets. Do not fabricate a formal crest or represent the existing logo as a royal emblem.

Remove default Create Next App branding and assets after confirming no usage.

---

## 17. Performance requirements

Target:

- Mobile LCP below 2.5 seconds on a typical mobile profile
- CLS below 0.1
- INP below 200ms
- No layout shift from images, embeds, fonts, or motion
- No commerce JavaScript on non-commerce routes
- No eager loading of below-fold images
- No unnecessary third-party requests
- No full-page hard navigation for internal routes
- No oversized unoptimized PNG assets in the critical path

Audit image dimensions and formats. Preserve quality while reducing unnecessary transfer size.

Do not claim performance improvements without browser or build evidence.

---

## 18. Implementation sequence

Work in buildable phases. Do not leave the repository broken between phases.

### Phase 1 — Audit and foundation

- Read local Next.js documentation
- Capture the current route and component map
- Fix CSS cascade and token ownership
- Fix contrast, focus, typography floor, and manifest colors
- Define or remove missing utility classes
- Establish shared container, typography, and motion primitives
- Run lint and TypeScript checks

### Phase 2 — Shared chrome and primitives

- Rebuild the header and mobile navigation
- Fix tablet navigation
- Rebuild the footer hierarchy
- Update buttons, fields, page heroes, images, and states
- Scope commerce and booking integrations appropriately

### Phase 3 — Homepage

- Restructure the narrative
- Create the estate index signature interaction
- Use three or more distinct layout grammars
- Correct seasonal and craft tabs
- Correct the wine rail and image behavior
- Correct deep links and awards order

### Phase 4 — Interior pages

- Implement the route-specific plans above
- Replace flat heroes where photography improves the experience
- Add editorial templates for wines, journal, functions, gift, and visit content
- Add complete forms, embeds, states, and empty states

### Phase 5 — Content and SEO

- Resolve or surface all content blockers
- Correct route links and IA
- Add metadata, icons, OG assets, and structured data
- Remove stale and duplicate content

### Phase 6 — Verification

- Run automated checks
- Run browser QA at all target viewports
- Test keyboard and reduced-motion behavior
- Inspect image loading and layout shift
- Test every primary navigation and conversion path
- Confirm no placeholder or false-success content remains

Do not stop after the homepage. The requested result is a coherent premium system across the full project.

---

## 19. Required validation commands

Run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

If package scripts change, use the equivalent project commands and document the change.

Also verify in a real browser:

- `/`
- `/our-story`
- `/wine`
- One `/wine/[slug]` page
- `/visit`
- `/visit/cellar-door`
- `/visit/menu`
- `/visit/book`
- `/visit/events`
- `/functions`
- `/gift`
- `/journal`
- One `/journal/[slug]` page
- `/contact`
- `/faq`
- `/accessibility`
- Legal routes
- `/shop`
- 404 state

Check:

- No console errors
- No unexpected failed requests
- No page-level horizontal overflow
- Correct header state per page
- Complete tablet/mobile navigation
- Working keyboard focus and dialogs
- Working tabs
- Correct image focal points
- Working buy/cart/booking paths
- No false form success
- No placeholder content
- Correct reduced-motion behavior
- Correct 404/error/loading states

---

## 20. Acceptance criteria

The redesign is complete only when:

1. It is recognizably Harman Wines and grounded in its real Gippsland property, people, farm, wines, food, and hospitality.
2. It creates a clearly new visual identity rather than copying the live WordPress site.
3. It feels premium through craft, hierarchy, spacing, typography, and content—not through gold effects or generic luxury decoration.
4. “Royal” reads as precision, provenance, confidence, and hospitality.
5. “Farm” remains visible and authentic through real land, labor, produce, and people.
6. “Wine” feels elevated through bottle, vintage, process, and product storytelling.
7. The homepage is substantially more focused and memorable than the current repetitive chapter sequence.
8. Interior pages share a coherent system while having page-specific layouts.
9. The design works at all target viewport sizes with no page-level horizontal overflow.
10. Tablet users retain complete navigation.
11. Text contrast, focus indicators, target sizes, dialogs, tabs, forms, and headings meet WCAG 2.2 AA.
12. The site respects reduced-motion preferences.
13. No low-resolution image is stretched into a large hero.
14. Mobile and desktop focal points are genuinely implemented.
15. Ecwid and NowBookIt feel integrated, resilient, and honest.
16. No visible `DATA REQUIRED`, false success, fake history, or stale event is shipped.
17. Only necessary commerce code loads on commerce routes.
18. Lint, TypeScript, and production build pass.
19. Browser QA passes with no console errors or unexpected failed requests.
20. The final result feels like a world-class private coastal estate with rural soul—not a generic winery template.

---

## 21. Final delivery expectation

When implementing, provide:

- A concise summary of the visual and UX decisions
- A list of changed files grouped by foundation, shared components, homepage, interior pages, integrations, and content
- Any client-supplied content still required
- Any integration limitations that cannot be solved safely in the frontend
- Exact lint, typecheck, build, and browser verification results
- Before/after screenshots for mobile, tablet, and desktop
- Confirmation that no placeholder content, false success states, or known accessibility regressions remain

Make the result coherent, production-ready, and unmistakably premium. Do not stop at suggestions or a superficial restyle.
