import FloatingCards from "./FloatingCards";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center w-full mt-12 lg:mt-0 px-6 sm:px-8 lg:px-4">

      {/* Outer Glow Ring */}
      <div className="absolute w-[90%] sm:w-[85%] aspect-square max-w-[560px] rounded-full border-2 border-dashed border-[#0E6A4A]/15 animate-spin-slow" />

      {/* Middle Ring */}
      <div className="absolute w-[78%] sm:w-[75%] aspect-square max-w-[490px] rounded-full border border-[#d7eee4]" />

      {/* Background Blob */}
      <div className="absolute w-[72%] sm:w-[70%] aspect-square max-w-[450px] rounded-full bg-gradient-to-br from-[#D1DBD3] to-[#d4f2e4] animate-pulse-ring" />

      {/* Image */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <img
          src="/images/hero/image.png"
          alt="Digital Marketing Analytics Dashboard"
          className="w-full max-w-[300px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px] h-auto object-contain drop-shadow-2xl animate-float"
        />
        <FloatingCards />
      </div>

      {/* Bottom Decorative Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 flex items-center justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full bg-[#0E6A4A]/20"
            style={{
              width: `${8 - Math.abs(i - 2) * 2}px`,
              height: `${8 - Math.abs(i - 2) * 2}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroImage;
