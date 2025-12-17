"use client";

import Image from "next/image";

export default function BrandGrid() {
  const items = [
    { id: 1, src: "/images/cars/audi-rs.jpg", size: "small" },
    { id: 2, src: "/images/cars/bmw.jpg", size: "small" },
    { id: 3, src: "/images/cars/posche-111.jpg", size: "big" },

    { id: 4, src: "/images/cars/ferarri.jpg", size: "big" },
    { id: 5, src: "/images/cars/bmw-18 .jpg", size: "small" },
    { id: 6, src: "/images/cars/benz-g-63.jpg", size: "small" },

    { id: 7, src: "/images/cars/posche-992.jpg", size: "small" },
    { id: 8, src: "/images/cars/benz-g-63.jpg", size: "big" },
    { id: 9, src: "/images/cars/audi-rs.jpg", size: "huge" },
  ];

  return (
    <div className="relative z-40 px-4 sm:px-6">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-4 sm:gap-5
          auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px]
        "
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`
              relative rounded-xl overflow-hidden shadow-md
              transition-transform duration-300
              ${
                item.size === "big"
                  ? "sm:row-span-2"
                  : "row-span-1"
              }
              ${
                item.size === "huge"
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }
            `}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              className="
                object-cover
                hover:scale-105
                sm:hover:scale-110
                transition-transform duration-500
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
