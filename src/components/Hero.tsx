import HeroClient from "./HeroClient";

function Hero() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-black to-[#052146]">
      <main className="relative flex flex-col md:flex-row gap-12 lg:gap-16 items-center lg:px-32 px-6 py-8 lg:py-24">
        <HeroClient />
      </main>
    </div>
  );
}

export default Hero;
