import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Background Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute -inset-8 md:-inset-10 rounded-full border-[3px] border-dashed border-[#0E6A4A]/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute -inset-12 md:-inset-16 rounded-full border-[2px] border-dashed border-[#E87A24]/20"
        />
        
        {/* Logo Animation */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="relative z-10 bg-white rounded-full p-5 md:p-6 shadow-[0_0_40px_rgba(14,106,74,0.15)]"
        >
          <img
            src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
            alt="Search Engine Monks Logo"
            className="w-24 h-auto md:w-32 object-contain"
          />
        </motion.div>

        {/* Circular Spinner Loader */}
        <div className="mt-16 w-20 h-20 border-[6px] border-gray-200 border-t-[#0E6A4A] rounded-full animate-spin shadow-lg"></div>
        
        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mt-4 text-[#0E6A4A] font-bold text-xs md:text-sm uppercase tracking-[0.2em]"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
