import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

interface CardProps {
  name: string;
  title: string;
  socialLink: string;
  contact: string;
  imageUrl: string;
}

export function Card({
  name,
  title,
  imageUrl,
  socialLink,
  contact,
}: CardProps) {
  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-3xl shadow-lg overflow-hidden relative transition-all duration-300 hover:scale-105">
      {/* Star Background Shape */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-red-600 transform -skew-y-6 translate-y-[-20%]" />

      {/* Profile Content */}
      <div className="relative z-10 p-4 sm:p-6 flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <Image
            src={imageUrl}
            alt={name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Profile Info */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
            {name}
          </h2>
          <div className="text-gray-600 mb-2">
            <p className="text-sm sm:text-base font-medium">{title}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-4">
            <a
              href={socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </a>
            <a
              href={`tel:${contact}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <IoCallOutline className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
