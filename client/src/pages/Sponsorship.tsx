import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const opportunities = [
  {
    title: "PLATINUM SPONSOR",
    price: "$10,000",
    description: "Three foursomes. Banner displayed at event, mention in all communications and in award program. Sponsor of community health outreach activities.",
    features: ["Three Foursomes", "Banner at Event", "Program Mention", "Health Outreach Sponsor"],
    color: "bg-primary/5 border-primary/20"
  },
  {
    title: "GOLD SPONSOR",
    price: "$5,000",
    description: "Two foursomes. Banner displayed at event, mention in all communications and in award program.",
    features: ["Two Foursomes", "Banner at Event", "Program Mention", "All Communications Mention"],
    color: "bg-amber-500/5 border-amber-500/20"
  },
  {
    title: "SILVER SPONSOR",
    price: "$3,000",
    description: "One foursomes. Signage at the event, mention in all communications and in award program.",
    features: ["One Foursome", "Signage at Event", "Program Mention", "All Communications Mention"],
    color: "bg-slate-400/5 border-slate-400/20"
  },
  {
    title: "GREEN SPONSOR",
    price: "$2,000",
    description: "One foursome. Signage at the event, mention in all communications and in award program.",
    features: ["One Foursome", "Signage at Event", "Program Mention"],
    color: "bg-green-600/5 border-green-600/20"
  },
  {
    title: "LUNCHEON SPONSOR",
    price: "$2,500",
    description: "One foursome. Exclusive signage at The Luncheon and mention at the awards program.",
    features: ["One Foursome", "Exclusive Luncheon Signage", "Awards Program Mention"],
    color: "bg-primary/5 border-primary/20"
  },
  {
    title: "LUNCH AT THE TURN SPONSOR",
    price: "$2,500",
    description: "One foursome. Exclusive signage at The Turn and mention at the awards program.",
    features: ["One Foursome", "Exclusive Turn Signage", "Awards Program Mention"],
    color: "bg-primary/5 border-primary/20"
  },
  {
    title: "WHITE SPONSOR",
    price: "$1,000",
    description: "Signage at the event, mention in all communications and in award program.",
    features: ["Signage at Event", "Program Mention", "All Communications Mention"],
    color: "bg-slate-100 border-slate-200"
  },
  {
    title: "CORPORATE",
    price: "$500",
    description: "Signage at the event and mention at the awards program.",
    features: ["Signage at Event", "Awards Program Mention"],
    color: "bg-slate-50 border-slate-100"
  },
  {
    title: "HOLE SPONSOR",
    price: "$125",
    description: "Signage on a hole.",
    features: ["Hole Signage"],
    color: "bg-slate-50 border-slate-100"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Sponsorship() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader 
        title="Sponsorship Opportunities" 
        subtitle="Partner with us to support community health and wellness through our annual charity events."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div key={index} variants={item}>
              <Card className={`h-full border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${opportunity.color}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="font-semibold tracking-wider">
                      {opportunity.title}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {opportunity.price}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    {opportunity.description}
                  </p>
                  <ul className="space-y-3">
                    {opportunity.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-3 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-primary/10">
                    <Button className="w-full hover-elevate active-elevate-2">
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
          className="mt-20 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">
            Make a Direct Impact
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Your sponsorship helps us provide essential health services and programs to those in need throughout our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-bold px-8">
              Contact Foundation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8">
              Download Full Prospectus
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
