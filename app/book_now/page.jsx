"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RentNow = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const [customer, setCustomer] = useState({
    image: "/images/form-images/defaultAvatar.jpg",
    name: "",
    mobile: "",
    email: "",
    gender: "",
    address: "",
    licence: "",
    cName: "",
  });

  // Fetch cars
  const fetchCars = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/cars`
    );
    setCars(result.data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // When car changes
  const handleCarChange = (e) => {
    const value = e.target.value;

    setCustomer({ ...customer, cName: value });

    const carObj = cars.find((car) => car.cName === value);
    setSelectedCar(carObj || null);
  };

  // User typing
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
      customer
    );

    // Reset form
    setCustomer({
      image: "/images/form-images/defaultAvatar.jpg",
      name: "",
      mobile: "",
      email: "",
      gender: "",
      address: "",
      licence: "",
      cName: "",
    });

    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* --------- FORM CARD ---------- */}
        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
            Rent a Car — Premium Service
          </h2>

          {/* NAME */}
          <label className="text-sm font-medium">Customer Name</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          {/* MOBILE */}
          <label className="text-sm font-medium">Mobile Number</label>
          <input
            type="number"
            name="mobile"
            value={customer.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          {/* EMAIL */}
          <label className="text-sm font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          {/* GENDER */}
          <label className="text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={customer.gender}
            onChange={handleChange}
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* ADDRESS */}
          <label className="text-sm font-medium">Residential Address</label>
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg"
          />

          {/* LICENCE */}
          <label className="text-sm font-medium">Driving Licence Number</label>
          <input
            type="text"
            name="licence"
            value={customer.licence}
            onChange={handleChange}
            placeholder="27 DRF 2001"
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg"
          />

          {/* CAR SELECT */}
          <label className="text-sm font-medium">Choose a Car</label>
          <select
            name="cName"
            value={customer.cName}
            onChange={handleCarChange}
            className="w-full mt-1 mb-4 px-3 py-2 bg-black/20 border border-white/20 rounded-lg"
          >
            <option value="">Select Car</option>
            {cars.map((car, index) => (
              <option key={index} value={car.cName}>
                {car.cName}
              </option>
            ))}
          </select>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 transition text-black font-semibold py-3 rounded-lg shadow-lg"
          >
            Submit Form
          </button>
        </form>

        {/* --------- CAR PREVIEW --------- */}
        <div className="flex flex-col items-center">
          {selectedCar ? (
            <>
              <h3 className="text-2xl font-semibold mb-3">
                You Selected:
                <span className="text-yellow-400"> {selectedCar.cName}</span>
              </h3>

              <img
                src={selectedCar.cImg}
                alt="Selected Car"
                className="w-full max-w-md rounded-2xl shadow-2xl border border-white/10"
              />
            </>
          ) : (
            <div className="opacity-40 text-lg text-gray-300">
              Select a car to preview…
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentNow;
