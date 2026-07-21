import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${sticky
                    ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
                    : "bg-white"
                    }`}
            >
                <div className="max-w-[1800px] mx-auto pl-16 pr-10 sm:pl-20 sm:pr-12 md:pl-24 md:pr-16 lg:pl-28 lg:pr-20 xl:pl-32 xl:pr-24">
                    <div className="h-24 flex items-center justify-between">

                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center flex-shrink-0"
                        >
                            <img
                                src="https://searchenginemonks.com/wp-content/uploads/2022/12/Group-33831.svg"
                                alt="Search Engine Monks"
                                className="h-[72px] w-auto object-contain translate-x-10"
                            />
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex flex-1 justify-center">
                            <NavLinks />
                        </div>

                        {/* Right Side */}
                        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">

                            <div className="flex items-center gap-2 text-[#0E6A4A] font-semibold text-[18px] whitespace-nowrap">
                                <Phone size={20} />
                                <span>780-904-2115</span>
                            </div>

                            <button className="w-[200px] h-[40px] bg-[#F47C20] hover:bg-[#E86D12] transition-all duration-300 text-white font-semibold px-7 py-3 rounded-lg shadow-md">
                                Book Consultation
                            </button>

                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition"
                        >
                            <Menu size={30} />
                        </button>

                    </div>
                </div>
            </header>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-50 shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-6 border-b">

                    <img
                        src="/logo/logo.svg"
                        alt="Logo"
                        className="h-12"
                    />

                    <button onClick={() => setOpen(false)}>
                        <X size={28} />
                    </button>

                </div>

                <div className="p-6">

                    <NavLinks
                        mobile
                        closeMenu={() => setOpen(false)}
                    />

                    <button className="mt-8 w-full bg-[#F47C20] text-white py-3 rounded-full font-semibold">
                        Book Consultation
                    </button>

                </div>
            </div>
        </>
    );
};

export default Navbar;