# WINDSTART — Kite-Surfing Refurbishment 2026

This branch is a **2026 product/design refurbishment** of the original 2019 Kite-Surfing portfolio project.

## Before / After

- **BEFORE — 2019:** branch `master`
  - Bootstrap 4 beta starter theme
  - placeholder copy / Lorem ipsum
  - generic SaaS pricing cards
  - fixed footer and page-wide opacity treatment
- **AFTER — 2026:** branch `refurb-2026`
  - beginner-first kitesurfing school concept
  - editorial watersports design system
  - learning journey and safety content
  - lesson packages designed for the domain
  - spots / Hel Peninsula positioning
  - interactive booking-schedule prototype
  - OpenStreetMap meeting-point preview
  - responsive navigation and reduced-motion support

## Product concept

**WINDSTART** is an English-language portfolio theme for a beginner kitesurfing school.

The UX is structured around a simple journey:

`Discover → Understand → Choose lesson → Choose spot/date → Book → Learn`

The redesign intentionally avoids promising that every student becomes independent after a fixed number of hours. Weather, conditions and individual progress remain part of the story.

## Pages

- `src/index.html` — premium landing page, beginner journey, spots, FAQ
- `src/features.html` — learn / first-day / safety guide
- `src/pricing.html` — lesson packages and equipment information
- `src/contact.html` — booking prototype, generated lesson windows and map
- `src/css/style.css` — 2026 design system and responsive layout
- `src/js/site.js` — navigation + booking prototype logic

## Photography strategy

The 2026 concept uses a **hybrid approach**:

1. selected original repository photography is retained as a heritage element;
2. free Pexels images are used where the redesign needs beginner/instructor or equipment storytelling;
3. depicted people are illustrative and are **not presented as real WINDSTART staff or endorsers**;
4. a production implementation should download, optimize and serve final assets locally as WebP/AVIF rather than relying on remote demo URLs.

### Pexels demo sources

- Beginner lesson / instructors in shallow water — Serg Alesenko, Pexels: https://www.pexels.com/photo/a-kitesurfing-lesson-13871355/
- Kite setup on the beach — Lorenzo Manera, Pexels: https://www.pexels.com/photo/kitesurfers-preparing-on-a-beach-at-sunset-34286743/
- Kitesurfing equipment — Richard REVEL, Pexels: https://www.pexels.com/photo/kitesurfing-board-and-sail-at-beach-27129358/

Pexels content is used under the Pexels License. Attribution is not required, but credits are retained in this portfolio project for clarity.

## Important demo limitations

This is a portfolio concept, not an operating kitesurfing school.

- displayed prices are demo prices;
- generated schedule slots are not real availability;
- the booking form does not transmit data or take payments;
- lesson copy is product-design content and not a substitute for qualified in-person instruction;
- the map uses Jastarnia / Hel Peninsula as the concept location.

## Running locally

The 2026 front end is plain HTML/CSS/JavaScript and does not require the legacy Gulp workflow.

Open `src/index.html` in a local server or serve the `src/` directory with any static server.

Example:

```bash
python -m http.server 8080 --directory src
```

Then open `http://localhost:8080`.
