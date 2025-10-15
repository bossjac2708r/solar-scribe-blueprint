import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "✅ Form Submitted!",
      description: "We'll contact you at kumawatgourav109@gmail.com and 7340015892 within 60 seconds.",
    });
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

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-[#FFD700]/30 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Book Your Strategy Call</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-600 mb-2">Success!</h4>
                <p className="text-gray-700">We'll contact you within 60 seconds at:</p>
                <p className="text-gray-700 font-semibold mt-2">kumawatgourav109@gmail.com</p>
                <p className="text-gray-700 font-semibold">7340015892</p>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;