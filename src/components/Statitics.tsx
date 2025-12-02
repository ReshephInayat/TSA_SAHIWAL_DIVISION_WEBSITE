"use client";
import React from "react";
import Numbers from "./Numbers";
import { motion } from "framer-motion";

function Statistics() {
  return (
    <>
      <div className="w-full h-full py-20 lg:px-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-[#052146]/5 to-[#052146]/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-r from-[#052146]/10 to-[#052146]/5 rounded-full blur-lg"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h1
              className="md:text-7xl text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-[#052146] via-[#052146] to-blue-800 bg-clip-text text-transparent">
                Statistics of
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-[#052146] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Sahiwal Division
              </motion.span>
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "256px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-64 h-1.5 bg-gradient-to-r from-[#052146] via-blue-600 to-[#052146] rounded-full shadow-lg" />
              <motion.div
                className="absolute top-0 left-0 w-8 h-1.5 bg-white rounded-full opacity-70"
                animate={{
                  x: [0, 248, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Description text */}
            <motion.p
              className="text-gray-600 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Exploring the comprehensive data and insights that define our vibrant division
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Numbers />
          </motion.div>

          {/* Floating indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {[1, 2, 3].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 bg-[#052146] rounded-full opacity-40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* Interactive background grid */}
        <div className="absolute inset-0 z-0 opacity-[0.02]">
          <div className="grid grid-cols-12 gap-4 w-full h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#052146] rounded"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.01 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;