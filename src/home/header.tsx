import { useState } from "react";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icon";
import { Menu, X } from "lucide-react";
import { openWhatsApp } from "@/services/getQuote";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center py-4 relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src={icons.logo}
          alt="Logo"
          style={{ width: "55px", height: "50px" }}
        />
        {/* Desktop - Single line */}
        <h2 className="text-xl md:text-2xl font-bold font-sans hidden sm:block">
          Aravinth Constructions
        </h2>
        {/* Mobile - Two lines */}
        <div className="block sm:hidden">
          <h2 className="text-lg font-bold font-sans leading-tight">
            Aravinth
          </h2>
          <h2 className="text-sm font-bold font-sans leading-tight text-gray-600">
            Constructions
          </h2>
        </div>
      </div>

      {/* Desktop Navigation - Changed from lg: to md: */}
      <nav className="hidden md:flex space-x-9 items-center">
        <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        {/* <a
          className="hover:text-[#7C3AED] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToSection("services")}
        >
          Services
        </a> */}
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
          className="bg-[#2596be] hover:bg-[#47b6df] flex items-center gap-2"
          onClick={() => openWhatsApp()}
        >
          Get a Quote
        </Button>
      </nav>

      {/* Mobile Menu Button - Changed from lg: to md: */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} className="text-gray-600" />
        ) : (
          <Menu size={24} className="text-gray-600" />
        )}
      </button>

      {/* Mobile Navigation Menu - Changed from lg: to md: */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mx-4 mt-2 md:hidden">
            <nav className="flex flex-col space-y-0">
              <a
                className="px-6 py-4 hover:bg-gray-50 hover:text-[#7C3AED] cursor-pointer transition-colors duration-300 border-b border-gray-100"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
              {/* <a
                className="px-6 py-4 hover:bg-gray-50 hover:text-[#7C3AED] cursor-pointer transition-colors duration-300 border-b border-gray-100"
                onClick={() => scrollToSection("services")}
              >
                Services
              </a> */}
              <a
                className="px-6 py-4 hover:bg-gray-50 hover:text-[#7C3AED] cursor-pointer transition-colors duration-300 border-b border-gray-100"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
              <a
                className="px-6 py-4 hover:bg-gray-50 hover:text-[#7C3AED] cursor-pointer transition-colors duration-300 border-b border-gray-100"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
              <a
                className="px-6 py-4 hover:bg-gray-50 hover:text-[#7C3AED] cursor-pointer transition-colors duration-300 border-b border-gray-100"
                onClick={() => scrollToSection("partners")}
              >
                Partners
              </a>
              <a
                className="px-6 py-4 hover:bg-gray-50 hover:text-[#7C3AED] cursor-pointer transition-colors duration-300 border-b border-gray-100"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>

              {/* Mobile Get Quote Button */}
              <div className="p-4">
                <Button
                  className="w-full bg-[#2596be] hover:bg-[#47b6df] flex items-center justify-center gap-2"
                  onClick={() => openWhatsApp()}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
