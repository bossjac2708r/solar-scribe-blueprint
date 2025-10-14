import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most clients see qualified appointments within 7-14 days of launch. Our AI systems work 24/7 to engage and qualify leads immediately."
    },
    {
      question: "What makes your system different?",
      answer: "We combine Meta Ads, AI-powered WhatsApp responses, and intelligent calling systems into one seamless funnel. You get qualified appointments, not just raw leads."
    },
    {
      question: "Do you work with residential or commercial solar?",
      answer: "We work with both! Our AI can be customized for residential, commercial, or both segments depending on your business focus."
    },
    {
      question: "What's included in setup?",
      answer: "Complete Meta Ads campaign setup, landing page creation, AI response system configuration, CRM integration, and calendar syncing - all managed end-to-end."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "Our AI qualifies leads based on your specific criteria before booking appointments. Only qualified prospects who meet your requirements make it to your calendar."
    },
    {
      question: "Can I customize AI responses?",
      answer: "Absolutely! We customize the AI to match your brand voice and qualification criteria. You have full control over the messaging and qualification process."
    }
  ];

  const openCalendly = () => {
    window.open("https://calendly.com/viplav/15min", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF9E5] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight" style={{ letterSpacing: '-0.06em' }}>
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/40 backdrop-blur-md border border-[#FFD700]/20 rounded-xl px-6 shadow-lg hover:shadow-xl transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-xl mb-6">Still have questions?</p>
            <Button
              onClick={openCalendly}
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black font-semibold px-8"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
