// app/SRDP/[id]/page.tsx
"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { descriptions } from "@/data/SRDP";
import { ChevronLeft } from "lucide-react";

function CommunityDetailPage() {
  const params = useParams();
  const router = useRouter();

  const communityId = params.id as string;
  const communityData = descriptions[communityId];
 
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