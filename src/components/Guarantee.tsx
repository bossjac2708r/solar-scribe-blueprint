import { Shield, CheckCircle, Calendar } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFE5B4] via-[#FFF9E5] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white via-[#FFF9E5]/60 to-[#FFD700]/20 backdrop-blur-md p-12 rounded-3xl border-2 border-[#FFD700]/40 shadow-2xl text-center">
            <Shield className="w-20 h-20 text-[#FFD700] mx-auto mb-6" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
              No-Risk Guarantee
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              We're so confident in the LeadTitan System that we offer:
            </p>

            <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 backdrop-blur-sm p-8 rounded-2xl border border-[#FFD700]/30 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Calendar className="w-12 h-12 text-[#FFD700]" />
                <h3 className="text-3xl font-bold">30-Day 100% Performance Guarantee</h3>
              </div>
              
              <p className="text-2xl font-bold text-gray-900 mb-6">
                We book at least <span className="text-[#FFA500]">15 qualified appointments</span> in your first 30 days.
              </p>
              
              <p className="text-xl text-gray-700">
                Period. No excuses, no fine print.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="w-10 h-10 text-[#FFD700]" />
                <p className="font-semibold">Zero Risk</p>
                <p className="text-sm text-gray-600">You only pay if we deliver</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="w-10 h-10 text-[#FFD700]" />
                <p className="font-semibold">Proven Results</p>
                <p className="text-sm text-gray-600">500+ appointments booked monthly</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <CheckCircle className="w-10 h-10 text-[#FFD700]" />
                <p className="font-semibold">Full Support</p>
                <p className="text-sm text-gray-600">Dedicated success team</p>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
            >
              Claim Your Guarantee Now 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;