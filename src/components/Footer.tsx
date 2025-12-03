import React from "react";
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

// const Footer = () => {
//   return (
//     <div className="w-full bg-gradient-to-r from-black to-[#052146] text-white py-8">
//       {/* Mission Statement */}
//       <div className="max-w-4xl mx-auto text-center px-4 mb-8">
//         <Image
//           src="tsalogo.svg"
//           alt="Salvation Army Logo"
//           className="mx-auto mb-4 w-20 h-auto"
//           width={500}
//           height={500}
//         />
//         <h2 className="text-xl font-semibold mb-4">
//           The Salvation Army Mission Statement
//         </h2>
//         <p className="text-gray-300">
//           The Salvation Army, an international movement, is an evangelical part
//           of the universal Christian Church. Its message is based on the Bible.
//           Its ministry is motivated by the love of God. Its mission is to preach
//           the gospel of Jesus Christ and to meet human needs in His name without
//           discrimination.
//         </p>
//       </div>

//       {/* Navigation and Search */}

//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
//         {/* Center Search and Social */}
//         <div className="mb-6 md:mb-0 w-full  h-auto">
//           {/* <div className="flex mb-6">
//             <input
//               type="text"
//               placeholder="Site Search"
//               className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none"
//             />
//             <button className="bg-gray-600 px-4 py-2 rounded-r hover:bg-gray-500">
//               Search
//             </button>
//           </div> */}

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 justify-center">
//             <a href="#" className="hover:text-gray-300">
//               <Facebook className="w-6 h-6" />
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               <Instagram className="w-6 h-6" />
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               <svg className="w-6 h-6" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
//                 />
//               </svg>
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               <Youtube className="w-6 h-6" />
//             </a>
//           </div>
//         </div>

//         {/* Right Certifications */}
//         {/* <div className="flex flex-col space-y-4 items-center">
//           <img
//             src="/api/placeholder/100/100"
//             alt="ECFA Certificate"
//             className="w-24"
//           />
//           <img
//             src="/api/placeholder/100/100"
//             alt="Gold Transparency"
//             className="w-24"
//           />
//           <img
//             src="/api/placeholder/100/100"
//             alt="BBB Accredited Charity"
//             className="w-24"
//           />
//         </div> */}
//       </div>

//       {/* Bottom Address */}
//       <div className="max-w-6xl mx-auto px-4 mt-8 text-center text-sm text-gray-400">
//         <p>The Salvation Army Pakistan</p>
//         <p>
//           The Salvation Army Dhq Sahiwal Punjab Pakistan
//           <a href="#" className="hover:text-gray-300">
//             Privacy Policy
//           </a>{" "}
//           | © The Salvation Army Pakistan
//         </p>
//       </div>
//     </div>
//   );
// };


const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black to-[#052146] text-white py-8">
      <div className="max-w-xl mx-auto px-4 py-2 bg-white/95 rounded-2xl overflow-hidden">
      <Image src="/pics/footer.png" alt="Footer Image" width={500}  height={500} className="w-full h-48 object-contain"/>
      </div>
   </div>
  );
};

export default Footer;
