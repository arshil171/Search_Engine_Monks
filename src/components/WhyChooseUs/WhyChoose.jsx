import FeatureItem from "./FeatureItem";
import featureData from "./featureData";

const WhyChooseUs = () => {
  return (
    <section className="w-full flex justify-center items-center mt-16 sm:mt-20 lg:mt-24 py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[500px] sm:max-w-[560px] lg:max-w-full overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] leading-tight">
              Why Choose Search Engine Monks?
            </h2>

            {/* Green Underline */}
            <div className="mt-3 sm:mt-4 w-16 sm:w-20 h-1 bg-[#0E6A4A] rounded-full"></div>

            {/* Features List */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col gap-4 sm:gap-5 lg:gap-6">
              {featureData.map((feature) => (
                <FeatureItem key={feature.id} feature={feature} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;