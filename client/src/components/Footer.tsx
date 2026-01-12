import { Link } from "wouter";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Jack Pitts</h3>
              <p className="text-primary-foreground/60 text-sm uppercase tracking-wider">Health Foundation</p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
              Dedicated to supporting The National Kidney Foundation of Michigan through our annual charity golf tournament.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Event Schedule", href: "/schedule" },
                { label: "Registration Details", href: "/registration" },
                { label: "Photo Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/80 hover:text-white transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-accent">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm">
                  Forest Akers West Golf Course<br />
                  Michigan State University
                </span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:info@jackpittshealthfoundation.org" className="text-sm hover:text-white transition-colors">
                  Contact via Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Jack Pitts Health Foundation. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>for the community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
