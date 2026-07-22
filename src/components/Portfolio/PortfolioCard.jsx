import { MapPin, Clock, ArrowRight } from "lucide-react";

const PortfolioCard = ({ project }) => {
  return (
    <div className="group w-full max-w-[500px] flex flex-col h-full bg-transparent gap-5 pb-4">
      {/* Image Container with Custom Chamfered Shape */}
      <div 
        className="relative overflow-hidden  w-full h-[240px] sm:h-[260px] rounded-[32px] shadow-sm transition-all duration-500 group-hover:shadow-lg"
        style={{ clipPath: "polygon(48px 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%, 0 48px)" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-1 px-1 gap-3">
        <h3 className="text-[19px] sm:text-xl font-bold text-[#0D1A12] leading-snug group-hover:text-[#F47C20] transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[14px] text-gray-600 font-medium leading-relaxed">
          {project.subtitle}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2">
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin size={16} strokeWidth={2} />
            <span className="text-[13px] font-semibold">{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock size={16} strokeWidth={2} />
            <span className="text-[13px] font-semibold">{project.date}</span>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-auto pt-3">
          <button className="flex items-center gap-2 text-[#F47C20] font-bold text-[14px] group-hover:text-[#e0681b] transition-colors">
            View More 
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
