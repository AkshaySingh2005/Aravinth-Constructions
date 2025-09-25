import { heroImages } from "@/constants/heroImages";
import { Building, House, Handshake } from "lucide-react";

const Projects = () => {
  return (
    <div className="pb-10">
      <div className="text-3xl md:text-4xl font-bold font-sans flex justify-center items-center pt-8 md:pt-14 pb-6">
        Featured Projects
      </div>

      {/* Responsive description */}
      <div className="text-center px-4 md:px-20 lg:px-32 xl:px-64">
        <p className="text-lg md:text-xl pb-2">
          Explore our portfolio of successful construction projects that
          showcase our expertise, quality craftsmanship, and commitment to
          excellence.
        </p>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
        {/* Card 1 - Residential Houses */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
            src={heroImages.hero_image_1}
            alt="Residential Houses"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <House size={20} />
            </div>
          </div>
          <div className="px-4 md:px-5 py-4">
            <div className="font-bold text-lg md:text-xl mb-2 flex items-center">
              Residential Houses
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Family homes in Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>

        {/* Card 2 - Commercial Buildings */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
            src={heroImages.hero_image_2}
            alt="Commercial Buildings"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Building size={20} />
            </div>
          </div>
          <div className="px-4 md:px-5 py-4">
            <div className="font-bold text-lg md:text-xl mb-2 flex items-center">
              Shops & Small Commercial Buildings
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              Local business spaces in Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>

        {/* Card 3 - Community Works */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
            src={heroImages.hero_image_1}
            alt="Community Works"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Handshake size={20} />
            </div>
          </div>

          <div className="px-4 md:px-5 py-4">
            <div className="font-bold text-lg md:text-xl mb-2 flex items-center">
              Community Works
            </div>
            <p className="text-gray-700 text-sm md:text-base">
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
