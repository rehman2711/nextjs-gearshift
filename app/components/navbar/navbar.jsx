"use client";

import Link from "next/link";
import { Settings } from "lucide-react";
import { useId } from "react";

import HamburgerMenu from "./HamburgerMenu";
import { Button } from "@/components/retroui/Button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export default function Navbar() {
  const id = useId();

  const topNavItems = [
    { title: "Models", href: "/models" },
    { title: "Gallary", href: "/gallary" },
    { title: "About", href: "/about" },
    { title: "Contacts", href: "/contact" },
    { title: "Book_Now", href: "/book_now" },
  ];

  return (
    <nav className="sticky top-0 right-0 z-10 w-full border-b bg-background z-100">
      <div className="container mx-auto max-w-6xl px-4 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl text-black"
          >
            <Settings />
            <span className="font-mono text-foreground">Gearshift</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {topNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-mono hover:underline decoration-yellow-400 underline-offset-8 decoration-2 transition-all duration-300 focus:decoration-red-400"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4 md:hidden">
            <HamburgerMenu />
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center space-x-3">
            
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-sm px-4 py-2 bg-yellow-400 border border-gray-300 rounded-md hover:bg-yellow-300 transition-all"
                >
                  Login
                </Button>
             
          </div>
        </div>
      </div>
    </nav>
  );
}
