import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import celebrationImg from "@assets/Golfer's_winning_moment_in_anime_style_1773071637027.png";

const opportunities = [
  {
    title: "PLATINUM SPONSOR",
    price: "$10,000",
    description: "Three foursomes. Banner displayed at event, mention in all communications and in award program. Sponsor of community health outreach activities.",
    features: ["Three Foursomes", "Banner at Event", "Program Mention", "Health Outreach Sponsor"],
    borderColor: "border-t-[#c9973a] border-t-[6px]",
    bgColor: "bg-gradient-to-b from-[#c9973a]/5 to-white",
    badge: "text-[#c9973a] border-[#c9973a]/40"
  },
  {
    title: "GOLD SPONSOR",
    price: "$5,000",
    description: "Two foursomes. Banner displayed at event, mention in all communications and in award program.",
    features: ["Two Foursomes", "Banner at Event", "Program Mention", "All Communications Mention"],
    borderColor: "border-t-amber-500 border-t-[6px]",
    bgColor: "bg-gradient-to-b from-amber-500/5 to-white",
    badge: "text-amber-600 border-amber-500/40"
  },
  {
    title: "SILVER SPONSOR",
    price: "$3,000",
    description: "One foursome. Signage at the event, mention in all communications and in award program.",
    features: ["One Foursome", "Signage at Event", "Program Mention", "All Communications Mention"],
    borderColor: "border-t-gray-400 border-t-[6px]",
    bgColor: "bg-gradient-to-b from-gray-100 to-white",
    badge: "text-gray-500 border-gray-400/40"
  },
  {
    title: "GREEN SPONSOR",
    price: "$2,000",
    description: "One foursome. Signage at the event, mention in all communications and in award program.",
    features: ["One Foursome", "Signage at Event", "Program Mention"],
    borderColor: "border-t-[#1a6b3a] border-t-4",
    bgColor: "bg-white",
    badge: "text-[#1a6b3a] border-[#1a6b3a]/40"
  },
  {
    title: "LUNCHEON SPONSOR",
    price: "$2,500",
    description: "One foursome. Exclusive signage at The Luncheon and mention at the awards program.",
    features: ["One Foursome", "Exclusive Luncheon Signage", "Awards Program Mention"],
    borderColor: "border-t-[#1a6b3a]/70 border-t-4",
    bgColor: "bg-white",
    badge: "text-[#1a6b3a]/70 border-[#1a6b3a]/30"
  },
  {
    title: "LUNCH AT THE TURN SPONSOR",
    price: "$2,500",
    description: "One foursome. Exclusive signage at The Turn and mention at the awards program.",
    features: ["One Foursome", "Exclusive Turn Signage", "Awards Program Mention"],
    borderColor: "border-t-[#1a6b3a]/70 border-t-4",
    bgColor: "bg-white",
    badge: "text-[#1a6b3a]/70 border-[#1a6b3a]/30"
  },
  {
    title: "WHITE SPONSOR",
    price: "$1,000",
    description: "Signage at the event, mention in all communications and in award program.",
    features: ["Signage at Event", "Program Mention", "All Communications Mention"],
    borderColor: "border-t-gray-300 border-t-4",
    bgColor: "bg-white",
    badge: "text-gray-500 border-gray-300/40"
  },
  {
    title: "CORPORATE",
    price: "$500",
    description: "Signage at the event and mention at the awards program.",
    features: ["Signage at Event", "Awards Program Mention"],
    borderColor: "border-t-[#0d1f0f]/30 border-t-4",
    bgColor: "bg-white",
    badge: "text-[#0d1f0f]/50 border-[#0d1f0f]/20"
  },
  {
    title: "HOLE SPONSOR",
    price: "$125",
    description: "Signage on a hole.",
    features: ["Hole Signage"],
    borderColor: "border-t-[#0d1f0f]/20 border-t-4",
    bgColor: "bg-white",
    badge: "text-[#0d1f0f]/50 border-[#0d1f0f]/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Sponsorship() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] pb-20">
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0d1f0f]">
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#f5f0e8] mb-4"
              >
                Sponsorship Opportunities
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[#f5f0e8]/70 text-lg md:text-xl max-w-2xl font-body"
              >
                Partner with us to support community health and wellness through our annual charity events.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <img src={celebrationImg} alt="Jack Pitts celebration" className="w-64 animate-float drop-shadow-xl" data-testid="img-sponsorship-celebration" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#c9973a] mb-12"
        >
          <blockquote className="text-xl md:text-2xl font-display italic text-[#0d1f0f] leading-relaxed">
            "Your sponsorship doesn't just put your name on a sign — it continues a legacy of breaking barriers."
          </blockquote>
          <p className="text-[#0d1f0f]/50 mt-3 font-athletic tracking-widest uppercase text-sm">— Jack Pitts Health Foundation</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`h-full ${opportunity.borderColor} ${opportunity.bgColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg border-0`} data-testid={`card-sponsorship-${index}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={`font-athletic tracking-[0.15em] text-xs ${opportunity.badge}`}>
                      {opportunity.title}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-display font-bold text-[#1a6b3a]">
                    {opportunity.price}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#0d1f0f]/60 mb-6 leading-relaxed italic font-body text-sm">
                    {opportunity.description}
                  </p>
                  <ul className="space-y-3">
                    {opportunity.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm font-body">
                        <Check className="h-4 w-4 text-[#1a6b3a] mr-3 shrink-0" />
                        <span className="text-[#0d1f0f]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-[#0d1f0f]/10">
                    <Button className="w-full bg-[#1a6b3a] hover:bg-[#1a6b3a]/90 text-white" data-testid={`button-select-sponsorship-${index}`}>
                      Select Sponsorship
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#1a6b3a] text-[#f5f0e8] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-[#f5f0e8]">
            Make a Direct Impact
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8 font-body">
            Your sponsorship helps us provide essential health services and programs to those in need throughout our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#c9973a] hover:bg-[#c9973a]/90 text-white font-bold px-8" data-testid="button-contact-foundation">
              Contact Foundation
            </Button>
            <Button size="lg" variant="outline" className="border-[#f5f0e8]/30 text-[#f5f0e8] hover:bg-[#f5f0e8]/10 font-bold px-8" data-testid="button-download-prospectus">
              Download Full Prospectus
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
