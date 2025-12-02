"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPinIcon, 
  PlayIcon, 
  PauseIcon, 
  XIcon, 
  Volume2Icon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import { data } from "@/data/About-Sahiwal";
import Image from "next/image";

function InfoSectionClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const Images = [
    { src: "/sahiwal.png", alt: "Sahiwal District Landscape", width: 500, height: 400 },
    { src: "/sahiwal.png", alt: "Sahiwal District Culture", width: 500, height: 400 },
  ];

  // Enhanced image cycling with hover pause
  useEffect(() => {
    if (isHoveringImage) return;
    
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isHoveringImage, Images.length]);

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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8">
        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center relative"
        >
          <div 
            className="relative w-full max-w-lg"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            {/* Image Container with Enhanced Styling */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
            >
              <Image
                src={Images[currentImageIndex].src}
                alt={Images[currentImageIndex].alt}
                width={Images[currentImageIndex].width}
                height={Images[currentImageIndex].height}
                className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevImage}
                  className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeftIcon size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                >
                  <ChevronRightIcon size={20} />
                </button>
              </div>

              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Featured
            </div>
          </div>
        </motion.div>

        {/* Enhanced Text & Action Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-6"
        >
          {/* Enhanced Text Container */}
          <motion.div 
            className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-red-100 shadow-lg "
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Scroll Indicator
            <div className="absolute top-2 right-4 opacity-60">
              <div className="w-1 h-6 bg-red-400 rounded-full animate-bounce"></div>
            </div> */}
            
            <div className="space-y-4">
              {data.map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 text-base md:text-lg leading-relaxed font-medium"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <motion.button
              onClick={handleOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full md:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <MapPinIcon size={22} className="relative z-10" />
              <span className="relative z-10">Explore Sahiwal Map</span>
              <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transform translate-x-2 transition-all duration-300">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            </motion.button>

            <motion.button
              onClick={handleToggleAudio}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative w-full md:w-auto flex items-center justify-center space-x-3 py-4 px-8 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl overflow-hidden ${
                isPlaying
                  ? "bg-gradient-to-r from-gray-100 to-gray-200 text-blue-900 border-2 border-blue-200"
                  : "bg-gradient-to-r from-blue-950 to-blue-900 text-white"
              }`}
            >
              {/* Animated Icon */}
              <div className="relative">
                {isPlaying ? (
                  <PauseIcon size={22} className="relative z-10" />
                ) : (
                  <PlayIcon size={22} className="relative z-10" />
                )}
                {isPlaying && (
                  <Volume2Icon 
                    size={16} 
                    className="absolute -top-1 -right-1 text-blue-600 animate-pulse" 
                  />
                )}
              </div>
              <span className="relative z-10">
                {isPlaying ? "Pause Audio Guide" : "Play Audio Guide"}
              </span>
              
              {/* Sound Waves Animation when Playing */}
              {isPlaying && (
                <div className="absolute right-4 flex space-x-1">
                  {[1, 2, 3].map((line) => (
                    <motion.div
                      key={line}
                      className="w-1 bg-blue-600 rounded-full"
                      animate={{ height: [4, 12, 4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: line * 0.2 }}
                    />
                  ))}
                </div>
              )}
            </motion.button>
          </div>

          {/* Audio Progress (when playing) */}
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
            >
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 30, repeat: Infinity }}
              />
            </motion.div>
          )}

          <audio ref={audioRef} src="/audio.mp3" preload="auto" />
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 md:p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden relative"
            >
              {/* Enhanced Close Button */}
              <motion.button
                onClick={handleCloseModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 md:p-3 transition-all duration-300 shadow-lg"
              >
                <XIcon size={24} />
              </motion.button>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                 District Map
                </h2>
                <p className="text-center text-red-200 mt-2">
                  Explore Sahiwals geography and landmarks
                </p>
              </div>

              {/* Map Image */}
              <div className="relative">
                <Image
                  src="/map.png"
                  width={1200}
                  height={800}
                  alt="Detailed Interactive Map of Sahiwal District"
                  className="w-full h-[50vh] md:h-[70vh] object-contain p-4"
                />
                
                {/* Map Controls Overlay
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <button className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 font-medium">
                    Zoom In
                  </button>
                  <button className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 font-medium">
                    Zoom Out
                  </button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default InfoSectionClient;