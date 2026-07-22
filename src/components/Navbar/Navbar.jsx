import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { id: 1, title: "Home", href: "#home" },
  { id: 2, title: "Services", href: "#services", hasDropdown: true },
  { id: 3, title: "Portfolio", href: "#portfolio" },
  { id: 4, title: "About Us", href: "#about" },
  { id: 5, title: "Resources", href: "#resources", hasDropdown: true },
  { id: 6, title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${sticky
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100"
          : "bg-white"
          }`}
      >
        <div className=" w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="h-[60px] lg:h-[72px] flex items-center justify-around">

            {/* Logo */}
            <a href="#home" className="flex w-auto lg:w-[400px] justify-start lg:justify-center items-center flex-shrink-0 group">
              <img
                src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
                alt="Search Engine Monks"
                className="h-[56px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex flex-1 justify-center px-4">
              <ul className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((item) => (
                  <li key={item.id} className="relative group">
                    <a
                      href={item.href}
                      onClick={() => setActiveLink(item.title)}
                      className={`flex items-center gap-1 py-2 text-[14px] font-bold transition-colors duration-300 ${activeLink === item.title
                        ? "text-[#0E6A4A]"
                        : "text-gray-800 hover:text-[#0E6A4A]"
                        }`}
                    >
                      {item.title}
                      {item.hasDropdown && (
                        <ChevronDown size={14} strokeWidth={2.5} className="mt-0.5 transition-transform group-hover:rotate-180" />
                      )}
                    </a>
                    {/* Active Indicator Underline */}
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-transparent flex justify-center">
                      <span className={`h-full rounded-t-full transition-all duration-300 ${activeLink === item.title ? "w-6 bg-[#0E6A4A]" : "w-0 bg-[#0E6A4A] group-hover:w-6"}`} />
                    </div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden  lg:flex w-[400px]  flex-start items-center gap-4 ">
              <a
                href="tel:7809042115"
                className="flex items-center gap-2 text-[#0E6A4A] font-bold text-[13px] whitespace-nowrap group hover:opacity-80 transition-opacity"
              >
                <div className="w-7 h-7 rounded-full border-[2px] border-[#0E6A4A] flex items-center justify-center">
                  <Phone size={12} className="text-[#0E6A4A]" strokeWidth={2.5} />
                </div>
                780-904-2115
              </a>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-[#F47621] min-w-[220px] h-[45px] hover:bg-[#e0681b] text-white text-[15px] font-bold px-8 py-3.5 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(244,118,33,0.3)] hover:shadow-[0_0_25px_rgba(244,118,33,0.6)] hover:-translate-y-1">
                <span className="relative z-10">Book Free Consultation</span>
                {/* Premium Shine Sweep Animation */}
                <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] group-hover:left-[150%] transition-all duration-700 ease-in-out pointer-events-none" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-300 mr-1 sm:mr-2"
            >
              <Menu size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] sm:w-[360px] bg-white z-[70] shadow-2xl transition-transform duration-400 ease-out flex flex-col ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img
            src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
            alt="Search Engine Monks"
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-100 hover:text-red-500 transition-all duration-300"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        <nav className="flex-1 p-6 overflow-y-auto flex flex-col justify-center">
          <ul className="flex flex-col justify-evenly h-full gap-4">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => { setActiveLink(item.title); setOpen(false); }}
                  className={`flex items-center justify-center h-[50px] w-full rounded-xl text-xl font-bold transition-all duration-300 ${activeLink === item.title
                    ? "text-[#0E6A4A] bg-[#D1DBD3]"
                    : "text-gray-700 hover:text-[#0E6A4A] hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 ${activeLink === item.title ? "bg-[#0E6A4A] scale-125" : "bg-gray-300"
                      }`} />
                    {item.title}
                    {item.hasDropdown && <ChevronDown size={18} strokeWidth={2.5} />}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer Bottom CTA */}
        <div className="p-6 pb-8 border-t border-gray-100 flex flex-col items-center justify-center gap-4 bg-gray-50/50 w-full">
          <a
            href="tel:7809042115"
            className="flex items-center w-full justify-center gap-2 text-[#0E6A4A] font-bold text-[15px] h-[50px] rounded-full border-2 border-[#0E6A4A]/20 hover:bg-[#D1DBD3] transition-all duration-300 bg-white"
          >
            <Phone size={18} strokeWidth={2.5} />
            780-904-2115
          </a>
          <button
            onClick={() => {
              setOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#F47621] w-full hover:bg-[#e0681b] text-white font-bold h-[50px] rounded-full flex items-center justify-center gap-3 transition-colors duration-300 shadow-md group text-[15px]"
          >
            Book Free Consultation
            <ArrowRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
