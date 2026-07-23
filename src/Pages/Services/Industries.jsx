import { 
  ShoppingCart, 
  Activity, 
  GraduationCap, 
  Building2, 
  Plane, 
  LineChart, 
  Utensils, 
  Factory, 
  Rocket, 
  LayoutGrid 
} from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Activity },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Finance", icon: LineChart },
  { name: "Restaurant", icon: Utensils, active: true }, // The mockup shows restaurant as active/red text
  { name: "Manufacturing", icon: Factory },
  { name: "Startups", icon: Rocket },
];

const Industries = () => {
  return (
    <section className="py-20 bg-white">
      <div className=" w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="h-[90px]"></div>
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#0E6A4A] font-bold text-xs uppercase tracking-widest mb-3">
            INDUSTRIES WE SERVE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1C1D20]">
            Helping Businesses Across <span className="text-[#0E6A4A]">All Industries</span>
          </h2>
        </div>
         <div className="h-[50px]"></div>
        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center group cursor-pointer w-[100px] sm:w-[120px] relative"
              >
                {/* Glow effect behind icon on hover */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#0E6A4A]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                <motion.div 
                  whileHover={{ scale: 1.15, rotate: [0, -5, 5, -3, 0] }}
                  transition={{ duration: 0.4 }}
                  className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-sm border ${ind.active ? 'border-[#E87A24]/50 bg-orange-50 shadow-[0_8px_20px_rgba(232,122,36,0.15)]' : 'border-gray-100 bg-white group-hover:border-[#0E6A4A]/50 group-hover:bg-[#0E6A4A]/5 group-hover:shadow-[0_12px_25px_rgba(14,106,74,0.15)]'}`}
                >
                  <Icon 
                    size={32} 
                    strokeWidth={1.5}
                    className={`transition-colors duration-300 ${ind.active ? 'text-[#E87A24]' : 'text-[#4187FF] group-hover:text-[#0E6A4A]'}`}
                  />
                </motion.div>
                <span className={`text-sm font-bold transition-colors mt-1 ${ind.active ? 'text-[#E87A24]' : 'text-gray-600 group-hover:text-[#1C1D20]'}`}>
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Industries;
