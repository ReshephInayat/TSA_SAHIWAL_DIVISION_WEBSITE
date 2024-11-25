"use client";
import { CircleHelp, MapPinIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const MenuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Events / News", link: "/events" },
    { name: "New Projects", link: "/projects" },
    { name: "Pak Territory Strategy", link: "/plan" },
    { name: "SRDP", link: "/SRDP" },
  ];

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${
        pathname == "/" || pathname == "/projects"
          ? "bg-gradient-to-r from-black to-[#052146] "
          : "bg-gray-50 "
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
          <h1
            className={`
            ${
              pathname == "/" || pathname == "/projects"
                ? "text-white"
                : "text-red-600"
            }
            md:text-2xl text-sm font-bold text-center`}
          >
            PAKISTAN <br /> TERRITORY
          </h1>
        </div>
      </Link>

      {/* Location */}
      <Link href="https://maps.app.goo.gl/Q3j2R6EXtQVtAwf78" target="_blank">
        <div className=" items-center gap-2 hidden md:flex">
          <MapPinIcon
            size={24}
            className={
              pathname == "/" || pathname == "/projects"
                ? "text-white"
                : "text-red-600"
            }
            cursor-pointer
          />
          <h1
            className={
              pathname == "/" || pathname == "/projects"
                ? "md:text-3xl font-bold text-white font-mono"
                : "md:text-3xl font-bold text-red-600 font-mono"
            }
          >
            DHQ SAHIWAL
          </h1>
        </div>
      </Link>
      {/* Buttons and Menu */}

      <div className="flex items-center gap-5">
        <a href="mailto:reshephinayatofficial@gmail.com">
          <button
            className="md:flex gap-2 bg-red-600 text-white px-4 py-2 rounded-md hidden cursor-pointer"
            title="Email Us"
          >
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
          className={`
          ${
            pathname == "/" || pathname == "/projects"
              ? "text-white"
              : "text-red-600"
          }
           cursor-pointer`}
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
        {
          <ul>
            {MenuItems.map((item, index) => (
              <li key={index} className="py-3">
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={item.link}
                >
                  {item.name}
                  <hr className="opacity-20" />
                </Link>
              </li>
            ))}
          </ul>
        }
      </nav>
    </header>
  );
}

export default Header;
