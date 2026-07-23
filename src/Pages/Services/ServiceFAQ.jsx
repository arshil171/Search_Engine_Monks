import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion, ArrowRight, Phone } from "lucide-react";
import faqData from "../../components/FAQ/faqData";

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // We only use the first 5 or 6 questions for this layout to match the mockup
  const displayFaqs = faqData.slice(0, 6);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Side: FAQ */}
        <div className="flex-1 bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
          <p className="text-[#39C95B] font-bold text-[10px] uppercase tracking-widest mb-2">
            FAQS
          </p>
          <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#1C1D20] mb-8">
            Frequently Asked <span className="text-[#39C95B]">Questions</span>
          </h2>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Illustration */}
            <div className="hidden xl:flex items-center justify-center shrink-0 w-44 relative">
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-24 h-24 bg-[#39C95B] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(57,201,91,0.4)]"
              >
                <MessageCircleQuestion size={44} className="text-white" strokeWidth={2.5} />
                {/* Bubble tail */}
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-[#39C95B] rounded-full" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
              </motion.div>
              
              {/* Document/Paper behind */}
              <motion.div 
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-28 h-24 bg-gray-100/80 rounded-xl shadow-sm border border-gray-200 p-3 z-0"
              >
                <div className="w-5 h-5 bg-[#2B4B8B] rounded mb-2"></div>
                <div className="w-full h-1 bg-gray-300 rounded mb-2"></div>
                <div className="w-3/4 h-1 bg-gray-300 rounded mb-2"></div>
                <div className="w-5/6 h-1 bg-gray-300 rounded"></div>
              </motion.div>
            </div>

            {/* Accordion */}
            <div className="flex-1 flex flex-col gap-2">
              {displayFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={faq.id}
                    className={`border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-sm' : 'bg-[#FAFAFA]'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left focus:outline-none group"
                    >
                      <span className={`text-[13px] font-bold pr-4 transition-colors ${isOpen ? 'text-[#1C1D20]' : 'text-[#4A4B4D] group-hover:text-[#1C1D20]'}`}>
                        {faq.question}
                      </span>
                      <div className="shrink-0 text-gray-500 transition-colors group-hover:text-[#1C1D20]">
                        {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-4 pb-4 text-gray-500 text-[13px] leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: CTA Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[400px] shrink-0 bg-gradient-to-br from-[#1CA08A] to-[#127AB2] rounded-3xl p-8 flex flex-col justify-center text-white shadow-lg relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          
          <p className="text-white font-bold text-[10px] uppercase tracking-[0.1em] mb-4 relative z-10 opacity-90">
            READY TO GROW?
          </p>
          <h3 className="text-[26px] font-bold mb-4 leading-tight relative z-10">
            Let's Build Something<br/>Amazing Together!
          </h3>
          <p className="text-white/90 text-[13px] leading-relaxed mb-6 relative z-10 font-medium">
            Get a free consultation and see how we can<br/>help your business grow online.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 mb-6 relative z-10">
            <button className="flex-1 bg-white hover:bg-gray-50 text-[#1CA08A] font-bold text-[12px] py-3 px-3 rounded-md flex items-center justify-center gap-2 transition-all shadow-sm">
              Get Free Consultation
              <ArrowRight size={14} strokeWidth={3} />
            </button>
            <button className="flex-1 bg-transparent hover:bg-white/10 border border-white text-white font-bold text-[12px] py-3 px-3 rounded-md transition-all">
              Schedule a Call
            </button>
          </div>

          <div className="flex items-center gap-2 text-[12px] font-semibold relative z-10 text-white/90">
            <div className="w-3 h-3 rounded-full bg-white/20 flex items-center justify-center shrink-0">
               <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
            <span>or call us now</span>
            <a href="tel:7809042115" className="flex items-center gap-1.5 text-white font-bold hover:underline ml-1">
              <Phone size={14} />
              +91 98765 43210
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceFAQ;
