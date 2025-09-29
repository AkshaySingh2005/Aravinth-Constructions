import Header from "./header";
import Hero from "./hero";
import AboutUS from "./about_us";
import Values from "./values";
// import Services from "./services";
import Projects from "./projects";
import Partners from "./partners";
import Founder from "./founder";
import Footer from "./footer";
import Advertisement from "./advertisement";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 border-b border-gray-200 shadow-md">
        <Header />
      </div>
      <div
        id="home"
        className="px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden"
      >
        <Hero />
      </div>
      <div
        id="about"
        className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#f9fafb] overflow-x-hidden"
      >
        <AboutUS />
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden">
        <Values />
      </div>
      {/* <div
        id="services"
        className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#f9fafb] overflow-x-hidden"
      >
        <Services />
      </div> */}
      <div
        id="projects"
        className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#f9fafb] overflow-x-hidden"
      >
        <Projects />
      </div>
      <div
        id="partners"
        className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#f9fafb] overflow-x-hidden"
      >
        <Partners />
      </div>
      <div
        id="founder"
        className="px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden"
      >
        <Founder />
      </div>
      <div
        id="contact"
        className="px-0 sm:px-2 md:px-10 lg:px-30 bg-[#f9fafb] overflow-x-hidden"
      >
        <Advertisement />
      </div>
      <div
        id="contact"
        className="px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-800 overflow-x-hidden"
      >
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
