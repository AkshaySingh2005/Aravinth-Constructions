import { heroImages } from "@/constants/images";

const Services = () => {
  return (
    <div className="pb-10">
      <div className="text-4xl font-bold font-sans flex justify-center items-center pt-10 pb-8">
        Our Services
      </div>
      <div className="grid grid-cols-4 gap-6">
        {/* Card 1 - Residential Houses */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={heroImages.hero_image_1}
            alt="Residential Houses"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              <span className="text-2xl mr-2">🏠</span>
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
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={heroImages.hero_image_2}
            alt="Commercial Buildings"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              <span className="text-2xl mr-2">🏢</span>
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
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={heroImages.hero_image_1}
            alt="Blueprint Services"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              <span className="text-2xl mr-2">📐</span>
              Blueprint – Online Plan Approval
            </div>
            <p className="text-gray-700 text-base">
              Our engineers and architects deliver precise and detailed designs,
              ensuring structural safety and cost efficiency through single
              window portal approval.
            </p>
          </div>
        </div>

        {/* Card 4 - Construction Consultancy */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={heroImages.hero_image_2}
            alt="Construction Consultancy"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex items-center">
              Construction Consultancy & Estimation
            </div>
            <p className="text-gray-700 text-base">
              We provide end-to-end consultancy services - from planning and
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

      <div className="grid grid-cols-2 gap-8">
        <div className="justify-items-center">
          <div className="space-y-6">
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
          </div>
        </div>
        <div className="justify-items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-green-500 text-2xl mt-1">✅</span>
              <div>
                <h3 className="font-bold text-xl text-gray-800">
                  On-Time Delivery
                </h3>
                <p className="text-gray-600 mt-1">We respect your timelines.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-green-500 text-2xl mt-1">✅</span>
              <div>
                <h3 className="font-bold text-xl text-gray-800">Local Trust</h3>
                <p className="text-gray-600 mt-1">
                  Rooted in the Poonthottam, Thiruvarur community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-green-500 text-2xl mt-1">✅</span>
              <div>
                <h3 className="font-bold text-xl text-gray-800">
                  Durable Quality
                </h3>
                <p className="text-gray-600 mt-1">
                  Safe, reliable, and sustainable construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
