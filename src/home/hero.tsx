import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icon";
import { heroImages } from "@/constants/heroImages";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/whatapp/getQuote";

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
        <div className="pt-10 flex flex-row items-center gap-4">
          <div>
            <p className="bg-white hover:bg-white text-[#7C3AED] font-bold text-lg">
              Start Your Project Today
            </p>
            <div className="w-29 h-1 bg-gradient-to-r from-[#7C3AED] to-[#884cee] mx-auto rounded-full"></div>
          </div>

          <ArrowRight size={32} />
          <Button
            className="bg-[#884cee]  hover:bg-[#7C3AED] font-bold"
            onClick={() => openWhatsApp()}
          >
            Request an Estimate
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
