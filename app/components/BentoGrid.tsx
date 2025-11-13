"use client";

import Image from "next/image";

export function BrandGrid() {
  const items = [
    {
      id: 1,
      src: "https://i.pravatar.cc/80?img=21",
      alt: "Billboard Ad",
      colSpan: "md:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 2,
      src: "https://i.pravatar.cc/80?img=22",
      alt: "Logo Banner",
      colSpan: "md:col-span-1",
      rowSpan: "row-span-2",
    },
    {
      id: 3,
      src: "https://i.pravatar.cc/80?img=23",
      alt: "Tote Bag",
      colSpan: "md:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 4,
      src: "https://i.pravatar.cc/80?img=24",
      alt: "Jacket Pin",
      colSpan: "md:col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 5,
      src: "https://i.pravatar.cc/80?img=25",
      alt: "T-shirt Branding",
      colSpan: "md:col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 6,
      src: "https://i.pravatar.cc/80?img=26",
      alt: "App Icon",
      colSpan: "md:col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[230px]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-xl overflow-hidden shadow-md bg-white ${item.colSpan} ${item.rowSpan}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
