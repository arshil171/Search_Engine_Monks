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

      <Hero />

      <Brands />
      <div className="w-[100px] h-[70px]">


      </div>
      <Services />
      <div className="w-[100px] h-[70px]">


      </div>
      <WhyChooseUs />
      <div className="w-[100px] h-[70px]">


      </div>
      <Portfolio />
      <div className="w-[100px] h-[80px]">


      </div>
      <Testimonials />
      <div className="w-[100px] h-[80px]">


      </div>

      <FAQ />
      <div className="w-[100px] h-[90px]">


      </div>

      <CTA />
      <div className="w-[100px] h-[90px]">


      </div>

      <Footer />
    </>
  );
}

export default App;