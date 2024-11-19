"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Home,
  User,
  Heart,
  UserPlus,
  School,
  Shield,
} from "lucide-react";

// Define a type for the StatItem component
type StatItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string | number;
};

const StatItem = ({ icon: Icon, label, value }: StatItemProps) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm">
    <Icon className="w-5 h-5 text-red-400" />
    <div className="flex-1">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-semibold text-gray-100">{value || "0"}</p>
    </div>
  </div>
);

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#052146] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          // initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            New Plantation Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chishtian Society Card */}
          <motion.div
            key="chishtian-society" // Add unique keys
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden bg-gradient-to-br from-red-900/40 to-gray-900/40 backdrop-blur-lg border border-red-500/20 shadow-xl"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Chishtian Society
                </h2>
                <Home className="w-8 h-8 text-red-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatItem icon={Users} label="Total Soldiers" value="148" />
                <StatItem icon={Home} label="Families" value="48" />
                <StatItem icon={User} label="Junior Soldiers" value="59" />
                <StatItem icon={Heart} label="Friends" value="48" />
              </div>
            </div>
          </motion.div>

          {/* Bahawal-Nagar Outpost Card */}
          <motion.div
            key="bahawal-nagar-outpost" // Add unique keys
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden bg-gradient-to-br from-red-900/40 to-gray-900/40 backdrop-blur-lg border border-red-500/20 shadow-xl"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">
                  Bahawal-Nagar Outpost
                </h2>
                <Home className="w-8 h-8 text-red-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StatItem icon={Home} label="Families" value="07" />
                <StatItem icon={Users} label="Senior Soldiers" value="0" />
                <StatItem icon={UserPlus} label="Adherents" value="15" />
                <StatItem icon={User} label="Junior Soldiers" value="03" />
                <StatItem
                  icon={School}
                  label="Sunday School Children"
                  value="03"
                />
                <StatItem icon={Shield} label="First Step Child" value="Nill" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
