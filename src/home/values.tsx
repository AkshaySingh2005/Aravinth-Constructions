const Values = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 pt-10  items-start">
        <div className="bg-[#f9fafb] rounded-2xl">
          <div className="px-10 py-5">
            <div className="text-4xl font-bold font-sans flex justify-start">
              Our Mission
            </div>
            <p className="leading-relaxed text-xl pt-5">
              To provide affordable, reliable, and sustainable construction
              services that improve the lives of families and businesses in
              Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>
        <div className="bg-[#f9fafb] rounded-2xl">
          <div className="px-10 py-5">
            <div className="text-4xl font-bold font-sans flex justify-start">
              Our Vision
            </div>
            <p className="leading-relaxed text-xl pt-5">
              To be the most trusted local construction partner in Poonthottam,
              Thiruvarur, known for on-time delivery, integrity, and durable
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="w-[600px] h-[460px] relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-r from-[#7C3AED] to-[#884cee] text-white rounded-2xl px-8 py-6 shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold font-sans">Brand Promise</h3>
                <p className="text-lg font-medium italic mt-2">
                  "Local Roots, Lasting Strength."
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute"
            style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}
          >
            <div className="bg-blue-100 text-blue-800 rounded-full px-6 py-3 font-medium shadow-md">
              Trust & Integrity
            </div>
          </div>

          {/* Top Right (60°) */}
          <div className="absolute" style={{ top: "20%", right: "8%" }}>
            <div className="bg-green-100 text-green-800 rounded-full px-6 py-3 font-medium shadow-md">
              Quality
            </div>
          </div>

          {/* Bottom Right (120°) */}
          <div className="absolute" style={{ bottom: "20%", right: "8%" }}>
            <div className="bg-purple-100 text-purple-800 rounded-full px-6 py-3 font-medium shadow-md">
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
            <div className="bg-orange-100 text-orange-800 rounded-full px-6 py-3 font-medium shadow-md">
              Commitment
            </div>
          </div>

          {/* Bottom Left (240°) */}
          <div className="absolute" style={{ bottom: "20%", left: "8%" }}>
            <div className="bg-teal-100 text-teal-800 rounded-full px-6 py-3 font-medium shadow-md">
              Sustainability
            </div>
          </div>

          {/* Top Left (300°) */}
          <div className="absolute" style={{ top: "20%", left: "8%" }}>
            <div className="bg-indigo-100 text-indigo-800 rounded-full px-6 py-3 font-medium shadow-md">
              Innovation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
