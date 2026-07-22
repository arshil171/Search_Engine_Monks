import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  const lightBgs = [
    "bg-[#D1DBD3] group-hover:bg-[#0E6A4A]",
    "bg-blue-50 group-hover:bg-blue-500",
    "bg-orange-50 group-hover:bg-[#F47C20]",
    "bg-purple-50 group-hover:bg-purple-500",
    "bg-rose-50 group-hover:bg-rose-500",
    "bg-cyan-50 group-hover:bg-cyan-500",
    "bg-amber-50 group-hover:bg-amber-500",
    "bg-indigo-50 group-hover:bg-indigo-500",
  ];

  const textColors = [
    "text-[#0E6A4A]",
    "text-blue-500",
    "text-[#F47C20]",
    "text-purple-500",
    "text-rose-500",
    "text-cyan-500",
    "text-amber-500",
    "text-indigo-500",
  ];

  const colorIdx = index % 8;

  return (
    <div className="group relative flex flex-col justify-center items-center text-center gap-4 bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[320px]">
      {/* Hover Background */}
      <div className="h-[20px]"></div>
      <div className="absolute  inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Glow Effect */}
      <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(14,106,74,0.08), transparent)" }} />

      {/* Icon */}
      <div className={`relative w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${lightBgs[colorIdx]}`}>
        <Icon size={28} className={`transition-colors duration-300 ${textColors[colorIdx]} group-hover:text-white`} strokeWidth={2} />
      </div>

      {/* Content Container (Slides up on hover) */}
      <div className="flex flex-col relative mt-2 flex-grow items-center transition-transform duration-500 group-hover:-translate-y-3">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#0E6A4A] leading-snug mb-3 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
          {service.description}
        </p>
      </div>

      {/* Learn More Link (Slides up into view on hover) */}
      <div className="absolute bottom-6 flex items-center gap-2 text-sm font-bold text-[#F47C20] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        <span>Learn More</span>
        <ArrowRight size={18} className="transform transition-transform duration-500 group-hover:translate-x-1" strokeWidth={2.5} />
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0E6A4A] to-[#F47C20] transition-all duration-500 rounded-b-xl" />
    </div>
  );
};

export default ServiceCard;
