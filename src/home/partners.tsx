import { Button } from "@/components/ui/button";
import { partners } from "@/constants/partners";
import { openPartnershipEmailSmart } from "@/services/getPartnership";
import { ExternalLink, Globe } from "lucide-react";

const Partners = () => {
  return (
    <div className="py-10">
      <div className="text-4xl font-bold font-sans flex justify-center items-center pb-8">
        Our Partners
      </div>

      {/* Introduction Text */}
      <div className="text-center max-w-4xl mx-auto pb-12">
        <p className="text-xl leading-relaxed text-gray-700">
          We believe in building strong relationships not just with our clients,
          but also with our partners. Our collaborations with trusted suppliers,
          skilled engineers, and local vendors ensure consistent quality on
          every project.
        </p>
      </div>

      {/* Current Partners Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <span className="text-3xl">
                <img
                  src={partners.partner1}
                  alt="Aravinth Enterprises Logo"
                  className="h-20"
                />
              </span>

              <div>
                <h3 className="font-bold text-2xl text-gray-800 mb-2">
                  Aravinth Enterprises
                </h3>
                <p className="text-gray-600 text-lg">
                  Medical, Clinic, Hospitality, Real Estate
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <a
                href="http://www.dostbin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1798c7] text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-[#1485a6] transition-colors duration-300 flex items-center gap-1"
              >
                <Globe size={12} />
                Visit
              </a>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">
                <img
                  src={partners.partner2}
                  alt="DostBin Logo"
                  className="h-20"
                />
              </span>
              <div>
                <a
                  href="http://www.dostbin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-2xl text-gray-800 mb-2 hover:text-[#1798c7] transition-colors duration-300 flex items-center gap-2"
                >
                  DostBin
                  <ExternalLink size={18} className="text-[#1798c7]" />
                </a>
                <p className="text-gray-600 text-lg mt-2">
                  Sustainable waste management partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Call to Action */}
      <div className="bg-gradient-to-r bg-[#2596be] text-white rounded-2xl p-8 max-w-4xl mx-auto text-center">
        <div className="text-3xl font-bold font-sans mb-4">
          Want to partner with us?
        </div>
        <p className="text-xl mb-6 leading-relaxed">
          If you are a supplier, service provider, or collaborator who shares
          our commitment to quality and community development, we'd love to hear
          from you.
        </p>
        <Button
          onClick={() => openPartnershipEmailSmart()}
          className="bg-white text-[#2596be] hover:bg-gray-100 font-bold text-lg md:px-8 px-2 py-3"
        >
          👉 Join Our Partnership — Email Us
        </Button>
      </div>
    </div>
  );
};

export default Partners;
