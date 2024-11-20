"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Home } from "lucide-react";
import { descriptions } from "@/data/SRDP";

function SRDP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (title: string) => {
    setCurrentCard(title);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentCard(null);
    document.body.style.overflow = "unset"; // Restore scrolling
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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="w-full h-full py-8 rounded-lg bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            "Chishtian",
            "Jinnah_Abadi",
            "Essa_Nagri",
            "Chak_92_6R",
            "Chak_95_6R",
            "Chak_8_11L",
          ].map((title) => (
            <Card
              key={title}
              icon={<Home />}
              title={title}
              onClick={() => handleOpenModal(title)}
            />
          ))}
        </motion.div>

        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              ref={modalRef}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl mx-auto"
              style={{
                maxHeight: "calc(100vh - 2rem)",
                minHeight: "200px",
              }}
            >
              {/* Gradient line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl" />

              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close modal"
              >
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

              {/* Content */}
              <div
                className="overflow-y-auto h-full"
                style={{ maxHeight: "calc(100vh - 4rem)" }}
              >
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 pr-8">
                    {currentCard}
                  </h2>
                  <div className="prose prose-sm sm:prose max-w-none">
                    {currentCard && descriptions[currentCard]}
                  </div>
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
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
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
);

export default SRDP;
