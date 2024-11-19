import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen">
      <Image
        src="/tsalogo.svg"
        width={500}
        height={500}
        objectFit="cover"
        alt="logo"
        className="w-40 h-auto mx-auto mt-32"
      />
      <h1 className="text-center text-7xl italic">Coming Soon</h1>
      <div className="flex justify-center items-center mt-6">
        <Link href="/">
          <button className="bg-red-600 text-white  px-4 py-3 rounded-lg">
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
