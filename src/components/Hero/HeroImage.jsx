import FloatingCards from "./FloatingCards";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0 px-4">

      {/* Background Circle */}
      <div className="absolute w-[85%] sm:w-[80%] aspect-square max-w-[500px] rounded-full bg-[#EAF8F2]"></div>

      {/* Ring */}
      <div className="absolute w-[95%] sm:w-[90%] aspect-square max-w-[560px] rounded-full border-2 border-[#d7eee4]"></div>

      {/* Hero Image */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <img
          src="/images/hero/image.png"
          alt="Digital Marketing Analytics Dashboard"
          className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[520px] lg:max-w-[600px] h-auto object-contain drop-shadow-xl"
        />

        <FloatingCards />
      </div>

    </div>
  );
};

export default HeroImage;