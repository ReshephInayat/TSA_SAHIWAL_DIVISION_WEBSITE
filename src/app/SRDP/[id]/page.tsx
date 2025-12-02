// app/SRDP/[id]/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { descriptions, communityImages } from "@/data/SRDP";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CommunityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const communityId = params.id as string;
  const communityData = descriptions[communityId];
  const images = communityImages[communityId] || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!communityData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Community Not Found
          </h1>
          <button
            onClick={() => router.push("/SRDP")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to Communities
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/SRDP")}
          className="flex items-center text-red-600 hover:text-red-700 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Communities
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 h-2" />

          <div className="p-6 sm:p-8">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              {communityId.replace(/_/g, " ")}
            </h1>

            {/* Image Carousel */}
            {images.length > 0 && (
              <div className="mb-8">
                <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-gray-200">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${communityId} image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Community Data */}
            <div className="prose prose-sm sm:prose max-w-none">
              {communityData}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CommunityDetailPage;