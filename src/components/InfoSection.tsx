import InfoSectionClient from "./InfoSectionClient";

function InfoSection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-l from-black to-red-700 text-white p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Sahiwal District
              </h1>
            </div>
          </div>

          {/* Dynamic Client Component */}
          <InfoSectionClient />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
