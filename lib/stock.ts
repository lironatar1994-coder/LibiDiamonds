/**
 * Interim stock photography (free Unsplash licence), downloaded into
 * public/images/stock. Diamond jewelry only, still life only (no people).
 * Static imports give every photo its intrinsic size and a blurred
 * placeholder, so a slow connection never shows an empty frame.
 *
 * Replace with the brand's own photography (see image-brief.md).
 */

import channelEternityBand from "@/public/images/stock/channel-eternity-band.jpg";
import cushionHaloBridalSet from "@/public/images/stock/cushion-halo-bridal-set.jpg";
import cushionPendant from "@/public/images/stock/cushion-pendant.jpg";
import diamondMacroWhite from "@/public/images/stock/diamond-macro-white.jpg";
import diamondTweezers from "@/public/images/stock/diamond-tweezers.jpg";
import emeraldSolitaireGold from "@/public/images/stock/emerald-solitaire-gold.jpg";
import goldDiamondRingsStack from "@/public/images/stock/gold-diamond-rings-stack.jpg";
import goldHoopsBaguette from "@/public/images/stock/gold-hoops-baguette.jpg";
import haloStudsLilac from "@/public/images/stock/halo-studs-lilac.jpg";
import haloStudsWhite from "@/public/images/stock/halo-studs-white.jpg";
import looseDiamondsBlush from "@/public/images/stock/loose-diamonds-blush.jpg";
import ovalHaloRoseGold from "@/public/images/stock/oval-halo-rose-gold.jpg";
import pendantsPair from "@/public/images/stock/pendants-pair.jpg";
import roseDiamondBand from "@/public/images/stock/rose-diamond-band.jpg";
import roseSolitaireLinen from "@/public/images/stock/rose-solitaire-linen.jpg";
import roundDiamondWhite from "@/public/images/stock/round-diamond-white.jpg";
import roundSolitaireSet from "@/public/images/stock/round-solitaire-set.jpg";
import solitaireBlushMarble from "@/public/images/stock/solitaire-blush-marble.jpg";
import stackedRings from "@/public/images/stock/stacked-rings.jpg";
import tennisBraceletLine from "@/public/images/stock/tennis-bracelet-line.jpg";
import tennisBraceletOpen from "@/public/images/stock/tennis-bracelet-open.jpg";
import twistedEternityBand from "@/public/images/stock/twisted-eternity-band.jpg";

export const stock = {
  channelEternityBand,
  cushionHaloBridalSet,
  cushionPendant,
  diamondMacroWhite,
  diamondTweezers,
  emeraldSolitaireGold,
  goldDiamondRingsStack,
  goldHoopsBaguette,
  haloStudsLilac,
  haloStudsWhite,
  looseDiamondsBlush,
  ovalHaloRoseGold,
  pendantsPair,
  roseDiamondBand,
  roseSolitaireLinen,
  roundDiamondWhite,
  roundSolitaireSet,
  solitaireBlushMarble,
  stackedRings,
  tennisBraceletLine,
  tennisBraceletOpen,
  twistedEternityBand,
} as const;

export type StockName = keyof typeof stock;
