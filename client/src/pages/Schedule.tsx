import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function Schedule() {
  const events = [
    { time: "8:00 AM", title: "Registration & Breakfast", desc: "Check-in at the clubhouse, grab your cart, and enjoy a continental breakfast." },
    { time: "9:00 AM", title: "Putting Contest", desc: "Test your skills on the practice green before the main event." },
    { time: "10:00 AM", title: "Shotgun Start", desc: "All teams tee off simultaneously across the course." },
    { time: "12:00 PM", title: "Lunch at the Turn", desc: "Hot dogs and refreshments served at the halfway house." },
    { time: "3:30 PM", title: "Post-Round Reception", desc: "Drinks and appetizers while scores are tallied." },
    { time: "4:30 PM", title: "Dinner & Awards", desc: "Buffet dinner followed by prize presentations and raffle drawing." },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <PageHeader 
        title="Event Schedule" 
        subtitle="A full day of golf, food, and fun planned for you."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg transform -translate-x-1/2 z-10 mt-1 md:mt-0" />

                  {/* Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className={`bg-card p-6 rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}>
                      <div className={`flex items-center gap-2 text-accent font-bold mb-2 ${
                         index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}>
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.desc}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
