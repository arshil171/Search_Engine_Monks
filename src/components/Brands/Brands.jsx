const logos = [
  {
    name: "Google",
    image: "/images/brands/google.png",
  },
  {
    name: "HubSpot",
    image: "/images/brands/hubspot.png",
  },
  {
    name: "Meta",
    image: "/images/brands/meta.png",
  },
  {
    name: "WordPress",
    image: "/images/brands/wordpress.png",
  },
  {
    name: "Shopify",
    image: "/images/brands/shopify.png",
  },
  {
    name: "Amazon",
    image: "/images/brands/amazon.png",
  },
];

const Brands = () => {
  return (
    <section className="w-full flex justify-center items-center bg-[#FAFAFA] py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Heading */}
        <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center">
          <span className="text-[#0E6A4A] text-sm md:text-base font-semibold uppercase tracking-[4px]">
            Trusted Worldwide
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#101828] leading-tight">
            Trusted By Amazing Brands
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-3xl">
            Helping businesses grow through SEO, PPC, Website Development and
            Digital Marketing solutions that deliver measurable results.
          </p>
        </div>

        {/* Logo Cards */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="
                w-[130px]
                h-[90px]
                sm:w-[150px]
                sm:h-[100px]
                md:w-[170px]
                md:h-[110px]
                lg:w-[180px]
                lg:h-[120px]
                xl:w-[190px]
                xl:h-[120px]
                bg-white
                rounded-2xl
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                items-center
                justify-center
                group
              "
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="
                  max-h-8
                  sm:max-h-10
                  md:max-h-12
                  max-w-[90px]
                  sm:max-w-[110px]
                  md:max-w-[130px]
                  lg:max-w-[140px]
                  object-contain
                  grayscale
                  opacity-70
                  group-hover:grayscale-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;