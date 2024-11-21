import InfoSection from "@/components/InfoSection";
import About from "@/components/About";
import Corps from "@/components/Corps";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statitics";
import React from "react";

function page() {
  return (
    <div className="w-full h-full  ">
      <Hero />
      <InfoSection />
      <About />
      <Statistics />
      <Corps />
    </div>
  );
}

export default page;
