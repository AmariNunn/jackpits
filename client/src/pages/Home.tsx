import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, MapPin, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background - Using a golf course texture hint or gradient */}
        <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-black/40" />
          {/* Subtle noise texture for depth */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-semibold tracking-wider uppercase mb-4">
                Saturday July 26, 2025
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              The Jack Pitts <br />
              <span className="text-accent italic">Open</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light">
              Join us for a day of golf, camaraderie, and giving back. 
              Proudly benefitting <strong className="font-semibold text-white">The National Kidney Foundation of Michigan</strong>.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/registration">
                <Button size="lg" className="h-14 px-8 text-lg bg-accent text-primary-foreground font-semibold hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-accent/20">
                  Register Now
                </Button>
              </Link>
              <Link href="/schedule">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white transition-all duration-300">
                  View Schedule
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Details Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-20"
          >
            {[
              { 
                icon: Calendar, 
                title: "The Date", 
                desc: "July 26, 2025", 
                sub: "Saturday" 
              },
              { 
                icon: MapPin, 
                title: "Location", 
                desc: "Forest Akers West", 
                sub: "Michigan State University" 
              },
              { 
                icon: Users, 
                title: "Format", 
                desc: "4 Person Scramble", 
                sub: "Best Ball" 
              },
              { 
                icon: Trophy, 
                title: "Prizes", 
                desc: "Men & Women", 
                sub: "Contests & Awards" 
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-primary font-semibold text-lg">{item.desc}</p>
                <p className="text-muted-foreground text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                {/* Decorative image frame */}
                <div className="absolute -inset-4 border-2 border-accent/30 rounded-3xl transform -rotate-3 z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Golf generic image */}
                  <img 
                    src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1000&auto=format&fit=crop" 
                    alt="Golfer putting on green" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-display font-bold text-foreground mb-6">Playing for a Purpose</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Since its inception, the Jack Pitts Open has been more than just a golf tournament. 
                  It's a gathering of friends, family, and community members united by a single cause: 
                  fighting kidney disease.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  All proceeds from this event go directly to the <strong className="text-primary">National Kidney Foundation of Michigan</strong>, 
                  helping to prevent kidney disease and improve the quality of life for those living with it.
                </p>
                
                <Link href="/registration">
                  <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white px-6">
                    Join the Cause <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Memories from past years</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">See the smiles, the swings, and the celebrations that make this event special.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
             {/* Using provided image names for dynamic loading logic later, but generic placeholders for now if needed. 
                 The prompt says dynamic images are at /images/JP*.png. We'll use relative paths. */}
             {[
               "/images/JP 7.png",
               "/images/JP 14.png",
               "/images/JP 23.png",
               "/images/JP 24.png"
             ].map((src, i) => (
               <motion.div 
                key={i} 
                className="aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
               >
                 <img src={src} alt={`Gallery teaser ${i}`} className="w-full h-full object-cover" />
               </motion.div>
             ))}
          </div>
          
          <Link href="/gallery">
            <Button size="lg" variant="default" className="bg-primary text-white hover:bg-primary/90">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
