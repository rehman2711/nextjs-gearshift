"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ADMIN CHECK
    if (username === "admin" && password === "admin") {
      router.push("/login/admin");
      return;
    }

    console.log("Login attempted:", username, password);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-20 gap-20">

        {/* LEFT SECTION */}
        <div className="flex-1 max-w-md space-y-8">
          <h1 className="text-4xl font-semibold">Welcome Back</h1>

          <p className="text-neutral-400 text-lg -mt-3">
            Login to continue your journey.
          </p>

          {/* GOOGLE LOGIN */}
          <button className="w-full py-3 bg-neutral-900 border border-neutral-700 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-800 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            <span className="text-white">Continue with Google</span>
          </button>

          {/* OR */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-neutral-800" />
            <span className="text-neutral-500 text-sm">or</span>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* USERNAME */}
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 bg-transparent border border-neutral-700 rounded-xl focus:ring-2 focus:ring-white/20 outline-none text-white"
            />

            {/* PASSWORD */}
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-transparent border border-neutral-700 rounded-xl focus:ring-2 focus:ring-white/20 outline-none text-white"
            />

            <div className="text-right">
              <button
                type="button"
                className="text-neutral-400 hover:text-white text-sm"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
            >
              Login
            </button>
          </form>

          <p className="text-neutral-500 text-sm pt-4">
            Don’t have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-white hover:underline"
            >
              Create one
            </button>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 hidden lg:flex justify-end">
          <div
            className="w-[550px] h-[420px] rounded-2xl bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1500')",
            }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full py-6 px-6 border-t border-neutral-800 text-neutral-500 text-sm flex items-center justify-between">
        <div className="font-semibold text-white">CarHub</div>
        <div className="opacity-70">Premium UI — Inspired by Mobbin</div>
      </div>
    </div>
  );
}
