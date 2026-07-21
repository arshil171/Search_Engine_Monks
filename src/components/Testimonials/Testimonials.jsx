import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialData";

const Testimonials = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828]">
            What Our Clients Say
          </h2>
          {/* Green Underline */}
          <div className="mt-3 sm:mt-4 mx-auto w-16 sm:w-20 h-1 bg-[#0E6A4A] rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10 sm:mt-14 lg:mt-16">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0E6A4A]"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;