import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] scale-105"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1587174486073-ae5e5cff47bc?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-md text-primary-foreground border border-primary/20 text-xs font-bold tracking-[0.3em] uppercase mb-8"
            >
              Est. 2010
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 font-display tracking-tight leading-[1.1]">
              Championing Community <br />
              <span className="text-primary-foreground italic font-medium">Health & Wellness</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join us for the 2026 Jack Pitts Health Foundation Charity Golf Tournament. 
              Together, we can make a lasting impact on our community's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/registration">
                <Button size="lg" className="bg-primary hover-elevate active-elevate-2 text-white px-10 h-14 rounded-full text-lg font-bold shadow-[0_20px_50px_rgba(34,197,94,0.3)] border-0">
                  Register for Event
                </Button>
              </Link>
              <Link href="/sponsorship">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 h-14 rounded-full text-lg font-bold backdrop-blur-md transition-all duration-500 hover:border-white">
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-black tracking-[0.4em] uppercase text-primary mb-6">Our Mission</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-[1.2] text-foreground">
                Empowering Lives Through <br />
                Accessible Healthcare
              </h3>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                The Jack Pitts Health Foundation is dedicated to improving the quality of life 
                in our community by providing support for health education, outreach activities, 
                and essential medical services for those in need.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { icon: Heart, title: "Compassionate Care", desc: "Supporting healthcare initiatives with heart and dedication." },
                  { icon: Users, title: "Community Driven", desc: "Creating local programs tailored for local needs." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 group">
                    <div className="w-14 h-14 bg-primary/5 rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                      <item.icon className="w-7 h-7 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80" 
                  alt="Healthy community" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-12 -left-12 bg-primary p-12 rounded-[2rem] shadow-2xl hidden md:block border-[12px] border-white"
              >
                <p className="text-white text-6xl font-bold mb-2 font-display">15+</p>
                <p className="text-primary-foreground/90 font-bold tracking-widest uppercase text-xs">Years of Impact</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
