"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CheckAvailability() {
  const router = useRouter();
  const { availability_id } = useParams();

  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Car
  const fetchCar = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/cars/${availability_id}`
      );
      setCarData(result.data);
    } catch (error) {
      console.log("Error fetching car:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="text-gray-700 text-lg font-semibold"
        >
          Loading car details...
        </motion.div>
      </div>
    );
  }

  if (!carData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <p className="text-xl font-semibold text-red-600">
          Failed to load car details.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        className="absolute top-20 right-4 bg-black/80 text-white rounded-full flex items-center justify-center text-sm hover:bg-black transition z-101"
      >
        Back
      </Button>

      {/* HERO SECTION */}
      <div className="w-full h-[60vh] relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full"
        >
          <Image
            src={carData.cImg}
            alt={carData.cName}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Car Title */}
        <div className="absolute bottom-10 left-10 text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold"
          >
            {carData.cName}
          </motion.h1>
          <p className="text-lg opacity-90 mt-2">
            {carData.cBrand} • {carData.cYear}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-14">
        {/* Quick Info Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {[
            { label: "Mileage", value: carData.mileage },
            { label: "Fuel", value: carData.cFuel },
            { label: "Seats", value: carData.person },
            { label: "Type", value: carData.type },
            { label: "Model", value: carData.cModel },
            { label: "Year", value: carData.cYear },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-gray-100 rounded-xl text-gray-700 font-semibold shadow-sm"
            >
              <p className="text-sm opacity-60">{item.label}</p>
              <p className="text-lg">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* SLOGAN */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gray-900"
          >
            {carData.cSlogan}
          </motion.h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6 max-w-4xl mx-auto text-gray-700 text-lg text-center">
          {carData.cText}
        </div>

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {[carData.img1, carData.img2, carData.img3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="w-full h-56 relative"
            >
              <Image
                src={img}
                alt={`Gallery ${i}`}
                fill
                className="object-cover rounded-xl shadow-md"
              />
            </motion.div>
          ))}
        </div>

        {/* AVAILABILITY STATUS */}
        <div className="mt-16 text-center">
          <span
            className={`px-4 py-2 rounded-full text-base font-semibold ${
              carData.cStatus === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {carData.cStatus}
          </span>
        </div>

        {/* PRICE */}
        <div className="text-center mt-6 text-3xl font-bold text-gray-900">
          {carData.cCurrency} {carData.cMoney} / {carData.cDay}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-10">
          {carData.cStatus === "Available" ? (
            <Button
              onClick={() => router.push(`/models/availability/${carData.id}/rent_now`)}
              className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Rent Now
            </Button>
          ) : (
            <Button
              onClick={() => router.push(`/models/availability/${carData.id}/notify_me`)}
              className="bg-gray-700 text-white hover:bg-gray-800 transition"
            >
              Notify Me
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
