import React from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { motion } from "framer-motion";

import { TeamCard } from "@/components/TeamCard";

// Data for the page
const aboutData = {
  header: {
    title: "Divisional Leaders",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore culpa assumenda, minima maxime alias porro ipsa necessitatibus laborum magni natus, id tempora optio deleniti voluptate earum nisi dolorem corporis unde.",
    leaders: [
      {
        name: "Major Imran George ( DC )",
        title: "Divisional Coordinator (DC)",
      },
      {
        name: "Major Lubna Imran ( DDWM )",
        title: "Divisional Director of Women's Ministry (DDWM)",
      },
    ],
  },
  team: [
    {
      name: "Major Joseph Masih",
      title: "Divisional Business Officer (DBO)",
      socialLink: "https://www.facebook.com/tsa.pakistan",
      contact: "0302-1234567",
    },
    {
      name: "Major Zaheeda",
      title: "Divisional Finance Officer (DFO)",
      socialLink: "https://www.facebook.com/tsa.pakistan",
      contact: "0302-1234567",
    },
  ],
  image: "/Leaders.jpg",
};

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="space-y-4 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-600 text-center font-semibold tracking-tight">
            {aboutData.header.title}
          </h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full" />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
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
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-4 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-red-600 text-center font-semibold tracking-tight">
          Team
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:px-60 mt-20">
        {aboutData.team.map((item, index) => (
          <TeamCard
            key={index}
            imageUrl="/tsalogo.svg"
            name={item.name}
            title={item.title}
            socialLink={item.socialLink}
            contact={item.contact}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
