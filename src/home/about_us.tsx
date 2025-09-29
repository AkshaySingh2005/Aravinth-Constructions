import { heroImages } from "@/constants/heroImages";

const AboutUS = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3 py-12 md:py-18 items-start">
      {/* Content Section */}
      <div className="order-2 md:order-1">
        <div className="text-3xl md:text-4xl font-bold font-sans leading-[1.3] text-center md:flex md:justify-center md:pr-12 md:pb-2">
          About Us
        </div>
        
        <div className="text-lg md:text-2xl font-bold font-sans pt-6 md:pb-2">Who We Are</div>
        <p className="leading-relaxed text-base md:text-xl">
          Aravinth Constructions is an established construction company with 20+
          years of experience, rooted in Poonthottam, Thiruvarur, Tamil Nadu.
          Over the years, we have delivered numerous small and mid-scale
          projects, earning the trust of families, businesses, and communities.
        </p>

        <div className="text-lg md:text-2xl font-bold font-sans pt-6 md:pb-2">What We Do</div>
        <p className="leading-relaxed text-base md:text-xl">
          We specialize in residential houses, commercial buildings, blueprint -
          online plan approval (single window portal), and construction
          consultancy with accurate estimation. Every project is guided by our
          principles of quality, affordability, and transparency.
        </p>
      </div>

      {/* Image Section */}
      <div className="order-1 md:order-2 relative h-80 md:h-full">
        <img
          src={heroImages.hero_image_2}
          alt="About Us - Construction Excellence"
          className="rounded-2xl object-cover w-full h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        />
        
        {/* Experience Badge */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 md:px-4 md:py-2 shadow-lg">
          <div className="text-[#2596be] font-bold text-center">
            <div className="text-2xl md:text-3xl">20+</div>
            <div className="text-xs md:text-sm text-black">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;