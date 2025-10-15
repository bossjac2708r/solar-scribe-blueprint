import { Phone, Users, Clock, MessageCircle } from "lucide-react";

const AIVoiceAgent = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-intent trained agents",
      description: "Handles objections naturally and persuasively"
    },
    {
      icon: Clock,
      title: "Works 24/7",
      description: "Never takes a break, always available"
    },
    {
      icon: Phone,
      title: "Tens of thousands of calls daily",
      description: "Can call your entire lead list in hours, not weeks"
    },
    {
      icon: MessageCircle,
      title: "Human-like conversations",
      description: "Speaks with leads naturally and qualifies them effectively"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#FFF9E5] to-[#FFE5B4]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
              1. AI Voice Agent
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our AI-powered voice agents sound natural, persuasive, and book appointments with homeowners interested in solar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#FFF9E5]/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceAgent;