@AGENTS.md
@design.md

# Project Overview

**Sasha Elisabeth — Vaktherapie en Coaching**
Website for a Dutch art therapy and coaching practice.

## Architecture

- **Framework:** Next.js (App Router) with Tailwind CSS v4
- **Structure:** Single-page application — all content lives on `/` (page.tsx), scrolling through sections with anchor links (`#home`, `#aanbod`, `#over-mij`, `#contact`)
- **Fonts:** Bodoni Moda (logo), Cormorant Garamond (display/headings), Dancing Script (script accent), Jost (body/UI) — all loaded via `next/font/google` in `layout.tsx`
- **Styling:** CSS variables in `globals.css`, inline styles in components. No Tailwind utility classes in JSX — use CSS variables and inline styles for consistency with the design system.

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Single-page layout (all sections) |
| `src/app/layout.tsx` | Root layout — fonts + Nav |
| `src/app/globals.css` | Design tokens, CSS variables, utility classes |
| `src/components/Nav.tsx` | Fixed nav with scrollspy, anchor links, mobile hamburger |
| `src/components/ContactForm.tsx` | Client component — contact form with success state |
| `design.md` | Full design system reference |

## Sections (in scroll order)

1. `#home` — Hero split (dark olive panel + warm gradient)
2. `#aanbod` — Three offering cards: Teambuilding, Individuele Coaching, Vrouwenprogramma
3. `#over-mij` — Photo + personal intro + qualification tags
4. `#contact` — Contact info + form

## Design Tokens (quick reference)

```css
--bg:       #f7efd2  /* parchment background */
--ink:      #52451b  /* olive brown — primary text */
--accent-1: #52451b  /* olive brown */
--accent-2: #79301f  /* burnt sienna */
--accent-3: #f6d8cc  /* blush peach */
--accent-4: #790013  /* crimson */
--accent-5: #acb3c6  /* steel blue */
```

## Conventions

- **Server components by default** — extract interactive elements (hover handlers, form state, scroll events) into `"use client"` components
- **Anchor links** for nav, not `next/link` — the site is single-page
- **Dutch language** throughout — content is for a Dutch-speaking audience
- **Placeholder content** — all copy, prices, and the photo placeholder are ready to be replaced with real content
