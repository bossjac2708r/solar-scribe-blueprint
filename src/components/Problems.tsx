import { DollarSign, Clock, Phone, Calendar } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Expensive leads that don't qualify",
      description: "Spending thousands on leads that never convert"
    },
    {
      icon: Clock,
      title: "Slow response times losing hot prospects",
      description: "Missing opportunities while competitors respond instantly"
    },
    {
      icon: Phone,
      title: "Manual follow-up eating up your day",
      description: "Your team wasting hours on unqualified calls"
    },
    {
      icon: Calendar,
      title: "Empty calendars and missed revenue",
      description: "Not enough qualified appointments in your pipeline"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#FFF9E5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          Problems Solar Companies Face
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <problem.icon className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
