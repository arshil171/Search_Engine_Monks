import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 sm:p-10 h-full group">
      
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={20}
            className="text-[#F47C20] fill-[#F47C20]"
          />
        ))}
      </div>

      {/* Quote */}
      {/* Increased top margin, made text slightly darker and font slightly thicker for better readability */}
      <p className="mt-6 text-base text-gray-700 font-medium leading-relaxed flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          // Added a subtle hover scale effect to the profile image
          className="w-12 h-12 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
        <div className="flex flex-col">
          <h4 className="text-base font-bold text-[#101828]">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 font-medium mt-0.5">
            {testimonial.role}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default TestimonialCard;