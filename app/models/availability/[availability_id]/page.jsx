"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Loader from "@/app/loader";

export default function CheckAvailability() {
  const router = useRouter();
  const { availability_id } = useParams();

  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCar = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/single-car/${availability_id}`
      );
      setCarData(result.data[0]);
    } catch (error) {
      console.log("Error fetching car:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  if (isLoading) return <Loader />;

  if (!carData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-lg sm:text-xl font-semibold text-red-600">
          Failed to load car details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pb-20"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            rgba(16, 185, 129, 0.06) 0,
            rgba(16, 185, 129, 0.06) 1px,
            transparent 1px,
            transparent 20px
          ),
          repeating-linear-gradient(
            -45deg,
            rgba(6, 182, 212, 0.06) 0,
            rgba(6, 182, 212, 0.06) 1px,
            transparent 10px,
            transparent 15px
          ),
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(16, 185, 129, 0.14), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(6, 182, 212, 0.16), transparent 60%),
          rgb(254, 250, 250)
        `,
      }}
    >
      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        className="fixed top-4 right-4 sm:top-20 sm:right-4 bg-black/80 text-white rounded-full text-xs sm:text-sm z-40"
      >
        Back
      </Button>

      {/* HERO */}
      <div className="w-full h-[50vh] sm:h-[60vh] relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${carData.carImageMain}`}
            alt={carData.carName}
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 text-white max-w-[90%]">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-4xl font-bold"
          >
            {carData.carName}
          </motion.h1>
          <p className="text-sm sm:text-lg opacity-90 mt-1 sm:mt-2">
            {carData.carBrandName} • {carData.carManufactureYear}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        {/* INFO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { label: "Mileage", value: carData.carMileage },
            { label: "Fuel", value: carData.carFuelType },
            { label: "Seats", value: carData.carSeatingCapacity },
            { label: "Gear", value: carData.carGearSystem },
            { label: "Model", value: carData.carModelName },
            { label: "Year", value: carData.carManufactureYear },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 sm:p-4 bg-gray-100 rounded-xl text-center text-gray-700 font-semibold shadow-sm"
            >
              <p className="text-xs sm:text-sm opacity-60">{item.label}</p>
              <p className="text-base sm:text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* SLOGAN */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {carData.carSlogan}
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6 max-w-4xl mx-auto text-gray-700 text-base sm:text-lg text-center">
          {carData.carDescription}
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[carData.carImageSub1, carData.carImageSub2, carData.carImageSub3].map(
            (img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="w-full h-44 sm:h-56 relative"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${img}`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </motion.div>
            )
          )}
        </div>

        {/* STATUS */}
        <div className="mt-16 text-center">
          <span
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold
              ${
                carData.carStatus === "true"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
          >
            {carData.carStatus === "true" ? "Available" : "Not Available"}
          </span>
        </div>

        {/* PRICE */}
        <div className="text-center mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
          {carData.carCurrency} {carData.carRent}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          {carData.carStatus === "true" ? (
            <Button
              onClick={() =>
                router.push(`/models/availability/${carData.id}/rent_now`)
              }
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-full sm:w-auto"
            >
              Rent Now
            </Button>
          ) : (
            <Button
              onClick={() =>
                router.push(`/models/availability/${carData.id}/notify_me`)
              }
              className="bg-gray-700 hover:bg-gray-800 text-white rounded-xl w-full sm:w-auto"
            >
              Notify Me
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
