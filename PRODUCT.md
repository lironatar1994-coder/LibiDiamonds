# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Israeli couples and individuals buying a significant diamond piece: an engagement ring first, then wedding bands, tennis bracelets, earrings and pendants. They are mostly Hebrew speakers browsing on a phone, often comparing several Ramat Gan / diamond-exchange sellers before talking to anyone. The job: feel safe enough to start a conversation about a large, rarely repeated purchase.

## Product Purpose

LibiDiamonds (ליבי דיאמונדס) sells natural and lab-grown diamonds and diamond jewelry online only. There is no checkout: every path leads to a personal consultation by WhatsApp, phone or the consultation form, which opens WhatsApp with a composed message. Success is a visitor starting that conversation.

## Positioning

No showroom and no shop-window overhead, so the same budget buys a better stone. Natural (GIA) and lab-grown (IGI) diamonds are presented side by side and honestly, and every piece is built around the stone chosen for it.

## Operating Context

- Hebrew, RTL, mobile-first. The owner reviews the site on a phone.
- Visitors arrive from Instagram, Google and word of mouth, and usually message on WhatsApp before calling.
- Static Next.js 16 export (App Router, Tailwind v4), with no backend.

## Capabilities and Constraints

- Categories: engagement rings, wedding bands, tennis bracelets, earrings, pendants, natural diamonds, lab diamonds. There are 14 sample products with opening prices in `data/products.ts`.
- Prices are shown as "החל מ־₪X". Made-to-order pieces show "מחיר בתיאום אישי".
- Service promises in `data/faqs.ts`, which are the only claims the site may make:
  - up to 12 interest-free payments
  - free insured shipping
  - 14-day returns
  - first resize free
  - lifetime craftsmanship warranty
  - GIA / IGI certificate for every stone
  - trade-in
- Imagery: **jewelry only — no people, hands, faces or mannequins** (confirmed by the owner on 2026-10-14).
- Photography: interim free-licence Unsplash stills, downloaded into `public/images`, to be replaced later with AI-generated or real photos made from prompts in `image-brief.md`.

## Brand Commitments

- Name: ליבי דיאמונדס / LIBI DIAMONDS ("Libi" = "my heart").
- No logo asset exists; the wordmark is typographic.
- The owner wants a bright site, and has rejected both earlier designs:
  - a dark black/champagne editorial one;
  - a bright one with blush, navy pills and green buttons everywhere, judged "cheap, no direction".

## Evidence on Hand

- Hebrew copy for categories, products, FAQs, the guide and the about page lives in `data/` and `app/`.
- The testimonials in `data/testimonials.ts` are samples and must be replaced before launch. Don't add more invented reviews, ratings, review counts, press logos or years in business.
- The phone number, email and social links in `data/site.ts` are placeholders.

## Product Principles

1. Trust before persuasion: certificates, honest natural-vs-lab framing, and an opening price on every piece.
2. The stone is the hero. Product imagery and price lead; chrome stays quiet.
3. One clear next step: start a conversation, without pressure.
4. Never invent claims the business has not made.

## Accessibility & Inclusion

Israeli accessibility law (IS 5568 / WCAG AA) applies. The site already publishes `/accessibility/`.
