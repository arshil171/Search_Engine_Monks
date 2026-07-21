import PortfolioCard from "./PortfolioCard";
import portfolioData from "./portfolioData";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#fafcfb] py-20 pb-32 lg:py-24 lg:pb-40 overflow-hidden">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* ================= Heading ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16 flex flex-col items-center"
        >
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1E293B] leading-tight">
            Our Recent Projects
          </h2>
          <div className="w-10 h-1.5 rounded-full bg-[#0E6A4A] mt-4 opacity-90" />
        </motion.div>

        <div className="w-[100px] h-[50px] bg-transparent"></div>

        {/* ================= Cards Grid ================= */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="w-full mx-auto flex flex-wrap justify-around gap-y-8 gap-x-2"
        >
          {portfolioData.map((project, index) => (
            <motion.div 
              key={project.id}
              className="w-full md:w-[48%] lg:w-[23%]"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <PortfolioCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      <div className="w-[100px] h-[50px] bg-transparent"></div>
        {/* ================= Bottom CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16 sm:mt-20"
        >
          <button
            className="group bg-[#0E6A4A] h-[50px] w-[220px] hover:bg-[#09563C] text-white font-bold text-base md:text-lg rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            View All Projects
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1.5">
              <ChevronRight
                size={18}
                strokeWidth={3}
                className="text-[#0E6A4A]"
              />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
