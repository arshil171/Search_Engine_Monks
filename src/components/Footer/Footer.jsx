import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaPaperPlane,
} from "react-icons/fa";

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
];

const socialLinks = [
    {
        icon: <FaFacebookF />,
        link: "#",
    },
    {
        icon: <FaInstagram />,
        link: "#",
    },
    {
        icon: <FaLinkedinIn />,
        link: "#",
    },
    {
        icon: <FaTwitter />,
        link: "#",
    },
    {
        icon: <FaYoutube />,
        link: "#",
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#063D2D] text-white mt-24 rounded-t-[40px] overflow-hidden shadow-[0_-15px_50px_rgba(0,0,0,0.25)]">

            {/* ================= MAIN FOOTER ================= */}

            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* ================= LOGO ================= */}

                    <div className="lg:pr-8 lg:border-r border-white/10">

                        <div className="flex items-center gap-4">

                            <img
                                src="/logo/logo.svg"
                                alt="Logo"
                                className="w-[70px] h-[70px] object-contain bg-white rounded-full p-2 shadow-lg"
                            />

                            <div>

                                <h2 className="text-[30px] leading-8 font-bold">
                                    Search Engine
                                </h2>

                                <h2 className="text-[30px] leading-8 font-bold">
                                    Monks
                                </h2>

                                <p className="uppercase tracking-[3px] text-[11px] text-gray-300 mt-2">
                                    Digital Marketing Solutions
                                </p>

                            </div>

                        </div>

                        <p className="mt-8 text-[17px] leading-9 text-gray-200">
                            We help businesses grow with smart digital marketing,
                            creative design and AI-powered solutions that deliver
                            measurable results.
                        </p>

                        {/* SOCIAL */}

                        <div className="flex flex-wrap gap-4 mt-10">

                            {socialLinks.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="w-12 h-12 rounded-full border border-gray-500 flex items-center justify-center text-lg hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {item.icon}
                                </a>
                            ))}

                        </div>

                    </div>

                    {/* ================= SERVICES ================= */}

                    <div className="lg:px-6 lg:border-r border-white/10">

                        <h3 className="text-3xl font-bold mb-8">
                            Services
                        </h3>

                        <ul className="space-y-4">

                            {services.map((item) => (

                                <li
                                    key={item}
                                    className="text-gray-200 text-[17px] cursor-pointer hover:text-orange-400 hover:translate-x-2 transition-all duration-300"
                                >
                                    {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ================= QUICK LINKS ================= */}

                    <div className="lg:px-6 lg:border-r border-white/10">

                        <h3 className="text-3xl font-bold mb-8">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            {quickLinks.map((item) => (

                                <li
                                    key={item}
                                    className="text-gray-200 text-[17px] cursor-pointer hover:text-orange-400 hover:translate-x-2 transition-all duration-300"
                                >
                                    {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ================= RESOURCES ================= */}

                    <div className="lg:px-6 lg:border-r border-white/10">

                        <h3 className="text-3xl font-bold mb-8">
                            Resources
                        </h3>

                        <ul className="space-y-4">

                            {resources.map((item) => (

                                <li
                                    key={item}
                                    className="text-gray-200 text-[17px] cursor-pointer hover:text-orange-400 hover:translate-x-2 transition-all duration-300"
                                >
                                    {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ================= NEWSLETTER ================= */}

                    <div className="lg:pl-6">

                        <h3 className="text-3xl font-bold mb-6">
                            Newsletter
                        </h3>

                        <p className="text-[17px] leading-8 text-gray-200 mb-8">
                            Subscribe to receive the latest marketing tips,
                            updates and exclusive offers directly in your inbox.
                        </p>

                        <div className="flex items-center overflow-hidden rounded-xl bg-white shadow-xl border border-white/10">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 h-14 px-5 text-gray-800 text-base outline-none"
                            />

                            <button
                                className="w-16 h-14 bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-all duration-300"
                            >
                                <FaPaperPlane className="text-white text-lg" />
                            </button>

                        </div>

                        <div className="mt-8 space-y-3">

                            <div className="flex items-center gap-3">

                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>

                                <p className="text-gray-300 text-sm">
                                    Weekly Digital Marketing Tips
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>

                                <p className="text-gray-300 text-sm">
                                    Exclusive SEO & AI Insights
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>

                                <p className="text-gray-300 text-sm">
                                    No spam, unsubscribe anytime
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= BOTTOM BAR ================= */}

            <div className="border-t border-white/10 bg-[#043325]">

                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-auto md:h-20 flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
                        © 2026 Search Engine Monks. All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-5 text-sm md:text-base">

                        <a
                            href="#"
                            className="text-gray-300 hover:text-orange-400 transition duration-300"
                        >
                            Terms of Service
                        </a>

                        <span className="hidden md:block text-white/30">
                            |
                        </span>

                        <a
                            href="#"
                            className="text-gray-300 hover:text-orange-400 transition duration-300"
                        >
                            Privacy Policy
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;