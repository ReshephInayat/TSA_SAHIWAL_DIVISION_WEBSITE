"use client";

import { data } from "@/data/Stats";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue]);

  return <span ref={ref}></span>;
};

const NumberCard = ({
  icon: Icon,
  value,
  label,
  isEven,
}: {
  icon: React.ElementType;
  value: number;
  label: string;
  isEven: boolean;
}) => (
  <div
    className={`relative group flex flex-col items-center ${
      isEven
        ? "bg-gradient-to-r from-black to-[#052146] "
        : "bg-gradient-to-l from-black to-red-600"
    } backdrop-blur-lg p-6 rounded-lg shadow-md overflow-hidden`}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black to-red-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    <Icon className="text-white text-5xl mb-4 z-10 relative" />
    <span className="text-6xl font-bold text-white z-10 relative">
      <AnimatedNumbers value={value} />
    </span>
    <h2 className="text-2xl font-medium text-white mt-2 z-10 relative">
      {label}
    </h2>
  </div>
);

function Numbers() {
  return (
    <div
      className="py-4 px-6 rounded-xl overflow-y-scroll"
      style={{ maxHeight: "500px" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
      >
        {data.map((item, index) => (
          <NumberCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
            isEven={index % 2 === 0} // Check if the index is even
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Numbers;
