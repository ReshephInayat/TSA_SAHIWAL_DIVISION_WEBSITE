"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, PlayIcon, PauseIcon, XIcon } from "lucide-react";
import { data } from "@/data/About-Sahiwal";
import Image from "next/image";

function InfoSectionClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const Images = [
    { src: "/sahiwal.png", alt: "Sahiwal District", width: 500, height: 400 },
    { src: "/sahiwal.png", alt: "Sahiwal District", width: 500, height: 400 },
  ];

  // Cycle through images every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleToggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <motion.div
            key={currentImageIndex}
            className="w-full h-auto rounded-xl shadow-2xl overflow-hidden"
          >
            <Image
              src={Images[currentImageIndex].src}
              alt={Images[currentImageIndex].alt}
              width={Images[currentImageIndex].width}
              height={Images[currentImageIndex].height}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Text & Action Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4 md:space-y-6"
        >
          <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-2 border-red-100 max-h-64 md:max-h-80 overflow-y-auto">
            {data.map((item, index) => (
              <p
                key={index}
                className="text-gray-700 mb-2 last:mb-0 text-base md:text-lg leading-relaxed"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button
              onClick={handleOpenModal}
              className="w-full md:w-auto flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 font-semibold"
            >
              <MapPinIcon size={20} />
              <span>Explore Map</span>
            </button>
            <button
              onClick={handleToggleAudio}
              className={`w-full md:w-auto flex items-center justify-center space-x-2 py-3 px-6 rounded-lg transition duration-300 font-semibold ${
                isPlaying
                  ? "bg-gray-200 text-blue-900"
                  : "bg-blue-950 text-white"
              }`}
            >
              {isPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
              <span>{isPlaying ? "Pause Audio" : "Play Audio"}</span>
            </button>
          </div>
          <audio ref={audioRef} src="/audio.mp3" preload="auto" />
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2 md:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 md:top-4 right-2 md:right-4 z-10 bg-red-500 text-white rounded-full p-1 md:p-2 hover:bg-red-600 transition duration-300"
            >
              <XIcon size={20} />
            </button>
            <Image
              src="/map.png"
              width={1200}
              height={800}
              alt="Detailed Map of Sahiwal"
              className="w-full h-[50vh] md:h-[70vh] object-contain"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default InfoSectionClient;
