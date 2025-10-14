import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Calendar } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "✅ Form Submitted!",
      description: "We'll contact you within 60 seconds.",
    });
  };

  const openCalendly = () => {
    window.open("https://calendly.com/viplav/15min", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-[#FFF9E5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
            Get Your Custom Solar Lead Generation System
          </h2>
          <p className="text-xl text-center text-gray-700 mb-12">
            We'll show you exactly how to 3x your qualified solar appointments.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-green-600 mb-2">Success!</h4>
                  <p className="text-gray-700">We'll contact you within 60 seconds.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Owner Name *</label>
                    <Input required placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" required placeholder="john@solarpro.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Solar Company Name *</label>
                    <Input required placeholder="Solar Pro LLC" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input type="tel" required placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Monthly Leads & Biggest Challenge</label>
                    <Textarea 
                      placeholder="e.g., We get 50 leads/month but only 5 convert. Our biggest challenge is..."
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold py-6 text-lg"
                  >
                    Book My Strategy Call
                  </Button>
                </form>
              )}
            </div>

            {/* Calendly Option */}
            <div className="bg-gradient-to-br from-[#FFD700]/10 to-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/30 shadow-xl flex flex-col justify-center">
              <Calendar className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-center">Or Book Directly</h3>
              <p className="text-gray-700 mb-6 text-center">
                Schedule your 15-minute strategy call right now:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>Custom solar lead generation roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>AI automation demo & walkthrough</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>ROI calculator for your business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFD700] mt-1">✓</span>
                  <span>Free competitor analysis</span>
                </li>
              </ul>

              <Button
                onClick={openCalendly}
                size="lg"
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold py-6 text-lg animate-pulse"
              >
                Book 15-Min Strategy Call ⚡
              </Button>

              <p className="text-sm text-gray-600 text-center mt-4">
                🌞 You're securing your spot! Limited slots available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
