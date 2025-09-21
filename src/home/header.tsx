import { Button } from "@/components/ui/button";
import { icons } from "@/constants/icon";

const Header = () => {
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
        <a className="hover:text-[#7C3AED] cursor-pointer">Home</a>
        <a className="hover:text-[#7C3AED] cursor-pointer">Services</a>
        <a className="hover:text-[#7C3AED] cursor-pointer">Projects</a>
        <a className="hover:text-[#7C3AED] cursor-pointer">About</a>
        <a className="hover:text-[#7C3AED] cursor-pointer">Partners</a>
        <a className="hover:text-[#7C3AED] cursor-pointer">Contact</a>
        <Button className="bg-[#884cee]  hover:bg-[#7C3AED]">
          Get a Quote
        </Button>
      </nav>
    </div>
  );
};

export default Header;
