import { Search, TrendingUp, BadgeCheck, BarChart3, Zap } from "lucide-react";

const FloatingCards = () => {
  return (
    <>
      {/* SEO Score - Top Left */}
      {/* SEO Score - Top Left */}
      <div className="hidden w-[150px] md:flex absolute top-[8%] -left-6 xl:-left-14 glass-card rounded shadow-xl p-3.5 items-center gap-3 z-20 animate-float">
        <div className="w-11 h-11 rounded bg-gradient-to-br from-[#0E6A4A] to-[#1a9c6e] flex items-center justify-center shadow-md">
          <Search className="text-white w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">SEO Score</p>
          <h3 className="text-xl font-extrabold text-[#0E6A4A]">98%</h3>
        </div>
      </div>

      {/* Google Partner - Top Right */}
      <div className="hidden w-[150px] xl:flex absolute top-[5%] -right-2 xl:-right-2 glass-card rounded shadow-xl p-3.5 items-center gap-3 z-20 animate-float-delayed">
        <div className="w-11 h-11 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
          <BadgeCheck className="text-white w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Google Partner</p>
          <h3 className="text-sm font-extrabold text-gray-800">Certified ✓</h3>
        </div>
      </div>

      {/* Leads - Bottom Left */}
      {/* Leads - Bottom Left */}
      <div className="hidden w-[150px] md:flex absolute bottom-[22%] -left-4 xl:-left-14 glass-card rounded shadow-xl p-3.5 items-center gap-3 z-20 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-11 h-11 rounded bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-md">
          <BarChart3 className="text-white w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Leads Generated</p>
          <h3 className="text-xl font-extrabold text-gray-800">18K+</h3>
        </div>
      </div>

      {/* Monthly Growth - Bottom Right */}
      <div className="hidden w-[150px] lg:flex absolute -bottom-2 -right-2 xl:-right-2 glass-card rounded shadow-xl p-3.5 items-center gap-3 z-20 animate-float-delayed" style={{ animationDelay: "0.5s" }}>
        <div className="w-11 h-11 rounded bg-gradient-to-br from-[#F47C20] to-[#e86910] flex items-center justify-center shadow-md">
          <TrendingUp className="text-white w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Monthly Growth</p>
          <h3 className="text-xl font-extrabold text-gray-800">+240%</h3>
        </div>
      </div>

      {/* Live Pulse - Middle Right */}
      {/* Live Pulse - Middle Right */}
      <div className="hidden w-[150px] h-[20px] xl:flex absolute top-[45%] -right-2 xl:-right-4 glass-card rounded shadow-lg p-3 items-center gap-3 z-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="relative w-3 h-3">
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          <span className="relative block w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-xs font-bold text-gray-700 whitespace-nowrap">Live Campaigns</p>
      </div>
    </>
  );
};

export default FloatingCards;
