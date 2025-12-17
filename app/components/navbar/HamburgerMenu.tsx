"use client";

import { useEffect, useState } from "react";
import SideNav from "./Sidenav";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/retroui/Button";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <Button
        size="sm"
        variant="outline"
        className="p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <AlignJustify className="h-4 w-4" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SideNav setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
