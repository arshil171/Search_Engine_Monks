import {
  ArrowRight,
  CheckSquare,
  Clock,
  LineChart,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Search,
  Target,
  Activity,
  Megaphone,
  Rocket,
  PieChart,
  TrendingUp,
  MousePointer2
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicesHero = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: CheckSquare },
    { number: "5+", label: "Years Experience", icon: LineChart },
    { number: "100%", label: "Client Satisfaction", icon: ShieldCheck },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section ref={heroRef} className="relative isolate overflow-hidden  pt-[112px] sm:pt-[128px] lg:pt-[144px]">
      <style>
        {`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          .orbit-ring-1 {
            animation: orbit 24s linear infinite;
          }
          .orbit-ring-2 {
            animation: orbit-reverse 18s linear infinite;
          }
          .orbit-icon-1 {
            animation: orbit-reverse 24s linear infinite;
          }
          .orbit-icon-2 {
            animation: orbit 18s linear infinite;
          }
        `}
      </style>
      {/* Background decoration with Parallax */}
      <motion.div style={{ y: parallaxY1, opacity: opacityFade }} className="pointer-events-none absolute -left-24 top-44 h-72 w-72 rounded-full border border-[#0E6A4A]/10" />
      <motion.div style={{ y: parallaxY2, opacity: opacityFade }} className="pointer-events-none absolute -right-28 top-20 h-[34rem] w-[34rem] rounded-full bg-[#0E6A4A]/5 blur-3xl" />

      <div className="flex-grow w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-16 pb-24 lg:pb-32 pt-24 sm:pt-32 w-full">
          {/* Left content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-[45%] flex flex-col justify-center gap-6 text-left sm:gap-7 lg:gap-8 relative z-10"
          >
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="inline-flex w-[300px] h-[30px] rounded-full items-center justify-center gap-2  border border-[#0E6A4A]/15 bg-[#0E6A4A]/5 px-4 py-2 text-xs font-extrabold tracking-[0.08em] text-[#0E6A4A] shadow-sm sm:px-5">
                <Sparkles size={14} />
                OUR SERVICES
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[42px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#1C1D20] sm:text-5xl lg:text-[56px] xl:text-[64px]"
            >
              Digital Services That Drive Real{" "}
              <span className="text-[#0E6A4A]">Growth</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[560px] text-base font-medium leading-7 text-gray-700 sm:text-lg sm:leading-8"
            >
              We help businesses rank higher,{" "}
              <span className="font-semibold text-[#E87A24]">
                grow faster and convert
              </span>{" "}
              visitors into customers with result-driven digital solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base px-6 py-3.5 rounded-xl w-full sm:w-auto shadow-lg shadow-orange-500/25 group transition-transform hover:-translate-y-1 duration-300"
              >
                Book Free Consultation
                <div className="bg-white rounded-full p-1 ml-1 group-hover:scale-110 transition-transform">
                  <ChevronRight size={16} className="text-[#F47C20]" strokeWidth={3} />
                </div>
              </button>

              <button className="btn-secondary text-base px-6 py-3.5 rounded-xl w-full sm:w-auto group bg-white hover:bg-gray-50 border-gray-300 text-gray-700 hover:text-[#0E6A4A] hover:border-[#0E6A4A] shadow-sm transition-transform hover:-translate-y-1 duration-300">
                View Our Services
                <div className="bg-[#0E6A4A] text-white rounded-full p-1 ml-1 group-hover:scale-110 transition-transform">
                  <ChevronRight size={16} strokeWidth={3} />
                </div>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex w-full max-w-[600px] flex-wrap items-center gap-x-5 gap-y-4 pt-2 sm:gap-x-6">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <motion.div 
                    key={stat.label} 
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon size={20} className="text-[#0E6A4A] transition-colors duration-300 group-hover:text-[#E87A24]" />

                    <div className="flex flex-col">
                      <span className="text-base font-extrabold leading-none text-[#1C1D20]">
                        {stat.number}
                      </span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-[11px]">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
            <div className="h-[50px]"></div>
          {/* Right Monks Hero Image Area with Parallax and Orbiting Rings */}
          <motion.div
            style={{ y: parallaxY2, opacity: opacityFade }}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end mt-12 lg:mt-0 px-4 sm:px-8 lg:px-0"
          >
            <div className="relative flex items-center justify-center w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] aspect-square">
              
              {/* Inner Glow Background */}
              <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-[#D1DBD3]/60 to-[#d4f2e4]/40 blur-3xl" />

              {/* Outer Decorative Ring 1 */}
              <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-[#0E6A4A]/25 orbit-ring-1">
                 {/* Top */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg border border-gray-100 orbit-icon-1 text-[#0E6A4A]">
                   <Search size={24} strokeWidth={2.5}/>
                 </div>
                 {/* Bottom */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg border border-gray-100 orbit-icon-1 text-[#E87A24]">
                   <Target size={24} strokeWidth={2.5}/>
                 </div>
                 {/* Left */}
                 <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg border border-gray-100 orbit-icon-1 text-[#0E6A4A]">
                   <Rocket size={24} strokeWidth={2.5}/>
                 </div>
                 {/* Right */}
                 <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg border border-gray-100 orbit-icon-1 text-[#E87A24]">
                   <PieChart size={24} strokeWidth={2.5}/>
                 </div>
              </div>

              {/* Inner Decorative Ring 2 */}
              <div className="absolute inset-[13%] rounded-full border border-[#0E6A4A]/15 orbit-ring-2">
                 {/* Left */}
                 <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(14,106,74,0.12)] border border-gray-50 orbit-icon-2 text-[#0E6A4A]">
                   <LineChart size={20} strokeWidth={2.5}/>
                 </div>
                 {/* Right */}
                 <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(14,106,74,0.12)] border border-gray-50 orbit-icon-2 text-[#E87A24]">
                   <Megaphone size={20} strokeWidth={2.5}/>
                 </div>
                 {/* Top */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(14,106,74,0.12)] border border-gray-50 orbit-icon-2 text-[#0E6A4A]">
                   <TrendingUp size={20} strokeWidth={2.5}/>
                 </div>
                 {/* Bottom */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(14,106,74,0.12)] border border-gray-50 orbit-icon-2 text-[#E87A24]">
                   <MousePointer2 size={20} strokeWidth={2.5}/>
                 </div>
              </div>

              {/* Main Circular Image */}
              <div className="relative z-10 w-[60%] aspect-square rounded-full overflow-hidden bg-white shadow-[0_30px_60px_rgba(14,106,74,0.15)] border-[6px] border-white flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src="/images/services/monk_seo_dashboard_green.png"
                  alt="Digital marketing services dashboard and performance analytics"
                  className="w-full h-full object-cover object-center animate-[float_6s_ease-in-out_infinite]"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;