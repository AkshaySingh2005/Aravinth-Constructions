import { heroImages } from "@/constants/images";

const AboutUS = () => {
  return (
    <div className="grid grid-cols-2 gap-3 py-24 items-start ">
      <div>
        <div className="text-4xl font-bold font-sans leading-[1.3] flex justify-center pr-12">
          About Us
        </div>
        <div className="text-xl font-bold font-sans pt-6">Who We Are</div>
        <p className="leading-relaxed text-xl">
          Aravinth Constructions is an established construction company with 20+
          years of experience, rooted in Poonthottam, Thiruvarur, Tamil Nadu.
          Over the years, we have delivered numerous small and mid-scale
          projects, earning the trust of families, businesses, and communities.
        </p>
        <div className="text-xl font-bold font-sans pt-6">What We Do</div>
        <p className="leading-relaxed text-xl">
          We specialize in residential houses, commercial buildings, blueprint -
          online plan approval (single-window portal) , and construction
          consultancy with accurate estimation. Every project is guided by our
          principles of quality, affordability, and transparency.
        </p>
      </div>

      <div className="relative w-full h-full">
        <img
          src={heroImages.hero_image_2}
          alt="Hero Image"
          className="rounded-2xl object-cover w-full h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg">
          <div className="text-[#7C3AED] font-bold text-center">
            <div className="text-3xl">15+</div>
            <div className="text-sm text-black">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
