import { heroImages } from "@/constants/heroImages";
import { Building, House, Ruler } from "lucide-react";

const Projects = () => {
  return (
    <div className="pb-10">
      <div className="text-4xl font-bold font-sans flex justify-center items-center pt-14 pb-6">
        Featured Projects
      </div>
      <p className="px-64 text-xl ">
        Explore our portfolio of successful construction projects that showcase
        our expertise,
      </p>
      <p className="px-96 text-xl pb-8">
        quality craftsmanship, and commitment to excellence.
      </p>
      <div className="grid grid-cols-3 gap-6">
        {/* Card 1 - Residential Houses */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-80 object-cover"
            src={heroImages.hero_image_1}
            alt="Residential Houses"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <House />
            </div>
          </div>
          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Residential Houses
            </div>
            <p className="text-gray-700 text-base">
              Family homes in Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>

        {/* Card 2 - Commercial Buildings */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-80 object-cover"
            src={heroImages.hero_image_2}
            alt="Commercial Buildings"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Building />
            </div>
          </div>
          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Shops & Small Commercial Buildings
            </div>
            <p className="text-gray-700 text-base">
              Local business spaces in Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>

        {/* Card 3 - Blueprint Services */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-80 object-cover"
            src={heroImages.hero_image_1}
            alt="Blueprint Services"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Ruler />
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Community Works
            </div>
            <p className="text-gray-700 text-base">
              Drainage and small infrastructure projects in Poonthottam,
              Thiruvarur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
