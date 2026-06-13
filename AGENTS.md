# AGENTS.md — Portfolio Architecture Guide

This file describes the project architecture, conventions, and non-obvious decisions for AI agents working on this codebase.

## Project Overview

A personal developer portfolio for a GIS and Fullstack programmer (Lutfi Wirawan). Built with TanStack Start on Netlify, using `@content-collections` for Markdown-driven content. The design uses a dark, cartographic/GIS-inspired aesthetic (dark navy background, emerald green and cyan accents, JetBrains Mono for technical labels).

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19) |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (dark GIS theme) |
| Content | `@content-collections` (type-safe Markdown) |
| Language | TypeScript 5 (strict) |
| Deployment | Netlify |

## Directory Structure

```
content/
  blog/       — Blog posts (title, date, summary, tags, author)
  projects/   — Portfolio projects (title, description, tags, github?, liveUrl?)
  jobs/       — Work history (jobTitle, company, location, startDate, endDate?, summary, tags, content)
  education/  — Education (school, summary, startDate, endDate?, tags, content)

public/
  contact.html          — Standalone contact page (Netlify Forms, self-contained CSS)
  headshot-on-white.jpg — Profile photo used on resume page

src/
  routes/
    __root.tsx    — Root layout: Navigation + Footer via component: RootLayout
    index.tsx     — Home: hero + animated SVG map + skills grid
    projects.tsx  — Project cards from content-collections
    resume.tsx    — CV: jobs + education + skills
    blog/
      index.tsx   — Blog listing
      $slug.tsx   — Individual post reader
  components/ui/  — shadcn/ui primitives (available but not used in main redesigned routes)
  styles.css      — Tailwind v4 config + dark theme CSS variables + custom utility classes
```

## Key Conventions

### Styling approach
- **Main route files use inline `style={}` props** for GIS theme control, not Tailwind class names. This avoids precedence conflicts with the default light-theme Tailwind utilities.
- Tailwind CSS v4 theme variables are defined in `src/styles.css` under `:root`. Colors use the `oklch()` function.
- Custom CSS classes (`.gis-grid-bg`, `.card-lift`, `.skill-pill`, `.coord-label`) are in `src/styles.css`.
- Google Fonts are imported via `@import url(...)` at the very top of `styles.css` — this must remain before `@import "tailwindcss"`.
- Theme palette: emerald green `oklch(0.74 0.19 162)`, cyan `oklch(0.70 0.16 200)`, amber `oklch(0.78 0.16 72)`, dark navy background `oklch(0.07 0.022 218)`.

### Content Collections
- Schemas live in `content-collections.ts`. Adding a field requires updating both the schema and the consuming route.
- The `content` field in jobs/education frontmatter is a raw markdown string rendered via `marked()` in `resume.tsx`.
- Blog post bodies are in the markdown body (auto-captured by content-collections as `content`).

### Routing
- Root route (`__root.tsx`) uses both `shellComponent` (HTML shell) and `component: RootLayout` (shared nav/footer wrapper with `<Outlet />`).
- Blog listing is at `/blog` (not `/`). Home page (`/`) is the hero landing page.
- Contact page is a static HTML file at `public/contact.html` — served outside TanStack app for Netlify Forms compatibility.

### GIS Design Identity
- The animated coordinate-grid SVG in `index.tsx` uses native SVG `<animate>` elements.
- Design motifs: coordinate labels, scale bars, LIVE badges, monospace technical text, topographic contour lines.
- Font stack: Syne (headings/brand), DM Sans (body), JetBrains Mono (coordinates/code).

## Non-Obvious Decisions

- **Static contact page**: `public/contact.html` avoids SSR complications with Netlify Forms. Netlify requires the `<form>` to exist in a static HTML page for automatic detection.
- **Inline styles over Tailwind in routes**: The default Tailwind config produces light-theme utilities; rather than fight specificity, key UI uses inline styles while Tailwind utilities are used for prose/layout helpers.
- **`content` field in frontmatter**: Jobs and education store detailed descriptions in a frontmatter `content:` field (not the markdown body), keeping the brief `summary` and long-form details clearly separated.
