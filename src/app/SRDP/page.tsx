import SRDP from "@/components/SRDP";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <h1 className="text-7xl text-red-600 font-bold text-center pt-10 mb-8">
        SRDP COMMUNITIES
      </h1>
      <SRDP />
    </div>
  );
}

export default page;
