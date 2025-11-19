"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NotifyMe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Notification requested for:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center h-[92vh] bg-gray-100 p-4">
      <div
        className="bg-white p-8 w-full max-w-sm rounded-2xl shadow-lg"
      >
        <h2 className="text-center mb-2 font-bold text-2xl">Stay Updated!</h2>

        {submitted ? (
          <div className="text-green-600 text-center mt-4 font-medium">
            Thank you! You’ll be notified soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="text-gray-500 text-center mb-4">
              Enter your email to be notified when new cars become available.
            </p>

            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Notify Me
            </button>
          </form>
        )}

        {/* Show only after submitted */}
        {submitted && (
          <div className="text-center">
            <button
              onClick={() => router.push("/")}
              className="w-full bg-green-600 text-white py-2 rounded-lg mt-6 hover:bg-green-700 transition"
            >
              Go To Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotifyMe;
