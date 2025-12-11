"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RentTheCarNow() {
  const router = useRouter();
  const params = useParams();

  const [selectedCar, setSelectedCar] = useState(null);

  const [customer, setCustomer] = useState({
    customerName: "",
    customerMobile: "",
    customerEmail: "",
    customerGender: "",
    customerAddress: "",
    customerPAN: "",
    customerChoosenCar: "",
    customerChoosenCarFrom: "",
    customerChoosenCarTo: "",
    customerImage: null,
  });

  // Fetch car by ID
  useEffect(() => {
    const fetchCar = async () => {
      try {
        if (!params?.availability_id) return;

        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/single-car/${params.availability_id}`
        );

        const car = res.data[0];
        setSelectedCar(car);

        setCustomer((prev) => ({
          ...prev,
          customerChoosenCar: car?.carName || "",
        }));
      } catch (err) {
        console.error("Error fetching car:", err);
      }
    };

    fetchCar();
  }, [params]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setCustomer((prev) => ({
      ...prev,
      customerImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (let key in customer) {
        formData.append(key, customer[key]);
      }

      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/book-car`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      router.push("/");
    } catch (err) {
      console.error("Error submitting booking:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Provide Documents
          </h2>

          {/* Name */}
          <label className="text-sm font-medium">Customer Name</label>
          <input
            name="customerName"
            value={customer.customerName}
            onChange={handleChange}
            required
            placeholder="Enter Your Name"
            className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
          />

          {/* Mobile */}
          <label className="text-sm font-medium">Mobile Number</label>
          <input
            name="customerMobile"
            value={customer.customerMobile}
            onChange={handleChange}
            required
            type="tel"
            placeholder="Enter Your Number"
            className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
          />

          {/* Email */}
          <label className="text-sm font-medium">Email Address</label>
          <input
            name="customerEmail"
            value={customer.customerEmail}
            onChange={handleChange}
            required
            type="email"
            placeholder="Enter Your Email"
            className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
          />

          {/* Gender */}
          <label className="text-sm font-medium">Gender</label>
          <select
            name="customerGender"
            value={customer.customerGender}
            onChange={handleChange}
            required
            className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* Address */}
          <label className="text-sm font-medium">Residential Address</label>
          <input
            name="customerAddress"
            value={customer.customerAddress}
            onChange={handleChange}
            required
            placeholder="Enter Your Address"
            className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PAN */}
            <div>
              <label className="text-sm font-medium">PAN Card No</label>
              <input
                name="customerPAN"
                value={customer.customerPAN}
                onChange={handleChange}
                placeholder="ABCDE1234F"
                pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
                className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Car Name */}
            <div>
              <label className="text-sm font-medium">Car Name</label>
              <input
                value={selectedCar?.carName || ""}
                readOnly
                className="w-full mt-1 mb-4 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Choosing Car From</label>
              <input
                type="date"
                name="customerChoosenCarFrom"
                value={customer.customerChoosenCarFrom}
                onChange={handleChange}
                className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Choosing Car To</label>
              <input
                type="date"
                name="customerChoosenCarTo"
                value={customer.customerChoosenCarTo}
                onChange={handleChange}
                className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Customer Photo */}
          <div className="mt-2">
            <label className="text-sm font-medium">Customer Photo</label>
            <input
              type="file"
              name="customerImage"
              onChange={handleFileChange}
              className="w-full mt-1 mb-4 px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Submit Form
          </Button>
        </form>

        {/* CAR PREVIEW */}
        <div className="flex flex-col items-center justify-center px-4">
          <h3 className="text-2xl font-semibold mb-4">
            YOU CHOSE
            <span className="ml-2 text-blue-600">
              {selectedCar?.carName || "—"}
            </span>
          </h3>

          {selectedCar?.carImageMain ? (
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${selectedCar.carImageMain}`}
              className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200"
            />
          ) : (
            <div className="w-full max-w-md h-56 bg-gray-100 border border-gray-300 rounded-2xl flex items-center justify-center text-gray-500">
              Loading image...
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
