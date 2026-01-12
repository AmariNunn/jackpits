import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import logoUrl from "@assets/JPHF-Logo-PNG2-250_1768237067600.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/gallery", label: "Gallery" },
    { href: "/sponsorship", label: "Sponsorship" },
    { href: "/registration", label: "Registration" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-3 border-b border-primary/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer group flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative w-12 h-12 md:w-16 md:h-16"
            >
              <img 
                src={logoUrl} 
                alt="JPHF Logo" 
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg md:text-xl leading-none transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary'}`}>
                Jack Pitts
              </span>
              <span className={`text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${scrolled ? 'text-muted-foreground' : 'text-primary/80'}`}>
                Health Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer relative ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            <div className="pl-4">
              <Link href="/registration">
                <Button 
                  variant="default" 
                  className="bg-primary hover-elevate active-elevate-2 text-white px-6 rounded-full font-semibold shadow-xl shadow-primary/20"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
