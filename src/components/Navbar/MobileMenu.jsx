import NavLinks from "./navLinks";
// import navLinks from "./navLinks";
import { X } from "lucide-react";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-xl z-[100] transition-all duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b">
        <img
          src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
          alt="Search Engine Monks"
          className="h-9 w-auto object-contain"
        />
        <button 
          onClick={() => setOpen(false)}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-100 hover:text-red-500 transition-all duration-300"
        >
          <X size={18} />
        </button>
      </div>

      <ul className="flex flex-col gap-1.5 p-5">
        {NavLinks.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-[15px] font-bold text-gray-700 hover:text-[#0E6A4A] hover:bg-gray-50 transition-all duration-300"
            >
              {item.title}
            </a>
          </li>
        ))}

        <button className="bg-[#F47C20] text-white rounded-lg py-3 mt-4 font-bold text-[14px]">
          Book Consultation
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
