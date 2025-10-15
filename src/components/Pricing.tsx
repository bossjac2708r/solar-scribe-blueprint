import { Check, Zap, Star } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Starter",
      price: "Custom",
      description: "Perfect for solar companies just getting started",
      features: [
        "Up to 500 AI calls/month",
        "WhatsApp automation",
        "Basic CRM integration",
        "Email & SMS follow-ups",
        "Monthly performance reports"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "Custom",
      description: "For growing solar businesses ready to scale",
      features: [
        "Up to 2,500 AI calls/month",
        "Advanced WhatsApp automation",
        "Full CRM integration",
        "Priority email & SMS sequences",
        "Weekly performance reports",
        "Dedicated account manager",
        "Custom AI training"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For established solar companies dominating their market",
      features: [
        "Unlimited AI calls",
        "White-label solution available",
        "Multi-location support",
        "Custom integrations",
        "Real-time analytics dashboard",
        "24/7 priority support",
        "Custom AI voice training",
        "Quarterly strategy sessions"
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-white via-[#FFF9E5] to-[#FFE5B4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
            Pricing Built for Results
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the plan that fits your business. Every plan includes our 30-day performance guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${
                plan.highlight
                  ? "from-[#FFD700] via-[#FFA500] to-[#FF8C00] scale-105"
                  : "from-white to-[#FFF9E5]/40"
              } backdrop-blur-md p-8 rounded-3xl border-2 ${
                plan.highlight ? "border-[#FFA500]" : "border-[#FFD700]/20"
              } shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-[#FFD700] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-3xl font-bold mb-2 ${plan.highlight ? "text-black" : ""}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? "text-black/70" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-black" : "text-[#FFD700]"}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-6 h-6 flex-shrink-0 ${plan.highlight ? "text-black" : "text-[#FFD700]"}`} />
                    <span className={plan.highlight ? "text-black" : "text-gray-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 ${
                  plan.highlight
                    ? "bg-black text-[#FFD700] hover:bg-gray-900"
                    : "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:from-[#FFA500] hover:to-[#FFD700]"
                }`}
              >
                Get Started <Zap className="inline w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFD700]/20 to-white/60 backdrop-blur-md p-8 rounded-3xl border-2 border-[#FFA500]/40 shadow-xl text-center">
          <p className="text-xl text-gray-700 mb-4">
            💡 Not sure which plan is right for you?
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Book a free strategy call and we'll create a custom solution based on your specific needs and goals.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all"
          >
            Book Free Strategy Call 📞
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;