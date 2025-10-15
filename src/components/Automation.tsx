import { Database, TrendingUp, Zap, MessageSquare, Phone, Calendar } from "lucide-react";

const Automation = () => {
  const options = [
    {
      icon: Database,
      title: "Option 1 – You Provide Data",
      description: "We plug your existing leads into our WhatsApp + AI calling system to qualify and convert them automatically.",
      features: [
        "Instant integration with your CRM",
        "AI qualification of existing leads",
        "24/7 automated follow-ups",
        "Higher conversion rates on cold leads"
      ]
    },
    {
      icon: TrendingUp,
      title: "Option 2 – You Don't Provide Data",
      description: "We'll run Meta Ads to scrape raw leads, then our AI systems qualify and convert them into booked deals. This adds a small ad expense but brings real results.",
      features: [
        "Custom Meta ad campaigns",
        "High-converting solar creatives",
        "Targeted audience research",
        "Complete lead generation system"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF9E5] via-[#FFE5B4] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          Choose Your Path to Success
        </h2>
        <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          Whether you have leads or need us to generate them, we've got you covered with our AI automation system.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white via-[#FFF9E5]/50 to-[#FFD700]/10 backdrop-blur-md p-8 rounded-3xl border-2 border-[#FFD700]/40 shadow-2xl hover:shadow-[#FFD700]/30 hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <option.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
              <p className="text-gray-700 text-lg mb-6">{option.description}</p>
              
              <div className="space-y-3">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#FFD700] mt-1">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FFD700]/20 to-white/60 backdrop-blur-md p-8 rounded-3xl border-2 border-[#FFA500]/40 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-4">💡 What If You Could Close More Solar Deals Than Ever...</h3>
            <p className="text-xl text-gray-700 mb-2">Without Hiring More Sales Reps?</p>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">
            Most solar companies are wasting time, money, and leads because their reps can't follow up fast or consistently enough.
          </p>
          
          <p className="text-gray-700 text-lg mb-6">
            At <strong>LeadTitan</strong>, we change that. We replace inconsistent human follow-up with AI Voice Agents that can make 10,000 calls/day, respond instantly, and never sleep.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-[#FFD700]/30 mb-6">
            <p className="text-gray-700 text-lg mb-4">
              While your competitors are still hiring SDRs and burning money on slow sales cycles, you'll have a fully automated system that:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <span>Book appointments with hot solar leads</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <span>Follow up automatically if they don't pick up</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <span>Send personalized emails and SMS sequences</span>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <span>Sync directly to your calendar</span>
              </div>
            </div>
          </div>
          
          <p className="text-center text-2xl font-bold text-gray-900">
            We call it the <span className="text-[#FFA500]">LeadTitan AI Agent System</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Automation;