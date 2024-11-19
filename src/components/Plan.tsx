"use client";
import React from "react";
import Steps from "./Steps";
// import { Element } from "react-scroll";

function Plan() {
  return (
    <>
      {/* <Element name="plan"> */}
      <div className="w-full h-screen bg-gray-50 lg:px-20 px-10">
        <h1 className="text-7xl text-red-600 font-bold text-center pt-24">
          Pakistan Territory Strategic Plan
        </h1>
        <div className="mt-28">
          <Steps />
        </div>
      </div>
      {/* </Element> */}
    </>
  );
}

export default Plan;
