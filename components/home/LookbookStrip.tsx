import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

const ids = [
  "lookbook-01",
  "lookbook-02",
  "lookbook-03",
  "lookbook-04",
  "lookbook-05",
  "lookbook-06",
];

export function LookbookStrip() {
  const handle = site.social.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@");

  return (
    <section aria-label="ליבי באינסטגרם" className="pb-14 lg:pb-20">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[1.5rem] lg:text-[1.875rem]">מהסטודיו שלנו</h2>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-navy transition-colors hover:text-gold-deep"
            >
              <InstagramIcon />
              <span dir="ltr">{handle}</span>
            </a>
          </div>
        </Reveal>

        <ul className="mt-6 grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-3">
          {ids.map((id, index) => (
            <Reveal as="li" key={id} delay={index * 50}>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="לאינסטגרם של ליבי דיאמונדס"
                className="group zoom-frame block overflow-hidden rounded-xl bg-pearl"
              >
                <SmartImage
                  id={id}
                  ratio="1 / 1"
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="w-full"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
