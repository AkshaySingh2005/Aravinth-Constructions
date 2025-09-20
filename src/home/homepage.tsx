import Header from "./header";
import Hero from "./hero";
import AboutUS from "./about_us";
import Values from "./values";
import Services from "./services";

const Homepage = () => {
  return (
    <>
      <div className="px-32 border-b border-gray-200 shadow-md">
        <Header />
      </div>
      <div className="px-32">
        <Hero />
      </div>
      <div className="px-32 bg-[#f9fafb]">
        <AboutUS />
      </div>
      <div className="px-32">
        <Values />
      </div>
      <div className="px-32 bg-[#f9fafb]">
        <Services />
      </div>
    </>
  );
};

export default Homepage;
