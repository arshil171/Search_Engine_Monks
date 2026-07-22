import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialData";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Split data for two rows
const row1 = testimonialData.slice(0, 4);
const row2 = testimonialData.slice(4, 8);

// Duplicate for seamless marquee (tripled to ensure it fills ultra-wide screens safely)
const slider1 = [...row1, ...row1, ...row1]; 
const slider2 = [...row2, ...row2, ...row2];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#fafcfb] py-20 lg:py-24 mt-16 lg:mt-24 overflow-hidden border-y border-gray-100">
      <div className=" w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
         <div className="h-[20px]"></div>
        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <span className="section-badge mb-4">
            Client Feedback
          </span>
          <div className="h-[20px]"></div>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1E293B] leading-tight">
            What Our Client Says About Us
          </h2>
         
          <div className="w-10 h-1.5 rounded-full bg-[#0E6A4A] mt-5 opacity-90" />
           <div className="h-[20px]"></div>
           
          {/* Overall Rating */}
          <div className="mt-10 flex w-[600px] h-[30px] justify-center items-center gap-3 bg-white rounded border border-gray-100 shadow-sm px-7 py-3.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-orange-400 fill-orange-400" />
              ))}
            </div>
            <span className="text-gray-800 font-bold text-sm">4.9 out of 5</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-500 text-sm">Based on 500+ reviews</span>
          </div>
        </motion.div>
        
             <div className="h-[20px]"></div>
      </div>

      {/* ================= Sliders ================= */}
      <div className="relative w-full flex flex-col gap-8 pb-10">
        
        {/* Fade edges for smooth scrolling effect */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-48 bg-gradient-to-r from-[#fafcfb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-48 bg-gradient-to-l from-[#fafcfb] to-transparent z-10 pointer-events-none" />

        {/* Slider 1 */}
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]" style={{ width: "max-content", animationDuration: "40s" }}>
          {slider1.map((testimonial, idx) => (
            <div key={`s1-${idx}`} className="w-[350px] sm:w-[450px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Slider 2 (Different speed for staggered effect) */}
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]" style={{ width: "max-content", animationDuration: "50s" }}>
          {slider2.map((testimonial, idx) => (
            <div key={`s2-${idx}`} className="w-[350px] sm:w-[450px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
