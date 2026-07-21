const navLinks = [
  { id: 1, title: "Home", href: "#" },
  { id: 2, title: "Services", href: "#" },
  { id: 3, title: "Portfolio", href: "#" },
  { id: 4, title: "About", href: "#" },
  { id: 5, title: "Resources", href: "#" },
  { id: 6, title: "Contact", href: "#" },
];

const NavLinks = ({ mobile = false, closeMenu }) => {
  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col gap-4"
          : "flex items-center gap-6 xl:gap-8"
      }`}
    >
      {navLinks.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            onClick={closeMenu}
            className="text-[14px] font-bold text-gray-800 hover:text-[#0E6A4A] transition"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
