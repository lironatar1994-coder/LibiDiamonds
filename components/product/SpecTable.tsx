import type { ProductSpec } from "@/data/products";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <dl className="overflow-hidden rounded-xl border border-line">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="flex items-baseline justify-between gap-6 border-b border-line px-4 py-3 last:border-b-0 odd:bg-pearl/60"
        >
          <dt className="text-[0.875rem] text-muted">
            {spec.label}
          </dt>
          <dd className="num text-end text-[0.9375rem] font-semibold text-navy">
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
