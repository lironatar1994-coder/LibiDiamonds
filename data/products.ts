import type { CategorySlug } from "./categories";

export type DiamondOrigin = "natural" | "lab";

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  origin: DiamondOrigin;
  /** Opening price in ILS. Omit for made-to-order pieces priced in consultation. */
  priceFrom?: number;
  /** One-line description used on cards */
  teaser: string;
  /** Full editorial description on the product page */
  description: string[];
  /** Certificate authority */
  certificate: "GIA" | "IGI";
  specs: ProductSpec[];
  /** Notable options offered during consultation */
  options: string[];
  imageId: string;
  featured?: boolean;
};

export const products: Product[] = [
  /* ------------------ Engagement rings ------------------ */
  {
    slug: "solitaire-classic-natural",
    name: "סוליטר קלאסי",
    category: "engagement-rings",
    origin: "natural",
    priceFrom: 9400,
    teaser: "יהלום עגול בשיבוץ שש רגליים, פס דק שנותן לאבן את כל הבמה.",
    description: [
      "הטבעת שאליה חוזרים אחרי שבודקים את כל השאר. שיבוץ שש רגליים מחזיק את היהלום גבוה מעל הפס, כך שהאור נכנס אליו מכל הכיוונים ולא נחסם על ידי המתכת.",
      "הפס דק בכוונה — 1.8 מ״מ — כדי שהעין תלך ליהלום ולא לטבעת. הרגליים מלוטשות בקצה מעוגל שלא נתפס בבד, פרט קטן שמרגישים רק אחרי חודש של ענידה יומיומית.",
      "אפשר לבנות אותה סביב כל משקל אבן, מחצי קראט ועד שלושה קראט ומעלה. את האבן נבחר יחד מתוך כמה אפשרויות באותו תקציב.",
    ],
    certificate: "GIA",
    specs: [
      { label: "ליטוש", value: "עגול מבריק" },
      { label: "משקל מוצע", value: "0.50 – 3.00 קראט" },
      { label: "גוון", value: "D – H" },
      { label: "ניקיון", value: "VVS2 – VS2" },
      { label: "מתכת", value: "זהב לבן / צהוב / ורוד 18K או פלטינה" },
      { label: "רוחב פס", value: "1.8 מ״מ" },
    ],
    options: [
      "שיבוץ ארבע או שש רגליים",
      "פס חלק או משובץ פאווה",
      "חריטה אישית בפנים הטבעת",
    ],
    imageId: "product-solitaire-classic-natural",
    featured: true,
  },
  {
    slug: "halo-oval-lab",
    name: "הילה אובלית",
    category: "engagement-rings",
    origin: "lab",
    priceFrom: 7200,
    teaser: "יהלום אובלי בהילת פאווה — הנוכחות של אבן גדולה בהרבה.",
    description: [
      "הילה של יהלומים קטנים סביב האבן המרכזית מגדילה את הקוטר הנראה בכ־30 אחוז. באבן אובלית, שכבר מאריכה את האצבע, התוצאה היא טבעת עם נוכחות משמעותית בלי לעלות מדרגת משקל.",
      "כל אבני ההילה נבחרות באותו גוון של האבן המרכזית — אחרת ההילה מסגירה את עצמה ונראית לבנה יותר או צהובה יותר מהמרכז. זה הפרט שמפריד בין הילה טובה להילה זולה.",
      "ביהלום מעבדה זו נקודת הכניסה המשתלמת ביותר לטבעת עם מסה ויזואלית גדולה. אותה טבעת ביהלום טבעי מתחילה בכ־14,000 ש״ח.",
    ],
    certificate: "IGI",
    specs: [
      { label: "ליטוש", value: "אובל מבריק" },
      { label: "משקל מרכזי", value: "1.00 – 2.50 קראט" },
      { label: "גוון", value: "E – G" },
      { label: "ניקיון", value: "VVS1 – VS1" },
      { label: "אבני הילה", value: "0.35 קראט סה״כ" },
      { label: "מתכת", value: "זהב לבן / ורוד 18K" },
    ],
    options: [
      "הילה יחידה או כפולה",
      "פס משובץ עד חצי היקף",
      "התאמת טבעת נישואין תואמת",
    ],
    imageId: "product-halo-oval-lab",
    featured: true,
  },
  {
    slug: "three-stone-emerald-natural",
    name: "שלוש אבנים אמרלד",
    category: "engagement-rings",
    origin: "natural",
    teaser: "אמרלד מרכזי בין שני טרפזים — קווים נקיים, אפס קיטש.",
    description: [
      "ליטוש אמרלד עובד אחרת מעגול: הוא לא מנצנץ, הוא מהבהב בלוחות אור רחבים. זו טבעת לאנשים שמעדיפים קו נקי על פני ברק מפוצל.",
      "שתי אבני הצד בליטוש טרפז מובילות את העין לאבן המרכזית ומרחיבות את הנוכחות על האצבע. הפרופורציה בין שלושתן היא כל העניין, ולכן היא נקבעת ידנית לכל טבעת.",
      "בליטוש אמרלד הניקיון קריטי — האבן שקופה ולא מסתירה כלום. לכן כאן נמליץ תמיד על VS1 ומעלה, גם במחיר של ירידה במשקל.",
    ],
    certificate: "GIA",
    specs: [
      { label: "ליטוש", value: "אמרלד" },
      { label: "משקל מרכזי", value: "1.00 – 3.00 קראט" },
      { label: "גוון", value: "D – F" },
      { label: "ניקיון", value: "VS1 ומעלה" },
      { label: "אבני צד", value: "שני טרפזים, 0.60 קראט סה״כ" },
      { label: "מתכת", value: "פלטינה או זהב לבן 18K" },
    ],
    options: [
      "אבני צד בליטוש טרפז או באגט",
      "פס חלק בלבד",
      "חריטה אישית בפנים הטבעת",
    ],
    imageId: "product-three-stone-emerald-natural",
  },

  /* ------------------ Wedding bands ------------------ */
  {
    slug: "eternity-pave-lab",
    name: "אֶטרניטי פאווה",
    category: "wedding-bands",
    origin: "lab",
    priceFrom: 5800,
    teaser: "יהלומים סביב כל ההיקף — שורת אור אחת בלי התחלה וסוף.",
    description: [
      "טבעת אטרניטי משובצת לכל אורך ההיקף, כך שהיא נראית זהה מכל זווית ולא צריך ליישר אותה על האצבע. זו הסיבה שהיא נשארת התכשיט הנפוץ ביותר לענידה יומיומית.",
      "השיבוץ בפאווה עם רגליים זעירות שמחזיקות כל אבן בנפרד. הליטוש של המתכת בין האבנים הוא מה שקובע אם הטבעת נראית כמו שורת אור רצופה או כמו אבנים בודדות עם מתכת ביניהן.",
      "ביהלומי מעבדה אפשר להגיע לשיבוץ מלא ואחיד בעלות שמאפשרת גם טבעת שנייה תואמת — שילוב שלקוחות רבים בוחרים.",
    ],
    certificate: "IGI",
    specs: [
      { label: "שיבוץ", value: "פאווה, היקף מלא" },
      { label: "משקל סה״כ", value: "0.75 – 1.50 קראט" },
      { label: "גוון", value: "E – F" },
      { label: "ניקיון", value: "VS ומעלה" },
      { label: "מתכת", value: "זהב לבן / צהוב / ורוד 18K" },
      { label: "רוחב פס", value: "2.0 / 2.5 / 3.0 מ״מ" },
    ],
    options: [
      "היקף מלא או חצי היקף",
      "שיבוץ ערוץ במקום פאווה",
      "התאמה מדויקת לטבעת אירוסין קיימת",
    ],
    imageId: "product-eternity-pave-lab",
    featured: true,
  },
  {
    slug: "classic-comfort-band",
    name: "פס קלאסי קומפורט",
    category: "wedding-bands",
    origin: "natural",
    priceFrom: 2900,
    teaser: "פס חלק בפנים מעוגלות — הטבעת שנשכחת על האצבע.",
    description: [
      "הפרופיל הפנימי מעוגל, לא שטוח. זה נשמע כמו פרט טכני ומרגיש כמו הבדל עצום: הטבעת מחליקה על האצבע בקלות ולא יוצרת קו לחץ אחרי יום שלם.",
      "אפשר בגימור מבריק, מט משי או מוברש. המט מסתיר שריטות יומיומיות טוב יותר, המבריק שומר על נוכחות — הבחירה תלויה בסוג העבודה של מי שעונד.",
      "אפשר להוסיף יהלום בודד משובץ בשיבוץ סמוי בפנים הטבעת — פרט שרק שני אנשים בעולם יודעים עליו.",
    ],
    certificate: "GIA",
    specs: [
      { label: "פרופיל", value: "קומפורט פיט, פנים מעוגלות" },
      { label: "רוחב פס", value: "2.5 / 3.5 / 4.5 / 6.0 מ״מ" },
      { label: "גימור", value: "מבריק / מט משי / מוברש" },
      { label: "מתכת", value: "זהב 14K או 18K, פלטינה" },
      { label: "שיבוץ", value: "אופציונלי — יהלום סמוי בפנים" },
    ],
    options: [
      "חריטה אישית — טקסט או תאריך",
      "זוג טבעות בגימורים שונים",
      "שילוב שני גווני זהב",
    ],
    imageId: "product-classic-comfort-band",
  },

  /* ------------------ Tennis bracelets ------------------ */
  {
    slug: "tennis-bracelet-4ct-lab",
    name: "צמיד טניס 4 קראט",
    category: "tennis-bracelets",
    origin: "lab",
    priceFrom: 8900,
    teaser: "שורה רצופה של יהלומים תואמים, עם מנעול כפול שלא נפתח בטעות.",
    description: [
      "ארבעה קראט שמתחלקים לשורה של אבנים בגודל אחיד — לא אבן מרכזית עם נלוות. כל אבן בשורה נבחרה מאותו מערך, באותו גוון ובאותו ניקיון, כדי שהקו יישאר אחיד לכל אורכו.",
      "המפרקים בין החוליות עשויים לזוז בחופשיות, כך שהצמיד נופל סביב פרק היד ולא נשאר עומד. זה הפרט שקובע אם צמיד נראה יקר או קשיח.",
      "מנעול לשון עם קליפס ביטחון נוסף. צמיד טניס נאבד בעיקר בגלל מנעול בודד, ולכן זה לא אופציה אצלנו אלא ברירת מחדל.",
    ],
    certificate: "IGI",
    specs: [
      { label: "משקל סה״כ", value: "4.00 קראט" },
      { label: "מספר אבנים", value: "58 יהלומים" },
      { label: "גוון", value: "E – F, אחיד" },
      { label: "ניקיון", value: "VS1 – VS2" },
      { label: "מתכת", value: "זהב לבן 14K או 18K" },
      { label: "אורך", value: "17 / 18 / 19 ס״מ" },
    ],
    options: [
      "משקל 1 עד 10 קראט ומעלה",
      "שיבוץ ארבע רגליים או שלוש",
      "התאמת אורך מדויקת",
    ],
    imageId: "product-tennis-bracelet-4ct-lab",
    featured: true,
  },
  {
    slug: "tennis-bracelet-graduated-natural",
    name: "צמיד טניס מדורג",
    category: "tennis-bracelets",
    origin: "natural",
    teaser: "אבנים שגדלות לעבר המרכז — צמיד עם כיוון.",
    description: [
      "בצמיד מדורג האבנים גדלות בהדרגה מהמנעול לעבר מרכז פרק היד. התוצאה היא צמיד שנראה גדול יותר במקום שבו הוא באמת נראה, ומתעדן במקום שבו הוא נחבא מתחת לשרוול.",
      "הדירוג דורש התאמה של עשרות אבנים בגדלים עולים באותו גוון בדיוק — עבודה שלוקחת זמן, ולכן הצמידים האלה נבנים בהזמנה ולא נשמרים במלאי.",
      "המחיר נקבע לפי המשקל הכולל ואיכות המערך. נבנה עבורכם שתי או שלוש אפשרויות בטווח התקציב שתגדירו.",
    ],
    certificate: "GIA",
    specs: [
      { label: "משקל סה״כ", value: "3.00 – 12.00 קראט" },
      { label: "דירוג", value: "מדורג לכיוון המרכז" },
      { label: "גוון", value: "D – G, אחיד" },
      { label: "ניקיון", value: "VS ומעלה" },
      { label: "מתכת", value: "זהב לבן 18K או פלטינה" },
      { label: "מנעול", value: "לשון עם קליפס ביטחון" },
    ],
    options: ["בחירת טווח דירוג", "זהב לבן, צהוב או ורוד", "התאמת אורך מדויקת"],
    imageId: "product-tennis-bracelet-graduated-natural",
  },

  /* ------------------ Earrings ------------------ */
  {
    slug: "studs-solitaire-lab",
    name: "עגילי סוליטר צמודים",
    category: "earrings",
    origin: "lab",
    priceFrom: 3400,
    teaser: "זוג אבנים תואמות ממש, במנגנון שנשאר במקום.",
    description: [
      "עגילים צמודים הם התכשיט שנענד בלי לחשוב, ולכן שני דברים בהם קריטיים: שהאבנים יהיו תואמות ממש — לא דומות — ושהמנגנון יחזיק אותן ישרות ולא ייפול קדימה.",
      "אנחנו מתאימים כל זוג אבן־מול־אבן באותו גוון ובאותו ניקיון. בזוג לא מותאם, האוזן אחת נראית לבנה יותר מהשנייה — משהו שלא רואים בתמונה ורואים בכל מראה.",
      "המנגנון הוא בורג עם דיסקית תמיכה בגב האונה, שמונע מהעגיל להישמט קדימה. ביהלומי מעבדה זה הזוג שמאפשר לעלות מדרגת גודל בלי לעלות בתקציב.",
    ],
    certificate: "IGI",
    specs: [
      { label: "ליטוש", value: "עגול מבריק" },
      { label: "משקל סה״כ", value: "1.00 – 4.00 קראט (לזוג)" },
      { label: "גוון", value: "E – G, תואם" },
      { label: "ניקיון", value: "VS ומעלה" },
      { label: "מתכת", value: "זהב לבן / צהוב 18K" },
      { label: "מנגנון", value: "בורג עם דיסקית תמיכה" },
    ],
    options: ["שיבוץ ארבע או שש רגליים", "שיבוץ סמוי", "הילה סביב האבן"],
    imageId: "product-studs-solitaire-lab",
    featured: true,
  },
  {
    slug: "hoops-pave-lab",
    name: "חישוקים משובצים",
    category: "earrings",
    origin: "lab",
    priceFrom: 4600,
    teaser: "חישוק בקוטר 20 מ״מ עם שורת פאווה בפנים ובחוץ.",
    description: [
      "חישוק משובץ בשני הצדדים בוהק גם כשהאוזן מסתובבת — בשונה מחישוק משובץ מבחוץ בלבד, שנעלם בחצי מהתנועות.",
      "הקוטר 20 מ״מ נבחר בכוונה: גדול מספיק כדי להיראות, קטן מספיק כדי לענוד למשרד. זמין גם ב־15 ו־25 מ״מ.",
      "מנגנון סגירה פנימי מוסתר, כך שהחישוק נראה כמו טבעת רצופה בלי נקודת חיבור גלויה.",
    ],
    certificate: "IGI",
    specs: [
      { label: "קוטר", value: "15 / 20 / 25 מ״מ" },
      { label: "משקל סה״כ", value: "1.20 – 2.40 קראט (לזוג)" },
      { label: "שיבוץ", value: "פאווה דו־צדדית" },
      { label: "גוון", value: "E – F" },
      { label: "מתכת", value: "זהב לבן / צהוב / ורוד 14K" },
      { label: "סגירה", value: "מנגנון פנימי מוסתר" },
    ],
    options: ["שיבוץ חד־צדדי במחיר נמוך יותר", "שילוב שני גווני זהב"],
    imageId: "product-hoops-pave-lab",
  },

  /* ------------------ Pendants ------------------ */
  {
    slug: "pendant-solitaire-natural",
    name: "תליון סוליטר",
    category: "pendants",
    origin: "natural",
    priceFrom: 4200,
    teaser: "אבן אחת בשיבוץ מינימלי, על שרשרת שנמדדת אישית.",
    description: [
      "תליון סוליטר עומד על שני פרטים: כמה מהאבן חשוף לאור, ובאיזה גובה היא יושבת על עצם החזה. שיבוץ ארבע רגליים משאיר את היהלום פתוח מהצדדים ומהגב, כך שהאור עובר דרכו ולא רק מוחזר ממנו.",
      "טבעת החיבור לשרשרת מעוצבת קטנה ונקייה, כדי שהתליון לא ייראה תלוי על וו. פרט קטן שקובע אם התליון נראה עדין או תעשייתי.",
      "את אורך השרשרת אנחנו קובעים מול מי שעונדת — 40 ס״מ יושב על הצוואר, 42 מתחת לגרון, 45 על עצם החזה. אורך לא מותאם הוא הסיבה הנפוצה ביותר לתליון שלא נענד.",
    ],
    certificate: "GIA",
    specs: [
      { label: "ליטוש", value: "עגול / אובל / טיפה" },
      { label: "משקל", value: "0.30 – 2.00 קראט" },
      { label: "גוון", value: "D – H" },
      { label: "ניקיון", value: "VS ומעלה" },
      { label: "מתכת", value: "זהב לבן / צהוב / ורוד 18K" },
      { label: "שרשרת", value: "40 / 42 / 45 ס״מ, ניתן לכוונון" },
    ],
    options: ["שיבוץ ארבע רגליים או סמוי", "הילה סביב האבן", "חריטה בגב התליון"],
    imageId: "product-pendant-solitaire-natural",
    featured: true,
  },
  {
    slug: "pendant-initial-lab",
    name: "תליון אות אישי",
    category: "pendants",
    origin: "lab",
    priceFrom: 2400,
    teaser: "אות אחת בעברית או באנגלית, משובצת פאווה.",
    description: [
      "אות בודדת — עברית או אנגלית — משובצת ביהלומים זעירים. המתנה שלוקחים כשלא יודעים מידה ולא רוצים ליפול על משהו גנרי.",
      "הקווים של האות נבנים בעובי אחיד כדי שהשיבוץ יישאר רצוף ולא ייפול לחורים. באותיות עבריות עם קווים דקים כמו י׳ או ו׳, זו עבודה עדינה שדורשת התאמה של גודל האבנים לרוחב הקו.",
      "אפשר גם תאריך, שני תווים או צירוף ראשי תיבות. נשלח הדמיה לאישור לפני הייצור.",
    ],
    certificate: "IGI",
    specs: [
      { label: "גובה אות", value: "12 / 15 / 18 מ״מ" },
      { label: "שיבוץ", value: "פאווה" },
      { label: "משקל סה״כ", value: "0.15 – 0.40 קראט" },
      { label: "מתכת", value: "זהב לבן / צהוב / ורוד 14K" },
      { label: "שרשרת", value: "40 / 42 / 45 ס״מ" },
    ],
    options: ["עברית או אנגלית", "תאריך או ראשי תיבות", "אות חלקה בלי שיבוץ"],
    imageId: "product-pendant-initial-lab",
  },

  /* ------------------ Loose diamonds ------------------ */
  {
    slug: "natural-round-brilliant",
    name: "יהלום טבעי עגול",
    category: "natural-diamonds",
    origin: "natural",
    priceFrom: 6800,
    teaser: "אבן בודדת בתעודת GIA, נבחרת נקודתית לפי מה שחשוב לכם.",
    description: [
      "אנחנו לא מחזיקים מלאי שצריך להיפטר ממנו. במקום זה, אחרי שנבין מה חשוב לכם — משקל, לבן, ניקיון או מחיר — נאתר מול המלטשות שלוש עד חמש אבנים שעונות על ההגדרה, ונציג אותן זו לצד זו עם התעודות.",
      "בליטוש עגול מבריק, הפרמטר שמשפיע יותר מכולם על הברק הוא דירוג הליטוש (Cut), לא הגוון ולא הניקיון. אבן בליטוש Excellent בגוון G תיראה לבנה ובוהקת יותר מאבן Good בגוון E. זה ההסבר שחוסך לרוב הלקוחות שלנו כמה אלפי שקלים.",
      "המחיר שמופיע כאן הוא נקודת פתיחה לאבן חצי קראט. אבנים בכל המשקלים זמינות להזמנה.",
    ],
    certificate: "GIA",
    specs: [
      { label: "ליטוש", value: "עגול מבריק" },
      { label: "משקל", value: "0.30 – 5.00 קראט ומעלה" },
      { label: "דירוג ליטוש", value: "Excellent / Very Good" },
      { label: "גוון", value: "D – J" },
      { label: "ניקיון", value: "FL – SI1" },
      { label: "תעודה", value: "GIA, מלאה" },
    ],
    options: [
      "בחירה בין 3–5 אבנים מוצעות",
      "שיבוץ בטבעת או בתליון",
      "כל הליטושים זמינים להזמנה",
    ],
    imageId: "product-natural-round-brilliant",
  },
  {
    slug: "lab-round-brilliant",
    name: "יהלום מעבדה עגול",
    category: "lab-diamonds",
    origin: "lab",
    priceFrom: 2200,
    teaser: "אותו חומר ואותו ברק, בתעודת IGI — ובמשקל שאפשר להרשות.",
    description: [
      "אותו הרכב פחמני, אותה קשיות 10 בסולם מוס, אותו מקדם שבירת אור. שמאי לא יכול להבחין בין יהלום מעבדה ליהלום טבעי בלופה — נדרש מכשיר ייעודי לזיהוי, וגם הוא מזהה את תהליך הגדילה, לא הבדל באיכות.",
      "מה שמשתנה הוא המחיר. אותו תקציב שקונה חצי קראט טבעי יכול לקנות קראט וחצי במעבדה, בגוון לבן יותר ובניקיון גבוה יותר. זו הסיבה שיותר ממחצית הלקוחות שלנו בוחרים כאן.",
      "כל אבן מגיעה בתעודת IGI מלאה, עם ציון מפורש שמדובר ביהלום מעבדה. אנחנו אומרים את זה בפירוש בכל שלב — הבחירה שלכם צריכה להיות מדעת.",
    ],
    certificate: "IGI",
    specs: [
      { label: "ליטוש", value: "עגול מבריק" },
      { label: "משקל", value: "0.50 – 6.00 קראט ומעלה" },
      { label: "דירוג ליטוש", value: "Excellent" },
      { label: "גוון", value: "D – G" },
      { label: "ניקיון", value: "VVS – VS" },
      { label: "תעודה", value: "IGI, מלאה, מסומנת כיהלום מעבדה" },
    ],
    options: [
      "כל הליטושים זמינים",
      "השוואה מול אבן טבעית באותו תקציב",
      "שיבוץ בכל דגם מהקולקציה",
    ],
    imageId: "product-lab-round-brilliant",
    featured: true,
  },
];

export const productMap: Record<string, Product> = Object.fromEntries(
  products.map((product) => [product.slug, product]),
);

export function getProduct(slug: string): Product | undefined {
  return productMap[slug];
}

export function productsByCategory(category: CategorySlug): Product[] {
  return products.filter((product) => product.category === category);
}

export const featuredProducts = products.filter((product) => product.featured);

/** Related pieces: same category first, then same origin, capped. */
export function relatedProducts(product: Product, limit = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const sameOrigin = products.filter(
    (p) =>
      p.origin === product.origin &&
      p.category !== product.category &&
      p.slug !== product.slug,
  );
  return [...sameCategory, ...sameOrigin].slice(0, limit);
}

export const originLabel: Record<DiamondOrigin, string> = {
  natural: "יהלום טבעי",
  lab: "יהלום מעבדה",
};
