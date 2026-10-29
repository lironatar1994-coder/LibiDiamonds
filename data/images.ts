/**
 * Image manifest — the single source of truth tying the site to image-brief.md.
 *
 * Every image on the site has an entry here. `SmartImage` resolves each entry
 * in this order:
 *
 *   1. The brand's own photo at `src` (in /public), when the file exists.
 *   2. The interim stock photo in `stock` — a free-licence Unsplash still life
 *      chosen to match the bright "Pearl & Blush" art direction.
 *   3. A soft pearl placeholder with the same aspect ratio.
 *
 * To replace a stock photo with your own: save the photo at exactly the `src`
 * path below and rebuild. No code changes needed — the local file always wins.
 *
 * Stock photos are served from Unsplash's CDN under the Unsplash License
 * (free commercial use, no attribution required). They show other makers'
 * jewelry, so swap them for your own pieces before running paid traffic.
 */

export type ImageTone = "dark" | "light";

export type ImageEntry = {
  /** Matches the heading id in image-brief.md */
  id: string;
  src: string;
  width: number;
  height: number;
  /** Hebrew alt text — real description, never a filename */
  alt: string;
  tone?: ImageTone;
  /** Interim Unsplash photo path, e.g. "photo-1662434923232-0164224dbdb2" */
  stock?: string;
  /** CSS object-position for the stock crop, e.g. "50% 60%" */
  focus?: string;
};

/* Unsplash stock — one constant per photo so reuse is visible at a glance */
const STOCK = {
  solitaireBlushMarble: "photo-1662434923232-0164224dbdb2", // QPIJRZb31PY
  cushionHaloBridalSet: "photo-1589674668791-4889d2bba4c6", // XEyyCJKg4yI
  emeraldSolitaireGold: "photo-1598560917807-1bae44bd2be8", // NhrcL_C0sFA
  ovalHaloRoseGold: "photo-1499899833954-5ecd9439d17f", // B-JtfqdHemU
  roundSolitaireSet: "photo-1587947330318-88fcd9055420", // Vyy8tY3D3nk
  stackedRings: "photo-1719924998065-0c60e329ef58", // d5qU27rehlk
  weddingBandsPair: "photo-1627293509201-cd0c780043e6", // r7JZGKGhrf0
  tennisBraceletOpen: "photo-1619119069152-a2b331eb392a", // 2z7MxnXQs3k
  tennisBraceletLine: "photo-1663568675454-ecd65012d8f0", // jm4cbOKYk30
  haloStudsLilac: "photo-1588444650700-fd887f15a9e7", // ttMO9io6uMY
  haloStudsWhite: "photo-1588444650733-d0767b753fc8", // Lqfqsij4EvQ
  goldHoopsBaguette: "photo-1777999763640-b228fe3192de", // KwVhVzv88Fo
  cushionPendant: "photo-1589128777073-263566ae5e4d", // u1Hv_erOQH0
  pendantsPair: "photo-1588444968576-f8fe92ce56fd", // AhIQL2CKq7g
  diamondTweezers: "photo-1631013636761-c533d81e96a4", // R13RJX_V42A
  looseDiamondsBlush: "photo-1655210912406-432c68a21a5f", // gUkgk1GIGdQ
  diamondMacroWhite: "photo-1590570894869-f6947be08e16", // RD5GI4A4bu4
  roundDiamondWhite: "photo-1596213411964-ee96819a396c", // dcniOOqByj0
  ringsInTray: "photo-1631982690223-8aa4be0a2497", // wewzzx11ShI
  jewelryCase: "photo-1654700194977-a1f7cc4d7884", // 6evFCqzZgFY
} as const;

