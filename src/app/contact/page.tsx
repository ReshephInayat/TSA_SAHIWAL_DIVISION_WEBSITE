import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="relative">
      <div className="w-full h-full absolute inset-0 z-10 top-0 left-0 bg-black/80">
        <h1 className="text-center mt-80 font-bold text-white text-3xl md:text-7xl animate-pulse underline ">
          Under Development
      </h1>
      </div>
      <ContactForm />
    </main>
  );
}
