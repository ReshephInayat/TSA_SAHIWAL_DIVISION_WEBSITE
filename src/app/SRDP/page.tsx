import SRDP from "@/components/SRDP";
import React from "react";

function page() {
  return (
    <div className="w-full h-full bg-gray-100">
      <h1 className="md:text-7xl text-4xl text-red-600 font-bold text-center pt-10 mb-8">
        SRDP COMMUNITIES
      </h1>
      <SRDP />
    </div>
  );
}

export default page;
