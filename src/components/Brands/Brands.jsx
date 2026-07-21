import { useState, useEffect, useRef } from "react";

const Counter = ({ end, duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    let observer;

    const startAnimation = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out function for smooth finish
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(startAnimation);
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(startAnimation);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const logos = [
  { name: "Google", image: "/images/brands/google.png" },
  { name: "HubSpot", image: "/images/brands/hubspot.png" },
  { name: "Meta", image: "/images/brands/meta.png" },
  { name: "WordPress", image: "/images/brands/wordpress.png" },
  { name: "Shopify", image: "/images/brands/shopify.png" },
  { name: "Amazon", image: "/images/brands/amazon.png" },
];

// Duplicate for seamless marquee
const allLogos = [...logos, ...logos];

const Brands = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8FFFE] to-white section-padding overflow-hidden">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
          <span className="section-badge mb-4">
            Trusted Worldwide
          </span>
          <div className="h-[20px]"></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1A12] leading-tight">
            Trusted By Amazing{" "}
            <span className="gradient-text">Brands</span>
          </h2>
           <div className="h-[20px]"></div>
          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
            Helping businesses grow through SEO, PPC, Website Development and
            Digital Marketing solutions that deliver measurable results.
          </p>
           <div className="h-[20px]"></div>
        </div>

      </div>

      {/* Marquee Track */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 sm:gap-8 animate-marquee" style={{ width: "max-content" }}>
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="w-[160px] sm:w-[180px] md:w-[200px] h-[100px] sm:h-[110px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center flex-shrink-0 group cursor-pointer"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-10 sm:max-h-12 max-w-[120px] sm:max-w-[140px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
              />
            </div>
          ))}
        </div>
      </div>
        <div className="h-[20px]"></div>
      {/* Bottom Stats Bar */}
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 mt-18 lg:mt-20 pb-16 lg:pb-24">
        
        <div className="w-full flex flex-wrap justify-around gap-y-6 gap-x-2">
          {[
            { prefix: "", end: 350, suffix: "%", label: "Avg. Traffic Growth" },
            { prefix: "", end: 15, suffix: "M+", label: "Keywords Ranked" },
            { prefix: "", end: 98, suffix: "%", label: "Client Retention" },
            { prefix: "$", end: 140, suffix: "M+", label: "Revenue Generated" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[48%] lg:w-[23%] text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#0E6A4A]/20 transition-all duration-300 group"
            >
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0E6A4A] group-hover:scale-105 inline-block transition-transform duration-300">
                {stat.prefix}
                <Counter end={stat.end} duration={2.5} />
                {stat.suffix}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-gray-500 font-semibold tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
