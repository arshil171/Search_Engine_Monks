import { CheckCircle2, Award, Shield, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const features = [
  {
    id: 1,
    icon: Award,
    title: "Google Premier Partner Agency",
    description: "Certified by Google as a Premier Partner, giving you access to exclusive tools and insights.",
    color: "text-[#0E6A4A] bg-[#D1DBD3]",
  },
  {
    id: 2,
    icon: Zap,
    title: "AI-Powered Strategies",
    description: "We leverage cutting-edge AI and machine learning to supercharge your digital marketing campaigns.",
    color: "text-[#F47C20] bg-orange-50",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Results-Driven Approach",
    description: "Every strategy is built around measurable KPIs — traffic, leads, and most importantly, revenue.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    id: 4,
    icon: Shield,
    title: "Transparent Reporting",
    description: "Get real-time dashboards and monthly reports so you're always in the loop on your ROI.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    id: 5,
    icon: Users,
    title: "Dedicated Support & Communication",
    description: "Your dedicated account manager is always a call or message away, no tickets or waiting.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    id: 6,
    icon: CheckCircle2,
    title: "Certified & Experienced Team",
    description: "Our team holds 50+ industry certifications across Google, Meta, HubSpot and more.",
    color: "text-cyan-600 bg-cyan-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="w-full section-padding bg-white">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex flex-col lg:flex-row justify-around gap-12 lg:gap-16 xl:gap-20 items-center w-full">

          {/* Left Side - Image */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 w-full lg:w-[45%]">
            {/* Decorative BG Shape */}
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-gradient-to-br from-[#D1DBD3] to-[#d4f2e4] opacity-70 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-gradient-to-tr from-orange-100 to-transparent opacity-60 blur-xl" />

            <div className="relative w-full max-w-[520px] lg:max-w-full">
              {/* Main Image */}
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop"
                  alt="Expert digital marketing team"
                  className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge - Experience */}
              <div className="absolute -bottom-5 -right-4 sm:-right-8 glass-card rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F47C20] to-orange-500 flex items-center justify-center shadow-md">
                  <Award className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-800">10+ Years</h4>
                  <p className="text-xs text-gray-500 font-medium">Industry Experience</p>
                </div>
              </div>

              {/* Floating Badge - Partners */}
              <div className="absolute -top-4 -left-2 sm:-left-8 glass-card rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-delayed">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E6A4A] to-[#1a9c6e] flex items-center justify-center shadow-md">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-800">250+</h4>
                  <p className="text-xs text-gray-500 font-medium">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col order-1 lg:order-2 w-full lg:w-[45%]">
            <span className="section-badge mb-5 self-start">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0D1A12] leading-tight">
              Why Choose{" "}
              <span className="gradient-text">Search Engine Monks?</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
              We don't just run campaigns — we build long-term growth engines
              that compound over time and deliver measurable ROI.
            </p>

            {/* Feature Cards */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="mt-10 flex flex-col gap-4"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    key={feature.id}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer border border-transparent hover:border-gray-100"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${feature.color} transition-all duration-300`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0D1A12] group-hover:text-[#0E6A4A] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div> 
            <div className="w-[100px] h-[50px] transprant"></div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary px-8 py-4 text-base flex items-center justify-center gap-2">
                Start Growing Today
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary px-8 py-4 text-base">
                View Case Studies
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
