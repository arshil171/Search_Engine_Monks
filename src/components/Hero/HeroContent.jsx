import { ArrowRight, ChevronRight, Search, Layout, Megaphone, Share2 } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col justify-center py-4 text-left gap-8 lg:gap-10">
         <div className="h-[7px]"></div>
      {/* Animated Badge */}
      <div className="flex items-center gap-2">
        <div className="section-badge animate-fade-in-up shadow-sm">
          DIGITAL MARKETING & AI SOLUTIONS
        </div>
      </div>

      {/* Heading */}
      <h1
        className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight leading-[1.15] animate-fade-in-up text-[#0D1A12]"
        style={{ animationDelay: "0.1s" }}
      >
        Grow Your Business with <br className="hidden lg:block" />
        Smart <span className="text-[#0E6A4A]">Digital Marketing &</span>
        <span className="block text-[#0E6A4A]">AI Solutions</span>
      </h1>

      {/* Description */}
      <p
        className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-[540px] font-medium animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        We help businesses increase leads, boost sales, and dominate search engines with result-driven strategies.
      </p>

      {/* Service Tags */}
      <div
        className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        {[
          { icon: Search, label: "SEO" },
          { icon: Layout, label: "Web Development" },
          { icon: Megaphone, label: "Google Ads" },
          { icon: Share2, label: "Meta Ads" },
        ].map((service, idx) => (
          <div key={idx} className="flex w-fit items-center justify-center gap-2 bg-[#F8F9FA] px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl border border-gray-100 text-sm sm:text-base font-bold text-gray-700 hover:shadow-sm hover:border-gray-200 transition-all duration-300">
            <service.icon size={18} strokeWidth={2.5} className="text-[#0E6A4A]" />
            {service.label}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <button className="btn-primary text-base px-6 py-3.5 rounded-xl w-full sm:w-auto shadow-lg shadow-orange-500/25 group">
          Book Free Consultation
          <div className="bg-white rounded-full p-1 ml-1 group-hover:scale-110 transition-transform">
            <ChevronRight size={16} className="text-[#F47C20]" strokeWidth={3} />
          </div>
        </button>

        <button className="btn-secondary text-base px-6 py-3.5 rounded-xl w-full sm:w-auto group bg-white hover:bg-gray-50 border-gray-300 text-gray-700 hover:text-[#0E6A4A] hover:border-[#0E6A4A] shadow-sm">
          View Our Services
          <div className="bg-[#0E6A4A] text-white rounded-full p-1 ml-1 group-hover:scale-110 transition-transform">
            <ChevronRight size={16} strokeWidth={3} />
          </div>
        </button>
      </div>

    </div>
  );
};

export default HeroContent;
