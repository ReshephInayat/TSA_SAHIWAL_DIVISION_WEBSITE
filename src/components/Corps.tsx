"use client";
import { data } from "@/data/Crops";
import { DetailsProps } from "@/types/types";
import { motion } from "framer-motion";

const Details = ({
  name,
  category,
  description,
  officers,
  distance,
  condition,
}: DetailsProps) => {
  return (
    <motion.li
      className="bg-white shadow-2xl rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <h3 className="capitalize font-bold text-xl lg:text-2xl text-gray-800">
        {name}
      </h3>
      <div className="text-sm lg:text-base font-semibold text-gray-600 bg-gray-200 px-3 py-1 rounded-md w-[200px]">
        {category}
      </div>
      <p className="mt-4 text-gray-700 text-sm lg:text-base leading-relaxed">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <p className="text-sm lg:text-base font-medium text-gray-800">
          Appointed Officers:&nbsp;
          <span className="text-red-600">{officers}</span>
        </p>
        <p className="text-sm lg:text-base font-medium text-gray-800">
          Distance:&nbsp;
          <span className="text-blue-600">{distance}</span>
        </p>
        <p className="text-sm lg:text-base font-medium text-gray-800">
          Condition:&nbsp;
          <span
            className={`px-3 py-1 rounded-full text-white ${
              condition === "Good"
                ? "bg-green-500"
                : condition === "Normal"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {condition}
          </span>
        </p>
      </div>
    </motion.li>
  );
};

function Corps() {
  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="w-full px-6 lg:px-16 max-w-screen-xl mx-auto">
        <h2 className="font-extrabold text-3xl lg:text-6xl text-center text-red-600 mb-2">
          Corps
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent to-red-700  mx-auto rounded-full" />
        <motion.ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {data.map((item, index) => (
            <Details key={index} {...item} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Corps;
