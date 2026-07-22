import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChoose";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/Contact/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="w-[100px] h-[100px] bg-transparent"></div>
        <Brands />
        <Services />
        <WhyChooseUs />
        <Portfolio />

        <div className="w-[100px] h-[100px] bg-transparent">

        </div>
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
