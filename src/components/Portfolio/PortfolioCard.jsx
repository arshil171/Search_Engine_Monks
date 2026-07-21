const PortfolioCard = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="mt-3 sm:mt-4">
        <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#0E6A4A] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;