# LIBI DIAMONDS

אתר תדמית ומכירה לתכשיטי יהלומי מעבדה — עברית, RTL, בגישת "יוקרה שקטה".

Built with **Next.js 15 + Tailwind CSS 4** (App Router, fully static output).

## Run

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (all pages pre-rendered)
```

## Before going live — things to replace

| What | Where |
| --- | --- |
| Email, Instagram, domain | [src/lib/site.ts](src/lib/site.ts) |
| Customer reviews — all three are `isDemo: true`, so the section is hidden in production until real ones replace them | [src/data/reviews.ts](src/data/reviews.ts) |
| Product catalog, prices, carat options | [src/data/products.ts](src/data/products.ts) |
| Stone diameters (`stoneMm`) — standard round-brilliant figures, worth confirming against real stock; unset on the pendants and bangle until their shape is confirmed | [src/data/products.ts](src/data/products.ts) |
| Guide articles | [src/data/guides.ts](src/data/guides.ts) |

## Colour

White carries the page. The grounds are `white` → `shell` (#fbfaf7) → `linen`
(#f5f2ec), and nothing else; `espresso` is a button colour only, never a
full-bleed band. Gold is split by job — `gold` decorates, `gold-deep` is the only
one allowed to carry text. All tokens live in `@theme` in
[src/app/globals.css](src/app/globals.css).

**If the catalogue is reshot on a pure-white backdrop**, the site can go a step
cleaner: set `--color-mist: #ffffff` and flatten `.art-bg` to solid white. Product
images then sit edge-to-edge with no visible tile. No component changes needed —
today's subtle warm tile exists only because the current photography carries its
own warm backdrop (#eeeae4–#f8f4f0).

## Structure

- `src/app/` — pages: home, `/jewelry/[category]`, `/product/[slug]`, `/journal`, `/about`, `/contact`, `/service`
- `src/components/JewelryArt.tsx` — SVG line-art jewelry illustrations (placeholder until photography)
- `src/data/` — catalog + articles as typed data (no CMS needed yet)
- Selling flow is **WhatsApp-first**: every CTA opens a prefilled WhatsApp message (product, carat, metal, price). No cart/checkout by design — high-touch jewelry sales convert better through conversation. A payment flow can be added later.
