"use client";

import { useState } from "react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/site";

export interface DiamondShapeOption {
  name: string;
  type: string;
  image: string;
}

export default function DiamondShapeSelector({ shapes }: { shapes: readonly DiamondShapeOption[] }) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const selected = shapes.find((shape) => shape.type === selectedType);

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-x-2 gap-y-5 sm:mt-8 sm:gap-x-6 sm:gap-y-8 lg:mt-9 lg:grid-cols-6 lg:gap-5">
        {shapes.map((shape) => {
          const isSelected = selectedType === shape.type;
          return (
            <button
              key={shape.type}
              type="button"
              onClick={() => setSelectedType(shape.type)}
              aria-pressed={isSelected}
              className="group flex flex-col items-center justify-center px-1 py-1 text-center"
            >
              <span
                className={`shape-stone-field relative h-[82px] w-[82px] min-[390px]:h-[90px] min-[390px]:w-[90px] sm:h-[122px] sm:w-[122px] lg:h-[132px] lg:w-[132px] ${
                  isSelected ? "shape-stone-field-selected" : ""
                }`}
              >
                <Image
                  src={shape.image}
                  alt={`יהלום בחיתוך ${shape.name}`}
                  fill
                  sizes="(min-width: 1024px) 124px, (min-width: 640px) 118px, 92px"
                  className="mix-blend-multiply object-contain p-[9%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </span>
              <span className="mt-2 font-display text-base text-ink sm:mt-3 sm:text-xl">{shape.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex min-h-12 justify-center sm:mt-8">
        {selected ? (
          <a
            href={waLink(`היי, אשמח לבדוק יהלום בחיתוך ${selected.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline min-w-[15rem]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            לבדיקת יהלום בחיתוך {selected.name}
          </a>
        ) : (
          <span className="inline-flex min-h-12 min-w-[15rem] items-center justify-center border border-line px-5 text-sm text-stone">
            בחרו חיתוך להמשך
          </span>
        )}
      </div>
    </>
  );
}
