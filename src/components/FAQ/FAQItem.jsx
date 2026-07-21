import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-400 ease-in-out ${
        isOpen
          ? "border-[#0E6A4A]/40 bg-[#F6FDF9] shadow-md"
          : "border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#0E6A4A]/30"
      }`}
    >
      {/* Background Hover Shade */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#0E6A4A]/5 to-transparent opacity-0 transition-opacity duration-400 pointer-events-none ${isOpen ? "opacity-100" : "group-hover:opacity-100"}`} />

      {/* Question Header */}
      <button
        onClick={onToggle}
        className="relative z-10 w-full flex items-center justify-between gap-4 p-5 sm:p-7 text-left"
      >
        <div className="flex items-center gap-4 flex-grow">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400 ${
            isOpen ? "bg-[#0E6A4A] shadow-md" : "bg-gray-100 group-hover:bg-[#D1DBD3] group-hover:shadow-sm"
          }`}>
            <HelpCircle size={18} className={`transition-colors duration-400 ${isOpen ? "text-white" : "text-gray-400 group-hover:text-[#0E6A4A]"}`} />
          </div>
          <span className={`flex-grow text-center text-base sm:text-lg font-bold transition-colors duration-400 leading-snug ${
            isOpen ? "text-[#0E6A4A]" : "text-[#0D1A12] group-hover:text-[#0E6A4A]"
          }`}>
            {faq.question}
          </span>
        </div>

        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
          isOpen
            ? "bg-[#0E6A4A] text-white rotate-0 shadow-md"
            : "bg-gray-50 text-gray-400 group-hover:bg-[#D1DBD3] group-hover:text-[#0E6A4A]"
        }`}>
          {isOpen ? (
            <Minus size={18} />
          ) : (
            <Plus size={18} />
          )}
        </div>
      </button>

      {/* Answer Content */}
      <div className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-[400px] opacity-100 mb-2" : "max-h-0 opacity-0"
      }`}>
        <div className="px-5 sm:px-7 pb-6 sm:pb-7">
          <div className="ml-14 pl-0">
            <div className="w-full h-px bg-gradient-to-r from-[#0E6A4A]/20 to-transparent mb-5" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
