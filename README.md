# Sasha Elisabeth — Vaktherapie en Coaching

Next.js (App Router) website for a Dutch art therapy and coaching practice. Bilingual: Dutch (default) and English via `next-intl` (`/` and `/en`).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY etc. — see .env.example for details
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Content lives in `src/app/[locale]/page.tsx`, with translations in `messages/nl.json` and `messages/en.json`.

See `CLAUDE.md` and `design.md` for the full architecture, conventions and design system reference.

## Deployment

Hosted on Netlify, connected to this GitHub repo. Environment variables (Resend keys) are configured in the Netlify dashboard, not committed — see `CLAUDE.md`'s Contact Form section.
