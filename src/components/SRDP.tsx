// components/SRDP.tsx
"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

function SRDP() {
  const communities = [
    "Chishtian",
    "Jinnah_Abadi",
    "Essa_Nagri",
    "Chak_92_6R",
    "Chak_95_6R",
    "Chak_8_11L",
  ];

  return (
    <div className="w-full h-full py-8 rounded-lg bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {communities.map((title) => (
            <CommunityCard
              key={title}
              icon={<Home />}
              title={title}
              href={`/SRDP/${title}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const CommunityCard = ({
  icon,
  title,
  href,
}: {
  icon: JSX.Element;
  title: string;
  href: string;
}) => (
  <Link href={href}>
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer bg-white rounded-2xl p-6 shadow-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-red-600 text-2xl sm:text-3xl">{icon}</div>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 text-center">
          {title}
        </h2>

        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm text-red-600 font-medium">
            Click to learn more →
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  </Link>
);

export default SRDP;