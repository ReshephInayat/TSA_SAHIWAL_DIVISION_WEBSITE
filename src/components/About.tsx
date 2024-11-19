"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import { motion } from "framer-motion";

const cardVariants = {
  hiddenLeft: { x: -100, opacity: 0 },
  hiddenRight: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function About() {
  const cards = [
    {
      id: 1,
      image: "/tsalogo.svg",
      title: "About Us",
      description:
        "The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. Its message is based on the Bible. Its ministry is motivated by the love of God.",
      extraInfo: "Want To Learn More About Us?",
      href: "/about",
    },
    {
      id: 2,
      image: "/tsalogo.svg",
      title: "SRDP Communities",
      description:
        "SRDP is a community-driven development program that aims to improve the quality of life of the most marginalized and vulnerable communities in Pakistan.",
      extraInfo: "Want To Learn More About SRDP?",
      href: "/SRDP",
    },
    {
      id: 3,
      image: "/tsalogo.svg",
      title: "New Plantation Projects",
      description:
        "New Plantation Projects are a part of our mission to create a sustainable environment for future generations.",
      extraInfo: "Want To Learn More About Our Projects?",
      href: "/projects",
    },
    {
      id: 4,
      image: "/tsalogo.svg",
      title: "Pakistan Territory Strategic Plan",
      description:
        "Pakixtan Territory Strategic Plan is a roadmap that guides us to achieve our vision and mission.",
      extraInfo: "Want To Learn More About Our Plan?",
      href: "/plan",
    },
    
  ];

  return (
    <div className="w-full min-h-screen  bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Link key={card.id}
            href={card.href}
            passHref>
            <motion.div
              variants={cardVariants}
              layout
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relative rounded-lg shadow-2xl bg-white overflow-hidden group cursor-pointer"
            >

              {/* Main Content */}
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={card.image}
                  width={200}
                  height={200}
                  alt={card.title}
                  className="w-36 h-auto mt-4"
                />
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-gray-800 text-center">
                    {card.title}
                  </h1>
                  <p className="text-gray-600 mt-4 text-center">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Hover Content */}
              <motion.div className="absolute z-30 h-full bottom-0 left-0 w-full bg-gray-950 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                <p className="text-gray-200 text-center mt-40 text-2xl font-medium">
                  {card.extraInfo}
                </p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default About;
