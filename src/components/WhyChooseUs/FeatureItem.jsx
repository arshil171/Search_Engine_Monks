import { CheckCircle } from "lucide-react";

const FeatureItem = ({ feature }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="shrink-0">
        <CheckCircle
          size={20}
          className="text-[#0E6A4A] sm:w-6 sm:h-6"
          strokeWidth={2.5}
        />
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
        {feature.title}
      </p>
    </div>
  );
};

export default FeatureItem;