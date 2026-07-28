# Projects Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the JS-computed masonry layout on `/projects` with a responsive CSS-grid bento layout, add real github/deploy links per card, and eliminate the dark/light theme thumbnail flicker.

**Architecture:** Pure CSS Grid with `:nth-child(4n±k)` structural selectors drives the bento pattern (featured tile + 2 stacked + 1 wide strip, repeating every 4 projects) — no JS layout math. Each card gets its own two thumbnail URLs as inline CSS custom properties (`--thumb-light`/`--thumb-dark`); a single `:global(.dark) .thumbnail` rule picks the right one, so adding/removing projects never touches global CSS. Flicker is fixed by `<link rel="preload" as="image">` tags for every thumbnail (both variants) in `<Head>`, so both images are already decoded before the user ever toggles theme.

**Tech Stack:** Next.js (Pages Router), CSS Modules, `next-themes` (class-based), `react-icons` (already a dependency — no new packages).

## Global Constraints

- No new npm dependencies.
- Do not modify `src/config/projects.ts` or `src/interface/index.ts` (project data/shape is out of scope — owner is fixing it separately).
- This repo has no test runner (no jest/vitest in `package.json`). "Testing" a task means: TypeScript compiles cleanly (`npx tsc --noEmit`) and a manual check in the running dev server (`npm run dev`) at the three breakpoints (`>=1200px`, `768-1199px`, `<768px`) plus a theme toggle check.
- Base font sizing is `html { font-size: 62.5% }` (from `src/styles/globals.css:146`), so `1rem == 10px` throughout — rem values below are chosen against that.

---

### Task 1: Remove the now-dead per-project theme vars from `globals.css`

The bento redesign moves thumbnail dark/light selection to a generic per-card CSS custom property (Task 2), so the five hardcoded `--project-1` … `--project-5` vars in `.dark`/`.light` become unused. Deleting them now (small, isolated) avoids leaving dead CSS behind the refactor.

**Files:**
- Modify: `src/styles/globals.css:67-71` (inside `.dark { ... }`)
- Modify: `src/styles/globals.css:119-123` (inside `.light { ... }`)

**Interfaces:** None — pure deletion, nothing downstream depends on these vars after Task 2/3 land. (Note: Task 2 and Task 3 must land before or together with this task in the same commit sequence, since `projects.module.css` currently reads these vars — see Task 2.)

- [ ] **Step 1: Delete the five `--project-N` lines from the `.dark` block**

In `src/styles/globals.css`, inside the `.dark { ... }` rule, remove these lines:

```css
	--project-1: url("/projects/gpt_dark.png");
	--project-2: url("/projects/indiaAtStats.png");
	--project-3: url("/projects/search-enigne-dark.png");
	--project-4: url("/projects/hire-alert_dark.png");
	--project-5: url("/projects/pacman_dark.png");
```

The line immediately before them (`--corner-radius: .75rem;`) and after them (`--background: oklch(0.145 0 0);`) stay — you're deleting only the 5 `--project-N` lines between them.

- [ ] **Step 2: Delete the five `--project-N` lines from the `.light` block**

In the same file, inside the `.light { ... }` rule, remove:

```css
	--project-1: url("/projects/gpt_light.png");
	--project-2: url("/projects/indiaAtStats.png");
	--project-3: url("/projects/search-enigne-light.png");
	--project-4: url("/projects/hire-alert_light.png");
	--project-5: url("/projects/pacman_light.png");
```

- [ ] **Step 3: Verify the deletions took effect in this file**

Run: `grep -n "project-1\|project-2\|project-3\|project-4\|project-5" src/styles/globals.css`
Expected: no matches. (`src/styles/projects.module.css` still references these vars at this point in the plan — Task 2 removes that usage. The repo-wide check that both are gone happens in Task 4, Step 1.)

- [ ] **Step 4: Commit**

```bash
git add src/styles/globals.css
git commit -m "refactor: drop dead per-project theme CSS vars"
```

---

### Task 2: Rewrite `src/styles/projects.module.css` for the bento grid

**Files:**
- Modify (full rewrite): `src/styles/projects.module.css`

