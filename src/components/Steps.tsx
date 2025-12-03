"use client";

import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GrGrow } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { LiaHandshake } from "react-icons/lia";
import { useState, useRef, useEffect } from "react";

function Steps() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (title: string) => {
    setCurrentCard(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentCard(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const descriptions: Record<string, JSX.Element> = {
    "Financial Sustainability": (
      <div className="space-y-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>To launch and Strengthen Self Support Income Generating Projects through SRDP</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Stewardship Seminar & workshops by DBO</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Junior Soldiers giving</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Reformed Cartridge System in families</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Reformed Marriage Bans, Freedom letters and other means</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>New Entrepreneurship & Skills formation</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>HF & SD</span>
          </li>
        </ul>
      </div>
    ),
    Discipleship: (
      <div className="space-y-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Sunday school Classes</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Junior Soldier Classes</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Bible Study Group</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Small Groups</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Corps Cadets Classes</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Theology through TSA Doctrine</span>
          </li>
        </ul>
      </div>
    ),
    Growth: (
      <div className="space-y-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Youth Empowerment</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Call to be a soldier</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Role & Responsibilities of local officers / being a good steward</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>New Plantation at Chishtian</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Family Devotion & household Worship</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Corps mission Development Plans</span>
          </li>
        </ul>
      </div>
    ),
    Relationship: (
      <div className="space-y-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Godly Couples, Family life</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Events in each Corps focused on peacebuilding, Family values, and Social unity</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Christian Marriage</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>The Church and the Christian Marriage Act 1872</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>The Church and the Christian marriage Act 1869</span>
          </li>
        </ul>
      </div>
    ),
    "Leaders Development": (
      <div className="space-y-6">
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>CLD</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Further Study</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>online Courses</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Capacity building tools on officers Meeting</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 rounded-full bg-red-400 mr-3 mt-2 flex-shrink-0"></span>
            <span>Financial Trainings</span>
          </li>
        </ul>
      </div>
    ),  
  };

  return (
    <div className="w-full py-8 rounded-lg bg-gradient-to-b from-gray-100 to-gray-200  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          <Card
            icon={<FaMoneyBillTrendUp />}
            title="Financial Sustainability"
            onClick={() => handleOpenModal("Financial Sustainability")}
          />
          <Card
            icon={<FaUsers />}
            title="Discipleship"
            onClick={() => handleOpenModal("Discipleship")}
          />
          <Card
            icon={<GrGrow />}
            title="Growth"
            onClick={() => handleOpenModal("Growth")}
          />
          <Card
            icon={<LiaHandshake />}
            title="Relationship"
            onClick={() => handleOpenModal("Relationship")}
          />
          <Card
            icon={<MdLeaderboard />}
            title="Leaders Development"
            onClick={() => handleOpenModal("Leaders Development")}
          />
        </motion.div>

        {/* Improved Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              ref={modalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {currentCard}
                </h2>
                <div className="prose max-w-none">
                  {currentCard && descriptions[currentCard]}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const Card = ({
  icon,
  title,
  onClick,
}: {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-red-600 text-3xl">{icon}</div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h2>

        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm text-red-600 font-medium">
            Click to learn more →
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </motion.div>
  );
};

export default Steps;