import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Mail, Users } from "lucide-react";

const benefits = [
  "Proven job search strategies",
  "AI-powered application tools",
  "Swiss market insider knowledge",
  "Exclusive templates and resources",
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-background section-padding border-y border-border">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-foreground">Career Insights</p>
                  <p className="text-muted-foreground">Weekly Newsletter</p>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-4 left-4 bg-card rounded-xl px-4 py-2 shadow-lg">
                <p className="text-sm font-medium text-foreground">100+ Articles</p>
                <p className="text-xs text-muted-foreground">10,000+ Subscribers</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <p className="eyebrow mb-4">CAREER INSIGHTS NEWSLETTER</p>
            
            <h3 className="text-3xl font-bold mb-4">
              Career Insights Newsletter: Weekly Strategies from a Former F1 Executive
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Join 10,000+ professionals getting actionable Karrierecoaching insights, 
              Swiss job market trends, and AI tools delivered weekly.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  required
                />
                <Button type="submit" variant="cta" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe Free"}
                </Button>
                <p className="text-xs text-muted">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <Check className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground">Welcome aboard!</p>
                <p className="text-sm text-muted-foreground">Check your inbox for confirmation.</p>
              </div>
            )}

            {/* Social Proof */}
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground italic">
              <Users className="w-4 h-4" />
              Join readers from UBS, Nestlé, Roche, Google, and 30+ leading companies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
