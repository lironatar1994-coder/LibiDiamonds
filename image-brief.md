# LibiDiamonds — Image Brief ("Pearl & Blush")

Every image on the site has an entry here: the **exact filename**, the
**aspect ratio**, and a **ready-to-paste prompt** (for an AI generator) that
doubles as a **shot list** (for a photographer).

## How images work on the site

`data/images.ts` lists every image. For each one the site uses, in order:

1. **Your photo** at the `File` path below, if it exists in `public/images/…`.
2. Otherwise an **interim stock photo** (free Unsplash licence) that matches the
   bright art direction. These show other makers' jewelry, so replace them
   with your own pieces as soon as you can, starting with the hero and the
   product shots.
3. Otherwise a soft pearl placeholder.

To replace an image, save it at the exact path and rebuild (`npm run build`).
No code changes are needed.

**Output format:** JPG, quality 82–88, sRGB. Keep files under ~400 KB. Square
product shots at 1400 px are plenty.

---

## Global style block

> Append this to **every** prompt.

```
Bright, airy luxury jewelry still life in the style of a high-end Israeli
diamond house e-commerce shoot. Soft diffused daylight from a large window or
softbox, gentle shadow under the piece, clean high-key exposure. Surfaces:
white or warm-white Carrara marble, ivory silk, pale blush-pink paper
(#F6E9E4), warm pearl linen (#F8F4EF). Accents of yellow, white or rose gold.
Diamonds show crisp facets and real fire; metal is immaculate and reflective.
Calm, minimal composition with generous negative space. Photorealistic macro
product photography, 100mm macro lens, f/5.6, tack-sharp on the stone.
```

## Negative prompt

> Append this to **every** prompt.

```
no people, no hands, no fingers, no skin, no models, no mannequins, no body
parts, no jewelry being worn, no text, no lettering, no logos, no watermarks,
no brand names, no packaging labels, no price tags, no dark or moody lighting,
no black background, no heavy shadows, no cartoon, no illustration, no CGI
look, no plastic sheen, no oversaturated colours, no rainbow prism overlay,
no glitter, no fake starburst, no lens flare, no cluttered props, no blurry
subject, no duplicated stones, no malformed or asymmetric bands
```

## Art direction rules

- **Bright, always.** White, pearl and blush surfaces. The site is built on
  those three colours, and a dark photo will look like a hole in the page.
- **Still life only.** No people, hands or mannequins. Jewelry rests on a
  surface, sits in an open box, or is held by tweezers.
- **Real light, not effects.** The sparkle should come from the facets
  themselves. Never add starbursts or glitter.
- **One consistent set.** Same light direction (upper left), same white
  balance, same softness. If one photo is warmer or darker than the rest,
  re-shoot it rather than ship the mismatch.
- **Product shots** (square, centred piece, blush or white seamless) are the
  priority. They appear on the homepage, every collection page and every
  product page.

---

# Homepage

## `home-hero`
- **File:** `public/images/home/hero-solitaire.jpg` · **3:2** · min 2400 px wide
- **Where:** Half-width hero image beside the headline. It is cropped toward
  square on desktop and to 4:3 on phones, so keep the subject centred, with
  breathing room on all sides.

```
A yellow-gold six-prong solitaire engagement ring lying on its side beside a
single loose round brilliant diamond, on a split background: white marble
above, pale blush-pink surface below. Soft reflection of the ring on the
glossy surface. Centred composition.
```

## `home-value-story`
- **File:** `public/images/home/value-story-loose-stones.jpg` · **4:5** · min 1600 px wide

```
A single large round brilliant diamond standing on its pavilion on a white
glossy surface, extreme close-up, crisp facets catching soft daylight, pale
white-grey gradient background.
```

## `home-natural`
- **File:** `public/images/home/natural-diamond-macro.jpg` · **16:9** · min 1600 px wide

```
A natural round brilliant diamond held in fine steel diamond tweezers above
textured white gemologist paper, side light, stone in razor focus on the right
third.
```

## `home-lab`
- **File:** `public/images/home/lab-diamond-macro.jpg` · **16:9** · min 1600 px wide

```
Three loose brilliant-cut diamonds of different sizes scattered on a smooth
pale blush-pink surface, soft daylight, shallow depth of field, gentle
reflections.
```

## `home-craftsmanship`
- **File:** `public/images/home/craftsmanship-certificate.jpg` · **4:3** · min 2000 px wide

```
A loose diamond in tweezers above a white grading report, a jeweller's loupe
beside it, on white marble. Report text blurred and unreadable.
```

## `home-consultation`
- **File:** `public/images/home/consultation-still-life.jpg` · **3:2** · min 2400 px wide

```
A bridal set: a cushion-cut halo engagement ring stacked on a pavé wedding
band in white gold, on white silk with a soft blurred dry-flower stem in the
background.
```

---

# Category tiles (square, shown at 1:1)

## `cat-engagement-rings`
- **File:** `public/images/categories/engagement-rings.jpg` · **1:1** · min 1400 px

```
An emerald-cut diamond solitaire in yellow gold with a pavé band, standing
upright on a white seamless background, three-quarter view.
```

## `cat-wedding-bands`
- **File:** `public/images/categories/wedding-bands.jpg` · **1:1** · min 1400 px

```
A pair of plain wedding bands, one rose gold and one white gold, leaning
against each other on soft white fabric.
```

## `cat-tennis-bracelets`
- **File:** `public/images/categories/tennis-bracelets.jpg` · **1:1** · min 1400 px

```
A white-gold diamond tennis bracelet laid in a straight line across a white
seamless background, even sparkle along every stone.
```

## `cat-earrings`
- **File:** `public/images/categories/earrings.jpg` · **1:1** · min 1400 px

```
A pair of diamond halo stud earrings standing on a white surface, a sprig of
pale lilac flowers softly out of focus in the corner.
```

## `cat-pendants`
- **File:** `public/images/categories/pendants.jpg` · **1:1** · min 1400 px

```
A cushion-shaped diamond halo pendant on a fine white-gold box chain hanging
vertically against a pale grey-white background.
```

## `cat-natural-diamonds`
- **File:** `public/images/categories/natural-diamonds.jpg` · **1:1** · min 1400 px

```
A single round natural diamond held in tweezers over white gemologist paper,
macro, soft side light.
```

## `cat-lab-diamonds`
- **File:** `public/images/categories/lab-diamonds.jpg` · **1:1** · min 1400 px

```
Loose lab-grown diamonds in round, oval and pear shapes on a pale blush-pink
surface, soft daylight, gentle reflections.
```

---

# Products (square, centred, blush or white seamless)

Shoot every product the same way: same background, same angle (three-quarter,
slightly above), same distance. These are the images that sell.

| Image id | File | Shot |
|---|---|---|
| `product-solitaire-classic-natural` | `public/images/products/solitaire-classic-natural.jpg` | Round six-prong solitaire, thin band |
| `product-halo-oval-lab` | `public/images/products/halo-oval-lab.jpg` | Oval centre stone in a pavé halo, rose gold |
| `product-three-stone-emerald-natural` | `public/images/products/three-stone-emerald-natural.jpg` | Emerald-cut centre with two side stones |
| `product-eternity-pave-lab` | `public/images/products/eternity-pave-lab.jpg` | Full pavé eternity band |
| `product-classic-comfort-band` | `public/images/products/classic-comfort-band.jpg` | Plain comfort-fit band |
| `product-tennis-bracelet-4ct-lab` | `public/images/products/tennis-bracelet-4ct-lab.jpg` | 4 ct tennis bracelet, straight line |
| `product-tennis-bracelet-graduated-natural` | `public/images/products/tennis-bracelet-graduated-natural.jpg` | Graduated tennis bracelet, open, clasp visible |
| `product-studs-solitaire-lab` | `public/images/products/studs-solitaire-lab.jpg` | Pair of solitaire studs |
| `product-hoops-pave-lab` | `public/images/products/hoops-pave-lab.jpg` | Pair of pavé huggie hoops |
| `product-pendant-solitaire-natural` | `public/images/products/pendant-solitaire-natural.jpg` | Solitaire pendant on a fine chain |
| `product-pendant-initial-lab` | `public/images/products/pendant-initial-lab.jpg` | Diamond initial pendant |
| `product-natural-round-brilliant` | `public/images/products/natural-round-brilliant.jpg` | Loose natural round diamond |
| `product-lab-round-brilliant` | `public/images/products/lab-round-brilliant.jpg` | Loose lab round diamond |

Prompt template:

```
[SHOT from the table above] centred on a seamless pale blush-pink background,
three-quarter view from slightly above, soft shadow beneath, square frame.
```

---

# Lookbook strip (Instagram-style, 1:1, min 1200 px)

| Image id | File | Shot |
|---|---|---|
| `lookbook-01` | `public/images/home/lookbook-01.jpg` | Solitaire + band on white silk |
| `lookbook-02` | `public/images/home/lookbook-02.jpg` | Halo studs on white |
| `lookbook-03` | `public/images/home/lookbook-03.jpg` | Tennis bracelet detail, clasp open |
| `lookbook-04` | `public/images/home/lookbook-04.jpg` | Rose-gold oval halo ring |
| `lookbook-05` | `public/images/home/lookbook-05.jpg` | Fine gold rings in an ivory ring tray |
| `lookbook-06` | `public/images/home/lookbook-06.jpg` | Gold huggie hoops on ivory silk |

---

# Interior pages

| Image id | File | Aspect | Shot |
|---|---|---|---|
| `about-hero` | `public/images/about/hero-workbench.jpg` | 16:9 | Rings arranged in an ivory ring tray |
| `about-selection` | `public/images/about/stone-selection.jpg` | 4:3 | Diamond in tweezers over gemologist paper |
| `about-packaging` | `public/images/about/packaging.jpg` | 4:3 | Open ivory jewelry box with a ring, champagne ribbon |
| `guide-hero` | `public/images/guide/hero-loupe.jpg` | 16:9 | Loupe beside a single diamond on white marble |
| `guide-cut` | `public/images/guide/cut.jpg` | 4:3 | Round brilliant from above, facets symmetrical |
| `guide-color` | `public/images/guide/color.jpg` | 4:3 | Row of diamonds from bright white to faint warm tint |
| `guide-clarity` | `public/images/guide/clarity.jpg` | 4:3 | Extreme macro into a diamond's interior |
| `guide-carat` | `public/images/guide/carat.jpg` | 4:3 | Four diamonds of rising size in a row |
| `guide-shapes` | `public/images/guide/shapes.jpg` | 2:1 | Eight diamond shapes in a row on blush paper |
| `contact-hero` | `public/images/home/contact-tray.jpg` | 4:5 | Two diamond rings on a pearl velvet tray with a loupe |
| `og-default` | `public/images/og/default.jpg` | 1200×630 | Hero ring on blush and marble, logo space on the right |
