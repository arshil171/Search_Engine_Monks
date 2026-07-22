import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group w-[500px] relative flex flex-col items-center text-center bg-white border border-gray-100 rounded p-7 sm:p-8 h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-400 overflow-hidden w-full mx-auto" style={{ minWidth: "350px", maxWidth: "500px" }}>
      
      {/* Top Section: Author */}
      <div className="flex flex-col items-center gap-3 mb-5 relative z-10"> 
        <div className="h-[7px]"></div>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover shadow-sm bg-[#D1DBD3]"
        />
        <div className="flex flex-col items-center">
          <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0D1A12]">
            {testimonial.name}
          </h4>
          <p className="text-[13px] sm:text-sm text-gray-500 font-medium mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-gray-200 mb-5 relative z-10" />
     <div className="h-[7px]"></div>
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-4 relative z-10">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={18} className="text-orange-400 fill-orange-400" />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-[15px] sm:text-base text-gray-800 leading-relaxed font-semibold flex-grow text-center relative z-10 px-2">
        "{testimonial.quote}"
      </p>

      {/* Subtle Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E6A4A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
    </div>
  );
};

export default TestimonialCard;
