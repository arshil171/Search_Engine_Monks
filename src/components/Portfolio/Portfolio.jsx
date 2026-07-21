import PortfolioCard from "./PortfolioCard";
import portfolioData from "./portfolioData";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828]">
            Our Recent Projects
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {portfolioData.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10 sm:mt-14 lg:mt-16">
          <button className="inline-flex h-[40px] w-[300px] justify-center items-center gap-2 bg-[#0E6A4A] hover:bg-[#0a5238] text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300">
            View All Projects
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;