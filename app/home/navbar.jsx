"use client";
import Link from "next/link";
import Image from "next/image";
import { Settings } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import { Button } from "@/components/retroui/Button";
export default function Navbar() {
  // ✅ Correct structure
  const topNavItems = [
    {
      title: "Our Fleets",
      href: "/ourfleets",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contacts",
      href: "/contact",
    },
    {
      title: "Inquiry",
      href: "/inquiry",
    },
  ];

  return (
    <nav className="sticky z-1 top-0 right-0 w-full border-b-2 bg-background">
      <div className="container max-w-6xl px-4 lg:px-0 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="">
           
            <Link
              href="/"
              className="text-black text-2xl flex justify-center items-center space-x-2"
            >
              {/* <Image
                src="/logo.png"
                alt="retro ui logo"
                className="mr-2"
                height={30}
                width={30}
              /> */}
               <Settings />
              <div className="text-foreground font-mono">Gearshift</div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            {topNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-mono hover:underline decoration-yellow-400 underline-offset-8 decoration-2 transition-all duration-1000 focus:decoration-red-400"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            <Link
              href="https://github.com/Logging-Stuff/retroui"
              target="_blank"
              rel="noopener noreferrer"
            ></Link>
            <HamburgerMenu />
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/"
              // target="_blank"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-[14px] font-mono px-4 py-2 bg-yellow-400 border border-3 border-gray-300 rounded-md hover:bg-yellow-[#e6c400] transition-all"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
