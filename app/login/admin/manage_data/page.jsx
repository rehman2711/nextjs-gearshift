"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const AdminShowAll = () => {
  const [cars, setCars] = useState([]);

  // FETCH DATA
  const fetchData = async () => {
    try {
      const result = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/cars`
      );
      setCars(result.data);
    } catch (error) {
      console.log("Error fetching cars:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE CAR
  const DeleteCar = async (id) => {
    alert(`Car Is Successfully Deleted [ Car Id Is ${id} ]`);

    // Optimistic Update
    setCars((prev) => prev.filter((item) => item.id !== id));

    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`);
  };

  return (
    <>
      <h1
        className="text-white py-4 mx-3 my-6 text-center rounded-xl text-5xl font-bold"
        style={{ backgroundColor: "#b0c4b1" }}
      >
        All Rental Cars
      </h1>

      <div className="w-full bg-black/30 py-10">
        <div className="max-w-7xl mx-auto">

          {/* CARD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

            {cars.map((val) => (
              <div key={val.id} className="bg-white rounded-2xl shadow-md p-4 relative">

                {/* YEAR BADGE */}
                <span className="absolute right-5 top-5 bg-yellow-400 text-black px-3 py-1 rounded-md text-sm font-semibold">
                  {val.cYear}
                </span>

                {/* CAR IMAGE */}
                <div className="w-full h-52 rounded-lg overflow-hidden">
                  <img
                    src={val.cImg}
                    className="w-full h-full object-cover"
                    alt={val.cName}
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-xl font-bold">{val.cName}</h3>

                {/* PRICE */}
                <div className="mt-2 text-lg">
                  <span>{val.cCurrency}</span>
                  <span className="font-bold text-2xl"> {val.cMoney}</span>
                  <span> / {val.cDay}</span>
                </div>

                {/* SPECS */}
                <div className="flex justify-between bg-black/10 mt-3 p-3 rounded-xl">
                  
                  <div className="flex flex-col items-center">
                    <img src="/images/card-svg/mileage-icon.svg" className="h-6" />
                    <span className="text-sm">{val.mileage}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/images/card-svg/transmission-icon.svg" className="h-6" />
                    <span className="text-sm">{val.type}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/images/card-svg/seats-icon.svg" className="h-6" />
                    <span className="text-sm">{val.person}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/images/card-svg/baggage-icon.svg" className="h-6" />
                    <span className="text-sm">{val.bags}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-between mt-5">
                  <Link
                    href={`/login/admin/manage_data/car_edit/${val.id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
                  >
                    {val.buttonEdit}
                  </Link>

                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
                    onClick={() => DeleteCar(val.id)}
                  >
                    {val.buttonDelete}
                  </button>
                </div>

              </div>
            ))}
          </div>
          {/* END GRID */}
        </div>
      </div>
    </>
  );
};

export default AdminShowAll;
