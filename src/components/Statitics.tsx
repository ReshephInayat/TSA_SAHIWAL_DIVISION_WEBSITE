"use client";
import React from "react";
import Numbers from "./Numbers";
// import { Element } from "react-scroll";

function Statistics() {
  return (
    <>
      {/* <Element name="total"> */}
      <div className="w-full h-full py-20 lg:px-20 px-10 bg-gray-100">
        <h1 className="md:text-7xl text-3xl text-[#052146] font-bold text-center">
          Statistics of Sahiwal Division
        </h1>
        {/* <Numbers /> */}
        <div className="mt-10">
          <Numbers />
        </div>
      </div>
      {/* </Element> */}
    </>
  );
}

export default Statistics;
