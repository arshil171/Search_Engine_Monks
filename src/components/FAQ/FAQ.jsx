import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828]">
            Frequently Asked Questions
          </h2>
          {/* Green Underline */}
          <div className="mt-3 sm:mt-4 mx-auto w-16 sm:w-20 h-1 bg-[#0E6A4A] rounded-full"></div>
        </div>

        {/* FAQ Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {faqData.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;