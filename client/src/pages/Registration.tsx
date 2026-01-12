import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Check, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Registration() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <PageHeader 
        title="Registration" 
        subtitle="Secure your spot for the 2025 Jack Pitts Open."
      />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Pricing Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
            >
              <div className="bg-primary p-8 text-center text-white">
                <h3 className="text-2xl font-display font-bold mb-2">Player Entry</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">$125</span>
                  <span className="text-primary-foreground/80">/ person</span>
                </div>
                <p className="mt-2 text-sm text-accent font-semibold bg-accent/20 inline-block px-3 py-1 rounded-full">
                  Early Bird Price: Before July 18
                </p>
                <div className="mt-2 text-white/60 text-sm">
                  $150 / person after July 18
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  {[
                    "18 Holes of Golf with Cart",
                    "Continental Breakfast",
                    "Lunch at the Turn",
                    "Dinner Buffet",
                    "Prizes for Men & Women",
                    "Gift Bag (Balls, Towel, Tees)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-center text-sm text-muted-foreground mb-6">
                    <strong>Deadline:</strong> July 18, 2025<br/>
                    <em>Note: No cash accepted at the course.</em>
                  </p>
                  <Button className="w-full h-12 text-lg font-semibold shadow-lg shadow-primary/20">
                    Download Entry Form
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Instructions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">How to Register</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We are keeping it classic. To ensure all proceeds go directly to the cause without processing fees, we are accepting registrations via mail.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent-foreground font-bold flex items-center justify-center shrink-0 border border-accent/50">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Download the Form</h4>
                    <p className="text-muted-foreground">Get the official entry form PDF. You can fill it out digitally and print it, or print and fill by hand.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent-foreground font-bold flex items-center justify-center shrink-0 border border-accent/50">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Prepare Payment</h4>
                    <p className="text-muted-foreground">Make checks payable to <strong>"Jack Pitts Health Foundation"</strong>.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 text-accent-foreground font-bold flex items-center justify-center shrink-0 border border-accent/50">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Mail It In</h4>
                    <p className="text-muted-foreground mb-4">Send your completed form and check to:</p>
                    <div className="bg-muted p-4 rounded-lg border border-border inline-block">
                      <p className="font-mono text-sm text-foreground">
                        Jack Pitts Health Foundation<br/>
                        P.O. Box 1234<br/>
                        East Lansing, MI 48823
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Questions?</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      If you have any questions about registration or sponsorship opportunities, please email us at <a href="mailto:info@jackpittshealthfoundation.org" className="text-primary hover:underline">info@jackpittshealthfoundation.org</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
