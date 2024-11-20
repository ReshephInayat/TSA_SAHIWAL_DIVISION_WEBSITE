"use client";
import { CircleHelp, MapPinIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${
        pathname != "/"
          ? "bg-gradient-to-r from-black to-[#052146] "
          : "bg-gradient-to-r from-black to-[#052146] "
      }flex justify-between items-center px-10 py-1 relative`}
    >
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-20"
          onClick={toggle}
        ></div>
      )}
      {/* Logo and Title */}

      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/tsalogo.svg"
            alt="TSA LOGO"
            width={500}
            height={500}
            className="w-16 h-auto"
          />
          <h1 className="md:text-2xl text-sm font-bold text-white text-center">
            PAKISTAN <br /> TERRITORY
          </h1>
        </div>
      </Link>

      {/* Location */}
      <div className=" items-center gap-2 hidden md:flex">
        <MapPinIcon size={24} className="text-white" />
        <h1 className="md:text-3xl font-bold text-white font-mono">
          DHQ SAHIWAL
        </h1>
      </div>

      {/* Buttons and Menu */}

      <div className="flex items-center gap-5">
        <a href="mailto:reshephinayatofficial@gmail.com">
          
          <button className="md:flex gap-2 bg-red-600 text-white px-4 py-2 rounded-md hidden cursor-pointer"
          title="Email Us">
            Need Help <CircleHelp />
          </button>
        </a>
        {/* <a href="https://donate.stripe.com/test_28o8ylarseJqdCEeUU">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hidden md:block">
          🤍 Donate Us
          </button>
        </a> */}
        <Menu
          onClick={toggle}
          size={24}
          className="text-white cursor-pointer"
          aria-expanded={isOpen}
        />
      </div>

      {/* Sliding Sidebar Menu with Close Button */}
      <nav
        className={`fixed top-0 z-30 right-0 h-full w-64 pt-10 bg-gray-900 text-white shadow-lg p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <X
            onClick={toggle}
            size={24}
            className="text-red-600 cursor-pointer"
            aria-label="Close sidebar"
          />
        </div>
        <Link href="/">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="block text-white py-2"
          >
            Home
          </button>
        </Link>
        <hr className="opacity-50 " />
        <button className="block text-white py-3">About</button>
        <hr className="opacity-50" />
        <button className="block text-white py-3">Contact</button>
        <hr className="opacity-50" />
        <button className="block text-white py-3">Events / News</button>
        <hr className="opacity-50" />
        <button className="block text-white py-3">New Projects</button>
        <hr className="opacity-50" />
        <button className="block text-white py-3">
          Pak Territory Strategy
        </button>
        <hr className="opacity-50" />
      </nav>
    </header>
  );
}

export default Header;
