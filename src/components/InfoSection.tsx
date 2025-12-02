import InfoSectionClient from "./InfoSectionClient";

function InfoSection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-500">
          {/* Enhanced Header with Gradient Animation */}
          <div className="bg-gradient-to-l from-black to-red-700 text-white p-4 md:p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-20 h-20 bg-red-400 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-300 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="flex items-center space-x-4 mb-2 md:mb-0 relative z-10">
              <div className="relative">
                <div className="absolute -inset-1 bg-red-500 rounded-full blur opacity-75 animate-pulse"></div>
                <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Sahiwal District
                </h1>
              </div>
            </div>
            
            {/* Location Badge */}
            <div className="relative z-10">
              <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                <span className="text-sm font-medium">Punjab, Pakistan</span>
              </div>
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