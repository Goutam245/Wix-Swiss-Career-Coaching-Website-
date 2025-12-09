import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Check, Clock, Target, Zap, BookOpen, Shield, Video, CreditCard, FileText, Users, RefreshCw, Globe, Briefcase, Search, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    number: 1,
    title: "AI Advantage Foundations",
    icon: "🤖",
    topics: ["Understand Gen AI, LLMs, and Agentic AI", "Gain AI tool insights for efficient job search", "Build your AI utilization plan"],
    duration: "~60 minutes"
  },
  {
    number: 2,
    title: "Prompt Engineering Mastery",
    icon: "✍️",
    topics: ["Best-practice techniques for CV, cover letters, LinkedIn", "AI-powered interview prep", "Automating application processes"],
    duration: "~75 minutes"
  },
  {
    number: 3,
    title: "Swiss CV Optimization",
    icon: "📄",
    topics: ["Swiss CV standards and formatting", "ATS (Applicant Tracking System) optimization", "Tailoring for different industries"],
    duration: "~90 minutes"
  },
  {
    number: 4,
    title: "LinkedIn Profile Maximization",
    icon: "💼",
    topics: ["Headline and summary formulas", "Keyword optimization for Swiss market", "Building thought leadership content"],
    duration: "~60 minutes"
  },
  {
    number: 5,
    title: "Cover Letter Strategy",
    icon: "✉️",
    topics: ["Swiss-style cover letters", "Personalization at scale with AI", "Standing out in competitive markets"],
    duration: "~45 minutes"
  },
  {
    number: 6,
    title: "Application Tracking & Organization",
    icon: "📊",
    topics: ["Tools and systems for managing applications", "Follow-up strategies", "Tracking success metrics"],
    duration: "~30 minutes"
  },
  {
    number: 7,
    title: "Networking Fundamentals",
    icon: "🤝",
    topics: ["Swiss networking culture", "LinkedIn outreach templates", "Building authentic connections"],
    duration: "~60 minutes"
  },
  {
    number: 8,
    title: "Interview Preparation",
    icon: "🎯",
    topics: ["Common Swiss interview questions", "STAR method mastery", "Video interview best practices"],
    duration: "~90 minutes"
  },
  {
    number: 9,
    title: "Salary Negotiation Basics",
    icon: "💰",
    topics: ["Swiss salary benchmarks by industry", "Negotiation scripts and tactics", "Benefits and perks to consider"],
    duration: "~60 minutes"
  },
  {
    number: 10,
    title: "Personal Branding",
    icon: "🌟",
    topics: ["Defining your unique value proposition", "Consistent messaging across platforms", "Building your professional story"],
    duration: "~75 minutes"
  },
  {
    number: 11,
    title: "Hidden Job Market Access",
    icon: "🔍",
    topics: ["How to find unadvertised positions", "Networking into opportunities", "Recruiter relationships"],
    duration: "~60 minutes"
  },
  {
    number: 12,
    title: "Job Search Sprint Planning",
    icon: "🏃",
    topics: ["Creating your 90-day action plan", "Staying motivated and organized", "Measuring progress and pivoting"],
    duration: "~45 minutes"
  },
];

const highlights = [
  { icon: BookOpen, stat: "12 Modules", label: "Self-Paced Learning" },
  { icon: Zap, stat: "4x Faster", label: "AI-Powered Applications" },
  { icon: Video, stat: "1 Session", label: "Live Executive Coaching" },
  { icon: RefreshCw, stat: "Lifetime Access", label: "All Materials & Updates" },
];

const personas = [
  { icon: Search, title: "Job Seekers", description: "Actively searching for your next role and want to work at your own pace with cutting-edge AI tools." },
  { icon: RefreshCw, title: "Career Changers", description: "Transitioning to a new industry or role and need to optimize your application materials quickly." },
  { icon: Globe, title: "Expats", description: "New to the Swiss job market and need to understand local application standards and expectations." },
  { icon: Zap, title: "Efficiency Seekers", description: "Value speed and results. Want to upskill with AI tools without committing to weekly coaching sessions." },
  { icon: Briefcase, title: "Budget-Conscious Professionals", description: "Looking for high-quality career coaching at an accessible price point with flexible payment options." },
];

