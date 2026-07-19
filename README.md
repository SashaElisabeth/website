<p align="center">
  <img src="public/logo.png" alt="Sasha Elisabeth — Vaktherapie en Coaching" width="240">
</p>

# Sasha Elisabeth — Vaktherapie en Coaching

[![Netlify Status](https://api.netlify.com/api/v1/badges/b17af548-611c-4dfe-9bcc-22b1da1ed433/deploy-status)](https://app.netlify.com/projects/sashaelisabeth/deploys)

Next.js (App Router) website for a Dutch art therapy and coaching practice. Bilingual: Dutch (default) and English via `next-intl` (`/` and `/en`).

## About

Sasha Elisabeth offers and Teambuilding & Coaching — helping people make visible what's happening beneath the surface. The site is a single-page marketing/booking site covering three offerings:

-   **Teambuilding** — group sessions for teams, built around creative, image-based collaboration
-   **Individuele Coaching** — 1-on-1 trajectories (5/7/10 sessions) for personal or work-related growth
-   **Vrouwen op de Werkvloer** — a coaching program for women in the workplace

Visitors can read about each offering, learn about Sasha's background, and get in touch through a contact form that routes straight to her inbox.

## Tech stack

-   **[Next.js](https://nextjs.org)** 16 (App Router, Turbopack) — React framework
-   **[React](https://react.dev)** 19
-   **TypeScript** — strict mode
-   **[Tailwind CSS](https://tailwindcss.com)** v4 — imported but largely unused in favour of CSS variables and inline styles (see `design.md`)
-   **[next-intl](https://next-intl.dev)** — bilingual routing, translations, locale detection
-   **[Resend](https://resend.com)** — transactional email for the contact form
-   Hosted on **[Netlify](https://netlify.com)**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY etc. — see .env.example for details
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Content lives in `src/app/[locale]/page.tsx`, with translations in `messages/nl.json` and `messages/en.json`.

See `CLAUDE.md` and `design.md` for the full architecture, conventions and design system reference.

### Editing site copy

All visible text lives in two files: `messages/nl.json` (Dutch, default) and `messages/en.json` (English). Find the string by its key path (e.g. `Home.hero.title`) and edit both files — the site will fail to build if a key is missing from either locale. No code changes are needed to update copy, prices, or labels.

## Contact form (Resend)

The contact form sends submissions via [Resend](https://resend.com). Required environment variables (see `.env.example`):

-   `RESEND_API_KEY` — from the Resend dashboard
-   `RESEND_TO_EMAIL` — inbox that receives submissions
-   `RESEND_FROM_EMAIL` — sender address; must be on a domain verified in Resend, or use the Resend sandbox address for testing

Without `RESEND_API_KEY` set, the form fails gracefully with a localized error message — nothing crashes.

## Deployment

Hosted on [Netlify](https://app.netlify.com/projects/sashaelisabeth) (project name `sashaelisabeth`), connected to this GitHub repo — every push to `main` triggers a new deploy, and the badge above reflects the latest build status.

Environment variables (the Resend keys above) are configured directly in the Netlify dashboard (**Site configuration → Environment variables**), not committed to the repo.

## License

Proprietary — all rights reserved. This is client work for Sasha Elisabeth; not licensed for reuse.
