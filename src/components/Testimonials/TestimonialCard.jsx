import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 p-7 sm:p-8 h-full relative overflow-hidden">
      
      {/* Background Quote Decoration */}
      <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <Quote size={60} className="text-[#0E6A4A]" />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#0E6A4A] to-[#F47C20] transition-all duration-500 rounded-t-xl" />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={18} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed flex-grow relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Divider */}
      <div className="mt-6 w-full h-px bg-gradient-to-r from-gray-100 to-transparent" />

      {/* Author */}
      <div className="mt-5 flex items-center gap-4">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-white group-hover:ring-[#D1DBD3] transition-all duration-300"
          />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0E6A4A] border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </span>
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#0D1A12]">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-400 font-medium mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
