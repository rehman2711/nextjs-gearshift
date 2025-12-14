"use client";

import Image from "next/image";

export default function BrandGrid() {
  const items = [
    // TOP ROW (6 images)
    { id: 1, src: "/images/cars/audi-rs.jpg", size: "small" },
    { id: 2, src: "/images/cars/bmw.jpg", size: "small" },
    { id: 3, src: "/images/cars/posche-111.jpg", size: "big" },

    { id: 4, src: "/images/cars/ferarri.jpg", size: "big" },
    { id: 5, src: "/images/cars/bmw-18 .jpg", size: "small" },
    { id: 6, src: "/images/cars/benz-g-63.jpg", size: "small" },

    // BOTTOM ROW (3 images)
    { id: 7, src: "/images/cars/posche-992.jpg", size: "small" },
    { id: 8, src: "/images/cars/benz-g-63.jpg", size: "big" },
    { id: 9, src: "/images/cars/audi-rs.jpg", size: "huge" },
  ];

  return (
    <div className="relative z-400" >
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-5 auto-rows-[200px]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-xl overflow-hidden shadow-md
              ${item.size === "big" ? "row-span-2" : "row-span-1"}
               ${item.size === "huge" && "col-span-2 row-span-2"}
            `}
          >
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover hover:scale-105 duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
