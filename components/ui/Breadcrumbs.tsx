import Link from "next/link";

export type Crumb = {
  name: string;
  path: string;
};

/**
 * The separator points inline-start (visually right-to-left in Hebrew) so the
 * trail reads in the natural RTL direction.
 */
export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: Crumb[];
  onDark?: boolean;
}) {
  return (
    <nav aria-label="מסלול ניווט">
      <ol
        className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.8125rem] ${
          onDark ? "text-on-dark-muted" : "text-muted"
        }`}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-2.5">
              {isLast ? (
                <span
                  aria-current="page"
                  className={onDark ? "text-gold-light" : "font-medium text-navy"}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors duration-200 hover:text-gold-deep"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden="true" className="opacity-40">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
