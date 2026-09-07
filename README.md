# OptionsDash — Marketing Website

Marketing site for [OptionsDash](https://options.delianpetrov.com), the SPX iron condor trading dashboard. Dark fintech theme, single-page with smooth-scroll navigation.

## Stack

- React 18 + Vite 5 (plain JS, no TypeScript)
- Plain CSS with CSS variables (no Tailwind — dependency-light)
- Inter for UI, JetBrains Mono for code/terminal sections

## Project structure

```
optionsdash-marketing/
├── index.html
├── vercel.json            # SPA rewrites for Vercel
├── public/
│   ├── favicon.svg
│   └── images/            # AI-generated marketing visuals
│       ├── hero-dashboard.webp
│       ├── api-terminal.webp
│       └── news-panel.webp
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Features.jsx
        ├── DemoGallery.jsx
        ├── ApiShowcase.jsx
        ├── HowItWorks.jsx
        ├── Pricing.jsx
        ├── Testimonials.jsx
        ├── Faq.jsx
        └── Footer.jsx
```

## Sections

1. Hero — headline, CTAs, dashboard screenshot, live-style ticker strip
2. Features Grid — 6 cards (Iron Condor Builder, Live Positions, News & Chaos Scoring, Macro Calendar, Agent API, Multi-Strategy Support)
3. Demo Gallery — Condor Visualizer (inline SVG P&L curve), Wheel Scanner (CSP yield table mock), Position Tracker (positions mock), News Panel (generated image)
4. Agent API Showcase — terminal-style curl example + sample `?format=text` response, feature bullets
5. How It Works — 3 steps
6. Pricing — Free / Pro (highlighted) / Enterprise
7. Testimonials — placeholder quotes (marked) + metric band
8. FAQ — 4 Q&As (analysis-only, Schwab + WeBull, agent API, Section 1256)
9. Footer — links + "Built with React + Vite + Vercel. Data from Schwab & WeBull."

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Deploy to Vercel

**Option A — GitHub import (recommended):**

1. Push this folder to a GitHub repo.
2. In the Vercel dashboard: **Add New → Project → Import** the repo.
3. Framework preset is auto-detected as **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy. `vercel.json` handles SPA rewrites (not strictly needed for this single-page site, but included).

**Option B — Vercel CLI:**

```sh
npm i -g vercel
vercel            # link / preview deploy
vercel --prod     # production deploy
```

## Notes

- All "Request Access" CTAs point to `https://options.delianpetrov.com` (the live dashboard, currently behind Cloudflare Zero Trust).
- Testimonial quotes are placeholders — replace with real quotes before launch.
- Pricing tiers are marketing copy; no Stripe integration yet.
- Ticker prices in the hero are static mock data.
