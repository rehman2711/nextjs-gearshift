"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ViewBookings = () => {
  const [viewCustomerBookings, setViewCustomerBookings] = useState([]);

  const router = useRouter();

  const fetchCustomer = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings_completed`
    );
    setViewCustomerBookings(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between bg-yellow-400 rounded-xl shadow-lg px-6 py-4">
          <h1 className="text-white text-3xl font-bold tracking-wide">
            ALL COMPLETED BOOKINGS
          </h1>
          <Button variant="secondary" onClick={() => router.back()}>
            Back
          </Button>
        </div>

        {/* Bookings Grid */}
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {viewCustomerBookings.map((val, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-5 border border-gray-200 hover:shadow-xl transition"
            >
              <div className="text-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${val.customerImage}`}
                  alt="Customer"
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-3"
                />

                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                  {val.customerName}
                </h4>

                <div className="text-left text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">Mobile:</span>{" "}
                    {val.customerMobile}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {val.customerEmail}
                  </p>
                  <p>
                    <span className="font-semibold">Gender:</span>{" "}
                    {val.customerGender}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {val.customerAddress}
                  </p>
                  <p>
                    <span className="font-semibold">PAN no:</span>{" "}
                    {val.customerPAN}
                  </p>
                  <p>
                    <span className="font-semibold">Booked Car:</span>{" "}
                    {val.customerChoosenCar}
                  </p>
                  <p>
                    <span className="font-semibold">Booked From:</span>{" "}
                    {new Date(val.customerChoosenCarFrom).toLocaleDateString(
                      "en-IN",
                      {
                        year: "numeric",
                        day: "2-digit",
                        month: "short",
                      }
                    )}
                  </p>
                  <p>
                    <span className="font-semibold">Booked To:</span>{" "}
                    {new Date(val.customerChoosenCarTo).toLocaleDateString(
                      "en-IN",
                      {
                        year: "numeric",
                        day: "2-digit",
                        month: "short",
                      }
                    )}
                  </p>
                </div>
              </div>
              <div className="flex justify-center"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewBookings;
