import { ExternalLink } from "lucide-react";

const PortfolioCard = ({ project }) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden w-full h-[200px] sm:h-[220px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1A12]/80 via-[#0D1A12]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400 text-center">
          <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
            View project details and results →
          </p>
          <button className="mt-5 min-w-[180px] flex justify-center items-center gap-3 bg-white text-[#0D1A12] text-base font-bold px-8 py-3.5 rounded-full hover:bg-[#F47C20] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[#F47C20]/30 hover:-translate-y-0.5">
            <ExternalLink size={18} />
            <span>View Project</span>
          </button>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 flex flex-col items-center text-center justify-center flex-1 gap-2">
        <h3 className="text-lg font-bold text-[#0D1A12] group-hover:text-[#0E6A4A] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
