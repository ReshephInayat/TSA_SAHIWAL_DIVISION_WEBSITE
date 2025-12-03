"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall, MapPin, Clock } from "lucide-react";
import { FaFacebook, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import { TeamCard } from "@/components/TeamCard";
import { aboutData } from "@/data/AboutUs";

// Dhq Sahiwal data
const dhqData = {
  title: "Divisional Headquarters Sahiwal",
  description: "The Divisional Headquarters Sahiwal serves as the central hub for The Salvation Army's operations in the Sahiwal division. It is dedicated to providing administrative and spiritual support, coordinating community outreach programs, and managing various social services aimed at uplifting the corps and local community.",
  details: [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      description: "The Salvation Army Divisional Headquarters Karbla Road, Sahiwal"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      description: "Monday to Friday, 8:00 AM to 5:00 PM"
    },
  ],
  images: [
    "/pics/dhq2.jpg",
    "/pics/dhq3.jpg",
    "/pics/dhq4.jpg",
  

  ],
  contact: {
    phone: "+92-3009869922",
    email: "dhq.sahiwal@gmail.com",
    address: "The Salvation Army Divisional Headquarters Sahiwal, Pakistan"
  }
};

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === dhqData.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === dhqData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? dhqData.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* DHQ Sahiwal Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              {dhqData.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              {dhqData.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 items-center">


            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative  hidden md:block"
            >
              <div 
                className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={dhqData.images[currentImageIndex]}
                      alt={`DHQ Sahiwal ${currentImageIndex + 1}`}
                      fill
                      className="object-fill w-full h-full"
                      priority={currentImageIndex === 0}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <FaArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <FaArrowRight className="w-5 h-5" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {dhqData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {dhqData.images.length}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

                {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-600 text-center font-semibold tracking-tight">
            {aboutData.header.title}
          </h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full" />
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white border-2 border-red-600 rounded-2xl shadow-2xl overflow-hidden mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  {aboutData.header.description}
                </p>
              </div>
              <div className="font-bold text-red-700 text-center md:text-start">
                {aboutData.header.leaders.map((leader, index) => (
                  <h1 key={index}>{leader.name}</h1>
                ))}
              </div>

              {/* Contact */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <PhoneCall className="w-6 h-auto text-red-600" />
                <FaFacebook className="w-6 h-auto text-red-600" />
                <MdEmail className="w-6 h-auto text-red-600" />
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Circle Background */}
                <div className="absolute inset-0 flex items-center justify-center" />
                {/* Logo */}
                <div className="relative flex justify-center">
                  <Image
                    src={aboutData.image}
                    width={500}
                    height={500}
                    alt="TSA Logo"
                    className="w-48 h-auto md:w-64 rounded-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4 mt-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-600 text-center font-semibold tracking-tight">
           Divisional Team
          </h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full" />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {aboutData.team.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamCard
                imageUrl="/tsalogo.svg"
                name={item.name}
                title={item.title}
                socialLink={item.socialLink}
                contact={item.contact}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;