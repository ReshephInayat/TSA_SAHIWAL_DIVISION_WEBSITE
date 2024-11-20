"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/motion";
import { cards } from "@/data/AboutCards";

function About() {
  return (
    <div className="w-full min-h-screen  bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Link key={card.id} href={card.href} passHref>
            <motion.div
              variants={cardVariants}
              layout
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relative rounded-lg shadow-2xl bg-white overflow-hidden group cursor-pointer"
            >
              {/* Main Content */}
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={card.image}
                  width={200}
                  height={200}
                  alt={card.title}
                  className="w-36 h-auto mt-4"
                />
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-800 text-center">
                    {card.title}
                  </h1>
                  <p className="text-gray-600 mt-4 text-center">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Hover Content */}
              <motion.div className="absolute z-30 h-full bottom-0 left-0 w-full bg-gray-950 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                <p className="text-gray-200 text-center mt-40 text-2xl font-medium">
                  {card.extraInfo}
                </p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default About;
