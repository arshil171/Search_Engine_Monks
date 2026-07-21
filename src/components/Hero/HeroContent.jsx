import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Stats from "./Stats";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col justify-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF8F2] text-[#0E6A4A] px-4 py-2 text-sm font-semibold w-max mb-6">
        <CheckCircle2 size={16} />
        Trusted Digital Marketing Agency
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101828] leading-[1.1]">
        Search Engine
        <span className="block text-[#0E6A4A] my-2">
          Marketing
        </span>
        <span className="block">
          That Drives Revenue
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-xl">
        We help businesses dominate Google Search with SEO,
        Google Ads, Local SEO, Content Marketing and
        high-converting websites that generate qualified leads
        and long-term revenue.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <button className="w-full sm:w-[200px] h-12 bg-[#F47C20] hover:bg-[#e86f10] transition-all duration-300 rounded-lg text-white font-semibold flex items-center justify-center gap-2">
          Get Started
          <ArrowRight size={18} />
        </button>

        <button className="w-full sm:w-auto border-2 border-gray-200 rounded-lg px-6 py-3 font-semibold text-gray-700 hover:border-[#0E6A4A] hover:text-[#0E6A4A] transition">
          Book Consultation
        </button>
      </div>

      {/* Reviews */}
      <div className="mt-8 flex flex-wrap items-center gap-2 text-sm sm:text-base">
        <div className="flex text-yellow-400">
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
          <Star fill="currentColor" size={18} />
        </div>

        <p className="text-gray-600">
          Rated <span className="font-bold text-black">4.9/5</span> by{" "}
          <span className="font-bold">500+</span> happy clients
        </p>
      </div>

      {/* Stats */}
      <div className="mt-12">
        <Stats />
      </div>

    </div>
  );
};

export default HeroContent;