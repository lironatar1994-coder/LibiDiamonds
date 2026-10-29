import { LuxButton } from "@/components/ui/LuxButton";
import { categories } from "@/data/categories";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center py-28">
      <p className="kicker">404</p>

      <h1 className="mt-6 max-w-2xl text-(length:--text-display) font-light leading-[1.1] text-graphite">
        העמוד הזה לא נמצא.
      </h1>

      <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
        ייתכן שהקישור השתנה או שהוקלד באופן שגוי. אפשר לחזור לדף הבית, או להמשיך
        משם לאחת הקולקציות.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <LuxButton href="/" variant="solid">
          לדף הבית
        </LuxButton>
        <LuxButton href="/contact/" variant="outline">
          תיאום פגישה
        </LuxButton>
      </div>

      <nav aria-label="קולקציות" className="mt-14 border-t border-line pt-8">
        <p className="kicker">קולקציות</p>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/collections/${category.slug}/`}
                className="link-draw text-graphite transition-colors duration-300 hover:text-champagne-deep"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
