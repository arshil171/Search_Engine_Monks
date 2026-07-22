import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import portfolioData from "./portfolioData";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web App", "Mobile", "SaaS", "AI & ML", "Cloud", "UI/UX"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative w-full bg-white py-20 pb-32 lg:py-24 lg:pb-40 overflow-hidden">
      <div className="w-full  mx-auto px-6 sm:px-10 lg:px-16 flex flex-col">
        <div className="h-[20px]"></div>
        {/* ================= Heading ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12 flex flex-col items-center"
        >
          <div className="h-[20px]"></div>
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="w-3 h-3 bg-[#0E6A4A] rounded-sm" />
            <span className="text-gray-600 font-bold text-sm tracking-wide uppercase">See all Projects</span>
          </div>
          <div className="h-[20px]"></div>
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1E293B] leading-tight">
            Discover Our Completed Projects
          </h2>
          
          <div className="w-12 h-1.5 rounded-full bg-[#0E6A4A] mt-5 opacity-90" />
          <div className="h-[20px]"></div>
        </motion.div>

        {/* ================= Filters ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex  flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16"
        >
          <div className="h-[20px]"></div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 w-[100px] h-[30px] sm:px-6 py-2.5 flex items-center justify-center rounded-lg text-[13px] sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#0E6A4A] text-white shadow-md"
                  : "bg-gray-100/80 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      <div className="h-[30px]"></div>
        {/* ================= Cards Grid ================= */}
        <motion.div layout className="w-full mx-auto flex flex-wrap justify-around gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <PortfolioCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
