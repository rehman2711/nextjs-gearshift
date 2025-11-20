"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormCar = () => {
  const router = useRouter();

  const [carInfo, setCarInfo] = useState({
    cId: "",
    cName: "",
    cSlogan: "",
    cStatus: "",
    cImg: null,
    cText: "",
    cCurrency: "",
    cMoney: "",
    cDay: "",
    cYear: "",
    cModel: "",
    cBrand: "",
    cButton: "See Full Details",
    img1: null,
    img2: null,
    img3: null,
    mileage: "",
    type: "",
    person: "",
    bags: "",
    buttonEdit: "Edit",
    buttonDelete: "Delete",
    cAvailability: "Check Availability",
  });

  const updateValue = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setCarInfo({ ...carInfo, [name]: files[0] });
    } else {
      setCarInfo({ ...carInfo, [name]: value });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(carInfo).forEach(([key, val]) => formData.append(key, val));

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/cars`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    router.push("login/admin/managedata");
  };

  return (
    <form onSubmit={submitForm} className="pb-20">

      {/* Header */}
      <div className="bg-yellow-500 text-white my-6 mx-6 rounded-3xl">
        <h1 className="text-white py-5 mx-5 text-center text-4xl font-bold">
          CAR INFORMATION FORM
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Basic Car Info */}
        <h2 className="text-xl font-bold my-4">Basic Car Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            name="cId"
            placeholder="Car ID"
            value={carInfo.cId}
            onChange={updateValue}
            className="border rounded p-3 w-full"
          />

          <input
            type="text"
            name="cName"
            placeholder="Car Name"
            value={carInfo.cName}
            onChange={updateValue}
            className="border rounded p-3 w-full"
          />

          <input
            type="text"
            name="cSlogan"
            placeholder="Car Slogan"
            value={carInfo.cSlogan}
            onChange={updateValue}
            className="border rounded p-3 w-full"
          />

          <input
            type="text"
            name="cModel"
            placeholder="Car Model"
            value={carInfo.cModel}
            onChange={updateValue}
            className="border rounded p-3 w-full"
          />

          <input
            type="text"
            name="cBrand"
            placeholder="Car Brand"
            value={carInfo.cBrand}
            onChange={updateValue}
            className="border rounded p-3 w-full"
          />

          <select
            name="cStatus"
            value={carInfo.cStatus}
            onChange={updateValue}
            className="border rounded p-3 w-full"
          >
            <option value="None">Select Status</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>

          {/* Car Image */}
          <div className="md:col-span-1">
            <label className="font-semibold">Car Image</label>
            <input
              type="file"
              name="cImg"
              onChange={updateValue}
              className="border p-3 w-full rounded"
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              name="cText"
              placeholder="Car Description"
              value={carInfo.cText}
              onChange={updateValue}
              className="border rounded p-3 w-full h-32"
            />
          </div>
        </div>

        {/* Pricing */}
        <h2 className="text-xl font-bold mt-10 mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <select
            name="cCurrency"
            value={carInfo.cCurrency}
            onChange={updateValue}
            className="border rounded p-3"
          >
            <option value="select">Select Currency</option>
            <option value="RUPEES">RUPEES</option>
            <option value="US DOLLAR">US DOLLAR</option>
            <option value="AED">AED</option>
            <option value="POUNDS">POUNDS</option>
            <option value="DIRAM">DIRAM</option>
          </select>

          <input
            type="number"
            name="cMoney"
            placeholder="Amount"
            value={carInfo.cMoney}
            onChange={updateValue}
            className="border rounded p-3"
          />

          <select
            name="cDay"
            value={carInfo.cDay}
            onChange={updateValue}
            className="border rounded p-3"
          >
            <option value="select">Tenure</option>
            <option value="DAY">/ DAY</option>
            <option value="WEEK">/ WEEK</option>
            <option value="MONTH">/ MONTH</option>
            <option value="YEAR">/ YEAR</option>
          </select>

          <input
            type="month"
            name="cYear"
            value={carInfo.cYear}
            onChange={updateValue}
            className="border rounded p-3"
          />
        </div>

        {/* Car Images */}
        <h2 className="text-xl font-bold mt-10 mb-4">Car Other Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {[1, 2, 3].map((num) => (
            <input
              key={num}
              type="file"
              name={`img${num}`}
              onChange={updateValue}
              className="border p-3 w-full rounded"
            />
          ))}

        </div>

        {/* Car Features */}
        <h2 className="text-xl font-bold mt-10 mb-4">Car Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <input
            type="text"
            name="mileage"
            placeholder="Mileage"
            value={carInfo.mileage}
            onChange={updateValue}
            className="border rounded p-3"
          />

          <select
            name="type"
            value={carInfo.type}
            onChange={updateValue}
            className="border rounded p-3"
          >
            <option value="none">Car Type</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>

          <input
            type="number"
            name="person"
            placeholder="Person Capacity"
            value={carInfo.person}
            onChange={updateValue}
            className="border rounded p-3"
          />

          <input
            type="number"
            name="bags"
            placeholder="Bags"
            value={carInfo.bags}
            onChange={updateValue}
            className="border rounded p-3"
          />
        </div>

        <div className="text-center my-10">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Submit Details
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormCar;
