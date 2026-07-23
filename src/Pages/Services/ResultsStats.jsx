import { ArrowRight, Clock, ThumbsUp, Trophy, Users } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2500,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, springValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

const stats = [
  { num: 150, suffix: "+", label: "Projects Delivered", icon: Trophy },
  { num: 120, suffix: "+", label: "Happy Clients", icon: Users },
  { num: 5, suffix: "+", label: "Years Experience", icon: Clock },
  { num: 98, suffix: "%", label: "Client Retention Rate", icon: ThumbsUp },
];

const studies = [
  {
    title: "E-Commerce SEO Growth",
    result: 148,
    prefix: "+",
    suffix: "%",
    label: "Organic traffic",
    color: "#0E6A4A",
    bars: [22, 32, 27, 52, 72, 100],
  },
  {
    title: "Google Ads Campaign",
    result: 210,
    prefix: "+",
    suffix: "%",
    label: "Conversions",
    color: "#4187FF",
    bars: [30, 48, 40, 70, 92],
  },
  {
    title: "Website Redesign",
    result: 160,
    prefix: "+",
    suffix: "%",
    label: "User engagement",
    color: "#E8751A",
    bars: [30, 40, 35, 60, 82, 100],
  },
];

const ResultsStats = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const statsY = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="relative mx-auto  w-full px-4 sm:px-8 lg:px-16">
        <div className="h-[30px]"></div>
        <motion.div style={{ y: statsY }} className="mb-20 sm:mb-24">
          <div className="flex w-full flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-around overflow-hidden rounded-2xl bg-[#0E6A4A] text-white shadow-[0_20px_45px_rgba(14,106,74,0.18)]">
          
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="flex-1 w-full min-h-[200px] sm:h-auto sm:w-1/2 lg:w-1/4 group flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 border-b border-white/15 px-5 py-10 lg:py-12 last:border-b-0 sm:px-7 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(-n+2)]:border-b sm:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:[&:nth-child(odd)]:border-r lg:last:border-r-0"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 bg-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10">
                    <Icon size={23} strokeWidth={2.2} />
                  </span>
                  
                  <div className="text-center sm:text-left">
                    <p className="text-3xl font-extrabold leading-none tracking-tight">
                      <Counter value={stat.num} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/80">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
           <div className="h-[50px]"></div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="w-full  flex flex-col items-center mb-11 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0E6A4A]">Our recent work</p>
          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#1C1D20] sm:text-5xl">
            Delivering real <span className="text-[#0E6A4A]">results.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            We help ambitious brands grow with data-driven strategy and high-performing digital experiences.
          </p>
        </motion.div>
       <div className="h-[50px]"></div>
        <div className="flex flex-col md:flex-row flex-wrap gap-5 lg:gap-6 justify-around">
          {studies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="flex flex-col h-[200px] sm:h-auto min-h-[200px] items-center justify-center text-center w-full md:w-[calc(33.333%-1.25rem)] min-w-[300px] group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.045)] transition-all duration-300 hover:shadow-[0_22px_40px_rgba(15,23,42,0.1)] sm:p-7"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: study.color }}
              />
              <span className="absolute inset-x-0 top-0 h-[6px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: study.color }} />
              <h3 className="text-sm font-bold text-[#1C1D20] relative z-10">{study.title}</h3>
              <p className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight relative z-10 transition-transform duration-300 group-hover:scale-105" style={{ color: study.color }}>
                <Counter value={study.result} prefix={study.prefix} suffix={study.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-500 relative z-10 group-hover:text-slate-700 transition-colors">{study.label}</p>
              <div className="mt-8 flex h-20 w-full justify-center items-end gap-2 relative z-10" aria-label={`${study.result} ${study.label}`}>
                {study.bars.map((height, barIndex) => (
                  <motion.span
                    key={barIndex}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.18 + barIndex * 0.08 }}
                    className="min-w-0 flex-1 rounded-t-md transition-all duration-300 group-hover:brightness-110"
                    style={{ backgroundColor: barIndex < study.bars.length - 3 ? "#E9EDF0" : study.color, opacity: barIndex < study.bars.length - 3 ? 1 : 0.3 + (barIndex - (study.bars.length - 3)) * 0.3 }}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
         <div className="h-[50px]"></div>
        <div className="mt-15  flex justify-center">
          <motion.a
            href="/case-studies"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group w-[300px] h-[50px] inline-flex items-center justify-center gap-2 rounded-full bg-[#0E6A4A] px-7 py-3.5 text-sm font-bold !text-white shadow-[0_10px_22px_rgba(14,106,74,0.24)] transition-colors hover:bg-[#09573c] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0E6A4A]/25"
          >
            <span className="text-white">View all case studies</span>
            <ArrowRight size={18} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ResultsStats;
