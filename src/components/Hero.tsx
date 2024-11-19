"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCallIcon, SquareArrowOutUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
};

function Hero() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-black to-[#052146]">
      <main className="relative flex flex-col md:flex-row gap-12 lg:gap-16 items-center lg:px-32 px-6 py-8 lg:py-24">
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
            Take delight in the Lord and he will give you the desire of your
            heart - Psalm 37:4
          </p>
          <div className="flex mt-8 flex-col md:flex-row gap-4 items-center">
            <Link
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
      </main>
    </div>
  );
}

export default Hero;
