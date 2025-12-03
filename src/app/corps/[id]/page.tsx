// app/corps/[id]/page.tsx
"use client";

import { data } from "@/data/Crops";
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Users, 
  Building, 
  Ruler, 
  CheckCircle, 
  AlertCircle, 
  Home,
  Shield,
  Users2,
  TrendingUp
} from "lucide-react";
import { notFound, useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CorpsDetailPage({ params }: PageProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Resolve params using use() hook
  const { id } = use(params);
  
  // Convert id to number and find the corps
  const corpsId = parseInt(id);
  const corps = data.find((item) => item.id === corpsId);

  // Simulate loading for smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  // If corps not found, show 404
  if (!corps) {
    notFound();
  }

  // Use corps-specific images or default fallback
  const corpsImages = corps.images || [
    "/images/corps/default-1.jpg",
    "/images/corps/default-2.jpg",
    "/images/corps/default-3.jpg"
  ];

  // Carousel navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % corpsImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + corpsImages.length) % corpsImages.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Format condition with icon
  const getConditionIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "good":
        return <CheckCircle className="w-5 h-5" />;
      case "normal":
        return <AlertCircle className="w-5 h-5" />;
      case "rented":
        return <Home className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  // Get condition color
  const getConditionColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "good":
        return "text-green-600 bg-green-100";
      case "normal":
        return "text-yellow-600 bg-yellow-100";
      case "rented":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-red-600 bg-red-100";
    }
  };

  // Format income percentage color
  const getIncomeColor = (percentage: number) => {
    if (percentage >= 90) return "text-emerald-600 bg-emerald-100";
    if (percentage >= 75) return "text-green-600 bg-green-100";
    if (percentage >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button with micro-interaction */}
        <button
          onClick={() => router.push("/corps")}
          className="group inline-flex items-center gap-2 mb-8 px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1 active:scale-95"
        >
          <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-300 group-hover:-translate-x-1" />
          <span className="text-blue-600 group-hover:text-blue-800 font-medium transition-colors duration-300">
            Back to Corps List
          </span>
        </button>

        {/* Image Carousel */}
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl group">
          {/* Carousel Images */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {corpsImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.9)'
                  }}
                />
              </div>
            ))}
            
            {/* Carousel Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group/nav"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover/nav:-translate-x-0.5 transition-transform duration-300" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group/nav"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover/nav:translate-x-0.5 transition-transform duration-300" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {corpsImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Corps Name Overlay */}
            <div className="absolute bottom-12 left-8 z-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-2xl">
                {corps.name}
              </h1>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Building className="w-4 h-4 text-white" />
                  <span className="text-sm md:text-base font-semibold text-white">
                    {corps.category}
                  </span>
                </div>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getConditionColor(corps.condition)} backdrop-blur-sm border border-white/30`}>
                  {getConditionIcon(corps.condition)}
                  <span className="text-sm md:text-base font-semibold">
                    {corps.condition}
                  </span>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {corpsImages.length}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 transform transition-all duration-500 hover:shadow-2xl">
          {/* Description */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              About This Corps
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300">
              {corps.description}
            </p>
          </div>

          {/* Stats Grid with enhanced design - NEW STRUCTURE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Soldiers */}
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Soldiers
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {corps.soldiers}
              </p>
              <p className="text-sm text-gray-500">Active Soldiers</p>
            </div>

            {/* Societies & Outposts */}
            <div className="group p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                  <Users2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Societies & Outposts
                </h3>
              </div>
              <div className="flex gap-4">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                    {corps.societyOutpost.societies}
                  </p>
                  <p className="text-sm text-gray-500">Societies</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                    {corps.societyOutpost.outposts}
                  </p>
                  <p className="text-sm text-gray-500">Outposts</p>
                </div>
              </div>
            </div>

            {/* Percentage Income */}
            <div className="group p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                 Centage Income
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <p className={`text-2xl md:text-3xl font-bold ${getIncomeColor(corps.incomePercentage)}`}>
                  {corps.incomePercentage}
                </p>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getIncomeColor(corps.incomePercentage)}`}>
                  {corps.incomePercentage >= 90 ? 'Excellent' : 
                   corps.incomePercentage >= 75 ? 'Good' : 
                   corps.incomePercentage >= 60 ? 'Average' : 'Needs Improvement'}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Monthly Target Achievement</p>
            </div>

            {/* Condition - Moved from Structure */}
            <div className="group p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-100 hover:border-yellow-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-100 rounded-xl group-hover:bg-yellow-200 transition-colors duration-300">
                  {getConditionIcon(corps.condition)}
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Condition
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-2xl md:text-3xl font-bold ${
                  corps.condition === "Good"
                    ? "text-green-600"
                    : corps.condition === "Normal"
                    ? "text-yellow-600"
                    : corps.condition === "Rented"
                    ? "text-blue-600"
                    : "text-red-600"
                }`}>
                  {corps.condition}
                </span>
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  corps.condition === "Good"
                    ? "bg-green-500"
                    : corps.condition === "Normal"
                    ? "bg-yellow-500"
                    : corps.condition === "Rented"
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`} />
              </div>
              <p className="text-sm text-gray-500 mt-2">Facility status</p>
            </div>
          </div>

          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Appointed Officers */}
            <div className="group p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors duration-300">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Appointed Officers
                </h3>
              </div>
              <p className="text-xl font-semibold text-indigo-600 mb-2">
                {corps.officers}
              </p>
              <p className="text-sm text-gray-500">Currently Appointed</p>
            </div>

            {/* Distance from HQ */}
            <div className="group p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Distance from DHQ
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
                {corps.distance}
              </p>
              <p className="text-sm text-gray-500">
                {corps.distance === "Located at DHQ" ? "Central Location" : "Kilometers away"}
              </p>
            </div>

            {/* Church Building Size */}
            <div className="group p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-pink-100 rounded-xl group-hover:bg-pink-200 transition-colors duration-300">
                  <Ruler className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Church Hall
                </h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
                {corps.buildingSize}
              </p>
              <p className="text-sm text-gray-500">Total area</p>
            </div>
          </div>

          {/* Building Condition Score - Updated */}
          <div className="p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Building Condition Score
              </h3>
              <div className="text-3xl font-bold text-blue-600">
                {corps.buildingScore}%
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Overall Condition</span>
                  <span className="font-semibold">{corps.buildingScore}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${corps.buildingScore}%` }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="font-semibold text-blue-600 mb-1">Structure</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {Math.min(100, corps.buildingScore + 8)}%
                  </div>
                  <div className="h-2 bg-blue-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${Math.min(100, corps.buildingScore + 8)}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-center p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors duration-300">
                  <div className="font-semibold text-yellow-600 mb-1">Facilities</div>
                  <div className="text-2xl font-bold text-yellow-700">
                    {Math.max(0, corps.buildingScore - 10)}%
                  </div>
                  <div className="h-2 bg-yellow-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-yellow-500 rounded-full"
                      style={{ width: `${Math.max(0, corps.buildingScore - 10)}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
                  <div className="font-semibold text-green-600 mb-1">Safety</div>
                  <div className="text-2xl font-bold text-green-700">
                    {Math.min(100, corps.buildingScore + 5)}%
                  </div>
                  <div className="h-2 bg-green-200 rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${Math.min(100, corps.buildingScore + 5)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}