"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewBookings = () => {
  const [viewCustomerBookings, setViewCustomerBookings] = useState([]);

  const fetchCustomer = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings`
    );
    setViewCustomerBookings(result.data);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="mx-auto mt-10 w-11/12 bg-gray-900 rounded-2xl p-6 text-center">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          ALL BOOKINGS
        </h1>
      </div>

      {/* Bookings Grid */}
      <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {viewCustomerBookings.map((val, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-5 border border-gray-200 hover:shadow-xl transition"
          >
            <div className="text-center">
              <img
                src={val.image}
                alt="Customer"
                className="w-24 h-24 rounded-full mx-auto object-cover mb-3"
              />

              <h4 className="text-xl font-semibold text-blue-600 mb-3">
                {val.name}
              </h4>

              <div className="text-left text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Mobile:</span> {val.mobile}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {val.email}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span> {val.gender}
                </p>
                <p>
                  <span className="font-semibold">Address:</span> {val.address}
                </p>
                <p>
                  <span className="font-semibold">Licence:</span> {val.licence}
                </p>
                <p>
                  <span className="font-semibold">Booked Car:</span> {val.cName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewBookings;
