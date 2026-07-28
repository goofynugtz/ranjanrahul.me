# Projects page redesign — design

## Goal
Redesign `/projects` (`src/pages/projects/index.tsx`) with a responsive bento-grid layout, and fix the dark/light theme thumbnail flicker. Project data (`src/config/projects.ts`) is left untouched — some entries are undeployed/in-progress, user will update later.

## Current state
- Layout: JS-computed masonry (`useMedia` + `useMeasure` + manual column packing) driving absolutely-positioned cards.
- Thumbnails: `background-image: var(--project-N)`, where `--project-N` is redefined per theme in `globals.css` (`.dark`/`.light` classes on `<html>`, via `next-themes` `attribute='class'`).
- Flicker cause: toggling theme swaps the `--project-N` value to a different image URL. If that image isn't already decoded/cached, the browser shows a blank/transparent frame while it fetches — visible flash.
- Dead CSS: `[data-theme="dark"] .overlay` / `[data-theme="light"] .overlay` in `projects.module.css` never match anything, since the theme is applied as a class, not a `data-theme` attribute. These rules are unreachable and should be removed as part of the overlay styling cleanup (touches the file we're already rewriting).

## Layout
CSS Grid bento pattern, repeating every 4 projects (works for any project count, no per-index custom classes):
- slot 0 (4n+0): featured — spans 2 cols × 2 rows
- slot 1 (4n+1): small tile, top-right
- slot 2 (4n+2): small tile, below slot 1
- slot 3 (4n+3): wide tile, full width strip beneath

Selector approach: `:nth-child(4n+1)` etc. on the card wrapper (1-indexed), styled purely in CSS — no JS positioning math.

### Breakpoints
- `>=1200px`: full bento as above.
- `768-1199px`: 2-column grid; featured tile spans both columns (tall), other tiles single column.
- `<768px`: single-column stack; every tile same treatment/height (image top, title/description below) — no featured emphasis on mobile.

## Components
- Delete `useMedia`, `useMeasure`, and the `masonryGrid` positioning `useMemo` from `src/pages/projects/index.tsx` — CSS Grid + media queries replace this natively.
- Card markup stays close to current: thumbnail div (bg image via CSS var), hover overlay with title + description (existing `.overlay`/`.overlayContent` styles carry over), github/deploy link icons.
- `projects.module.css`: replace the fixed `.project1`..`.project5` position rules with the repeating `:nth-child` bento rules described above; remove dead `[data-theme]` overlay rules (superseded — overlay visibility/contrast should key off `.dark`/`.light` same as the rest of the site).

## Flicker fix
No architecture change to the CSS-var theming approach — it works, just needs both images warmed in cache before the first toggle.

- In the page's `<Head>`, emit one `<link rel="preload" as="image" href="...">` per thumbnail (both `dark` and `light` variants) for every entry in `projects`.
- Browser fetches/decodes both variants on page load; the later `--project-N` var swap on theme toggle is then just an instant repaint of an already-decoded image, no network round trip mid-transition.

## Data / interface
No changes to `src/interface/index.ts` `project` type and no changes to `src/config/projects.ts`. (Status badge feature considered, explicitly declined by user.)

## Graphics
No new images required — thumbnails render via `background-size: cover`, so existing assets adapt to whichever tile size (featured vs small) they land in. Guidance only, not blocking: future thumbnails ideally landscape screenshots ≥1600×1000px for sharpness at the large featured size.

## Verification
- Manual: load `/projects` at desktop/tablet/mobile widths, confirm bento layout collapses per breakpoints above.
- Manual: toggle theme repeatedly on `/projects`, confirm no visible flash/blank frame on thumbnails (throttle network in devtools to Slow 3G to make a regression obvious).
- `next build` / typecheck passes after hook removal.
