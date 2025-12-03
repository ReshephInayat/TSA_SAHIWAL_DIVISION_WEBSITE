// import Projects from "@/components/Projects";
import { Link } from "lucide-react";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="flex flex-col gap-6 justify-center items-center pt-52">
        <h1 className="text-red-600 font-medium text-9xl">Oops!</h1>
        <h2 className="text-2xl ">Page Not Found</h2>
        <Link href="/">
          <button className="underline text-xl">← Back To Home Page</button>
        </Link>
      </div>
    </div>
  );
}

export default page;
