"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCallIcon, SquareArrowOutUpRight } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/motion";

function HeroClient() {
  return (
    <>
      {/* TSA Logo */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex justify-center w-full md:w-auto relative z-10"
      >
        <Image
          src="/tsalogo.svg"
          width={500}
          height={500}
          alt="TSA logo"
          className="md:w-80 w-36 h-auto"
        />
      </motion.section>

      {/* Main Content */}
      <motion.section
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left flex-grow relative z-10"
      >
        <h1 className="relative text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white drop-shadow-md transition-transform duration-500 hover:scale-105">
          THE SALVATION ARMY
          <br />
          SAHIWAL DIVISION
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl font-medium text-white max-w-lg mx-auto md:mx-0">
          Take delight in the Lord and he will give you the desire of your heart
          - Psalm 37:4
        </p>
        <div className="flex mt-8 flex-col md:flex-row gap-4 items-center">
          <Link
            target="_blank"
            href="https://www.salvationarmypakistan.org/"
            aria-label="Learn more about the Salvation Army Pakistan"
            className="bg-red-600 text-white py-2 px-6 rounded-full inline-flex gap-2 items-center justify-center hover:bg-red-700 transition duration-300 font-bold"
          >
            Learn More <SquareArrowOutUpRight />
          </Link>
          <Link
            href="/contact"
            aria-label="Contact the Salvation Army"
            className="font-bold bg-transparent border-2 border-red-600 text-red-600 py-2 px-6 rounded-full inline-flex gap-2 items-center justify-center hover:bg-red-600 hover:text-white transition duration-300"
          >
            Contact Us <PhoneCallIcon />
          </Link>
        </div>
      </motion.section>
    </>
  );
}

export default HeroClient;
