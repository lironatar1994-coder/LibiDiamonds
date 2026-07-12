export interface Review {
  quote: string;
  name: string;
  location: string;
  product: string;
  isDemo: boolean;
}

export const reviews: Review[] = [
  {
    quote:
      "הגעתי עם צילום כללי של טבעת שאהבתי. עברנו יחד על גודל האבן וגובה השיבוץ, ובסוף בחרתי משהו שנראה נכון על היד ולא רק בתעודה.",
    name: "נועה",
    location: "תל אביב",
    product: "טבעת אורה",
    isDemo: true,
  },
  {
    quote:
      "היה לי חשוב שהעגילים יהיו מורגשים אבל לא כבדים. קיבלתי השוואה ברורה בין הגדלים, והזוג שבחרתי יושב בדיוק כמו שרציתי.",
    name: "מאיה",
    location: "רמת גן",
    product: "עגילי סטלה",
    isDemo: true,
  },
  {
    quote:
      "לפני ההזמנה קיבלתי פירוט מסודר של היהלומים, הסוגר וזמן האספקה. השרשרת הגיעה באריזה מוקפדת ונראתה כמו הבחירה שסגרנו.",
    name: "דנה",
    location: "חיפה",
    product: "שרשרת ריביירה",
    isDemo: true,
  },
];
