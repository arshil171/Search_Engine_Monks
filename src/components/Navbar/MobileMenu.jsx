import navLinks from "./navLinks";
import { X } from "lucide-react";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-xl z-[100] transition-all duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-xl font-bold">Menu</h2>

        <button onClick={() => setOpen(false)}>
          <X />
        </button>
      </div>

      <ul className="flex flex-col gap-6 p-6">
        {navLinks.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg"
            >
              {item.title}
            </a>
          </li>
        ))}

        <button className="bg-[#F47C20] text-white rounded-full py-3 mt-5 font-semibold">
          Book Consultation
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;