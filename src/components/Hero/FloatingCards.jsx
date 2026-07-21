import { Search, TrendingUp, BadgeCheck, BarChart3 } from "lucide-react";

const FloatingCards = () => {
  return (
    <>
      {/* SEO Score */}
      <div className="hidden lg:flex absolute top-[10%] -left-4 xl:-left-8 bg-white rounded-xl shadow-lg border border-gray-50 p-3 items-center gap-3 z-20 animate-bounce-slow">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <Search className="text-[#0E6A4A] w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">SEO Score</p>
          <h3 className="text-lg font-bold text-[#0E6A4A]">98%</h3>
        </div>
      </div>

      {/* Google Partner */}
      <div className="hidden xl:flex absolute top-[5%] -right-4 bg-white rounded-xl shadow-lg border border-gray-50 p-3 items-center gap-3 z-20">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <BadgeCheck className="text-blue-600 w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Google Partner</p>
          <h3 className="text-sm font-bold">Certified</h3>
        </div>
      </div>

      {/* Leads */}
      <div className="hidden md:flex absolute bottom-[25%] -left-2 xl:-left-12 bg-white rounded-xl shadow-lg border border-gray-50 p-3 items-center gap-3 z-20">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <BarChart3 className="text-indigo-600 w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Leads</p>
          <h3 className="text-lg font-bold">18K+</h3>
        </div>
      </div>

      {/* Monthly Growth */}
      <div className="hidden lg:flex absolute bottom-[10%] -right-4 xl:-right-10 bg-white rounded-xl shadow-lg border border-gray-50 p-3 items-center gap-3 z-20">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          <TrendingUp className="text-[#F47C20] w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">Monthly Growth</p>
          <h3 className="text-lg font-bold">+240%</h3>
        </div>
      </div>
    </>
  );
};

export default FloatingCards;