const faqs = [
  { q: "How long do I have access to the modules?", a: "Lifetime access to all materials and updates. Once enrolled, you can revisit content anytime." },
  { q: "When can I schedule my coaching session?", a: "Anytime within 6 months of enrollment. Book directly via our calendar link sent upon enrollment." },
  { q: "Do I need prior AI experience?", a: "No! Modules are designed for beginners to advanced users. We start with fundamentals and build up." },
  { q: "Can I complete the program faster than 3 months?", a: "Absolutely! It's self-paced. Many clients complete all modules in 4-6 weeks." },
  { q: "What if I get stuck on a module?", a: "Email support is included. We typically respond within 24 hours on business days." },
  { q: "Is there a certificate upon completion?", a: "Yes! You'll receive a Career Bootcamp Accelerate Certificate of Completion." },
];

export default function ProgramAccelerate() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">ACCELERATE PROGRAM</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Accelerate Your Swiss Job Search with AI-Powered Tools
            </h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
              Master AI for career success. Get results 4x faster. One coaching session included.
            </p>
            
            <Button asChild variant="hero" size="xl" className="mb-6">
              <Link to="/contact">Enroll in Accelerate – CHF 1,750/month</Link>
            </Button>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/70">
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gold" />
                Flexible payment
              </span>
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-gold" />
                20-day money-back guarantee
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold" />
                Tax-deductible
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-card py-12">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.stat} className="text-center">
                <item.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="text-2xl font-bold text-primary">{item.stat}</p>
                <p className="text-sm text-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">12 Modules. Self-Paced. AI-Powered.</h2>
            <p className="text-foreground/70">Complete curriculum designed to transform your job search in 90 days</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {modules.map((module) => (
                <AccordionItem key={module.number} value={`module-${module.number}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                        {module.number}
                      </span>
                      <div>
                        <span className="font-semibold text-foreground">{module.icon} {module.title}</span>
                        <p className="text-xs text-foreground/60 mt-1">{module.duration}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2 ml-14">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <p className="text-center text-foreground/70 mt-8 text-sm">
              Total Program Duration: ~12 hours of video content + exercises
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Session */}
      <section className="bg-primary/5 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Video className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Plus: One Live Coaching Session with an Executive Coach</h3>
                <p className="text-foreground/70">Use your 60-minute 1:1 session to get personalized feedback on:</p>
              </div>
            </div>
            
            <ul className="grid md:grid-cols-2 gap-3 mb-6">
              {["CV and LinkedIn profile review", "Application strategy for your target companies", "Interview preparation and mock interview", "Salary negotiation coaching", "Career transition guidance"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-sm text-foreground/70">
              Book anytime within 6 months of enrollment. Sessions available in English and German.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Investment: CHF 1,750/month × 3 Months</h2>
            <p className="text-foreground/70">Total: CHF 5,250 | Tax-deductible in most Swiss cantons</p>
          </div>

          <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 border-2 border-gold border-t-4">
            <h3 className="text-lg font-semibold mb-6 text-foreground">What's Included:</h3>
            <ul className="space-y-3 mb-8">
              {[
                "12 self-paced online modules (~12 hours video content)",
                "Career Bootcamp app access (iOS & Android)",
                "Templates, checklists, and resources library",
                "1 live coaching session (60 min with executive coach)",
                "Lifetime access to all materials and future updates",
                "Email support throughout program",
                "Certificate of completion"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-secondary rounded-xl p-4 mb-6">
              <p className="text-sm font-medium mb-2 text-foreground">Payment Options:</p>
              <p className="text-sm text-foreground/80">3 monthly installments of CHF 1,750</p>
              <p className="text-xs text-foreground/60 mt-2">Secure payment via: Credit Card | Apple Pay | Google Pay | PayPal | Bank Transfer</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-xs text-foreground/70 mb-6">
              <span className="flex items-center gap-1">🔄 20-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1">🔒 Secure Checkout</span>
              <span className="flex items-center gap-1">📜 Tax-Deductible</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg" className="flex-1">
                <Link to="/contact">Enroll Now</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg" className="flex-1">
                <Link to="/contact">Book Free Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Perfect For:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personas.map((persona) => (
              <div key={persona.title} className="bg-background rounded-xl p-6 border border-border border-t-4 border-t-gold">
                <persona.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">{persona.title}</h3>
                <p className="text-sm text-foreground/70">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left py-4 text-sm font-medium text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-foreground/80">
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start today and gain the AI-powered advantage in your Swiss job search.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">Enroll Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
