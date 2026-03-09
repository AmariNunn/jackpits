import { Link } from "wouter";
import { Heart, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d1f0f] text-[#f5f0e8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-[#f5f0e8]/10 pb-12">
          <p className="text-[#f5f0e8]/60 font-body italic text-sm leading-relaxed max-w-4xl mx-auto text-center">
            Jack Pitts — Trinity High School Class A GIA State Champion (1965) · Michigan State University ·
            2024 Georgia High School Football Hall of Fame Inductee · Dedicated to the National Kidney Foundation of Michigan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#f5f0e8] mb-1">Jack Pitts</h3>
              <p className="text-[#c9973a] text-sm font-athletic tracking-[0.2em] uppercase">Health Foundation</p>
            </div>
            <p className="text-[#f5f0e8]/60 leading-relaxed max-w-sm font-body">
              Dedicated to supporting The National Kidney Foundation of Michigan through our annual charity golf tournament.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#c9973a]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Event Schedule", href: "/schedule" },
                { label: "Registration Details", href: "/registration" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Sponsorship", href: "/sponsorship" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-[#f5f0e8]/60 hover:text-[#f5f0e8] transition-colors cursor-pointer text-sm font-body" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-[#c9973a]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-[#f5f0e8]/60">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm font-body">
                  Forest Akers West Golf Course<br />
                  Michigan State University
                </span>
              </div>
              <div className="flex items-center space-x-3 text-[#f5f0e8]/60">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:info@jackpittshealthfoundation.org" className="text-sm hover:text-[#f5f0e8] transition-colors font-body">
                  Contact via Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#f5f0e8]/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-[#f5f0e8]/40 font-body">
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