const entries: ImageEntry[] = [
  /* ---------------- Homepage ---------------- */
  {
    id: "home-hero",
    src: "/images/home/hero-solitaire.jpg",
    width: 2400,
    height: 1600,
    alt: "טבעת סוליטר בזהב צהוב ליד יהלום מלוטש, על משטח שיש בהיר ורקע ורוד עדין",
    stock: STOCK.solitaireBlushMarble,
    focus: "47% 60%",
  },
  {
    id: "home-value-story",
    src: "/images/home/value-story-loose-stones.jpg",
    width: 1600,
    height: 2000,
    alt: "יהלום מלוטש גדול בתקריב על משטח לבן, משקף אור בפאותיו",
    stock: STOCK.diamondMacroWhite,
  },
  {
    id: "home-natural",
    src: "/images/home/natural-diamond-macro.jpg",
    width: 1600,
    height: 1200,
    alt: "יהלום טבעי מוחזק בפינצטה של שמאי על רקע לבן",
    stock: STOCK.diamondTweezers,
    focus: "62% 50%",
  },
  {
    id: "home-lab",
    src: "/images/home/lab-diamond-macro.jpg",
    width: 1600,
    height: 1200,
    alt: "שלושה יהלומים מלוטשים על משטח בגוון ורוד עדין",
    stock: STOCK.looseDiamondsBlush,
  },
  {
    id: "home-craftsmanship",
    src: "/images/home/craftsmanship-certificate.jpg",
    width: 2000,
    height: 1500,
    alt: "יהלום מוחזק בפינצטה לבדיקה מעל נייר שמאות לבן",
    stock: STOCK.diamondTweezers,
  },
  {
    id: "home-consultation",
    src: "/images/home/consultation-still-life.jpg",
    width: 2400,
    height: 1600,
    alt: "סט טבעת אירוסין בליטוש כרית עם הילה וטבעת נישואין משובצת, על רקע לבן",
    stock: STOCK.cushionHaloBridalSet,
  },

  /* ------ Category tiles ------ */
  {
    id: "cat-engagement-rings",
    src: "/images/categories/engagement-rings.jpg",
    width: 1400,
    height: 1400,
    alt: "טבעת אירוסין בזהב צהוב עם יהלום בליטוש אמרלד ופס משובץ",
    stock: STOCK.emeraldSolitaireGold,
  },
  {
    id: "cat-wedding-bands",
    src: "/images/categories/wedding-bands.jpg",
    width: 1400,
    height: 1400,
    alt: "זוג טבעות נישואין בזהב ורוד ולבן מונחות על בד לבן",
    stock: STOCK.weddingBandsPair,
  },
  {
    id: "cat-tennis-bracelets",
    src: "/images/categories/tennis-bracelets.jpg",
    width: 1400,
    height: 1400,
    alt: "צמיד טניס יהלומים בזהב לבן פרוש בקו ישר על רקע לבן",
    stock: STOCK.tennisBraceletLine,
  },
  {
    id: "cat-earrings",
    src: "/images/categories/earrings.jpg",
    width: 1400,
    height: 1400,
    alt: "זוג עגילי יהלום צמודים עם הילה, לצד פרח לילך",
    stock: STOCK.haloStudsLilac,
    focus: "60% 50%",
  },
  {
    id: "cat-pendants",
    src: "/images/categories/pendants.jpg",
    width: 1400,
    height: 1400,
    alt: "תליון יהלום בליטוש כרית עם הילה על שרשרת זהב לבן",
    stock: STOCK.cushionPendant,
    focus: "50% 70%",
  },
  {
    id: "cat-natural-diamonds",
    src: "/images/categories/natural-diamonds.jpg",
    width: 1400,
    height: 1400,
    alt: "יהלום טבעי בליטוש עגול מוחזק בפינצטה מעל נייר שמאות לבן",
    stock: STOCK.diamondTweezers,
    focus: "62% 50%",
  },
  {
    id: "cat-lab-diamonds",
    src: "/images/categories/lab-diamonds.jpg",
    width: 1400,
    height: 1400,
    alt: "יהלומי מעבדה מלוטשים על משטח ורוד עדין",
    stock: STOCK.looseDiamondsBlush,
  },

  /* ---------------- Products ---------------- */
  {
    id: "product-solitaire-classic-natural",
    src: "/images/products/solitaire-classic-natural.jpg",
    width: 1400,
    height: 1400,
    alt: "טבעת סוליטר עם יהלום עגול לצד טבעת נישואין משובצת",
    stock: STOCK.roundSolitaireSet,
  },
  {
    id: "product-halo-oval-lab",
    src: "/images/products/halo-oval-lab.jpg",
    width: 1400,
    height: 1400,
    alt: "טבעת אירוסין בזהב ורוד עם יהלום אובלי בהילת פאווה",
    stock: STOCK.ovalHaloRoseGold,
  },
  {
    id: "product-three-stone-emerald-natural",
    src: "/images/products/three-stone-emerald-natural.jpg",
    width: 1400,
    height: 1400,
    alt: "טבעת אירוסין בזהב צהוב עם יהלום אמרלד ופס משובץ",
    stock: STOCK.emeraldSolitaireGold,
  },
  {
    id: "product-eternity-pave-lab",
    src: "/images/products/eternity-pave-lab.jpg",
    width: 1400,
    height: 1400,
    alt: "טבעת יהלומים בשיבוץ פאווה לצד טבעת אירוסין עם הילה",
    stock: STOCK.cushionHaloBridalSet,
  },
  {
    id: "product-classic-comfort-band",
    src: "/images/products/classic-comfort-band.jpg",
    width: 1400,
    height: 1400,
    alt: "זוג טבעות נישואין חלקות בזהב ורוד ולבן",
    stock: STOCK.weddingBandsPair,
  },
  {
    id: "product-tennis-bracelet-4ct-lab",
    src: "/images/products/tennis-bracelet-4ct-lab.jpg",
    width: 1400,
    height: 1400,
    alt: "צמיד טניס יהלומים בזהב לבן",
    stock: STOCK.tennisBraceletLine,
  },
  {
    id: "product-tennis-bracelet-graduated-natural",
    src: "/images/products/tennis-bracelet-graduated-natural.jpg",
    width: 1400,
    height: 1400,
    alt: "צמיד טניס יהלומים פתוח עם מנעול כפול",
    stock: STOCK.tennisBraceletOpen,
  },
  {
    id: "product-studs-solitaire-lab",
    src: "/images/products/studs-solitaire-lab.jpg",
    width: 1400,
    height: 1400,
    alt: "זוג עגילי יהלום צמודים עם הילה על רקע לבן",
    stock: STOCK.haloStudsWhite,
  },
  {
    id: "product-hoops-pave-lab",
    src: "/images/products/hoops-pave-lab.jpg",
    width: 1400,
    height: 1400,
    alt: "זוג עגילי חישוק בזהב צהוב משובצים יהלומי באגט",
    stock: STOCK.goldHoopsBaguette,
  },
  {
    id: "product-pendant-solitaire-natural",
    src: "/images/products/pendant-solitaire-natural.jpg",
    width: 1400,
    height: 1400,
    alt: "תליון יהלום עם הילה על שרשרת דקה בזהב לבן",
    stock: STOCK.cushionPendant,
    focus: "50% 70%",
  },
  {
    id: "product-pendant-initial-lab",
    src: "/images/products/pendant-initial-lab.jpg",
    width: 1400,
    height: 1400,
    alt: "שני תליוני יהלום על שרשראות זהב לבן",
    stock: STOCK.pendantsPair,
  },
  {
    id: "product-natural-round-brilliant",
    src: "/images/products/natural-round-brilliant.jpg",
    width: 1400,
    height: 1400,
    alt: "יהלום עגול מבריק מלוטש על רקע לבן",
    stock: STOCK.roundDiamondWhite,
  },
  {
    id: "product-lab-round-brilliant",
    src: "/images/products/lab-round-brilliant.jpg",
    width: 1400,
    height: 1400,
    alt: "יהלום מעבדה מלוטש בתקריב על משטח לבן",
    stock: STOCK.diamondMacroWhite,
  },

  /* ---------------- Lookbook strip ---------------- */
  {
    id: "lookbook-01",
    src: "/images/home/lookbook-01.jpg",
    width: 1200,
    height: 1200,
    alt: "טבעת סוליטר וטבעת נישואין על בד לבן",
    stock: STOCK.roundSolitaireSet,
  },
  {
    id: "lookbook-02",
    src: "/images/home/lookbook-02.jpg",
    width: 1200,
    height: 1200,
    alt: "עגילי יהלום צמודים עם הילה",
    stock: STOCK.haloStudsWhite,
  },
  {
    id: "lookbook-03",
    src: "/images/home/lookbook-03.jpg",
    width: 1200,
    height: 1200,
    alt: "צמיד טניס יהלומים בזהב לבן",
    stock: STOCK.tennisBraceletOpen,
  },
  {
    id: "lookbook-04",
    src: "/images/home/lookbook-04.jpg",
    width: 1200,
    height: 1200,
    alt: "טבעת אירוסין בזהב ורוד עם יהלום אובלי",
    stock: STOCK.ovalHaloRoseGold,
  },
  {
    id: "lookbook-05",
    src: "/images/home/lookbook-05.jpg",
    width: 1200,
    height: 1200,
    alt: "שלוש טבעות זהב עדינות במגש תכשיטים",
    stock: STOCK.ringsInTray,
  },
  {
    id: "lookbook-06",
    src: "/images/home/lookbook-06.jpg",
    width: 1200,
    height: 1200,
    alt: "עגילי חישוק בזהב צהוב משובצים יהלומים",
    stock: STOCK.goldHoopsBaguette,
  },

  /* ---------------- About ---------------- */
  {
    id: "about-hero",
    src: "/images/about/hero-workbench.jpg",
    width: 2400,
    height: 1600,
    alt: "טבעות זהב משובצות יהלומים מסודרות במגש תכשיטים בהיר",
    stock: STOCK.ringsInTray,
  },
  {
    id: "about-selection",
    src: "/images/about/stone-selection.jpg",
    width: 1600,
    height: 1200,
    alt: "יהלום מוחזק בפינצטה לבדיקה מעל נייר שמאות לבן",
    stock: STOCK.diamondTweezers,
  },
  {
    id: "about-packaging",
    src: "/images/about/packaging.jpg",
    width: 1600,
    height: 1200,
    alt: "קופסת תכשיטים פתוחה בגוון אפור בהיר עם טבעות ועגילים",
    stock: STOCK.jewelryCase,
  },

  /* ---------------- Guide ---------------- */
  {
    id: "guide-hero",
    src: "/images/guide/hero-loupe.jpg",
    width: 2400,
    height: 1600,
    alt: "יהלום מלוטש גדול בתקריב על משטח לבן",
    stock: STOCK.diamondMacroWhite,
  },
  {
    id: "guide-cut",
    src: "/images/guide/cut.jpg",
    width: 1200,
    height: 900,
    alt: "יהלום עגול מבריק, מדגים את סימטריית הפאות",
    stock: STOCK.roundDiamondWhite,
  },
  {
    id: "guide-color",
    src: "/images/guide/color.jpg",
    width: 1200,
    height: 900,
    alt: "יהלומים מלוטשים על משטח ורוד עדין",
    stock: STOCK.looseDiamondsBlush,
  },
  {
    id: "guide-clarity",
    src: "/images/guide/clarity.jpg",
    width: 1200,
    height: 900,
    alt: "מקרו קרוב של יהלום המראה את פנים האבן",
    stock: STOCK.diamondMacroWhite,
  },
  {
    id: "guide-carat",
    src: "/images/guide/carat.jpg",
    width: 1200,
    height: 900,
    alt: "יהלום מוחזק בפינצטה לבדיקה",
    stock: STOCK.diamondTweezers,
  },
  {
    id: "guide-shapes",
    src: "/images/guide/shapes.jpg",
    width: 2000,
    height: 1000,
    alt: "טבעת אירוסין עם יהלום אובלי בהילה",
    stock: STOCK.ovalHaloRoseGold,
  },

  /* ---------------- Contact ---------------- */
  {
    id: "contact-hero",
    src: "/images/home/contact-tray.jpg",
    width: 1600,
    height: 2000,
    alt: "סט טבעת אירוסין עם הילה וטבעת נישואין משובצת",
    stock: STOCK.cushionHaloBridalSet,
  },

  /* ---------------- Open Graph ---------------- */
  {
    id: "og-default",
    src: "/images/og/default.jpg",
    width: 1200,
    height: 630,
    alt: "ליבי דיאמונדס — יהלומים טבעיים ויהלומי מעבדה",
    stock: STOCK.solitaireBlushMarble,
  },
];

export const imageManifest: Record<string, ImageEntry> = Object.fromEntries(
  entries.map((entry) => [entry.id, entry]),
);

export const allImages = entries;

export function getImage(id: string): ImageEntry {
  const entry = imageManifest[id];
  if (!entry) {
    throw new Error(
      `Unknown image id "${id}". Add it to data/images.ts and image-brief.md.`,
    );
  }
  return entry;
}

/** Unsplash CDN URL at a given width (imgix params: crop-free, auto-format). */
export function stockUrl(stock: string, width: number, quality = 72): string {
  return `https://images.unsplash.com/${stock}?w=${width}&q=${quality}&auto=format&fit=max`;
}
