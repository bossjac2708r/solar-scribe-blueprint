import { Users, Clock, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Results = () => {
  const metrics = [
    {
      icon: Users,
      value: "127+",
      label: "Solar Leads generated this month"
    },
    {
      icon: Clock,
      value: "<90",
      label: "Seconds average response time"
    },
    {
      icon: Target,
      value: "65%",
      label: "Show Rate for qualified appointments"
    }
  ];

  const testimonials = [
    {
      name: "David Rodriguez",
      company: "Southwest Solar",
      quote: "180 appointments in 90 days, 250% revenue boost.",
      rating: 5
    },
    {
      name: "Jennifer Kim",
      company: "Coastal Solar",
      quote: "10x lead volume increase, 40 hours saved per week.",
      rating: 5
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-white to-[#FFF9E5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          Real Results
        </h2>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <div className="text-5xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-700">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/40 backdrop-blur-md p-8 border border-[#FFD700]/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#FFD700] text-xl">★</span>
                ))}
              </div>
              <p className="text-lg text-gray-800 mb-4 italic">"{testimonial.quote}"</p>
              <div className="font-bold text-gray-900">{testimonial.name}</div>
              <div className="text-gray-600">{testimonial.company}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
