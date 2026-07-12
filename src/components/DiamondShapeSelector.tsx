import Image from "next/image";
import type { DiamondShape } from "@/data/products";

export interface DiamondShapeOption {
  name: string;
  type: DiamondShape;
  image: string;
}

export default function DiamondShapeSelector({ shapes }: { shapes: readonly DiamondShapeOption[] }) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-x-3 gap-y-5 pb-1 sm:mt-8 sm:gap-x-6 sm:gap-y-7 lg:mt-9 lg:grid-cols-6 lg:gap-7">
      {shapes.map((shape) => (
        <figure key={shape.type} className="flex flex-col items-center justify-center px-1 text-center">
          <span className="shape-stone-field relative h-[88px] w-[88px] min-[390px]:h-[96px] min-[390px]:w-[96px] sm:h-[126px] sm:w-[126px] lg:h-[138px] lg:w-[138px]">
            <Image
              src={shape.image}
              alt={`יהלום בחיתוך ${shape.name}`}
              fill
              sizes="(min-width: 1024px) 138px, (min-width: 640px) 126px, 96px"
              className="mix-blend-darken object-contain p-[2%]"
            />
          </span>
          <figcaption className="mt-2 font-display text-base text-ink sm:mt-3 sm:text-xl">
            {shape.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
