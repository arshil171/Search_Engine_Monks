import ServiceCard from "./ServiceCard";
import serviceData from "./serviceData";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full mt-16 sm:mt-20 lg:mt-24 flex justify-center items-center sm:py-20 lg:py-24"
    >
      {/* Container */}
      <div className="w-[1900px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828]">
            Our Services
          </h2>
        </div>

        {/* Cards Grid - 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

          {serviceData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button className="inline-flex w-[200px] h-[40px] justify-center items-center gap-2 bg-[#0E6A4A] hover:bg-[#0a5238] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-colors duration-300">
            View all Services
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;