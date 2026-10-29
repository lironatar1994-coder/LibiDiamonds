# ליבי דיאמונדס — LibiDiamonds

A luxury Hebrew (RTL) website for LibiDiamonds — natural and lab-grown diamonds,
sold online only, with no checkout. Every conversion path leads to a personal
consultation via WhatsApp, phone, or the consultation form.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4, exported as
a fully static site.

---

## Running the site

```bash
npm run dev
```

Then open http://localhost:3000

```bash
npm run build
```

Outputs a complete static site to `out/`. Deploy that folder to Vercel, Netlify,
Cloudflare Pages, or any static host. No server or database required.

---

## Before you launch — required edits

Everything you must change is in one file: **`data/site.ts`**

| Field | Currently | Change to |
|---|---|---|
| `whatsappNumber` | `972500000000` | Real number, E.164 without `+` |
| `phoneDisplay` | `050-000-0000` | Real display number |
| `phoneHref` | `+972500000000` | Real number with `+` |
| `email` | `hello@libidiamonds.co.il` | Real address |
| `baseUrl` | `https://www.libidiamonds.co.il` | Real domain (affects canonicals, OG, sitemap) |
| `social.instagram` / `.facebook` | placeholders | Real profile URLs |
| `hours` | sample hours | Real response hours |

Also review:

- **`data/testimonials.ts`** — these are written as realistic samples. Replace
  them with real customer quotes before launch. Publishing invented testimonials
  as real ones is both a legal and a trust problem.
- **`app/accessibility/page.tsx`** — update the statement date and confirm the
  accessibility coordinator contact details (Israeli IS 5568 expectation).
- **`data/products.ts`** — the 14 pieces are realistic samples with plausible
  specs and opening prices. Replace with your actual inventory and real prices.

---

## Images

Every image resolves in this order (see `components/ui/SmartImage.tsx`):

1. **Your photo** in `public/images/…` at the path listed in `data/images.ts`.
2. An **interim stock photo**: a free-licence Unsplash still life, served from
   Unsplash's CDN and picked to match the bright art direction.
3. A soft pearl placeholder.

The stock photos show other makers' jewelry. **Replace them with your own
pieces before running paid traffic**, starting with the hero and the 13
product shots. **`image-brief.md`** has the filename, aspect ratio and a
ready-to-paste prompt (or shot list) for every image. Save a photo at the
listed path and rebuild. Your file always wins, and no code changes are needed.

The art direction keeps one hard rule: **no people, faces, hands, skin or
mannequins.** Jewelry is always shown as a still life.

---

## Project structure

```
app/                     Routes (App Router)
  layout.tsx             dir="rtl" lang="he", fonts, header/footer, Organization JSON-LD
  globals.css            All design tokens (@theme) + editorial component layer
  page.tsx               Homepage — composes 11 sections
  collections/[category] 7 collection pages, statically generated
  jewelry/[slug]         14 product pages, statically generated
  guide/                 Diamond guide — the main SEO page
  about/ contact/ faq/ accessibility/
  sitemap.ts robots.ts not-found.tsx

components/
  layout/                AnnouncementBar, Header, MobileMenu, Footer, Logo, SkipLink
  ui/                    SmartImage, Reveal, LuxButton, SectionHeading, PageHero,
                         Breadcrumbs, JsonLd, Icons
  home/                  The homepage sections
  product/               ProductCard, SpecTable, ProductCta
  shared/                FaqAccordion, ContactForm, WhatsAppFloat

data/                    site, categories, products, faqs, testimonials, images
lib/                     seo (metadata), jsonld, contact (WhatsApp), format (₪)
```

---

## Design system

All tokens live in `app/globals.css` under `@theme`. Change them there and the
whole site follows.

**Direction: "Pearl & Blush".** The site is bright and product-first, modelled
on the Israeli diamond houses that sell best online. White is the stage for
the stones, warm pearl and bridal blush are the alternate surfaces, deep navy
carries type and primary actions, and gold is kept for detail.

| Token | Value | Use |
|---|---|---|
| `white` | `#ffffff` | Page background, cards |
| `pearl` | `#f8f4ef` | Alternate sections, image stages |
| `blush` | `#f6e9e4` | Hero, "why us", footer CTA, badges |
| `navy` | `#1d2940` | Headings, primary buttons, announcement bar, one dark band |
| `gold` | `#b8925a` | Icons, stars, hairlines (decorative only) |
| `gold-deep` | `#7d6234` | Gold text (AA on white, pearl and blush) |
| `body` / `muted` | `#3d4354` / `#5f6375` | Text hierarchy |
| `whatsapp` | `#0f7a3f` | WhatsApp buttons (deepened so white text clears AA) |

The old names (`ink`, `ivory`, `cream`, `champagne`…) remain as aliases of
the new values, so older markup still renders in the bright palette.

**Type**: Frank Ruhl Libre (display serif, weights 300/400/500) with Assistant
(body, 400–700), both self-hosted with Hebrew subsets through `next/font`.
Don't add weight 700 to Frank Ruhl Libre: Turbopack's font loader fails the
build with it.

**Homepage order** (`app/page.tsx`): announcement bar, hero with a shoppable
price tag, trust strip, categories with "from" prices, bestsellers, shape
picker (opens WhatsApp pre-filled), why us, natural vs lab, how it works, reviews,
FAQ, Instagram strip, then the footer's WhatsApp/phone CTA.

Every colour pair in use was measured against WCAG 2.1 AA.

### RTL rule

**Only ever use logical Tailwind utilities** — `ms/me`, `ps/pe`, `start/end`,
`text-start`. Never `ml/mr`, `pl/pr`, `left/right`, or `text-left/right`. With
`dir="rtl"` set once on `<html>`, logical properties flip the entire layout
correctly and physical ones silently break it.

---

## Contact plumbing

There is no backend. `lib/contact.ts` is the single place all outbound contact
is composed:

- `buildWhatsAppUrl(message)` — opens WhatsApp with a pre-filled Hebrew message
- `productWhatsApp(name)` — pre-fills the specific piece the visitor was viewing
- `buildConsultationMessage(draft)` — turns the contact form into one readable
  message

The consultation form opens WhatsApp with the composed message rather than
posting anywhere, so the visitor sees exactly what is sent. To switch to a real
form backend (Formspree, Resend, an API route), change only `handleSubmit` in
`components/shared/ContactForm.tsx`.

---

## SEO

- Hebrew metadata on every page via `buildMetadata()` in `lib/seo.ts`
- JSON-LD: `JewelryStore` + `WebSite` (site-wide), `Product` (product pages),
  `FAQPage` (homepage and `/faq/`), `BreadcrumbList` (collections and products)
- `Offer` is emitted **only** where a real opening price exists — made-to-order
  pieces omit it rather than publishing a fabricated price
- `sitemap.xml` and `robots.txt` generated at build time
- `/guide/` and `/faq/` are the long-tail SEO workhorses; collection pages each
  carry unique multi-paragraph Hebrew intros rather than thin listings

---

## Accessibility

- Skip link, visible gold focus rings on every interactive element
- Accordion uses `aria-expanded` + labelled regions; mobile menu traps focus and
  closes on Escape
- Every image carries real Hebrew alt text from the manifest
- Reveal animations and image zooms are disabled under
  `prefers-reduced-motion`, and a `<noscript>` rule keeps all content visible
  without JavaScript
- Single `h1` per page, no heading-level jumps
- `/accessibility/` publishes the statement Israeli law expects
