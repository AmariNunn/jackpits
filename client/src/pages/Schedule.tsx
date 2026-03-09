import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

import swingImg from "@assets/ChatGPT_Image_Mar_8,_2026,_07_29_17_PM_1773071637027.png";

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
    <div className="min-h-screen bg-[#f5f0e8]">
      <PageHeader
        title="Event Schedule"
        subtitle="A full day of golf, food, and fun planned for you."
      />

      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 opacity-[0.06] hidden lg:block pointer-events-none">
          <img src={swingImg} alt="" className="w-full" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1a6b3a]/20 transform md:-translate-x-1/2" />

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
                  data-testid={`schedule-event-${index}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1a6b3a] border-4 border-[#f5f0e8] shadow-lg transform -translate-x-1/2 z-10 mt-1 md:mt-0" />

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className={`bg-white p-6 rounded-2xl shadow-lg border border-[#c9973a]/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}>
                      <div className={`flex items-center gap-2 text-[#c9973a] font-athletic text-lg tracking-wider mb-2 ${
                         index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}>
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#0d1f0f] mb-2">{event.title}</h3>
                      <p className="text-[#0d1f0f]/60 text-sm font-body">{event.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
