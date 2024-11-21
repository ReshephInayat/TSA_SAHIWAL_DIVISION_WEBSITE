import { Card } from "@/components/Card";
const data = [
  {
    name: "Major Imran George",
    title: "Divisional Commander",
    socialLink: "https://www.facebook.com/tsa.pakistan",
    contact: "0302-1234567",
  },
  {
    name: "Major Lubna Imran",
    title: "D D W M",
    socialLink: "https://www.facebook.com/tsa.pakistan",
    contact: "0302-1234567",
  },
  {
    name: "Major Joseph Masih",
    title: "DBO",
    socialLink: "https://www.facebook.com/tsa.pakistan",
    contact: "0302-1234567",
  },
  {
    name: "Major Zaheda",
    title: "Assistant DBO",
    socialLink: "https://www.facebook.com/tsa.pakistan",
    contact: "0302-1234567",
  },
];

function AboutPage() {
  return (
    <div className="w-full h-full relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute w-auto h-full left-0 rounded-lg bg-black/60 cursor-not-allowed inset-0 z-20"></div>
      <h1 className="text-2xl sm:text-3xl lg:text-6xl text-red-600 text-center mb-10 italic underline font-medium py-10">
        Divisional Leaders & Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {data.map((item, index) => (
          <Card
            key={index}
            imageUrl="/tsalogo.svg"
            name={item.name}
            title={item.title}
            socialLink={item.socialLink}
            contact={item.contact}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
