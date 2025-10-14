import logo from "@/assets/leadtitan-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="LeadTitan" className="h-10 w-10" />
              <span className="text-2xl font-bold tracking-tight" style={{ letterSpacing: '-0.06em' }}>
                LeadTitan
              </span>
            </div>
            <p className="text-gray-400">
              AI-powered appointment booking system for solar companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("how-it-works")} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("results")} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Results
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@leadtitan.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold mb-4">Ready to Scale?</h3>
            <button
              onClick={() => window.open("https://calendly.com/viplav/15min", "_blank")}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              Book Strategy Call
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 LeadTitan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
