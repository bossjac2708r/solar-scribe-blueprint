import { Target, FileText, MessageCircle, Phone, Calendar } from "lucide-react";
import leadSystemImage from "@/assets/leadtitan-info.png";

const Solution = () => {
  const steps = [
    {
      number: "1",
      icon: Target,
      title: "Meta Ads",
      description: "High-converting solar campaigns"
    },
    {
      number: "2",
      icon: FileText,
      title: "Landing Page",
      description: "Conversion-optimized solar pages"
    },
    {
      number: "3",
      icon: MessageCircle,
      title: "WhatsApp AI",
      description: "Instant 24/7 qualification"
    },
    {
      number: "4",
      icon: Phone,
      title: "AI Calling",
      description: "Smart appointment booking"
    },
    {
      number: "5",
      icon: Calendar,
      title: "Your Calendar",
      description: "Qualified appointments auto-synced"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#FFF9E5] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          LeadTitan Solution
        </h2>
        <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Our AI Funnel Turns Clicks into Booked Appointments — 100% Hands-Free.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-[#FFD700]/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                <step.icon className="w-10 h-10 text-[#FFD700] mb-4 mt-4" />
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* System Overview Image */}
          <div className="mt-16 max-w-6xl mx-auto">
            <img 
              src={leadSystemImage} 
              alt="LeadTitan System Overview" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-[#FFD700]/20 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
