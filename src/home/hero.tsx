import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icon";
import { heroImages } from "@/constants/images";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-1 py-24 items-start">
      <div>
        <div className="text-7xl font-bold font-sans leading-[1.3]">
          Civil Engineers make the World.
        </div>
        <div className="py-8 text-2xl leading-relaxed">
          Established in Poonthottam, Thiruvarur - Delivering 15+ Years of
          Trusted Construction Services in Residential, Commercial, and
          Community Projects .
        </div>
        <div className="space-y-2 text-2xl">
          <div className="flex items-center gap-2">
            <img src={icons.tick} alt="✓" className="w-5 h-5" />
            <span>Local Roots, Lasting Strength</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={icons.tick} alt="✓" className="w-5 h-5" />
            <span>20+ Years of Experience You Can Trust</span>
          </div>
        </div>
        <div className="pt-10 flex space-x-8">
          <Button className="bg-[#884cee]  hover:bg-[#7C3AED] font-bold">
            Request an Estimate
          </Button>
          <Button className="bg-white hover:bg-[#7C3AED] hover:text-white text-[#7C3AED] border border-[#7C3AED] font-bold">
            Start Your Project Today
          </Button>
        </div>
      </div>
      <img
        src={heroImages.hero_image_1}
        alt="Hero Image"
        className="rounded-2xl object-cover w-full h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      />
    </div>
  );
};

export default Hero;
