import { Database, TrendingUp } from "lucide-react";

const Automation = () => {
  const options = [
    {
      icon: Database,
      title: "Option 1 – You Provide Data",
      description: "We plug your existing leads into our WhatsApp + AI calling system to qualify and convert them automatically."
    },
    {
      icon: TrendingUp,
      title: "Option 2 – You Don't Provide Data",
      description: "We'll run Meta Ads to scrape raw leads, then our AI systems qualify and convert them into booked deals. This adds a small ad expense but brings real results."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF9E5] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          Automation Options
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FFD700]/10 to-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <option.icon className="w-14 h-14 text-[#FFD700] mb-6" />
              <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
              <p className="text-gray-700 text-lg">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Automation;
