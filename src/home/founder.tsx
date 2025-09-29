import { founder } from "@/constants/founder";

const Founder = () => {
  return (
    <div className="py-20">
      {/* Main Title */}
      <div className="text-center mb-12">
        <div className="text-4xl font-bold font-sans text-gray-800 mb-4">
          Meet the Founder
        </div>
        <div className="w-24 h-1 bg-[#1798c7] mx-auto rounded-full"></div>
      </div>

      {/* Single Card */}

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={founder.founder_image}
              alt="Er. Senthilkumaran T."
              className="w-full h-full object-cover"
            />
            {/* Floating Experience Badge */}
            <div className="absolute bottom-2 right-3 bg-gradient-to-r bg-[#2596be] text-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="p-8 space-y-6">
            {/* Name and Title */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Er. Senthilkumaran T.
              </h2>
              <div className="text-lg text-[#1297c8] font-semibold mb-3">
                Founder, Aravinth Constructions
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  B.E.
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  D.C.M.
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                  Professional Register Engineer Grade 1
                </span>
              </div>
            </div>

            {/* Experience Description */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                With over 20+ years of experience in the construction field, Er.
                Senthilkumaran T. has guided Aravinth Constructions with
                dedication and vision. As a Professional Register Engineer Grade
                1, he has successfully led numerous residential, commercial, and
                community projects in and around Poonthottam, Thiruvarur.
              </p>
            </div>

            {/* Community Impact */}
            <div>
              <p className="text-gray-700 leading-relaxed">
                His core knowledge and decades of practical experience have
                helped countless families and businesses bring their projects to
                life. Known for his reliability, clear guidance, and
                people-first approach, he has built a strong reputation as a
                trusted name in the community.
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="bg-gradient-to-r bg-[#2596be] text-white p-6 rounded-xl">
              <h3 className="font-bold mb-3">Founder's Philosophy:</h3>
              <p className="italic leading-relaxed">
                "Civil Engineers make the world — and with 20+ years of
                experience, I am proud to serve the people of Poonthottam,
                Thiruvarur with honesty, strength, and commitment."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
