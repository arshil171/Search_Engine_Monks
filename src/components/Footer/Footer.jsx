import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  "SEO Services",
  "Web Development",
  "Google Ads",
  "Meta Ads",
  "AI Marketing Solutions",
  "Branding & Design",
  "Content Creation",
  "Social Media Marketing",
];

const quickLinks = [
  "About Us",
  "Portfolio",
  "Case Studies",
  "Blog",
  "Resources",
  "Contact Us",
  "Careers",
  "Privacy Policy",
];

const resources = [
  "SEO Guide",
  "PPC Guide",
  "Digital Marketing",
  "AI Solutions",
  "FAQs",
  "Sitemap",
  "Webinars",
  "E-Books",
];

const socialLinks = [
  { icon: <FaFacebookF />, link: "#", label: "Facebook" },
  { icon: <FaInstagram />, link: "#", label: "Instagram" },
  { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" },
  { icon: <FaTwitter />, link: "#", label: "Twitter" },
  { icon: <FaYoutube />, link: "#", label: "YouTube" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const Footer = () => {
  return (
    <footer className="bg-[#373738] text-white overflow-hidden shadow-2xl">
      
      {/* Main Footer */}
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 py-20 sm:py-24 lg:py-28">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="w-full flex flex-wrap text-center items-center gap-y-12"
        >

          {/* Brand Column */}
          <motion.div variants={itemVariants} className="w-full sm:w-[50%] lg:w-[25%] flex flex-col items-center lg:border-r border-white/10 px-4">
            <div className="flex flex-col items-center gap-4 mb-6">
                <div className="h-[7px]"></div>
              <img
                src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
                alt="Search Engine Monks"
                className="h-14 w-auto object-contain bg-white rounded-xl p-2 shadow-sm"
              />
              {/* <div className="h-[2px]"></div>  */}
              <div className="flex flex-col items-center text-center">
                <span className="text-xl font-bold text-white leading-tight">Search Engine Monks</span>
                <span className="text-[9px] uppercase tracking-[1px] text-gray-300">Digital Marketing & AI Solutions</span>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-gray-200">
              We help businesses grow with smart digital marketing, creative
              design, and AI-powered solutions.
            </p>
             <div className="h-[10px]"></div>
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm text-gray-200 hover:bg-[#E87A24] hover:border-[#E87A24] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants} className="w-full sm:w-[50%] lg:w-[15%] flex flex-col items-center lg:border-r border-white/10 px-4">
            <h3 className="text-lg font-bold text-white mb-6">
              Services
            </h3>
            <ul className="flex flex-col items-center gap-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants} className="w-full sm:w-[50%] lg:w-[15%] flex flex-col items-center lg:border-r border-white/10 px-4">
            <h3 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col items-center gap-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div variants={itemVariants} className="w-full sm:w-[50%] lg:w-[15%] flex flex-col items-center lg:border-r border-white/10 px-4">
            <h3 className="text-lg font-bold text-white mb-6">
              Resources
            </h3>
            <ul className="flex flex-col items-center gap-3">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[15px] text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants} className="w-full sm:w-[100%] lg:w-[30%] flex flex-col items-center px-4">
            <h3 className="text-lg font-bold text-white mb-6">
              Newsletter
            </h3>

            <p className="text-[15px] leading-relaxed text-gray-200 mb-6 px-4">
              Subscribe to get the latest tips, updates and offers.
            </p>

            <div className="flex items-center w-full max-w-[280px] rounded-full bg-white p-1 focus-within:ring-2 focus-within:ring-[#E87A24] transition-all shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-10 px-4 text-gray-800 text-sm outline-none bg-transparent placeholder-gray-400"
              />
              <button className="w-10 h-10 rounded-full bg-[#E87A24] hover:bg-[#D66D1B] flex items-center justify-center transition-colors duration-300 shrink-0 shadow-sm">
                <FaPaperPlane className="text-white text-sm -ml-0.5" />
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="border-t border-white/10"
      >
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-[13px] text-center sm:text-left">
            © 2024 Search Engine Monks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px]">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
