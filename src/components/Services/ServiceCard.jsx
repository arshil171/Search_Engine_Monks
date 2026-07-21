const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="group flex flex-col items-start p-3 sm:p-4 lg:p-5">
      {/* Icon */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 flex items-center justify-center shrink-0 mb-3 sm:mb-4">
        <Icon
          size={22}
          className="text-[#0E6A4A] sm:w-6 sm:h-6 lg:w-7 lg:h-7"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#101828] leading-tight mb-1.5 sm:mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;