import type { StaticImageData } from "next/image";
import { stock } from "@/lib/stock";
import type { CategorySlug } from "@/data/categories";
import { getProduct, type Product } from "@/data/products";

/** Interim photo per product (stock until the brand's own shots exist). */
export const productPhoto: Record<string, StaticImageData> = {
  "solitaire-classic-natural": stock.roundSolitaireSet,
  "halo-oval-lab": stock.ovalHaloRoseGold,
  "three-stone-emerald-natural": stock.emeraldSolitaireGold,
  "eternity-pave-lab": stock.twistedEternityBand,
  "classic-comfort-band": stock.channelEternityBand,
  "tennis-bracelet-4ct-lab": stock.tennisBraceletLine,
  "tennis-bracelet-graduated-natural": stock.tennisBraceletOpen,
  "studs-solitaire-lab": stock.haloStudsWhite,
  "hoops-pave-lab": stock.goldHoopsBaguette,
  "pendant-solitaire-natural": stock.cushionPendant,
  "pendant-initial-lab": stock.pendantsPair,
  "natural-round-brilliant": stock.roundDiamondWhite,
  "lab-round-brilliant": stock.diamondMacroWhite,
};

export const categoryPhoto: Record<CategorySlug, StaticImageData> = {
  "engagement-rings": stock.emeraldSolitaireGold,
  "wedding-bands": stock.channelEternityBand,
  "tennis-bracelets": stock.tennisBraceletLine,
  earrings: stock.haloStudsLilac,
  pendants: stock.cushionPendant,
  "natural-diamonds": stock.diamondTweezers,
  "lab-diamonds": stock.looseDiamondsBlush,
};

export function pick(slugs: string[]): Product[] {
  return slugs.map((s) => getProduct(s)).filter((p): p is Product => Boolean(p));
}

/** Lowest real opening price across a list of products. */
export function lowestPrice(products: Product[]): number | undefined {
  const prices = products
    .map((p) => p.priceFrom)
    .filter((p): p is number => typeof p === "number");
  return prices.length ? Math.min(...prices) : undefined;
}
