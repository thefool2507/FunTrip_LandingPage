# FunTrip

> Discover Indonesia's Best Destinations

A modern travel landing page built with **Next.js 16**, **Tailwind CSS v4**, and TypeScript.

## Features

- Curated destination recommendations
- Real traveler reviews & ratings
- Budget / price range guide (Budget → Luxury)
- Search & category filtering
- Fully responsive (mobile-first)
- Optimised images via Next.js Image

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 | React framework + App Router |
| Tailwind CSS v4 | Utility-first styling |
| TypeScript | Type safety |
| Lucide React | Icon library |
| next/image | Optimised image loading |

## Getting Started

```bash
# Install dependencies
npm install
# or
pnpm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.


### Build
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + CSS variables
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Landing page (composes all sections)
├── components/
│   ├── navbar.tsx        # Sticky responsive navbar
│   ├── hero.tsx          # Hero with search bar
│   ├── categories.tsx    # Category grid
│   ├── destinations.tsx  # Destination listing + filter
│   ├── destination-card.tsx  # Individual card
│   ├── stats.tsx         # Stats & trust badges
│   ├── pricing-guide.tsx # Budget tier cards
│   ├── reviews.tsx       # Traveler reviews
│   ├── newsletter.tsx    # Email signup CTA
│   └── footer.tsx        # Footer with links
└── data/
    └── destinations.ts   # Static destination & review data
```

---

Made with reza_lnc
