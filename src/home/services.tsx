import { servicesImages } from "@/constants/servicesImages";
import { Building, House, Ruler, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="pb-10">
      <div className="text-4xl font-bold font-sans flex justify-center items-center pt-8 pb-5">
        Our Services
      </div>
      <p className="px-60 text-xl ">
        From residential homes to commercial buildings, we offer comprehensive
        construction
      </p>
      <p className="px-72  text-xl pb-8">
        services tailored to meet your specific needs and exceed your
        expectations .
      </p>
      <div className="grid grid-cols-4 gap-6">
        {/* Card 1 - Residential Houses */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-48 object-cover"
            src={servicesImages.servicesImages1}
            alt="Residential Houses"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <House />
            </div>
          </div>
          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Residential Houses
            </div>
            <p className="text-gray-700 text-base">
              We build strong, reliable, and affordable homes designed for
              families in Poonthottam, Thiruvarur. Each house is constructed
              with a focus on safety, comfort, and long-term durability.
            </p>
          </div>
        </div>

        {/* Card 2 - Commercial Buildings */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-48 object-cover"
            src={servicesImages.servicesImages2}
            alt="Commercial Buildings"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Building />
            </div>
          </div>
          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Commercial Buildings
            </div>
            <p className="text-gray-700 text-base">
              From shops to mid-sized office spaces, we create functional and
              practical commercial structures that help businesses grow in
              Poonthottam, Thiruvarur.
            </p>
          </div>
        </div>

        {/* Card 3 - Blueprint Services */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-48 object-cover"
            src={servicesImages.servicesImages3}
            alt="Blueprint Services"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Ruler />
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Blueprint Online Plan Approval
            </div>
            <p className="text-gray-700 text-base">
              Our engineers and architects deliver precise and detailed designs,
              ensuring structural safety and cost efficiency through single
              window portal approval.
            </p>
          </div>
        </div>

        {/* Card 4 - Construction Consultancy */}
        <div className="rounded-lg overflow-hidden shadow-lg relative">
          <img
            className="w-full h-48 object-cover"
            src={servicesImages.servicesImages4}
            alt="Construction Consultancy"
          />
          <div className="absolute top-2 left-2 bg-white rounded-lg px-3 py-2 shadow-lg">
            <div className="text-[#7C3AED] font-bold text-center">
              <Users />
            </div>
          </div>
          <div className="px-5 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Construction Consultancy & Estimation
            </div>
            <p className="text-gray-700 text-base">
              We provide end-to-end consultancy services from planning and
              material advice to accurate cost estimation and project
              supervision. Our clear process makes construction stress-free for
              our clients.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="pt-10">
      <div className="text-4xl font-bold font-sans flex justify-center items-center pb-12">
        Why Choose Us?
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Row 1 - Column 1 */}
        <div className="flex items-start gap-4">
          <span className="text-green-500 text-2xl mt-1">✅</span>
          <div>
            <h3 className="font-bold text-xl text-gray-800">
              20+ Years of Local Experience
            </h3>
            <p className="text-gray-600 mt-1">
              Serving Poonthottam, Thiruvarur with trust.
            </p>
          </div>
        </div>

        {/* Row 1 - Column 2 */}
        <div className="flex items-start gap-4">
          <span className="text-green-500 text-2xl mt-1">✅</span>
          <div>
            <h3 className="font-bold text-xl text-gray-800">
              Small & Mid-Scale Focus
            </h3>
            <p className="text-gray-600 mt-1">
              Ideal for families and local businesses.
            </p>
          </div>
        </div>

        {/* Row 1 - Column 3 */}
        <div className="flex items-start gap-4">
          <span className="text-green-500 text-2xl mt-1">✅</span>
          <div>
            <h3 className="font-bold text-xl text-gray-800">
              Affordable & Transparent Pricing
            </h3>
            <p className="text-gray-600 mt-1">
              No hidden charges, only clear estimates.
            </p>
          </div>
        </div>

        {/* Row 2 - Column 1 */}
        <div className="flex items-start gap-4">
          <span className="text-green-500 text-2xl mt-1">✅</span>
          <div>
            <h3 className="font-bold text-xl text-gray-800">
              On-Time Delivery
            </h3>
            <p className="text-gray-600 mt-1">We respect your timelines.</p>
          </div>
        </div>

        {/* Row 2 - Column 2 */}
        <div className="flex items-start gap-4">
          <span className="text-green-500 text-2xl mt-1">✅</span>
          <div>
            <h3 className="font-bold text-xl text-gray-800">Local Trust</h3>
            <p className="text-gray-600 mt-1">
              Rooted in the Poonthottam, Thiruvarur community.
            </p>
          </div>
        </div>

        {/* Row 2 - Column 3 */}
        <div className="flex items-start gap-4">
          <span className="text-green-500 text-2xl mt-1">✅</span>
          <div>
            <h3 className="font-bold text-xl text-gray-800">Durable Quality</h3>
            <p className="text-gray-600 mt-1">
              Safe, reliable, and sustainable construction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
