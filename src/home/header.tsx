import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icon";
import { openWhatsApp } from "@/whatapp/getQuote";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex justify-between items-center py-4 ">
      <div className="flex items-center space-x-2">
        <img
          src={icons.logo}
          alt="Logo"
          style={{ width: "55px", height: "50px" }}
        />
        <h2 className="text-2xl font-bold font-sans">Aravinth Construction</h2>
      </div>
      <nav className="flex space-x-9 items-center">
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("services")}
        >
          Services
        </a>
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </a>
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("partners")}
        >
          Partners
        </a>
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
        <Button
          className="bg-[#884cee] hover:bg-[#7C3AED]"
          onClick={() => openWhatsApp()}
        >
          Get a Quote
        </Button>
      </nav>
    </div>
  );
};

export default Header;
