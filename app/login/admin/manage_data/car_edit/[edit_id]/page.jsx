"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const AdminCarEdit = () => {
  const { edit_id } = useParams();
  const router = useRouter();

  const [carInfo, setCarInfo] = useState({
    cId: "",
    cName: "",
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
  });

  // ======================
  // FETCH CAR DATA
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/cars/${edit_id}`
      );

      setCarInfo({ ...res.data });
    };

    fetchData();
  }, [edit_id]);

  // HANDLE INPUT
  const updateValue = (e) => {
    const { name, value, files } = e.target;

    setCarInfo({
      ...carInfo,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  // UPDATE & REDIRECT
  const updateInformation = async (e) => {
    e.preventDefault();

    await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/cars/${edit_id}`,
      carInfo
    );

    router.push("/login/admin/manage_data");
  };

  return (
    <>
      <form onSubmit={updateInformation}>
        <div className="bg-yellow-500 my-5 rounded-xl">
          <h1 className="text-white py-6 text-center text-4xl font-extrabold">
            CAR INFORMATION FORM
          </h1>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-4 font-semibold">
            <h2 className="col-span-12 text-2xl mt-4 mb-2">
              Basic Car Information
            </h2>

            {/* Car ID */}
            <div className="col-span-12 md:col-span-2">
              <label className="block mb-1">Car ID</label>
              <input
                type="text"
                name="cId"
                value={carInfo.cId}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Car Name */}
            <div className="col-span-12 md:col-span-10">
              <label className="block mb-1">Car Name</label>
              <input
                type="text"
                name="cName"
                value={carInfo.cName}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Model / Brand */}
            <div className="col-span-12 md:col-span-6">
              <label className="block mb-1">Car Model</label>
              <input
                type="text"
                name="cModel"
                value={carInfo.cModel}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <label className="block mb-1">Car Brand</label>
              <input
                type="text"
                name="cBrand"
                value={carInfo.cBrand}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Car Image */}
            <div className="col-span-12 md:col-span-6">
              <label className="block mb-1">Car Image</label>
              <input
                type="file"
                name="cImg"
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />

              {carInfo.cImg && (
                <details className="mt-2 cursor-pointer">
                  <summary>Show Car Image</summary>
                  <img
                    src={carInfo.cImg}
                    className="mt-3 rounded-lg"
                    alt="Car"
                  />
                </details>
              )}
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-6">
              <label className="block mb-1">Car Description</label>
              <textarea
                name="cText"
                value={carInfo.cText}
                onChange={updateValue}
                className="w-full border rounded-lg p-2 h-32"
              />
            </div>

            {/* Currency */}
            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Currency</label>
              <select
                name="cCurrency"
                value={carInfo.cCurrency}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              >
                <option value="select">_SELECT_</option>
                <option value="RUPEES">RUPEES</option>
                <option value="US DOLLAR">US DOLLAR</option>
                <option value="AED">AED</option>
                <option value="POUNDS">POUNDS</option>
                <option value="DIRAM">DIRAM</option>
              </select>
            </div>

            {/* Money */}
            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Amount</label>
              <input
                type="number"
                name="cMoney"
                value={carInfo.cMoney}
                onChange={updateValue}
                step="2000"
                min="0"
                className="w-full border rounded-lg p-2"
              />
            </div>

            {/* Day */}
            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Tenure</label>
              <select
                name="cDay"
                value={carInfo.cDay}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              >
                <option value="select">_SELECT_</option>
                <option value="DAY">/ DAY</option>
                <option value="WEEK">/ WEEK</option>
                <option value="MONTH">/ MONTH</option>
                <option value="YEAR">/ YEAR</option>
              </select>
            </div>

            {/* Year */}
            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Buying Year</label>
              <input
                type="month"
                name="cYear"
                value={carInfo.cYear}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="col-span-12 my-4">
              <hr />
            </div>

            {/* OTHER IMAGES */}
            <h2 className="col-span-12 text-2xl mt-4 mb-2">Car Other Images</h2>

            {["img1", "img2", "img3"].map((img, i) => (
              <div key={i} className="col-span-12 md:col-span-4">
                <label className="block mb-1">Image {i + 1}</label>
                <input
                  type="file"
                  name={img}
                  onChange={updateValue}
                  className="w-full border rounded-lg p-2"
                />

                {carInfo[img] && (
                  <details className="mt-2 cursor-pointer">
                    <summary>Show Image</summary>
                    <img
                      src={carInfo[img]}
                      className="mt-3 rounded-lg"
                      alt="Car Extra"
                    />
                  </details>
                )}
              </div>
            ))}

            <div className="col-span-12 my-4">
              <hr />
            </div>

            {/* FEATURES */}
            <h2 className="col-span-12 text-2xl mt-4 mb-2">Car Features</h2>

            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Mileage</label>
              <input
                type="text"
                name="mileage"
                value={carInfo.mileage}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Car Type</label>
              <select
                name="type"
                value={carInfo.type}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              >
                <option value="none">_SELECT_</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Person Capacity</label>
              <input
                type="number"
                name="person"
                value={carInfo.person}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="col-span-12 md:col-span-3">
              <label className="block mb-1">Bags Capacity</label>
              <input
                type="number"
                name="bags"
                value={carInfo.bags}
                onChange={updateValue}
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div className="col-span-12 my-6 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400"
              >
                Save Details
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminCarEdit;
