import Header from "./header";
import Hero from "./hero";
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
        <Services />
      </div>
    </>
  );
};

export default Homepage;
