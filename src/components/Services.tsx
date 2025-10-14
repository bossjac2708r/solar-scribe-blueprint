import { Target, MessageCircle, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Meta Ads",
      features: [
        "Custom audience targeting",
        "A/B tested creatives",
        "2.5x lower cost per lead"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp + AI Calling System",
      features: [
        "24/7 instant lead response",
        "Appointment scheduling automation",
        "CRM integration",
        "85% faster response rate"
      ]
    },
    {
      icon: FileText,
      title: "Solar Landing Pages",
      features: [
        "Solar-optimized design",
        "Real-time analytics",
        "40% higher conversion rate"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-[#FFF9E5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          Our Services Ecosystem
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-14 h-14 text-[#FFD700] mb-6" />
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
