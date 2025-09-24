import Header from "./header";
import Hero from "./hero";
import AboutUS from "./about_us";
import Values from "./values";
import Services from "./services";
import Projects from "./projects";
import Partners from "./partners";
import Founder from "./founder";
import Footer from "./footer";

const Homepage = () => {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 border-b border-gray-200 shadow-md">
        <Header />
      </div>
      <div id="home" className="px-4 sm:px-8 md:px-16 lg:px-32">
        <Hero />
      </div>
      <div id="about" className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#f9fafb]">
        <AboutUS />
      </div>
      <div className="px-32">
        <Values />
      </div>
      <div id="services" className="px-32 bg-[#f9fafb]">
        <Services />
      </div>
      <div id="projects" className="px-32">
        <Projects />
      </div>
      <div id="partners" className="px-32 bg-[#f9fafb]">
        <Partners />
      </div>
      <div className="px-32">
        <Founder />
      </div>
      <div id="contact" className="px-32 bg-gray-800">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
