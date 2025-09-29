const Values = () => {
  return (
    <div className="py-8 md:py-12">
      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 pt-6 md:pt-10 items-start">
        {/* Our Mission */}
        <div className="bg-[#f9fafb] rounded-2xl">
          <div className="px-6 md:px-10 py-6 md:py-5">
            <div className="text-2xl md:text-4xl font-bold font-sans flex justify-start">
              Our Mission
            </div>
            <p className="leading-relaxed text-base md:text-xl pt-4">
              To provide affordable, reliable, and sustainable construction
              services that improve the lives of families and businesses in
              Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="bg-[#f9fafb] rounded-2xl">
          <div className="px-6 md:px-10 py-6 md:py-5">
            <div className="text-2xl md:text-4xl font-bold font-sans flex justify-start">
              Our Vision
            </div>
            <p className="leading-relaxed text-base md:text-xl pt-4">
              To be the most trusted local construction partner in Poonthottam,
              Thiruvarur, known for on-time delivery, integrity, and durable
              results.
            </p>
          </div>
        </div>
      </div>

      {/* Values Circle Section */}
      <div className="mt-12 md:mt-4">
        {/* Mobile Layout - Simple Grid */}
        <div className="block md:hidden">
          <div className="text-center mb-8">
            <div className="bg-[#2596be] text-white rounded-2xl px-6 py-4 shadow-xl mx-4">
              <h3 className="text-xl font-bold font-sans">Brand Promise</h3>
              <p className="text-base font-medium italic mt-2">
                "Local Roots, Lasting Strength."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 px-4">
            <div className="bg-blue-100 text-blue-800 rounded-full px-4 py-3 text-center font-medium shadow-md text-sm">
              Trust & Integrity
            </div>
            <div className="bg-green-100 text-green-800 rounded-full px-4 py-3 text-center font-medium shadow-md text-sm">
              Quality
            </div>
            <div className="bg-purple-100 text-purple-800 rounded-full px-4 py-3 text-center font-medium shadow-md text-sm">
              Affordability
            </div>
            <div className="bg-orange-100 text-orange-800 rounded-full px-4 py-3 text-center font-medium shadow-md text-sm">
              Commitment
            </div>
            <div className="bg-teal-100 text-teal-800 rounded-full px-4 py-3 text-center font-medium shadow-md text-sm">
              Sustainability
            </div>
            <div className="bg-indigo-100 text-indigo-800 rounded-full px-4 py-3 text-center font-medium shadow-md text-sm">
              Innovation
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Circle Design */}
        <div className="hidden md:block">
          <div className="relative flex justify-center items-center">
            <div className="w-[500px] lg:w-[600px] h-[360px] lg:h-[440px] relative">
              {/* Center Brand Promise */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-[#2596be] text-white rounded-2xl px-6 lg:px-8 py-4 lg:py-6 shadow-2xl">
                  <div className="text-center">
                    <h3 className="text-xl lg:text-2xl font-bold font-sans">
                      Brand Promise
                    </h3>
                    <p className="text-base lg:text-lg font-medium italic mt-2">
                      "Local Roots, Lasting Strength."
                    </p>
                  </div>
                </div>
              </div>

              {/* Top (0°) */}
              <div
                className="absolute"
                style={{
                  top: "15%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="bg-blue-100 text-blue-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 font-medium shadow-md text-sm lg:text-base">
                  Trust & Integrity
                </div>
              </div>

              {/* Top Right (60°) */}
              <div className="absolute" style={{ top: "20%", right: "8%" }}>
                <div className="bg-green-100 text-green-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 font-medium shadow-md text-sm lg:text-base">
                  Quality
                </div>
              </div>

              {/* Bottom Right (120°) */}
              <div className="absolute" style={{ bottom: "20%", right: "8%" }}>
                <div className="bg-purple-100 text-purple-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 font-medium shadow-md text-sm lg:text-base">
                  Affordability
                </div>
              </div>

              {/* Bottom (180°) */}
              <div
                className="absolute"
                style={{
                  bottom: "15%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="bg-orange-100 text-orange-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 font-medium shadow-md text-sm lg:text-base">
                  Commitment
                </div>
              </div>

              {/* Bottom Left (240°) */}
              <div className="absolute" style={{ bottom: "20%", left: "8%" }}>
                <div className="bg-teal-100 text-teal-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 font-medium shadow-md text-sm lg:text-base">
                  Sustainability
                </div>
              </div>

              {/* Top Left (300°) */}
              <div className="absolute" style={{ top: "20%", left: "8%" }}>
                <div className="bg-indigo-100 text-indigo-800 rounded-full px-4 lg:px-6 py-2 lg:py-3 font-medium shadow-md text-sm lg:text-base">
                  Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
