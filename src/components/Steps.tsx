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
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
              <span className="text-red-600">✓</span>
            </span>
            Strengths
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              Stewardship training at the Divisional level
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              Mini Home League initiated by DDWM
            </li>
            {/* Add other strengths similarly */}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
              <span className="text-red-600">!</span>
            </span>
            Challenges
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              Most families are in debt
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              Essa Nagri Corps building is{" "}
              <span className="text-red-600 font-semibold ml-1">Rented</span>
            </li>
          </ul>
        </div>
      </div>
    ),
    // Add other descriptions with similar styling
    Discipleship: (
      <div className="space-y-6">
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              We are conducting workshops and seminars
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              Corps officers are playing a key role in this
            </li>
            {/* Add other strengths similarly */}
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              AMOs have additional tasks
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The Programme and Spiritual Life Development Department is also
              playing a vital role in all aspects of discipleship
            </li>
          </ul>
        </div>
      </div>
    ),
    Growth: (
      <div className="space-y-6">
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The number of soldiers is increasing
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The number of corps is also increasing
            </li>
            {/* Add other strengths similarly */}
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The number of junior soldiers is also increasing
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The number of adherents is also increasing
            </li>
          </ul>
        </div>
      </div>
    ),
    Relationship: (
      <div className="space-y-6">
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The relationship between officers and soldiers is strong
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The relationship between corps officers and corps members is
              strong
            </li>
            {/* Add other strengths similarly */}
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The relationship between corps members is strong
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The relationship between soldiers and adherents is strong
            </li>
          </ul>
        </div>
      </div>
    ),
    "Leader Development": (
      <div className="space-y-6">
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              We are conducting workshops and seminars for the development of
              leaders
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              Corps officers are playing a key role in this
            </li>
            {/* Add other strengths similarly */}
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              AMOs have additional tasks
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
              The Programme and Spiritual Life Development Department is also
              playing a vital role in all aspects of leader development
            </li>
          </ul>
        </div>
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
            title="Leader Development"
            onClick={() => handleOpenModal("Leader Development")}
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
