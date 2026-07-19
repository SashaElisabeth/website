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
| `src/components/Nav.tsx` | Fixed nav with scrollspy, anchor links, mobile hamburger, image logo |
| `public/logo.png` | Brand logo image — used in nav and as favicon |
| `public/portfolio.jpeg` | Portrait photo — hero right panel + over mij section |
| `public/paint 1.jpeg` | Teambuilding photo — card + individual page |
| `public/paint 2.jpeg` | Individuele Coaching photo — card + individual page |
| `public/paint 3.jpeg` | Vrouwen op de werkvloer photo — card + individual page |
| `src/components/ContactForm.tsx` | Client component — contact form, POSTs to `/api/contact` |
| `src/app/api/contact/route.ts` | Route Handler — sends contact form submissions via Resend |
| `.env.example` | Documents required env vars (`RESEND_API_KEY`, etc.) — copy to `.env.local` |
| `design.md` | Full design system reference |

## Sections (in scroll order)

1. `#home` — Full-width, centered hero: `logo.png` (inverted white via `filter: brightness(0) invert(1)`) on a dark chestnut (`--accent-1`) background, `min-height: 100dvh`. No hero photo.
2. `#aanbod` — Three full-width service blocks, each with a 3-col inner grid (Investering | Inbegrepen | Praktisch) + Op maat footer:
   - **Teambuilding** — €850,- base / €30 per extra person (>13), chestnut dark background
   - **Individuele Coaching** — 3 trajectory tiers (5/7/10 sessies), blush peach background
   - **Vrouwenprogramma** — €595 per deelneemster, sage striped background (currently disabled/"binnenkort" — see `COMING_SOON` flag in `vrouwen-op-de-werkvloer/page.tsx`)
3. `#over-mij` — Photo placeholder + personal intro + qualification tags
4. `#contact` — Contact info + form

## Aanbod Layout

Each service block is full-width and uses the `.service-inner` CSS class for its 3-column internal grid:
- Desktop: 3 columns
- iPad: 2 columns
- Mobile: 1 column

Coaching pricing uses `.price-tiers` (3 equal columns, stacks to 1 on mobile).

The three service blocks on the homepage are laid out as a 3-column grid using `.offerings-grid` — each is a compact vertical card (header + photo placeholder + features + price + CTA button). On iPad they collapse to 2 columns, on mobile to 1 column.

## Individual Service Pages

| Route | File |
|-------|------|
| `/teambuilding` | `src/app/teambuilding/page.tsx` |
| `/individuele-coaching` | `src/app/individuele-coaching/page.tsx` |
| `/vrouwen-op-de-werkvloer` | `src/app/vrouwen-op-de-werkvloer/page.tsx` |

All three use the shared `src/components/ServicePageLayout.tsx` template:
- Back button → `/`
- Hero (dark panel)
- "Wat is het" + photo placeholder (2-col)
- Process steps grid
- Inclusions + Practical info (2-col)
- Pricing blocks
- CTA band → `/?service=ServiceName#contact` (auto-fills contact form select)

Layout is driven by CSS classes (`.service-back`, `.service-hero`, `.about-grid`, `.section-pad`, `.service-inner`) — do **not** add inline `padding`, `display`, `gridTemplateColumns`, or `gap` to sections that already carry these classes, as inline styles override the responsive breakpoints.

Each service page passes an `image` prop (e.g. `'/paint 1.jpeg'`) to `ServicePageLayout` which renders it in the "Wat is het" section.

**Contact form auto-fill:** Homepage reads `searchParams.service` (Next.js async, must be awaited) and passes it as `prefilledService` prop to `ContactForm`.

**Dutch strings with apostrophes** (e.g. `thema's`, `jouw's`) must use double-quoted strings to avoid parse errors.

## Contact Form (Resend)

`ContactForm.tsx` POSTs `{ name, email, service, message }` as JSON to `src/app/api/contact/route.ts`, which validates the payload server-side and sends it via [Resend](https://resend.com) (`resend` npm package) to the practice's inbox, with `replyTo` set to the submitter's address so replies go straight to them.

Required env vars (see `.env.example`, copy to `.env.local` — gitignored):
- `RESEND_API_KEY` — from the Resend dashboard. Without it the route returns a controlled 500 and the form shows a Dutch error message (form data is preserved, nothing crashes).
- `RESEND_TO_EMAIL` — inbox that receives submissions (defaults to `sasha_elisabeth@outlook.com`).
- `RESEND_FROM_EMAIL` — sender address; **must be on a domain verified in Resend**. Defaults to the Resend sandbox address (`onboarding@resend.dev`), which only works for testing — set a real verified sender before relying on this in production.

The form shows a loading state (`Versturen…`, disabled button) while the request is in flight, and a Dutch error message on failure instead of the success screen.

## Design Tokens (quick reference)

```css
--bg:        #faf7f0  /* warm ivory background */
--ink:       #40382b  /* espresso — primary text */
--accent-1:  #6d4c3a  /* chestnut brown */
--accent-2:  #9d5233  /* terracotta */
--accent-3:  #f6d8cc  /* blush peach */
--accent-4:  #47624f  /* pine green — CTAs/emphasis */
--accent-5:  #a7b1a0  /* sage — decorative only, not text (fails WCAG as text) */
--muted:     #6f6a5c  /* readable muted text (AA-compliant) — use instead of --accent-5 for text */
```

## Responsive Rule

> **Every feature added for desktop must also work on iPad (641–1023px) and mobile (≤640px).**
> Add all breakpoint overrides in `globals.css` — never via inline styles.
> This is non-negotiable: a feature is not done until all three breakpoints are covered.

## Responsive Breakpoints

Layout is driven by CSS classes in `globals.css` — inline styles handle colours/typography only, never layout.

| Breakpoint | Width | Key behaviour |
|------------|-------|---------------|
| Desktop | ≥ 1024px | 3-col offerings, 2-col about/contact, hero logo max-height 200px |
| iPad | 641–1023px | 2-col offerings, hero logo max-height 150px |
| Mobile | ≤ 640px | Single column everywhere, hero logo max-height 110px |

**Hero:** `.hero` is a full-width `100dvh` flex container centering `.hero-panel` (max-width 760px, centered text). `.hero-logo` (the inverted-white `logo.png`) scales down per breakpoint via the table above — no hero photo.

## Conventions

- **Server components by default** — extract interactive elements (hover handlers, form state, scroll events) into `"use client"` components
- **Responsive layout via CSS classes** — add/modify breakpoints in `globals.css`, not in inline styles
- **Anchor links** for nav, not `next/link` — the site is single-page
- **Nav is always opaque** — parchment background at all times, no transparent/scroll transition
- **Nav logo** — uses `<img src="/logo.png">` with `mix-blend-mode: multiply`. The `<nav>` has no padding; `.nav-logo` class handles responsive left padding (2rem desktop/iPad, 0 + centered on mobile); `.nav-right` class carries padding for the links/hamburger side. No color picker.
- **Dutch language** throughout — content is for a Dutch-speaking audience
- **Placeholder content** — all copy, prices, and the photo placeholder are ready to be replaced with real content
- **Responsive by default** — see the Responsive Rule section above

## Shortcuts

| Command | Action |
|---------|--------|
| `save` | Update CLAUDE.md + commit + push to main |
| `quick save` | Update CLAUDE.md + commit (no push) |
