import { ads } from "@/constants/ads";

const Advertisement = () => {
  return (
    <div className="py-8 md:py-10 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <img
            src={ads.Ad1}
            alt="Advertisement 1"
            className="w-full h-full sm:h-80 md:h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        <div>
          <img
            src={ads.Ad2}
            alt="Advertisement 2"
            className="w-full h-full sm:h-80 md:h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
