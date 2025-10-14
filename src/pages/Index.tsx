import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Automation from "@/components/Automation";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Services />
      <Automation />
      <Results />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
