import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Check, Clock, MessageCircle, Shield, Target, Users, Award, Briefcase, Globe, Star, Phone, Mail, Lock, Smartphone, FileText, Bot } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const painPoints = [
  "Seeking your next C-level role or first/next board appointment?",
  "Transitioning to a larger organization or different industry?",
  "Need to articulate your executive value proposition more powerfully?",
  "Uncertain about leveraging AI and modern executive search strategies?",
  "Navigating a confidential career transition?",
  "Want to accelerate your C-level career trajectory?"
];

const whatYouGet = [
  {
    icon: Users,
    title: "Weekly 1:1 Executive Coaching Sessions",
    items: ["90-120 minute sessions with Michael M. Schmidt or Jacqueline Gestach", "24 personalized sessions over 6 months", "Complete confidentiality and discretion"]
  },
  {
    icon: Smartphone,
    title: "24/7 Executive Support",
    items: ["Dedicated WhatsApp channel for real-time guidance", "Immediate answers to urgent career questions", "Strategic advice when you need it most"]
  },
  {
    icon: FileText,
    title: "Premium Executive Resources",
    items: ["Executive search intelligence and insider knowledge", "Board appointment strategies (first or next board role)", "C-level salary benchmarking and compensation negotiation", "Executive presence enhancement for boardroom environments"]
  },
  {
    icon: Bot,
    title: "Advanced AI Executive Tools",
    items: ["Executive-level AI mastery for personal branding", "LinkedIn Executive and board network optimization", "Advanced prompt engineering for executive communications", "Executive market intelligence using cutting-edge tools"]
  },
  {
    icon: Briefcase,
    title: "Swiss Executive Application Coaching",
    items: ["C-level CV and executive profile optimization", "Cover letter and LinkedIn presence refinement", "Swiss executive market positioning", "Hidden executive job market access strategies"]
  }
];

const differentiators = [
  { icon: Award, title: "Executive-Level Credentials", description: "Michael M. Schmidt: Former F1 team executive, MBA, certified Master Business Coach" },
  { icon: Star, title: "Proven C-Level Success", description: "90% interview success rate. Average placement: 18-24 weeks. Clients at UBS, Nestlé, Roche." },
  { icon: Lock, title: "Complete Confidentiality", description: "Discretion guaranteed for sensitive executive transitions." },
  { icon: Globe, title: "Swiss & International Expertise", description: "Deep knowledge of Swiss executive culture and global C-level markets." },
  { icon: Crown, title: "Board Appointment Specialization", description: "Proven strategies for securing first or next board roles." },
  { icon: Target, title: "Results-Oriented", description: "4.95/5 client satisfaction. Clients negotiate 18-35% higher compensation on average." },
];

const testimonials = [
  { name: "Dr. Andreas C.", role: "Sports Apparel Executive", quote: "Michael's methodology is truly one of a kind: high-impact, goal-driven, efficient and fun." },
  { name: "Peter L.", role: "CEO, Global Sport Apparel", quote: "The personalized coaching and strategic advice were invaluable. I secured my CEO role!" },
  { name: "Stephan G.", role: "CFO, Swiss Banking", quote: "15 weeks from zero to C-Level. The Career Bootcamp method is unparalleled." },
];

const faqs = [
  { q: "Is everything confidential?", a: "Absolutely. Complete discretion is guaranteed, especially for sensitive transitions." },
  { q: "Who will be my coach?", a: "Michael M. Schmidt or Jacqueline Gestach, both certified executive coaches with extensive C-level experience." },
  { q: "What if I'm based outside Switzerland?", a: "We work with executives globally. All sessions are conducted online with flexibility for time zones." },
  { q: "How does the success fee option work?", a: "You pay CHF 16,500 upfront, then 3% of your first-year total compensation once you sign your contract." },
];

export default function ProgramExecutive() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-primary text-sm font-medium mb-6">
                <Crown className="w-4 h-4" />
                Premium Executive Program
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Exclusive Executive Coaching & Outplacement for C-Level Leaders in Zürich
              </h1>
              
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                6 months of premium 1:1 coaching with former C-level executives. Complete confidentiality. 90% interview success rate since 2019.
              </p>
              
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Not a solo coach. Not a corporate factory. A hand-selected team of former CEOs, CHROs, and executive search partners who've held the roles you're targeting.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="px-3 py-1.5 bg-card border border-border rounded-full">Former F1 Executive Founder</span>
                <span className="px-3 py-1.5 bg-card border border-border rounded-full">Hand-Selected C-Level Coaches</span>
                <span className="px-3 py-1.5 bg-card border border-border rounded-full">Established Since 2019</span>
                <span className="px-3 py-1.5 bg-card border border-border rounded-full">Proven Board Appointment Success</span>
              </div>

              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Schedule Confidential Consultation</Link>
              </Button>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-bold mb-6">Investment Options</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-background rounded-xl p-5 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-medium">Executive Transformation Package</span>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">CHF 19,000</p>
                  <p className="text-sm text-muted-foreground">Full payment or 2-4 monthly installments</p>
                  <p className="text-xs text-muted-foreground mt-2">100% money-back guarantee (first 4 weeks)</p>
                </div>
                
                <div className="text-center text-muted-foreground text-sm">OR</div>
                
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-medium">Executive Success Partnership</span>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">CHF 16,500 + 3%</p>
                  <p className="text-sm text-muted-foreground">Reduced upfront + success fee on first year compensation</p>
                  <p className="text-xs text-muted-foreground mt-2">Aligned incentives: we succeed when you succeed</p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  6 months premium 1:1 coaching
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  24/7 WhatsApp support
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  Tax-deductible investment
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary" />
                  90% interview success rate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Are You Ready for Your Next Executive Move?</h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              {painPoints.map((point) => (
                <label key={point} className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{point}</span>
                </label>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              If you checked any box, the Executive Program is designed for you.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">6 Months of Transformational Executive Coaching</h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {whatYouGet.map((category) => (
              <div key={category.title} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Executives Choose Us */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Executives Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-6 border border-border">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">90%</p>
              <p className="text-muted-foreground">Interview success rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">18-24</p>
              <p className="text-muted-foreground">Weeks average placement</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">15x</p>
              <p className="text-muted-foreground">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Executive Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-sm text-foreground mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="bg-primary/5 section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Next Step: Schedule a Confidential Consultation</h2>
            <p className="text-muted-foreground mb-6">
              Discuss your executive career goals in a private, no-obligation conversation. We'll explore:
            </p>
            <ul className="space-y-2 text-sm text-left max-w-md mx-auto mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Your C-level or board aspirations</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Current challenges and opportunities</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />How the Executive Program can accelerate your success</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Which investment option aligns with your goals</li>
            </ul>
            
            <Button asChild variant="hero" size="xl" className="mb-6">
              <Link to="/contact">Schedule Confidential Call</Link>
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+41782228002" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +41 78 222 80 02
              </a>
              <a href="mailto:michael@career-bootcamp.net" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                michael@career-bootcamp.net
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left py-4 text-sm font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready for Your Next Chapter?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to discuss your executive career goals.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">Schedule Confidential Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
