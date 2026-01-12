import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Heart } from "lucide-react";
import { useRef } from "react";

import img1 from "@assets/img_1679_1768237549325.jpg";
import img2 from "@assets/img_1682_1768237549327.jpg";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div ref={containerRef} className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#d9e3d8]">
        {/* Floating Background Images */}
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-20 left-[10%] w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl z-0 hidden lg:block"
        >
          <img src={img1} className="w-full h-full object-cover opacity-80" alt="Foundation Activity" />
        </motion.div>
        
        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-20 right-[10%] w-80 h-60 rounded-[2rem] overflow-hidden shadow-2xl z-0 hidden lg:block"
        >
          <img src={img2} className="w-full h-full object-cover opacity-80" alt="Golf Event" />
        </motion.div>

        <motion.div 
          style={{ y: y3 }}
          className="absolute top-1/4 right-[15%] w-32 h-32 bg-primary/20 rounded-full blur-3xl z-0"
        />

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
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-md text-primary border border-primary/20 text-xs font-bold tracking-[0.3em] uppercase mb-8"
            >
              Est. 2010
            </motion.span>
            <h1 className="text-6xl md:text-[10rem] font-bold text-primary mb-8 font-display tracking-tighter leading-[0.8] uppercase">
              Jack Pitts
            </h1>
            <p className="text-lg md:text-2xl text-primary/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
              Championing Community <br /> Health & Wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/registration">
                <Button size="lg" className="bg-primary hover-elevate active-elevate-2 text-white px-10 h-14 rounded-full text-lg font-bold shadow-xl border-0">
                  Register Now
                </Button>
              </Link>
              <Link href="/sponsorship">
                <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 px-10 h-14 rounded-full text-lg font-bold transition-all duration-500 hover:border-primary">
                  Sponsorship
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
          <div className="w-7 h-12 border-2 border-primary/20 rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
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
