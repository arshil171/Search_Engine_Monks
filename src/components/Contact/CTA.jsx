import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    "Search Engine Optimization",
    "Google Ads (PPC)",
    "Website Development",
    "Local SEO",
    "Social Media Marketing",
    "Content Marketing",
    "Branding & Design",
  ];

  return (
    <section className="w-full flex justify-center items-center py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Left Side - Info */}
          <div className="flex flex-col">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E6A4A] leading-tight">
              Let&apos;s Grow Your Business Together
            </h2>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5">
              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF8F2] flex items-center justify-center shrink-0 group-hover:bg-[#0E6A4A] transition-colors duration-300">
                  <Phone size={16} className="text-[#0E6A4A] group-hover:text-white transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-[#0E6A4A] transition-colors duration-300">
                  780-904-2115
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF8F2] flex items-center justify-center shrink-0 group-hover:bg-[#0E6A4A] transition-colors duration-300">
                  <Mail size={16} className="text-[#0E6A4A] group-hover:text-white transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-[#0E6A4A] transition-colors duration-300">
                  hello@searchenginemonks.com
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EAF8F2] flex items-center justify-center shrink-0 group-hover:bg-[#0E6A4A] transition-colors duration-300 mt-0.5">
                  <MapPin size={16} className="text-[#0E6A4A] group-hover:text-white transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-medium group-hover:text-[#0E6A4A] transition-colors duration-300 leading-relaxed">
                  655 Tamarack Road,<br />
                  North West, Edmonton,<br />
                  Alberta, Canada T6L 1B1
                </span>
              </div>
            </div>

            {/* Map Image */}
            <div className="mt-8 sm:mt-10 w-full max-w-[400px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                alt="Location Map"
                className="w-full h-[180px] sm:h-[220px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-[40px] px-4 py-2.5 sm:py-3 rounded-[2px] border border-gray-200 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E6A4A] focus:ring-2 focus:ring-[#0E6A4A]/10 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full h-[40px] px-4 py-2.5 sm:py-3 rounded-[2px] border border-gray-200 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E6A4A] focus:ring-2 focus:ring-[#0E6A4A]/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-medium text-gray-600">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-[40px] px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E6A4A] focus:ring-2 focus:ring-[#0E6A4A]/10 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs h-[40px] sm:text-sm font-medium text-gray-600">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full h-[40px] px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E6A4A] focus:ring-2 focus:ring-[#0E6A4A]/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3: Service Dropdown */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-xs sm:text-sm font-medium text-gray-600">Select a Service</label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm sm:text-base text-left flex items-center justify-between bg-white hover:border-gray-300 transition-all duration-300"
                >
                  <span className={formData.service ? "text-gray-800" : "text-gray-400"}>
                    {formData.service || "Select a Service"}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                
                {/* Dropdown Options */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, service });
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-[#EAF8F2] hover:text-[#0E6A4A] transition-colors duration-200"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-medium text-gray-600">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0E6A4A] focus:ring-2 focus:ring-[#0E6A4A]/10 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 sm:h-14 bg-[#F47C20] hover:bg-[#e06b10] active:bg-[#d0600e] text-white font-semibold text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Send Message
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;