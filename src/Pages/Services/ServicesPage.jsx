import React from "react";
import ServicesHero from "./ServicesHero";
import Services from "../../components/Services/Services";
import ProcessTimeline from "./ProcessTimeline";
import Industries from "./Industries";
import ResultsStats from "./ResultsStats";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import CTA from "../../components/Contact/CTA";

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
         <div className="h-[80px]"></div>
      <ServicesHero />
      <div className="h-[50px]"></div>
      <Services />
      <ProcessTimeline />   
      <Industries />
      <ResultsStats />
      <div className="h-[300px]"></div>
      {/* Testimonials - Trusted by Businesses Worldwide */}
      <Testimonials />
      
      {/* FAQ */}
      <FAQ />
      
      {/* Footer CTA */}
      <CTA />
    </main>
  );
};

export default ServicesPage;
