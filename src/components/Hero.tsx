import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E5] via-white to-[#FFD700]/20"></div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
            Tired of Expensive Solar Leads<br />That Don't Convert?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            LeadTitan builds, launches, and manages your complete Meta-to-Appointment system — 
            so you focus on closing deals, not chasing prospects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
            >
              Get My Custom Solar System
            </Button>
          </div>

          <p className="text-sm text-gray-600">
            ⚡ <strong>500+ Solar Appointments Booked This Month</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
