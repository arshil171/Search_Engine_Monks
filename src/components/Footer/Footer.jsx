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
    <footer className="bg-[#1C1D20] text-white overflow-hidden relative">
      <div className="h-[30px]"></div>
      {/* Massive CTA Section */}
      <div className=" w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pt-32 lg:pt-48 pb-24 lg:pb-32 border-b border-white/10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 text-white leading-none">
            Let's build<br />something <span className="text-[#E87A24]">amazing.</span>
          </h2>
          <div className="h-[30px]"></div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E87A24] h-[50px] hover:bg-[#D66D1B] text-white text-lg lg:text-xl font-bold px-10 py-4 min-w-[280px] rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(232,122,36,0.4)] hover:shadow-[0_0_30px_rgba(232,122,36,0.6)] hover:-translate-y-1"
          >
            Book Free Consultation
          </button>
          <div className="h-[12px]"></div>
        </motion.div>
      </div>
      <div className="h-[30px]"></div>
      {/* Main Footer Grid */}
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-24 lg:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row w-full border-white/10"
        >
          {/* Left Side: Brand & Newsletter */}
          <motion.div variants={itemVariants} className="w-full lg:w-4/12 flex flex-col items-start lg:items-center text-left lg:text-center border-b lg:border-b-0 lg:border-r border-white/10 px-4 lg:pr-10 py-8 lg:py-0">
            <div className="flex flex-col items-start lg:items-center gap-4 mb-6">
              <img
                src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
                alt="Search Engine Monks Logo"
                className="h-16 sm:h-20 w-auto object-contain [filter:drop-shadow(0_0_8px_rgba(255,255,255,0))_drop-shadow(0_0_2px_rgba(255,255,255,0))]"
              />

              <div className="flex flex-col text-left lg:text-center">
                <span className="text-xl font-bold text-white leading-tight">Search Engine Monks</span>
                <span className="text-[10px] uppercase tracking-[1px] text-gray-400">Digital Marketing & AI Solutions</span>
              </div>
            </div>
            <div className="h-[15px]"></div>
            <p className="text-lg leading-relaxed text-gray-400 mb-14 max-w-md">
              We help businesses grow with smart digital marketing, creative
              design, and AI-powered solutions.
            </p>
            <div className="h-[15px]"></div>

            <div className="w-full max-w-md mb-14">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Subscribe to our newsletter</h4>
              <div className="h-[7px]"></div>
              <div className="flex items-center w-full rounded bg-white/5 p-1 border border-white/10 focus-within:border-[#E87A24] transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-5 text-white text-base outline-none bg-transparent placeholder-gray-500 text-center sm:text-left"
                />
                <button className="h-12 px-6 rounded bg-[#E87A24] hover:bg-[#D66D1B] text-white font-bold transition-colors duration-300 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="h-[15px]"></div>
            {/* Social Links */}
            <div className="flex justify-start lg:justify-center gap-4 w-full">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  aria-label={item.label}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-lg text-gray-300 hover:bg-[#E87A24] hover:border-[#E87A24] hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="h-[10px]"></div>
          </motion.div>

          <div className="h-[5px]"></div>

          {/* Right Side: Links */}
          <motion.div variants={itemVariants} className="w-full lg:w-8/12 flex flex-col sm:flex-row">
            <div className="h-[10px]"></div>
            {/* Services */}
            <div className="flex-1 flex flex-col items-start sm:items-center border-b sm:border-b-0 sm:border-r border-white/10 px-4 lg:px-8 py-8 lg:py-0">
              <div className="flex flex-col items-start text-left w-fit">
                <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-wider">Services</h3>
                <div className="h-[20px]"></div>
                <ul className="flex flex-col items-start gap-3">
                  {services.map((item) => (
                    <li key={item}>
                      <a href="#" className="flex items-center gap-2 text-base text-[#A3B1AA] hover:text-[#E87A24] hover:translate-x-1 transition-all duration-300">
                        <span className="text-sm font-bold">&gt;</span>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="h-[10px]"></div>
              </div>
            </div>
            <div className="h-[10px]"></div>
            {/* Quick Links */}
            <div className="flex-1 flex flex-col items-start sm:items-center border-b sm:border-b-0 sm:border-r border-white/10 px-4 lg:px-8 py-8 lg:py-0">
              <div className="flex flex-col items-start text-left w-fit">
                <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-wider">Quick Links</h3>
                <div className="h-[20px]"></div>
                <ul className="flex flex-col items-start gap-3">
                  {quickLinks.map((item) => (
                    <li key={item}>
                      <a href="#" className="flex items-center gap-2 text-base text-[#A3B1AA] hover:text-[#E87A24] hover:translate-x-1 transition-all duration-300">
                        <span className="text-sm font-bold">&gt;</span>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="h-[10px]"></div>
              </div>
            </div>
            <div className="h-[10px]"></div>
            {/* Resources */}
            <div className="flex-1 flex flex-col items-start sm:items-center px-4 lg:px-8 py-8 lg:py-0">
              <div className="flex flex-col items-start text-left w-fit">
                <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-wider">Resources</h3>
                <div className="h-[20px]"></div>
                <ul className="flex flex-col items-start gap-3">
                  {resources.map((item) => (
                    <li key={item}>
                      <a href="#" className="flex items-center gap-2 text-base text-[#A3B1AA] hover:text-[#E87A24] hover:translate-x-1 transition-all duration-300">
                        <span className="text-sm font-bold">&gt;</span>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="h-[40px]"></div>
                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Get the App</h3>
                <div className="h-[7px]"></div>
                <div className="flex flex-col gap-3 w-[140px] items-start">
                  <a href="#" className="hover:-translate-y-1 transition-transform duration-300 opacity-90 hover:opacity-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="w-full h-auto" />
                  </a>
                  <a href="#" className="hover:-translate-y-1 transition-transform duration-300 opacity-90 hover:opacity-100">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="w-full h-auto" />
                  </a>
                </div>
                <div className="h-[10px]"></div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      <div className="h-[20px]"></div>
      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="border-t border-white/10"
      >
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Search Engine Monks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
