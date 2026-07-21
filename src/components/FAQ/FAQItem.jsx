import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        rounded-xl sm:rounded-2xl
        border
        transition-all duration-300 ease-in-out
        ${isOpen 
          ? "border-[#0E6A4A] bg-[#F6FDF9] shadow-md" 
          : "border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200"
        }
      `}
    >
      {/* Question Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 lg:p-6 text-left"
      >
        <span
          className={`
            text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-300
            ${isOpen ? "text-[#0E6A4A]" : "text-[#101828]"}
          `}
        >
          {faq.question}
        </span>

        <div
          className={`
            shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center
            transition-all duration-300
            ${isOpen 
              ? "bg-[#0E6A4A] text-white rotate-0" 
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }
          `}
        >
          {isOpen ? (
            <Minus size={16} className="sm:w-[18px] sm:h-[18px]" />
          ) : (
            <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
          )}
        </div>
      </button>

      {/* Answer Content */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
          <div className="w-full h-px bg-gray-100 mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;