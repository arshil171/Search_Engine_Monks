import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Activity, Search, MousePointerClick, TrendingUp, ThumbsUp, Target, ArrowRightCircle, FileText, Link2, Share2, BarChart3, Settings, LineChart, Users, Trophy, Network } from "lucide-react";
import serviceData from "../../components/Services/serviceData";
import CTA from "../../components/Contact/CTA";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCounter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      const duration = 2000;
      const incrementTime = 30;
      const steps = duration / incrementTime;
      const step = end / steps;

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.ceil(start));
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundService = serviceData.find((s) => s.slug === slug);
    setService(foundService);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4 w-full">
        <h1 className="text-3xl font-bold text-gray-800">Service Not Found</h1>
        <Link to="/services" className="text-[#F47C20] font-bold hover:underline">
          View All Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="h-[80px] lg:h-[100px]"></div>

      {/* Split Hero Section */}
      <section className="bg-white min-h-[700px] lg:min-h-[600px] py-20 lg:py-32 relative overflow-hidden flex flex-col justify-center">
        <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-[45%] relative z-10 flex flex-col justify-between">


            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex justify-center h-[25px] items-center rounded-xl bg-[#EAF5EF] px-4 py-1.5 mb-6 w-[400px]"
            >
              <span className="text-[12px] font-bold text-[#0E6A4A] tracking-wider uppercase">
                EXPERT {service.title.replace('Services', '').trim()} SOLUTIONS
              </span>
            </motion.div>
            <div className="h-[30px]"></div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[40px] sm:text-[50px] lg:text-[55px] font-extrabold leading-[1.1] tracking-tight mb-6"
            >
              Grow Your Business with <span className="text-[#0E6A4A]">Smart {service.title}</span>
            </motion.h1>
            <div className="h-[20px]"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[18px] text-gray-600 font-medium mb-8 max-w-lg leading-relaxed"
            >
              We help businesses rank higher, drive organic traffic, and convert visitors into customers with result-driven strategies.
            </motion.p>
            <div className="h-[20px]"></div>
            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { text: "Higher Rankings", icon: Search },
                { text: "More Traffic", icon: TrendingUp },
                { text: "Better UX", icon: ThumbsUp }

              ].map((feature, i) => (
                <div key={i} className="flex w-[180px] h-[25px] justify-center items-center gap-2 bg-[#FAFAFA] border border-gray-100 rounded-full px-4 py-2 text-[15px] font-bold text-gray-800 shadow-sm">
                  <feature.icon size={16} className="text-[#0E6A4A]" strokeWidth={2.5} />
                  {feature.text}
                </div>
              ))}
            </motion.div>
            <div className="h-[20px]"></div>
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-14"
            >
              <button className="btn-primary text-base px-6 py-3.5 rounded w-[250px]  shadow-lg shadow-orange-500/25 group flex items-center justify-center">
                Get Started
                <div className="bg-white rounded-full p-1 ml-2 group-hover:scale-110 transition-transform">
                  <ChevronRight size={16} strokeWidth={3} className="text-[#F47C20]" />
                </div>
              </button>
              <Link to="/case-studies" className="w-[250px] h-[50px]  flex items-center justify-center gap-2 bg-white text-[#0E6A4A] font-bold text-base px-6 py-3.5 rounded border-2 border-[#0E6A4A] hover:bg-gray-50 transition-colors group">
                View Case Studies
                <div className="bg-[#0E6A4A] rounded-full p-1  group-hover:scale-110 transition-transform">
                  <ArrowRight size={16} strokeWidth={3} className="text-white" />
                </div>
              </Link>
            </motion.div>
            <div className="h-[20px]"></div>
            {/* Trusted Brands Auto-Slider */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t border-gray-100 max-w-lg overflow-hidden"
            >
              <p className="text-[12px] font-extrabold text-gray-600 uppercase tracking-widest mb-6">Trusted by industry leaders</p>

              <div className="relative w-full flex overflow-hidden">
                <motion.div
                  className="flex items-center gap-10 grayscale hover:grayscale-0 transition-all duration-300 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                >
                  {/* Double the logos to create the infinite scroll effect */}
                  <img src="/images/brands/google.png" alt="Google" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/amazon.png" alt="Amazon" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/shopify.png" alt="Shopify" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/hubspot.png" alt="HubSpot" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/meta.png" alt="Meta" className="h-6 w-auto object-contain" />
                  <img src="/images/brands/wordpress.png" alt="WordPress" className="h-8 w-auto object-contain" />

                  {/* Duplicates */}
                  <img src="/images/brands/google.png" alt="Google" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/amazon.png" alt="Amazon" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/shopify.png" alt="Shopify" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/hubspot.png" alt="HubSpot" className="h-8 w-auto object-contain" />
                  <img src="/images/brands/meta.png" alt="Meta" className="h-6 w-auto object-contain" />
                  <img src="/images/brands/wordpress.png" alt="WordPress" className="h-8 w-auto object-contain" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Animated Graphic */}
          <div className="w-full lg:w-[45%] flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
            >
              {/* Background Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E6F4ED] to-[#F2FAF6] rounded-full blur-3xl opacity-80"></div>

              {/* Main 3D Card */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[85%] h-[75%] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col overflow-hidden"
              >
                {/* Browser-like Header */}
                <div className="w-full h-10 bg-gray-50 flex items-center px-5 gap-2 border-b border-gray-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <div className="ml-4 h-4 w-1/2 bg-white rounded-md border border-gray-100 shadow-inner"></div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 flex flex-col items-center justify-center relative bg-gradient-to-b from-white to-[#FAFAFA]">
                  {/* Dynamic Icon from Service */}
                  <div className="w-24 h-24 rounded-2xl bg-[#0E6A4A]/5 flex items-center justify-center text-[#0E6A4A] mb-8 relative">
                    <div className="absolute inset-0 bg-[#0E6A4A] opacity-10 rounded-2xl blur-md"></div>
                    <Icon size={48} strokeWidth={2} className="relative z-10" />
                  </div>

                  {/* Fake UI Elements */}
                  <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-4"></div>
                  <div className="w-1/2 h-3 bg-gray-100 rounded-full mb-8"></div>

                  <div className="w-full flex items-end gap-3 h-20 px-4">
                    <motion.div animate={{ height: ['40%', '60%', '40%'] }} transition={{ duration: 3, repeat: Infinity }} className="flex-1 bg-green-100 rounded-t-md"></motion.div>
                    <motion.div animate={{ height: ['60%', '80%', '60%'] }} transition={{ duration: 3.5, repeat: Infinity }} className="flex-1 bg-green-200 rounded-t-md"></motion.div>
                    <motion.div animate={{ height: ['30%', '50%', '30%'] }} transition={{ duration: 4, repeat: Infinity }} className="flex-1 bg-green-300 rounded-t-md"></motion.div>
                    <motion.div animate={{ height: ['80%', '100%', '80%'] }} transition={{ duration: 4.5, repeat: Infinity }} className="flex-1 bg-[#0E6A4A] rounded-t-md relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full border-2 border-[#0E6A4A]"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-2 right-2 md:-top-6 md:-right-2 z-20 w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-100 p-3 md:p-4"
              >
                <div className="flex flex-col gap-2 w-full h-full justify-center">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500"><Search size={14} /></div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-800">+42%</span>
                  </div>
                  <div className="w-full h-1 md:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-[70%] h-full bg-blue-500"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-2 left-2 md:-bottom-8 md:-left-4 z-20 w-24 h-24 md:w-28 md:h-28 bg-[#0E6A4A] rounded-full flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(14,106,74,0.3)] border-4 border-white text-white"
              >
                <MousePointerClick size={24} className="mb-1 md:w-7 md:h-7" />
                <span className="text-[10px] md:text-xs font-bold tracking-widest">CLICKS</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-20 sm:py-32 px-5 sm:px-8 lg:px-12 xl:px-16 bg-white flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
        >
          <div className="h-[30px]"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1D20] tracking-tight">
            <div className="h-[30px]"></div>
            Why choose our <span className="text-[#0E6A4A] relative">
              {service.title}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F47C20]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
            </span> solutions?
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed flex flex-col items-center mt-4">
            <p className="max-w-3xl">
              At Search Engine Monks, we take a data-driven, strategic approach to {service.title}.
              Our team of experts works closely with you to understand your unique business goals, target audience,
              and competitive landscape. We don't just deliver generic solutions; we build custom-tailored
              strategies designed to maximize your ROI and drive measurable growth.
            </p>
            <p className="mt-6 max-w-3xl">
              Whether you are looking to increase brand visibility, generate high-quality leads, or scale your
              operations, our cutting-edge methodologies ensure you stay ahead of the curve. By leveraging the
              latest industry tools and proven best practices, we turn your digital presence into a powerful
              engine for success.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Process Section from Screenshot */}
      <section className="w-full py-24 bg-white flex justify-center px-5 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className=" w-full mx-auto flex flex-col items-center">
          <div className="h-[70px]"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[#0E6A4A] font-bold text-[13px] uppercase tracking-widest mb-4">
              OUR PROCESS
            </p>
            <div className="h-[10px]"></div>
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1C1D20] mb-6 tracking-tight">
              Our Proven {service.title.includes('Optimization') ? 'SEO' : service.title} Process
            </h3>
            <div className="h-[10px]"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              A proven strategy to improve your search rankings and grow your business.
            </p>
          </motion.div>
          <div className="h-[60px]"></div>
          {/* Horizontal Timeline */}
          <div className="flex flex-col lg:flex-row items-start justify-between w-full relative pt-4 gap-y-12 lg:gap-y-0">
            {[
              { num: 1, title: "Audit & Research", desc: "We analyze your website, competitors, and market opportunities.", icon: Search },
              { num: 2, title: "On-Page SEO", desc: "Optimize content, keywords, meta tags, and internal structure.", icon: FileText },
              { num: 3, title: "Technical SEO", desc: "Improve site speed, mobile usability, and crawl accessibility.", icon: Link2 },
              { num: 4, title: "Link Building", desc: "Build high-quality backlinks from authoritative websites.", icon: Share2 },
              { num: 5, title: "Content Strategy", desc: "Create valuable, SEO-friendly content that attracts and ranks.", icon: BarChart3 },
              { num: 6, title: "Tracking & Growth", desc: "Monitor performance and continuously optimize for sustainable growth.", icon: Target },
            ].map((step, idx, arr) => (
              <div
                key={idx}
                className="flex flex-1 flex-col items-center text-center relative px-2 w-full lg:w-auto"
                onMouseEnter={() => { setActiveStep(idx); setIsHovered(true); }}
                onMouseLeave={() => setIsHovered(false)}
              >

                {/* Arrow Connector (except last item) */}
                {idx !== arr.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-5 text-[#0E6A4A]/40 z-0 items-center justify-center">
                    <ChevronRight size={24} strokeWidth={2.5} />
                  </div>
                )}

                {/* Icon Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
                  className="relative flex items-center justify-center w-24 h-24 mb-8 cursor-pointer"
                >
                  {/* Outer White Drop Shadow Circle */}
                  <div className={`absolute inset-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full border border-gray-50 transition-transform duration-500 ${activeStep === idx ? 'scale-[1.5]' : 'scale-[1.35]'}`}></div>

                  {/* Inner Green Circle */}
                  <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${activeStep === idx ? 'bg-[#0E6A4A] shadow-[0_0_20px_rgba(14,106,74,0.3)]' : 'bg-[#EAF5EF]'}`}>
                    <step.icon size={28} className={`transition-colors duration-500 ${activeStep === idx ? 'text-white' : 'text-[#0E6A4A]'}`} strokeWidth={2.5} />
                  </div>
                </motion.div>
                <div className="h-[50px]"></div>
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="flex flex-col items-center mt-2"
                >
                  <h4 className={`text-[17px] font-extrabold mb-3 lg:whitespace-nowrap transition-colors ${activeStep === idx ? 'text-[#0E6A4A]' : 'text-[#1C1D20]'}`}>
                    {step.num}. {step.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] leading-relaxed max-w-[210px] font-medium">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="w-full py-24 bg-[#FAFAFA] flex justify-center px-5 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className=" w-full mx-auto flex justify-around flex-col items-center">
          <div className="h-[100px]"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#0E6A4A] font-bold text-[13px] uppercase tracking-widest mb-4">
              OUR SERVICES
            </p>
            <div className="h-[10px]"></div>
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1C1D20] mb-6 tracking-tight">
              Comprehensive {service.title.includes('Optimization') ? 'SEO' : service.title} Services
            </h3>
            <div className="h-[10px]"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
              End-to-end {service.title.includes('Optimization') ? 'SEO' : service.title} solutions tailored to your business goals.
            </p>
            <div className="h-[20px]"></div>
          </motion.div>

          {/* Cards Flex Row */}
          <div className="w-full flex flex-wrap xl:flex-nowrap items-center justify-center gap-6 px-4">
            {[
              { title: "Keyword Research", desc: "Find high-impact keywords that your potential customers are searching for.", icon: Search },
              { title: "On-Page Optimization", desc: "Optimize titles, meta descriptions, content, and headers for better rankings.", icon: FileText },
              { title: "Technical SEO", desc: "Fix technical issues, improve site speed, and ensure search engine accessibility.", icon: Settings },
              { title: "Link Building", desc: "Earn high-quality backlinks that boost your domain authority and rankings.", icon: Link2 },
              { title: "Content Creation", desc: "Create SEO-friendly, engaging content that ranks and converts.", icon: FileText },
              { title: "SEO Analytics", desc: "Track performance with detailed reports and data-driven insights.", icon: LineChart },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[24px] p-6 sm:p-8 min-h-[280px] sm:h-[300px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-around   w-full max-w-[320px] sm:max-w-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-1/6 cursor-pointer group hover:shadow-[0_20px_40px_rgba(14,106,74,0.08)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EAF5EF] flex items-center justify-center mb-6 group-hover:bg-[#0E6A4A] transition-colors duration-300 shrink-0">
                  <card.icon size={24} className="text-[#0E6A4A] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <h4 className="text-[17px] sm:text-[18px] text-center font-extrabold text-[#1C1D20] mb-3 leading-tight group-hover:text-[#0E6A4A] transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-gray-500 text-[13px] sm:text-[14px] text-center leading-relaxed font-medium">
                  {card.desc}
                </p>

              </motion.div>
            ))}
          </div>
          <div className="h-[20px]"></div>
        </div>
        <div className="h-[20px]"></div>
      </section>

      {/* Results / Why Choose Us Section */}
      <section className="w-full py-24 bg-white flex justify-center px-5 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className="w-full mx-auto flex flex-col items-center">
          <div className="h-[50px]"></div>
          {/* Top part: Image left, content right */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-16 lg:gap-24 mb-20">

            {/* Left Image Area (Mockup/Graphic) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 flex items-center justify-center relative"
            >
              <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
                {/* Decorative background blob */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E6F4ED]/80 to-[#F2FAF6]/80 rounded-[40px] transform rotate-3"></div>

                {/* Main Dashboard Mockup */}
                <div className="relative z-10 w-[95%] h-[80%] bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col p-6 overflow-hidden">
                  <div className="w-full flex items-center gap-4 mb-8">
                    <div className="ml-4 px-5 py-2 bg-[#0E6A4A] text-white font-extrabold rounded-lg shadow-lg tracking-wider text-sm sm:text-base lg:text-lg whitespace-nowrap shrink-0">
                      {service.title.includes('Optimization') ? 'SEO' : service.title.split(' ')[0].toUpperCase()}
                    </div>
                    <div className="h-3 flex-1 bg-gray-100 rounded-full"></div>
                    <div className="h-3 w-12 bg-gray-100 rounded-full"></div>
                  </div>

                  <div className="flex-1 w-full flex gap-6">
                    {/* Chart area */}
                    <div className="flex-1 border-b-2 border-l-2 border-gray-100 relative">
                      <motion.svg className="w-full h-full text-[#0E6A4A] drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <motion.path
                          d="M0,80 L15,65 L30,75 L50,45 L70,55 L85,25 L100,10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                        />
                        {[
                          { cx: 15, cy: 65 },
                          { cx: 30, cy: 75 },
                          { cx: 50, cy: 45 },
                          { cx: 70, cy: 55 },
                          { cx: 85, cy: 25 },
                          { cx: 100, cy: 10, pulse: true }
                        ].map((pt, i) => (
                          <motion.circle
                            key={i}
                            cx={pt.cx} cy={pt.cy} r={pt.pulse ? "5" : "4"}
                            fill="#0E6A4A"
                            className={pt.pulse ? "animate-pulse" : ""}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.2, type: "spring" }}
                          />
                        ))}
                      </motion.svg>
                      {/* Grid lines */}
                      <div className="absolute inset-0 w-full h-full border-t border-gray-50 top-1/4"></div>
                      <div className="absolute inset-0 w-full h-full border-t border-gray-50 top-2/4"></div>
                      <div className="absolute inset-0 w-full h-full border-t border-gray-50 top-3/4"></div>
                    </div>

                    {/* Side widgets */}
                    <div className="w-[120px] flex flex-col gap-4">
                      <div className="bg-[#FAFAFA] rounded-xl p-3 flex-1 flex flex-col items-center justify-center border border-gray-100">
                        <div className="w-12 h-12 rounded-full border-4 border-[#0E6A4A] border-r-gray-200 mb-2"></div>
                        <div className="w-10 h-2 bg-gray-200 rounded-full mb-1"></div>
                        <div className="w-14 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="bg-[#FAFAFA] rounded-xl p-3 flex-1 flex items-center justify-center gap-3 border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-orange-100"></div>
                        <div className="flex-1 flex flex-col gap-1">
                          <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                          <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Plant decoration (Abstract) */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-col items-center">
                  <div className="relative w-16 h-20 mb-2">
                    <motion.div animate={{ rotate: [-30, -25, -30] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-20 bg-green-500 rounded-t-[100%] rounded-bl-[100%] origin-bottom shadow-md"></motion.div>
                    <motion.div animate={{ rotate: [30, 25, 30] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-16 bg-green-400 rounded-t-[100%] rounded-br-[100%] origin-bottom shadow-md"></motion.div>
                    <motion.div animate={{ rotate: [0, 3, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-24 bg-green-600 rounded-t-[100%] rounded-b-[10px] origin-bottom shadow-md"></motion.div>
                  </div>
                  <div className="w-16 h-12 bg-white rounded-b-2xl rounded-t-sm shadow-lg border border-gray-100"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <p className="text-[#0E6A4A] font-extrabold text-[12px] sm:text-[13px] uppercase tracking-widest mb-4">
                  WHY CHOOSE US
                </p>
                <div className="h-[10px]"></div>
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1C1D20] mb-6 tracking-tight leading-[1.15]">
                  Results That Drive Your Business Forward
                </h3>
                <div className="h-[10px]"></div>
                <p className="text-gray-600 text-lg sm:text-[19px] mb-12 font-medium max-w-lg">
                  We don't just bring traffic—we bring the right traffic that converts.
                </p>
              </motion.div>
              <div className="h-[10px]"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                {[
                  { title: "Data-Driven Strategy", desc: "We use analytics and industry insights to create strategies that deliver measurable results.", icon: Network },
                  { title: "White-Hat Techniques", desc: "Ethical SEO practices that ensure long-term growth and avoid penalties.", icon: TrendingUp },
                  { title: "Experienced Team", desc: "Our SEO experts have years of experience across industries and markets.", icon: Link2 },
                  { title: "Transparent Reporting", desc: "Clear, easy-to-understand reports so you always know how we're performing.", icon: FileText },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col gap-3 group items-center lg:items-start text-center lg:text-left"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#EAF5EF] flex items-center justify-center text-[#0E6A4A] group-hover:bg-[#0E6A4A] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <item.icon size={26} strokeWidth={2.5} />
                    </div>
                    <h5 className="text-[18px] font-extrabold text-[#1C1D20] mt-2 group-hover:text-[#0E6A4A] transition-colors">{item.title}</h5>
                    <p className="text-gray-500 text-[14px] leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
          <div className="h-[70px]"></div>
          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-auto lg:h-[120px] bg-[#FAFAFA] rounded-2xl py-10 px-6 sm:px-10 lg:py-0 border border-gray-100 flex flex-wrap justify-center lg:justify-around items-center gap-10 lg:gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            {[
              { num: 250, suffix: "+", label: "Happy Clients", icon: Users },
              { num: 500, suffix: "+", label: "Projects Completed", icon: BarChart3 },
              { num: 95, suffix: "%", label: "Client Retention", icon: Trophy },
              { num: 300, suffix: "%", label: "Average Traffic Growth", icon: Target },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col justify-around sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 flex-1 min-w-[200px] group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#0E6A4A] group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(14,106,74,0.15)] transition-all duration-300">
                  <stat.icon size={30} strokeWidth={2} />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[28px] lg:text-[32px] font-extrabold text-[#0E6A4A] tracking-tight leading-none mb-1">
                    <AnimatedCounter value={stat.num} suffix={stat.suffix} />
                  </span>
                  <span className="text-gray-500 text-[14px] lg:text-[15px] font-medium">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      <div className="h-[50px]"></div>
      {/* New Process Section */}
      <section className="w-full py-24 bg-gray-50 flex justify-center px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="h-[50px]"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Our Proven Process</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We follow a strategic, step-by-step methodology to ensure your {service.title} campaign yields the best possible results.</p>
          </motion.div>
          <div className="h-[50px]"></div>

          <div className="grid h-auto grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: "Discovery & Strategy", desc: "We analyze your business, competitors, and audience to craft a tailored blueprint.", delay: 0.1 },
              { title: "Execution & Optimization", desc: "Our experts implement the strategy using cutting-edge tools and continuously refine it.", delay: 0.3 },
              { title: "Growth & Scaling", desc: "We monitor data closely and scale up the most successful channels to maximize your ROI.", delay: 0.5 },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                whileHover={{ y: -10 }}
                className="bg-white h-[300px] rounded-3xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Animated Rings Container */}
                <div className="relative mb-8 flex items-center justify-center w-28 h-28">
                  {/* Outer rotating dashed ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-[#0E6A4A]/30 group-hover:border-[#F47C20]/50 transition-colors duration-500"
                  />

                  {/* Inner pulsing ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    className="absolute inset-3 rounded-full bg-[#0E6A4A]/10 group-hover:bg-[#F47C20]/20 transition-colors duration-500"
                  />

                  {/* Core Number Circle */}
                  <div className="w-16 h-16 relative z-10 rounded-full bg-white border border-gray-100 shadow-md text-[#0E6A4A] flex items-center justify-center text-3xl font-black group-hover:bg-[#0E6A4A] group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(14,106,74,0.4)] group-hover:scale-110">
                    {idx + 1}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0E6A4A] transition-colors duration-300">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-[50px]"></div>
      </section>

      {/* Call To Action */}
      <CTA />

    </main>
  );
};

export default ServiceDetail;
