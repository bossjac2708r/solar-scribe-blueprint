import { Mail, MessageSquare, RefreshCw, Target } from "lucide-react";

const AutomatedFollowup = () => {
  const features = [
    {
      icon: Mail,
      title: "Educational & persuasive email flows",
      description: "Automated email sequences that educate and convert"
    },
    {
      icon: MessageSquare,
      title: "Follow-up texts that get replies",
      description: "SMS messages designed to re-engage prospects"
    },
    {
      icon: RefreshCw,
      title: "Reactivates cold leads automatically",
      description: "Bring dead leads back to life with smart nurturing"
    },
    {
      icon: Target,
      title: "Never misses an opportunity",
      description: "Every lead gets consistent, timely follow-up"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFE5B4] via-[#FFF9E5] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
              2. Automated Follow-Up
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              If the call doesn't result in a booking, our system triggers a smart nurturing sequence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#FFE5B4]/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFA500]/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-[#FFA500] mb-4" />
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

export default AutomatedFollowup;