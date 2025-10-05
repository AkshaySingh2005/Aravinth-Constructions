import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="text-white py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-12 text-[#4bc4ef]">
            Let's Build Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto ">
            {/* Contact Us Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-6">
                <p className="flex items-start">
                  <MapPin className="mr-3 mt-1 text-[#4bc4ef]" size={35} />
                  <span>
                    <strong>Office:</strong>Office - 471, Railway Station Road,
                    Poonthottam, Nannilam Taluk, Thiruvarur District,609503
                  </span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-3 mt-1 text-[#4bc4ef]" size={20} />
                  <span>
                    <strong>Phone:</strong> 98424 38323, 73394 68412
                  </span>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-3 mt-1 text-[#4bc4ef]" size={20} />
                  <span>
                    <strong>Email:</strong> aravinthcons@gmail.com
                  </span>
                </p>
                {/* <p className="flex items-center">
                  <Globe className="mr-3 mt-1 text-[#4bc4ef]" size={20} />
                  <span>
                    <strong>Website:</strong> [Domain]
                  </span>
                </p> */}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4 ">
              <h3 className="text-2xl font-bold mb-4 md:pl-14">Quick Links</h3>
              <div className="space-y-2 md:pl-14 pl-2">
                <a
                  href="#home"
                  className="block text-gray-300 hover:text-[#4bc4ef] transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-300 hover:text-[#4bc4ef] transition-colors duration-300"
                >
                  About Us
                </a>
                {/* <a
                  href="#services"
                  className="block text-gray-300 hover:text-[#4bc4ef] transition-colors duration-300"
                >
                  Our Services
                </a> */}
                <a
                  href="#projects"
                  className="block text-gray-300 hover:text-[#4bc4ef] transition-colors duration-300"
                >
                  Projects
                </a>
                <a
                  href="#founder"
                  className="block text-gray-300 hover:text-[#4bc4ef] transition-colors duration-300"
                >
                  Meet the Founder
                </a>
                <a
                  href="#contact"
                  className="block text-gray-300 hover:text-[#4bc4ef] transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* About Us Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">About Us</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  Aravinth Constructions - Civil Engineers make the World.
                </p>
                <p className="flex items-center">
                  20+ Years of Trusted Service in Poonthottam, Thiruvarur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Aravinth Constructions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
