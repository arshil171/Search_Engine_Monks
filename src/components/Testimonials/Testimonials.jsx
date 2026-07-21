import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialData";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="relative w-full bg-[#fafcfb] py-20 lg:py-24 mt-16 lg:mt-24 overflow-hidden">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">

        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 sm:mb-20"
        >
          <span className="section-badge mb-4">
            Client Testimonials
          </span>
            <div className="w-[100px] h-[30px] bg-transparent"></div>
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1E293B] leading-tight">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>

        
          <div className="w-10 h-1.5 rounded-full bg-[#0E6A4A] mt-5 opacity-90" />
            <div className="w-[100px] h-[30px] bg-transparent"></div>
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped scale.
          </p>
          <div className="w-[100px] h-[20px] bg-transparent"></div>
          {/* Overall Rating */}
          <div className="mt-8 h-[30px] w-[500px] max-w-[100%] flex justify-center items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 px-7 py-3.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-800 font-bold text-sm">4.9 out of 5</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-500 text-sm">Based on 500+ reviews</span>
          </div>
        </motion.div>
       <div className="w-[100px] h-[20px] bg-transparent"></div>
        {/* ================= Cards Grid ================= */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="w-full mx-auto flex flex-wrap justify-around gap-y-8 gap-x-2"
        >
          {testimonialData.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="w-full md:w-[48%] lg:w-[48%] xl:w-[31%] h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= Navigation Dots + Arrows ================= */}
          <div className="w-[100px] h-[20px] bg-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-16 sm:mt-20"
        >
          <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#0E6A4A] hover:bg-[#D1DBD3] hover:text-[#0E6A4A] transition-all duration-300 group shadow-sm hover:shadow-md">
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2.5">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveDot(i)}
                className={`rounded-full transition-all duration-300 ${
                  activeDot === i
                    ? "w-10 h-3 bg-[#0E6A4A]"
                    : "w-3 h-3 bg-gray-200 hover:bg-[#0E6A4A]"
                }`}
              />
            ))}
          </div>

          <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#0E6A4A] hover:bg-[#D1DBD3] hover:text-[#0E6A4A] transition-all duration-300 group shadow-sm hover:shadow-md">
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
        <div className="w-[100px] h-[20px] bg-transparent"></div>
      </div>
    </section>
  );
};

export default Testimonials;
