import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icon";
import { heroImages } from "@/constants/heroImages";
import { ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/services/getQuote";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-1 py-12 md:py-24 items-center md:items-start">
      {/* Content Section */}
      <div className="order-2 md:order-1">
        <div className="text-4xl md:text-7xl font-bold font-sans leading-tight md:leading-[1.3]">
          Civil Engineers make the World.
        </div>
        <div className="py-6 md:py-8 text-lg md:text-2xl leading-relaxed">
          Established in Poonthottam, Thiruvarur - Delivering 20+ Years of
          Trusted Construction Services in Residential, Commercial, and
          Community Projects.
        </div>
        <div className="space-y-3 md:space-y-2 text-lg md:text-2xl">
          <div className="flex items-center gap-2">
            <img src={icons.tick} alt="✓" className="w-5 h-5" />
            <span>Local Roots, Lasting Strength</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={icons.tick} alt="✓" className="w-5 h-5" />
            <span>20+ Years of Experience You Can Trust</span>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="pt-8 md:hidden">
          <div className="text-center space-y-4">
            <p className="text-[#2596be] font-bold text-xl">
              Start Your Project Today
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#2596be] to-[#47b6df] mx-auto rounded-full"></div>
            <Button
              className="bg-[#2596be] hover:bg-[#47b6df] font-bold text-lg px-8 py-3 flex items-center justify-center gap-2 w-full"
              onClick={() => openWhatsApp()}
            >
              Request an Estimate
            </Button>
          </div>
        </div>

        {/* Desktop CTA (unchanged) */}
        <div className="pt-10 flex-row items-center gap-4 hidden md:flex">
          <div>
            <p className="bg-white hover:bg-white text-[#2596be] font-bold text-lg">
              Start Your Project Today
            </p>
            <div className="w-29 h-1 bg-gradient-to-r from-[#2596be] to-[#47b6df] mx-auto rounded-full"></div>
          </div>

          <ArrowRight size={32} />
          <Button
            className="bg-[#2596be] hover:bg-[#47b6df] font-bold"
            onClick={() => openWhatsApp()}
          >
            Request an Estimate
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 h-80 md:h-full">
        <img
          src={heroImages.hero_image_1}
          alt="Hero Image"
          className="rounded-2xl object-cover w-full h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero;
