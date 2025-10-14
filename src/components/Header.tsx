import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/leadtitan-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openCalendly = () => {
    window.open("https://calendly.com/viplav/15min", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FFD700]/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LeadTitan" className="h-10 w-10" />
            <span className="text-2xl font-bold tracking-tight" style={{ letterSpacing: '-0.06em' }}>
              LeadTitan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("how-it-works")} className="text-gray-700 hover:text-[#FFD700] transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("results")} className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-[#FFD700] transition-colors">
              Contact
            </button>
            <Button 
              onClick={openCalendly}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold px-6 animate-pulse"
            >
              Book Call ⚡
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("how-it-works")} className="text-gray-700 hover:text-[#FFD700] transition-colors text-left">
              How It Works
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-[#FFD700] transition-colors text-left">
              Features
            </button>
            <button onClick={() => scrollToSection("results")} className="text-gray-700 hover:text-[#FFD700] transition-colors text-left">
              Results
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-[#FFD700] transition-colors text-left">
              Contact
            </button>
            <Button 
              onClick={openCalendly}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold"
            >
              Book Call ⚡
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
