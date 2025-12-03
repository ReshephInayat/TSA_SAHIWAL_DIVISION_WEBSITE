// components/SRDP.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
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

  // Carousel images - all 71 images explicitly listed
  const carouselImages = [
    { id: 1, url: "/srdp/1.jpg", alt: "Image 1" },
    { id: 2, url: "/srdp/2.jpg", alt: "Image 2" },
    { id: 3, url: "/srdp/3.jpg", alt: "Image 3" },
    { id: 4, url: "/srdp/4.jpg", alt: "Image 4" },
    { id: 5, url: "/srdp/5.jpg", alt: "Image 5" },
    { id: 6, url: "/srdp/6.jpg", alt: "Image 6" },
    { id: 7, url: "/srdp/7.jpg", alt: "Image 7" },
    { id: 8, url: "/srdp/8.jpg", alt: "Image 8" },
    { id: 9, url: "/srdp/9.jpg", alt: "Image 9" },
    { id: 10, url: "/srdp/10.jpg", alt: "Image 10" },
    { id: 11, url: "/srdp/11.jpg", alt: "Image 11" },
    { id: 12, url: "/srdp/12.jpg", alt: "Image 12" },
    { id: 13, url: "/srdp/13.jpg", alt: "Image 13" },
    { id: 14, url: "/srdp/14.jpg", alt: "Image 14" },
    { id: 15, url: "/srdp/15.jpg", alt: "Image 15" },
    { id: 16, url: "/srdp/16.jpg", alt: "Image 16" },
    { id: 17, url: "/srdp/17.jpg", alt: "Image 17" },
    { id: 18, url: "/srdp/18.jpg", alt: "Image 18" },
    { id: 19, url: "/srdp/19.jpg", alt: "Image 19" },
    { id: 20, url: "/srdp/20.jpg", alt: "Image 20" },
    { id: 21, url: "/srdp/21.jpg", alt: "Image 21" },
    { id: 22, url: "/srdp/22.jpg", alt: "Image 22" },
    { id: 23, url: "/srdp/23.jpg", alt: "Image 23" },
    { id: 24, url: "/srdp/24.jpg", alt: "Image 24" },
    { id: 25, url: "/srdp/25.jpg", alt: "Image 25" },
    { id: 26, url: "/srdp/26.jpg", alt: "Image 26" },
    { id: 27, url: "/srdp/27.jpg", alt: "Image 27" },
    { id: 28, url: "/srdp/28.jpg", alt: "Image 28" },
    { id: 29, url: "/srdp/29.jpg", alt: "Image 29" },
    { id: 30, url: "/srdp/30.jpg", alt: "Image 30" },
    { id: 31, url: "/srdp/31.jpg", alt: "Image 31" },
    { id: 32, url: "/srdp/32.jpg", alt: "Image 32" },
    { id: 33, url: "/srdp/33.jpg", alt: "Image 33" },
    { id: 34, url: "/srdp/34.jpg", alt: "Image 34" },
    { id: 35, url: "/srdp/35.jpg", alt: "Image 35" },
    { id: 36, url: "/srdp/36.jpg", alt: "Image 36" },
    { id: 37, url: "/srdp/37.jpg", alt: "Image 37" },
    { id: 38, url: "/srdp/38.jpg", alt: "Image 38" },
    { id: 39, url: "/srdp/39.jpg", alt: "Image 39" },
    { id: 40, url: "/srdp/40.jpg", alt: "Image 40" },
    { id: 41, url: "/srdp/41.jpg", alt: "Image 41" },
    { id: 42, url: "/srdp/42.jpg", alt: "Image 42" },
    { id: 43, url: "/srdp/43.jpg", alt: "Image 43" },
    { id: 44, url: "/srdp/44.jpg", alt: "Image 44" },
    { id: 45, url: "/srdp/45.jpg", alt: "Image 45" },
    { id: 46, url: "/srdp/46.jpg", alt: "Image 46" },
    { id: 47, url: "/srdp/47.jpg", alt: "Image 47" },
    { id: 48, url: "/srdp/48.jpg", alt: "Image 48" },
    { id: 49, url: "/srdp/49.jpg", alt: "Image 49" },
    { id: 50, url: "/srdp/50.jpg", alt: "Image 50" },
    { id: 51, url: "/srdp/51.jpg", alt: "Image 51" },
    { id: 52, url: "/srdp/52.jpg", alt: "Image 52" },
    { id: 53, url: "/srdp/53.jpg", alt: "Image 53" },
    { id: 54, url: "/srdp/54.jpg", alt: "Image 54" },
    { id: 55, url: "/srdp/55.jpg", alt: "Image 55" },
    { id: 56, url: "/srdp/56.jpg", alt: "Image 56" },
    { id: 57, url: "/srdp/57.jpg", alt: "Image 57" },
    { id: 58, url: "/srdp/58.jpg", alt: "Image 58" },
    { id: 59, url: "/srdp/59.jpg", alt: "Image 59" },
    { id: 60, url: "/srdp/60.jpg", alt: "Image 60" },
    { id: 61, url: "/srdp/61.jpg", alt: "Image 61" },
    { id: 62, url: "/srdp/62.jpg", alt: "Image 62" },
    { id: 63, url: "/srdp/63.jpg", alt: "Image 63" },
    { id: 64, url: "/srdp/64.jpg", alt: "Image 64" },
    { id: 65, url: "/srdp/65.jpg", alt: "Image 65" },
    { id: 66, url: "/srdp/66.jpg", alt: "Image 66" },
    { id: 67, url: "/srdp/67.jpg", alt: "Image 67" },
    { id: 68, url: "/srdp/68.jpg", alt: "Image 68" },
    { id: 69, url: "/srdp/69.jpg", alt: "Image 69" },
    { id: 70, url: "/srdp/70.jpg", alt: "Image 70" },
    { id: 71, url: "/srdp/71.jpg", alt: "Image 71" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, carouselImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  }, [carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle image error
  const handleImageError = () => {
    setIsLoading(false);
    console.error(`Failed to load image: ${carouselImages[currentIndex].url}`);
  };

  // For showing current image number
  const currentImageNumber = currentIndex + 1;
  const totalImages = carouselImages.length;

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Full Screen Image Carousel */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={carouselImages[currentIndex].url}
              alt={carouselImages[currentIndex].alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        
        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image Counter - Top Left */}
        <div className="absolute top-6 left-6 bg-black/30 text-white px-4 py-2 rounded-full backdrop-blur-sm text-base font-medium z-10">
          {currentImageNumber} / {totalImages}
        </div>

        {/* Auto-play Toggle - Top Right */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-6 right-6 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        {/* Compact Indicators - Bottom Center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-1 z-10">
          {carouselImages.slice(
            Math.max(0, currentIndex - 2),
            Math.min(carouselImages.length, currentIndex + 3)
          ).map((_, idx) => {
            const actualIndex = Math.max(0, currentIndex - 2) + idx;
            return (
              <button
                key={actualIndex}
                onClick={() => goToSlide(actualIndex)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  actualIndex === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/60 hover:bg-white/90"
                }`}
                aria-label={`Go to slide ${actualIndex + 1}`}
              />
            );
          })}
        </div>

        {/* Image Filename - Bottom Right */}
        <div className="absolute bottom-6 right-6 bg-black/30 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-mono z-10">
          {currentImageNumber}.jpg
        </div>
      </div>

      {/* Communities Section */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              SRDP Communities
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl">
              Select a community to learn more about development projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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