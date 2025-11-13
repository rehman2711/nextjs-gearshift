"use client";

import { useState } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";
import { Button } from "@/components/retroui/Button";

export default function FeaturedBellows({ allCarsData = [] }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[100vh] flex justify-end items-end bg-gradient-to-t from-gray-50/80 via-white/60 to-transparent backdrop-blur-lg overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {allCarsData.map((car) => {
        const isOpen = openId === car.id;

        return (
          <motion.div
            key={car.id}
            layout
            onClick={() => setOpenId(isOpen ? null : car.id)}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative group cursor-pointer flex-shrink-0 transition-all duration-700 rounded-2xl overflow-hidden shadow-lg border border-gray-200/60 backdrop-blur-md h-[100%] ${
              isOpen
                ? "w-[54%] h-[50vh] bg-white/90"
                : "w-[5rem] h-[50vh] bg-white/40 hover:bg-white/60"
            }`}
          >
            {/* Collapsed Vertical Tab (Left Side) */}
            {!isOpen && (
              <div className="absolute inset-0 flex justify-center items-center bg-white/40 border border-gray-200/40 hover:bg-white/70 transition-all duration-500 rounded-2xl">
                <p className="text-gray-800 font-mono font-extrabold text-3xl rotate-90 whitespace-nowrap tracking-[4]">
                  {car.cName}
                </p>
              </div>
            )}

            {/* Expanded Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, x: 1000 }} // 👈 start from right
                  animate={{ opacity: 1, x: 0 }} // 👈 slide into place
                  exit={{ opacity: 0, x: -1000 }} // 👈 slide out to left
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-8"
                >
                  {/* Top: Name + Image */}
                  <div className="w-full flex flex-col items-center justify-center text-center space-y-4">
                    <h3 className="text-4xl font-bold text-gray-900 pb-4 font-mono">
                      {car.cName}
                    </h3>
                    <div className="w-full rounded-2xl flex justify-center items-center overflow-hidden">
                      <motion.img
                        src={car.cImg}
                        alt={car.cName}
                        className="w-full max-w-md h-56 object-cover rounded-xl shadow-md hover:scale-200 transition-transform duration-500"
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center max-w-2xl">
                    Experience unmatched performance, luxurious comfort, and
                    cutting-edge design with the {car.cName}. Built to redefine
                    your drive.
                  </p>

                  {/* Specs: labels + values */}
                  <div className="w-full flex flex-col items-center justify-center gap-3">
                    {/* Labels */}
                    <div className="flex justify-center gap-10 text-gray-500 font-semibold uppercase tracking-wide text-sm">
                      <span>Type</span>
                      <span>Power</span>
                      <span>Range</span>
                      <span>Price</span>
                    </div>

                    {/* Values as badges */}
                    <div className="flex justify-center gap-10">
                      <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                        SUV
                      </span>
                      <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                        70000 hp
                      </span>
                      <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
                        500 km
                      </span>
                      <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
                        $70,000
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center items-center gap-5 pt-4">
                    <Button
                      className="px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Explore clicked");
                      }}
                    >
                      Explore
                    </Button>
                    <Button
                      className="px-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-800 hover:to-black shadow-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("Compare clicked");
                      }}
                    >
                      Compare
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
