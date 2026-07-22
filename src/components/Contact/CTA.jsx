import { Phone, Mail, MapPin, ArrowRight, ChevronDown, Clock, CheckCircle, Rocket } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
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
    <section id="contact" className="w-full section-padding bg-gradient-to-b from-[#F8FFFE] to-white">
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Main Flex Layout: 3 Columns on large screens */}
        <div className="flex flex-col lg:flex-row justify-around gap-8 items-stretch w-full">

          {/* Column 1: Header & Contact Info */}
          <div className="flex flex-col gap-6 w-full lg:w-[22%]">
            <div>
              <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#0D1A12] leading-tight mb-3">
                Let's Grow Your Business <span className="text-[#0E6A4A]">Together</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-2">
              <a href="tel:7809042115" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#D1DBD3] flex items-center justify-center shrink-0 group-hover:bg-[#0E6A4A] transition-all duration-300">
                  <Phone size={18} className="text-[#0E6A4A] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-base font-bold text-gray-800 group-hover:text-[#0E6A4A] transition-colors duration-300">780-904-2115</span>
              </a>

              <a href="mailto:hello@searchenginemonks.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#D1DBD3] flex items-center justify-center shrink-0 group-hover:bg-[#0E6A4A] transition-all duration-300">
                  <Mail size={18} className="text-[#0E6A4A] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-base font-bold text-gray-800 group-hover:text-[#0E6A4A] transition-colors duration-300">hello@searchenginemonks.com</span>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#D1DBD3] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#0E6A4A]" />
                </div>
                <span className="text-sm sm:text-base font-600 text-gray-700 leading-relaxed max-w-[200px]">
                  655 Tamarack Road, North West, Edmonton, Alberta, Canada T6L 1B1
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Real-time Map Iframe */}
          <div className="w-full lg:w-[28%] flex flex-col min-h-[300px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371422!2d-122.3492774!3d47.6205063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1705624734891!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-grow h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Column 3: Form */}

          <div className="bg-white w-full lg:w-[34%] rounded-xl border-2 border-gray-100 shadow-lg hover:border-[#E87A24] hover:shadow-2xl hover:shadow-[#E87A24]/20 hover:-translate-y-1 transition-all duration-500 p-7 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5">
                <div className="w-20 h-20 rounded-full bg-[#D1DBD3] flex items-center justify-center">
                  <CheckCircle size={40} className="text-[#0E6A4A]" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0D1A12]">Message Sent!</h3>
                <p className="text-gray-500 text-base max-w-xs leading-relaxed">
                  Thank you! Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", business: "", service: "", message: "" }); }}
                  className="btn-primary px-8 py-4 rounded-xl"
                >
                  Send Another
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="Your Name"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-500 text-center focus:outline-none focus:border-[#E87A24] focus:ring-2 focus:ring-[#E87A24]/10 transition-all duration-300"
                  />
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="Email Address"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-500 text-center focus:outline-none focus:border-[#E87A24] focus:ring-2 focus:ring-[#E87A24]/10 transition-all duration-300"
                  />
                </div>

                {/* Row 2: Phone + Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-500 text-center focus:outline-none focus:border-[#E87A24] focus:ring-2 focus:ring-[#E87A24]/10 transition-all duration-300"
                  />
                  <input
                    type="text" name="business" value={formData.business} onChange={handleChange}
                    placeholder="Business Name"
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-500 text-center focus:outline-none focus:border-[#E87A24] focus:ring-2 focus:ring-[#E87A24]/10 transition-all duration-300"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm text-center flex items-center justify-between hover:border-[#E87A24] focus:outline-none focus:border-[#E87A24] focus:ring-2 focus:ring-[#E87A24]/10 transition-all duration-300"
                  >
                    <span className={`flex-1 ${formData.service ? "text-gray-800 font-600" : "text-gray-500"}`}>
                      {formData.service || "Select a Service"}
                    </span>
                    <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden text-center">
                      {services.map((service) => (
                        <button
                          key={service} type="button"
                          onClick={() => { setFormData({ ...formData, service }); setIsDropdownOpen(false); }}
                          className="w-full px-4 py-3 text-center text-sm text-gray-700 hover:bg-[#FFF3EB] hover:text-[#E87A24] transition-colors duration-200 font-500"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message */}
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-500 text-center focus:outline-none focus:border-[#E87A24] focus:ring-2 focus:ring-[#E87A24]/10 transition-all duration-300 resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl text-base font-bold text-white bg-[#E87A24] hover:bg-[#D66D1B] flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center ml-1">
                        <ArrowRight size={12} strokeWidth={3} />
                      </div>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
