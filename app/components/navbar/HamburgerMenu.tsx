"use client";

import { useEffect, useState } from "react";
import SideNav from "./Sidenav";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/retroui/Button";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  /* ---------------- LOCK BODY SCROLL ---------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* TOGGLE BUTTON */}
      <Button
        size="sm"
        variant="outline"
        className="p-2 z-50 relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <AlignJustify className="h-4 w-4" />
        )}
      </Button>

      {/* OVERLAY (CLICK ANYWHERE TO CLOSE) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] bg-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={() => setIsOpen(false)} // ⬅ click anywhere inside sidebar closes
      >
        {/* Prevent accidental bubbling if needed */}
        <div onClick={(e) => e.stopPropagation()}>
          <SideNav setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
}
