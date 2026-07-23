import { Lightbulb, Target, PenTool, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "We understand your business, goals and target audience.",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We create a customized strategy designed to achieve real results.",
    icon: Target,
  },
  {
    num: "03",
    title: "Design & Plan",
    desc: "We design, plan and prepare everything for a successful launch.",
    icon: PenTool,
  },
  {
    num: "04",
    title: "Develop & Execute",
    desc: "Our team develops and executes with precision and best practices.",
    icon: Code2,
  },
  {
    num: "05",
    title: "Launch & Grow",
    desc: "We launch, monitor and optimize to ensure continuous growth.",
    icon: Rocket,
  }
];

const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="h-[70px]"></div>
      <div className=" w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 text-center">
        
        {/* Header */}
        <div className="mb-20">
          <p className="text-[#0E6A4A] font-bold text-sm uppercase tracking-widest mb-3">
            OUR PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1C1D20] mb-4">
            Our Proven <span className="text-[#0E6A4A]">Process</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A simple, transparent and result-driven approach.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-6 z-10">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-[70px]"></div>
                {/* Step Number Bubble (Using flex and box-shadow for pulsing instead of absolute) */}
                <div className="w-8 h-8 rounded-full bg-[#0E6A4A] text-white flex items-center justify-center text-sm font-bold mb-6 shadow-[0_0_0_0_rgba(14,106,74,0.7)] animate-[pulse-ring_2s_infinite]">
                  {step.num}
                </div>
                <div className="h-[40px]"></div>
                {/* Icon Container with Animated Rings */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Outer rotating dashed ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 group-hover:-inset-1.5 rounded-full border-[1.5px] border-dashed border-[#0E6A4A]/20 group-hover:border-[#0E6A4A]/60 transition-all duration-300"
                  />
                  
                  {/* Inner pulsing ring */}
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="absolute inset-2 group-hover:inset-1 rounded-full bg-[#0E6A4A]/5 group-hover:bg-[#0E6A4A]/15 transition-all duration-300"
                  />
                  
                  {/* Core Icon Circle */}
                  <div className="w-24 h-24 relative z-10 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-[#0E6A4A] group-hover:shadow-[0_0_20px_rgba(14,106,74,0.15)] group-hover:scale-105">
                    <Icon size={40} className="text-[#4187FF] group-hover:text-[#0E6A4A] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1C1D20] mb-3 group-hover:text-[#0E6A4A] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
