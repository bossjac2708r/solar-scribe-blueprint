import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! 👋 I'm here to help you learn about LeadTitan. Ask me anything!", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const faqs = {
    "pricing": "Our pricing is custom-tailored to your business needs. We offer Starter, Professional, and Enterprise plans. Contact us to get a personalized quote!",
    "how it works": "LeadTitan uses AI voice agents to call your leads 24/7, qualify them, and book appointments directly to your calendar. It's completely automated!",
    "guarantee": "We offer a 30-day 100% performance guarantee - we'll book at least 15 qualified appointments in your first 30 days, or you don't pay.",
    "start": "Getting started is easy! Just fill out the contact form or book a strategy call, and we'll have your system set up within days.",
    "ai voice": "Our AI voice agents sound natural and human-like. They're trained to handle objections, qualify leads, and book appointments - all while sounding professional.",
    "crm": "Yes! We integrate with all major CRMs including Salesforce, HubSpot, Zoho, and custom solutions. All conversations are transcribed and synced automatically.",
    "leads": "You can either provide your own leads (Option 1) or we'll generate them for you through Meta Ads (Option 2). Both options work with our AI system.",
    "results": "Our clients typically see 500+ appointments booked monthly, <90 second response times, and 65% show rates for qualified appointments."
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Simple keyword matching for responses
    const lowerInput = input.toLowerCase();
    let response = "Great question! For detailed information about that, I recommend booking a strategy call or filling out our contact form. Our team will provide personalized answers!";
    
    for (const [key, value] of Object.entries(faqs)) {
      if (lowerInput.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border-2 border-[#FFD700]/40 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-black" />
              <h3 className="font-bold text-black">LeadTitan Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:bg-black/10 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-white to-[#FFF9E5]/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? "bg-gradient-to-br from-[#FFF9E5] to-white border border-[#FFD700]/20"
                      : "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#FFD700]/20 bg-white">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 border-[#FFD700]/40 focus:ring-[#FFD700]"
              />
              <Button
                onClick={handleSend}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-black"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Try asking: "How it works", "Pricing", "Guarantee", "Results"
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;