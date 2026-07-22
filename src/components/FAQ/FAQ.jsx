import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const half = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, half);
  const rightFaqs = faqData.slice(half);

  return (
    <section id="faq" className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
      <div className=" w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-[100px] h-[50px]"></div>
        {/* ================= Header ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center  text-center mb-16 sm:mb-20"
        >
          <span className="section-badge mb-4">
            FAQ
          </span>
          <div className="w-[100px] h-[20px]"></div>
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1E293B] leading-tight">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="w-10 h-1.5 rounded-full bg-[#0E6A4A] mt-5 opacity-90" />
          <div className="w-[100px] h-[30px]"></div>
          
          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
            Got questions? We've got answers. Here are the most common
            questions from our clients.
          </p>
        </motion.div>
         <div className="w-[100px] h-[30px]"></div>

        {/* ================= FAQ Grid ================= */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          className="w-full flex flex-col lg:flex-row justify-around gap-6 lg:gap-8"
        >
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {leftFaqs.map((faq) => (
              <motion.div key={faq.id} variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}>
                <FAQItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              </motion.div>
            ))}
          </div>
          {/* Right Column */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            {rightFaqs.map((faq) => (
              <motion.div key={faq.id} variants={{
                hidden: { opacity: 0, x: 30 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}>
                <FAQItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= Bottom CTA ================= */}
        <div className="w-[100px] h-[50px]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 w-full mx-auto flex flex-col items-center justify-center gap-6 p-8 sm:p-12 bg-gradient-to-br from-[#D1DBD3] to-[#F6FDF9] rounded-2xl border border-[#0E6A4A]/20 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-center max-w-2xl">
            
             <div className="h-[20px]"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1A12]">Still have questions?</h3>
            <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">Our team is ready to help you get the answers you need.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto mt-2">
            <button className="group bg-[#0E6A4A] hover:bg-[#09563C] text-white font-bold text-sm sm:text-base rounded-xl w-full sm:w-[220px] h-[50px] flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1">
              <MessageCircle size={18} />
              Chat with Us
            </button>
            <button className="group bg-white hover:bg-gray-50 text-[#0D1A12] border border-gray-200 hover:border-gray-300 font-bold text-sm sm:text-base rounded-xl w-full sm:w-[220px] h-[50px] flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              Contact Support
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            
          </div>
          <div className="h-[20px]"></div>
        </motion.div>
          
      </div>
    </section>
  );
};

export default FAQ;
