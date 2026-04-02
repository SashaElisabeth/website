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

## Responsive Breakpoints

Layout is driven by CSS classes in `globals.css` — inline styles handle colours/typography only, never layout.

| Breakpoint | Width | Key behaviour |
|------------|-------|---------------|
| Desktop | ≥ 1024px | 3-col offerings, 2-col about/contact, full hero split |
| iPad | 641–1023px | 2-col offerings, hero stacks (photo below, min-height: 400px) |
| Mobile | ≤ 640px | Single column everywhere, hero stacks (photo below, min-height: 280px) |

**Hero photo panel:** currently a warm gradient placeholder. `min-height` is set per breakpoint so it remains visible when the split collapses. Replace the gradient background with a real `<Image>` when photos are available — the `hero-photo` class and min-heights are already in place.

## Conventions

- **Server components by default** — extract interactive elements (hover handlers, form state, scroll events) into `"use client"` components
- **Responsive layout via CSS classes** — add/modify breakpoints in `globals.css`, not in inline styles
- **Anchor links** for nav, not `next/link` — the site is single-page
- **Nav is always opaque** — parchment background at all times, no transparent/scroll transition
- **Dutch language** throughout — content is for a Dutch-speaking audience
- **Placeholder content** — all copy, prices, and the photo placeholder are ready to be replaced with real content

## Shortcuts

| Command | Action |
|---------|--------|
| `save` | Update CLAUDE.md + commit + push to main |
| `quick save` | Update CLAUDE.md + commit (no push) |
