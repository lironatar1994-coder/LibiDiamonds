const ilsFormatter = new Intl.NumberFormat("he-IL", {
  style: "currency",
  currency: "ILS",
  maximumFractionDigits: 0,
});

/** 9400 → "₪9,400" */
export function formatPrice(amount: number): string {
  return ilsFormatter.format(amount);
}

/** Opening-price phrasing used on cards and product pages. */
export function formatPriceFrom(amount?: number): string {
  if (typeof amount !== "number") return "מחיר בתיאום אישי";
  return `החל מ־${formatPrice(amount)}`;
}

export function formatCarat(carat: number): string {
  return `${carat.toFixed(2)} קראט`;
}
