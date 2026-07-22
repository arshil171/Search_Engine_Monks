import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden flex flex-col min-h-screen"
      style={{ overflowX: "hidden" }}
    >
      {/* Soft background blobs — contained */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D1DBD3] opacity-50 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-orange-50 opacity-40 blur-3xl -z-10" />

      <div className="flex-grow max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-16 pb-24 lg:pb-32 pt-24 sm:pt-32 w-full">
          <div className="w-full lg:w-[45%]">
            <HeroContent />
          </div>
          <div className="w-full lg:w-[45%]">
            <HeroImage />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