**Interfaces:**
- Produces (class names Task 3's component must use exactly): `.projects`, `.a`, `.heading`, `.grid`, `.card`, `.thumbnail`, `.overlay`, `.overlayContent`, `.overlayTitle`, `.overlayDescription`, `.overlayLinks`, `.iconLink`, `.title`, `.description`.
- Consumes: two inline CSS custom properties set per-card by Task 3: `--thumb-light`, `--thumb-dark` (each a `url(...)` value).
- Consumes: the global `.dark` class next-themes applies to `<html>` (from `_app.tsx`'s `ThemeProvider attribute='class'`) — referenced here via `:global(.dark)`.

- [ ] **Step 1: Replace the full file contents**

Replace all of `src/styles/projects.module.css` with:

```css
.a {
  color: var(--accent-color);
}

.projects {
  margin: 0 5rem;
}

@media only screen and (max-width: 768px) {
  .projects {
    margin: 0 3rem;
  }
}

.heading {
  position: relative;
  margin: 4rem 0;
  font-size: 3rem;
}

.heading::after {
  position: absolute;
  content: "";
  height: 1px;
  background-color: var(--transparency-level-2);
  width: 15rem;
  margin-left: 25px;
  top: 50%;
}

@media only screen and (max-width: 500px) {
  .heading::after {
    width: 5rem;
  }
}

/* Bento grid: pattern repeats every 4 cards */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 18rem;
  grid-auto-flow: row dense;
  gap: 2rem;
}

.card:nth-child(4n+1) {
  grid-column: span 2;
  grid-row: span 2;
}

.card:nth-child(4n+2),
.card:nth-child(4n+3) {
  grid-column: span 1;
  grid-row: span 1;
}

.card:nth-child(4n) {
  grid-column: span 3;
  grid-row: span 1;
}

@media only screen and (max-width: 1199px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card:nth-child(4n) {
    grid-column: span 2;
  }
}

@media only screen and (max-width: 767px) {
  .grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .card {
    height: 22rem;
  }
}

.card {
  position: relative;
  border-radius: var(--corner-radius);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Both dark/light thumbnails are preloaded (see Head in index.tsx);
   swapping which var wins on theme toggle is then just a repaint. */
.thumbnail {
  position: absolute;
  inset: 0;
  background-image: var(--thumb-light);
  background-size: cover;
  background-position: center;
}

:global(.dark) .thumbnail {
  background-image: var(--thumb-dark);
}

.title,
.description {
  position: relative;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.4rem;
  line-height: 1.5;
}

@media only screen and (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1.2rem;
  }
}

/* Hover overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--corner-radius);
  backdrop-filter: blur(10px);
}

:global(.dark) .overlay {
  background: rgba(255, 255, 255, 0.15);
}

.card:hover .overlay {
  opacity: 1;
}

.card:hover .title,
.card:hover .description {
  opacity: 0;
}

.overlayContent {
  text-align: center;
  padding: 2rem;
  color: var(--font-color-primary);
}

.overlayTitle {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: inherit;
}

.overlayDescription {
  font-size: 1.4rem;
  line-height: 1.5;
  color: inherit;
}

.overlayLinks {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  font-size: 2rem;
}

.iconLink {
  color: inherit;
  display: flex;
  transition: color 0.2s ease;
}

.iconLink:hover {
  color: var(--accent-color);
}

@media only screen and (max-width: 768px) {
  .overlayTitle {
    font-size: 2rem;
  }

  .overlayDescription {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 500px) {
  .overlayTitle {
    font-size: 1.8rem;
  }

  .overlayDescription {
    font-size: 1.1rem;
  }

  .overlayContent {
    padding: 1.5rem;
  }
}
```

- [ ] **Step 2: Verify the old fixed-position classes are gone**

Run: `grep -n "project1\|project2\|project3\|masonryContainer\|masonryProject" src/styles/projects.module.css`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add src/styles/projects.module.css
git commit -m "refactor: bento grid CSS for projects page"
```

---

### Task 3: Rewrite `src/pages/projects/index.tsx`

**Files:**
- Modify (full rewrite): `src/pages/projects/index.tsx`

**Interfaces:**
- Consumes: `styles.projects`, `styles.a`, `styles.heading`, `styles.grid`, `styles.card`, `styles.thumbnail`, `styles.overlay`, `styles.overlayContent`, `styles.overlayTitle`, `styles.overlayDescription`, `styles.overlayLinks`, `styles.iconLink`, `styles.title`, `styles.description` — all produced by Task 2.
- Consumes: `projects` array from `src/config/projects.ts` (`project[]`, fields: `title`, `description`, `github`, `deployment`, `thumbnail: { dark, light }` — from `src/interface/index.ts`, unchanged).
- Produces: sets `--thumb-light` / `--thumb-dark` inline custom properties per card, which Task 2's CSS consumes.

- [ ] **Step 1: Replace the full file contents**

Replace all of `src/pages/projects/index.tsx` with:

```tsx
import Head from 'next/head'
import Navbar from "../../components/navbar";
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../../styles/projects.module.css'
import { projects } from '../../config/projects';

export default function FeaturedProjects() {
  const preloadSrcs = projects.flatMap((project) => [project.thumbnail.dark, project.thumbnail.light]);

  return (
    <>
      <Head>
        <title>Featured &#124; Ranjan Rahul</title>
        {preloadSrcs.map((src, i) => (
          <link key={i} rel="preload" as="image" href={src} />
        ))}
      </Head>
      <Navbar />
      <div className={styles.projects}>
        <h1 className={styles.heading}>Featured Projects</h1>
        <p>These are kind of outdated and I&apos;m just lazy to create thumbnails && update them. Please go through my <Link href="https://github.com/goofynugtz" className={styles.a}>Github</Link>.</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div
                className={styles.thumbnail}
                style={{
                  '--thumb-light': `url(${project.thumbnail.light})`,
                  '--thumb-dark': `url(${project.thumbnail.dark})`,
                } as React.CSSProperties}
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayTitle}>{project.title}</div>
                  <div className={styles.overlayDescription}>{project.description}</div>
                  <div className={styles.overlayLinks}>
                    <Link
                      href={project.deployment}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.iconLink}
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <FiExternalLink />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} source on GitHub`}
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.description}>{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors. (If `React` isn't in scope for the `React.CSSProperties` type reference, add `import type { CSSProperties } from 'react'` and use `CSSProperties` instead — Next.js's `jsx: react-jsx` setting usually makes the global `React` namespace type-only reference work without an import, but fix this way if `tsc` complains `Cannot find namespace 'React'`.)

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/index.tsx
git commit -m "refactor: drop JS masonry layout, use CSS grid + add github/deploy links"
```

---

### Task 4: Manual verification pass

**Files:** None (verification only).

- [ ] **Step 1: Re-run the dead-var grep from Task 1**

Run: `grep -rn "project-1\|project-2\|project-3\|project-4\|project-5" src/`
Expected: no matches now that Tasks 1-3 have all landed.

- [ ] **Step 2: Start the dev server**

Run: `npm run dev`
Expected: starts without errors, prints a local URL (e.g. `http://localhost:3000`).

- [ ] **Step 3: Check the bento layout at desktop width**

Open `http://localhost:3000/projects` in a browser window ≥1200px wide.
Expected: first card is large (spans 2 cols × 2 rows), next two stack in the remaining column, fourth card is a wide strip beneath, pattern repeats for the 5th project.

- [ ] **Step 4: Check tablet and mobile breakpoints**

Resize the browser (or use devtools device toolbar) to ~900px wide, then ~400px wide.
Expected at ~900px: 2-column grid, featured card spans both columns.
Expected at ~400px: single-column stack, all cards same height, no overlap.

- [ ] **Step 5: Check hover overlay and links**

Hover a card on desktop.
Expected: overlay fades in with title, description, and two icon links (external-link icon, GitHub icon); title/description underneath fade out. Clicking the GitHub icon opens the project's `github` URL in a new tab; clicking the external-link icon opens `deployment` in a new tab. Neither click navigates the card itself (it's a `div`, not a link).

- [ ] **Step 6: Check the theme-toggle flicker fix**

In devtools, open the Network tab and set throttling to "Slow 3G". Reload `/projects`, wait for the page to finish loading, then click the sun/moon theme toggle in the navbar several times in a row.
Expected: thumbnails switch instantly with no blank/flash frame, even under throttling (because both variants were preloaded via the `<link rel="preload">` tags before the toggle).

- [ ] **Step 7: Final commit (only if verification uncovered fixes)**

If any of Steps 3-6 required a code fix, stage and commit it with a message describing what broke and why, e.g.:

```bash
git add -A
git commit -m "fix: <what broke during manual verification>"
```

If no fixes were needed, skip this step — nothing to commit.
