import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChooseUs/WhyChoose";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/Contact/CTA";

const Home = () => {
    return (
        <main className="min-h-screen">
            <Hero />
            <Brands />
            <Services />
            <WhyChoose />
            <Portfolio />
            <Testimonials />
            <FAQ />
            <CTA />
        </main>
    );
};

export default Home;
