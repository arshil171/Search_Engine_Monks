import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Shape */}
      <div className="absolute top-20 right-[-150px] w-[650px] h-[650px] rounded-full bg-[#EAF8F2] blur-3xl opacity-70 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-20 lg:pt-24 pb-16">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;