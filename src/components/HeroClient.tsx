"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PhoneCallIcon, SquareArrowOutUpRight, Sparkles, Heart } from "lucide-react";
import { fadeIn, slideUp } from "@/lib/motion";


function HeroClient() {
  return (
    <>
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float-slow">
        <Sparkles className="w-6 h-6 text-red-500" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-20 animate-float-slower">
        <Heart className="w-5 h-5 text-white" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-15 animate-pulse">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>

      {/* TSA Logo with enhanced effects */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex justify-center w-full md:w-auto relative z-10 group"
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Image
            src="/tsalogo.svg"
            width={500}
            height={500}
            alt="TSA logo"
            className="md:w-80 w-36 h-auto relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl"
          />
        </div>
      </motion.section>

      {/* Main Content with enhanced typography */}
      <motion.section
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left flex-grow relative z-10"
      >
        {/* Animated title */}
        <div className="relative">
          <motion.h1 
            className="relative text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white drop-shadow-md"
            whileHover="hover"
          >
            <motion.span
              className="block"
              variants={{
                hover: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[ "THESALVATION ARMY", "SAHIWAL DIVISION"].map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      className="inline-block "
                      variants={{
                        hover: {
                          y: -8,
                          color: "#EF4444",
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 10
                          }
                        }
                      }}
                      whileHover="hover"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.span>
            
            {/* Animated underline effect */}
            <motion.div
              className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0"
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h1>
        </div>

        {/* Enhanced verse with icon */}
        <motion.div
          className="mt-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-center md:justify-start gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="hidden md:block"
            >
              <Sparkles className="w-5 h-5 text-red-500" />
            </motion.div>
            <p className="text-base md:text-lg lg:text-xl font-medium text-white max-w-lg mx-auto md:mx-0 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
              Take delight in the Lord and he will give you the desire of your heart - Psalm 37:4
            </p>
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          className="flex mt-12 flex-col md:flex-row gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              target="_blank"
              href="https://www.salvationarmypakistan.org/"
              aria-label="Learn more about the Salvation Army Pakistan"
              className="group relative bg-red-600 text-white py-3 px-8 rounded-full inline-flex gap-3 items-center justify-center hover:bg-red-700 transition-all duration-300 font-bold overflow-hidden shadow-2xl"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
              
              <span className="relative z-10">Learn More</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <SquareArrowOutUpRight className="w-5 h-5 relative z-10" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              aria-label="Contact the Salvation Army"
              className="group relative bg-transparent border-2 border-red-600 text-red-600 py-3 px-8 rounded-full inline-flex gap-3 items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 font-bold overflow-hidden backdrop-blur-sm"
            >
              {/* Hover fill effect */}
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <span className="relative z-10">Contact Us</span>
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PhoneCallIcon className="w-5 h-5 relative z-10" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
      </motion.section>
    </>
  );
}

export default HeroClient;