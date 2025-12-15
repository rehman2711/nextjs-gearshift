"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormCar = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState({});

  const [carInfo, setCarInfo] = useState({
    carName: "",
    carBrandName: "",
    carModelName: "",
    carSlogan: "",
    carDescription: "",
    carCurrency: "",
    carFuelType: "",
    carGearSystem: "",
    carManufactureYear: "",
    carMileage: "",
    carRent: "",
    carSeatingCapacity: "",
    carStorageCapacity: "",
    carImageMain: "",
    carImageSub1: "",
    carImageSub2: "",
    carImageSub3: "",
    carStatus: "",
    carAvailableDate: "",
  });

  /* ---------------- HANDLER ---------------- */
  const updateValue = (e) => {
    const { name, value, files } = e.target;
    setCarInfo((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  /* ---------------- VALIDATION ---------------- */
  const validateStep1 = () => {
    const err = {};
    [
      "carName",
      "carBrandName",
      "carModelName",
      "carSlogan",
      "carManufactureYear",
      "carStatus",
      "carAvailableDate",
      "carDescription",
    ].forEach((field) => {
      if (!carInfo[field]) err[field] = "Required";
    });

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep2 = () => {
    const err = {};
    [
      "carCurrency",
      "carRent",
      "carMileage",
      "carFuelType",
      "carGearSystem",
      "carSeatingCapacity",
      "carStorageCapacity",
    ].forEach((field) => {
      if (!carInfo[field]) err[field] = "Required";
    });

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep3 = () => {
    const err = {};
    ["carImageMain", "carImageSub1", "carImageSub2", "carImageSub3"].forEach(
      (field) => {
        if (!carInfo[field]) err[field] = "Required";
      }
    );

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ---------------- SUBMIT ---------------- */
  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    const formData = new FormData();
    Object.entries(carInfo).forEach(([key, val]) => formData.append(key, val));

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/insert-car`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    router.push("/login/admin/manage_data");
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between bg-yellow-400 rounded-xl shadow-lg px-6 py-4">
        <h1 className="text-white text-3xl font-bold tracking-wide">
          CAR INFORMATION FORM
        </h1>
        <Button variant="secondary" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <form
        onSubmit={submitForm}
        className="max-w-7xl mx-auto mt-10 bg-white/70 backdrop-blur-xl border rounded-3xl shadow-2xl p-10 space-y-10"
      >
        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <section className="space-y-6">
            <h2 className="text-xl font-bold">Basic Car Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                ["Car Name", "carName"],
                ["Brand", "carBrandName"],
                ["Model", "carModelName"],
                ["Slogan", "carSlogan"],
                ["Manufacture Year", "carManufactureYear"],
              ].map(([label, name]) => (
                <div key={name}>
                  <Label className="mb-2 ms-1">{label}</Label>
                  <Input
                    name={name}
                    placeholder={label}
                    onChange={updateValue}
                  />
                  {errors[name] && (
                    <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div>
                <Label className="mb-2 ms-1">Car Status</Label>
                <select
                  name="carStatus"
                  onChange={updateValue}
                  className="border rounded-lg p-1.5 text-sm w-full"
                >
                  <option value="">Select Status</option>
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
                {errors.carStatus && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.carStatus}
                  </p>
                )}
              </div>

              <div>
                <Label className="mb-2 ms-1">Car Available Date</Label>
                <Input
                  type="date"
                  name="carAvailableDate"
                  onChange={updateValue}
                />
                {errors.carAvailableDate && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.carAvailableDate}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label className="mb-2 ms-1">Car Description</Label>
                <textarea
                  name="carDescription"
                  placeholder="Car Description"
                  onChange={updateValue}
                  className="border rounded-lg p-3 w-full h-32"
                />
                {errors.carDescription && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.carDescription}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="button"
              onClick={() => validateStep1() && setStep(2)}
              className="w-full bg-yellow-300/80 text-black hover:bg-yellow-300/70"
            >
              Continue
            </Button>
          </section>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <section className="space-y-6">
            <h2 className="text-xl font-bold">Pricing & Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                ["Mileage", "carMileage"],
                ["Gear System", "carGearSystem"],
                ["Seating Capacity", "carSeatingCapacity"],
                ["Storage Capacity", "carStorageCapacity"],
                ["Fuel Type", "carFuelType"],
                ["Rent Amount", "carRent"],
              ].map(([label, name]) => (
                <div key={name}>
                  <Label>{label}</Label>
                  <Input
                    name={name}
                    placeholder={label}
                    onChange={updateValue}
                  />
                  {errors[name] && (
                    <p className="text-xs text-red-500 mt-1">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div>
                <select
                  name="carCurrency"
                  onChange={updateValue}
                  className="border rounded-lg p-3 w-full"
                >
                  <option value="">Select Currency</option>
                  <option value="RUPEES">RUPEES</option>
                  <option value="USD">USD</option>
                  <option value="AED">AED</option>
                </select>
                {errors.carCurrency && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.carCurrency}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                type="button"
                onClick={() => validateStep2() && setStep(3)}
                className="bg-yellow-300/80 text-black hover:bg-yellow-300/70"
              >
                Continue
              </Button>
            </div>
          </section>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <section className="space-y-6">
            <h2 className="text-xl font-bold">Car Images</h2>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "carImageMain",
                "carImageSub1",
                "carImageSub2",
                "carImageSub3",
              ].map((name) => (
                <div key={name} className="space-y-2">
                  <Input
                    type="file"
                    name={name}
                    accept="image/*"
                    onChange={(e) => {
                      updateValue(e);

                      const file = e.target.files?.[0];
                      if (file) {
                        setPreview((prev) => ({
                          ...prev,
                          [name]: URL.createObjectURL(file),
                        }));
                      }
                    }}
                  />

                  {/* Image Preview */}
                  {preview?.[name] && (
                    <img
                      src={preview[name]}
                      alt={name}
                      className="w-full max-w-xs h-40 object-cover rounded-lg border"
                    />
                  )}

                  {/* Validation Error */}
                  {errors[name] && (
                    <p className="text-xs text-red-500">{errors[name]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button
                type="submit"
                className="bg-yellow-300/80 text-black hover:bg-yellow-300/70"
              >
                Submit Details
              </Button>
            </div>
          </section>
        )}
      </form>
    </div>
  );
};

export default FormCar;
