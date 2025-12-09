import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Check, Clock, Users, Calendar, Target, Smartphone, MessageSquare, BookOpen, Award, Video, RefreshCw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    name: "CREATE",
    weeks: "Weeks 1-4",
    subtitle: "Your Why. Your Northstar.",
    icon: "🎯",
    description: "Define your unique value proposition and personal brand",
    topics: ["Discover your ideal career path", "Define your unique value proposition", "Build your personal brand identity", "Clarify your career vision and values"],
    outcome: "Crystal-clear personal brand and career direction"
  },
  {
    name: "FIND",
    weeks: "Weeks 5-8",
    subtitle: "Your What. Your Strategy.",
    icon: "🔍",
    description: "Navigate the Swiss job market and hidden opportunities",
    topics: ["Navigate the Swiss and international job market", "Tailored application strategy for your target roles", "Craft application materials that set you apart", "Access the hidden job market", "Master Swiss networking strategies"],
    outcome: "Customized job search strategy and standout materials"
  },
  {
    name: "SEIZE",
    weeks: "Weeks 9-12",
    subtitle: "Your How. Your Empowerment.",
    icon: "💪",
    description: "Master interviews and secure your ideal position",
    topics: ["Master the art of job acquisition", "Interview preparation and practice", "Salary negotiation mastery", "Build sustainable career momentum", "Celebrate your success"],
    outcome: "Fully empowered to ace interviews and land offers"
  },
];

const cohorts = [
  { date: "December 1, 2025", seats: 3, urgent: true },
  { date: "January 19, 2026", seats: 7, urgent: false },
  { date: "March 2, 2026", seats: 10, urgent: false },
];

const features = [
  { icon: Users, title: "12 Weekly Live Group Coaching Sessions", description: "Join a cohort of 5-10 ambitious professionals. Get real-time feedback, strategies, and support from certified coaches every week." },
  { icon: Smartphone, title: "Bite-Sized Micro-Quests via App", description: "Stay motivated with engaging daily tasks, videos, templates, and tips delivered to your device between sessions." },
  { icon: MessageSquare, title: "Peer Networking & Community", description: "Build valuable connections, share progress, and expand your Swiss network in a supportive environment." },
  { icon: Target, title: "Personalized Feedback", description: "Submit your materials and receive expert guidance throughout your 12-week journey." },
  { icon: BookOpen, title: "Comprehensive Resources", description: "Access templates, checklists, video tutorials, and insider knowledge in our resource library." },
  { icon: Award, title: "Lifetime Alumni Access", description: "Join our alumni community for ongoing support and networking after program completion." },
];

const schedule = [
  { day: "Monday evening", activity: "90-minute live group coaching session (via Zoom)", duration: "90 min" },
  { day: "Tuesday-Thursday", activity: "Micro-quests (app-based learning, self-paced)", duration: "30-45 min" },
  { day: "Wednesday", activity: "Peer exchange (optional networking calls with cohort)", duration: "30 min" },
  { day: "Friday", activity: "Reflection & journaling (guided prompts in app)", duration: "15 min" },
];

const faqs = [
  { q: "What if I miss a live session?", a: "All sessions are recorded. You'll have access to replays within 24 hours." },
  { q: "How big are the cohorts?", a: "Maximum 10 participants to ensure personalized attention." },
  { q: "Can I join from outside Switzerland?", a: "Absolutely! Sessions are online, and we work with clients globally." },
];

const personas = [
  "Professionals seeking structured, step-by-step guidance",
  "Job seekers who value community and peer support",
  "Expats navigating the Swiss job market",
  "Career changers needing comprehensive strategy",
  "Anyone who wants expert feedback and accountability"
];

export default function ProgramElevate() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-primary text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Most Popular Program
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Elevate Your Career in 12 Weeks: Karrierecoaching With Structure, Community, and Expert Coaching
              </h1>
              
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                <span className="font-semibold text-primary">CREATE</span> your brand. <span className="font-semibold text-primary">FIND</span> your opportunities. <span className="font-semibold text-primary">SEIZE</span> your ideal role.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>12 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Users className="w-5 h-5 text-gold" />
                  <span>5-10 participants</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span>Weekly live sessions</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Join Next Cohort – CHF 4,750</Link>
                </Button>
              </div>
              
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-warning/10 text-warning text-sm rounded-full font-medium">
                <span>⚠️ Next cohort starts December 1 – Only 3 seats remaining!</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl border-2 border-gold border-t-4 p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Investment</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold text-primary">CHF 4,750</p>
                <p className="text-foreground/70 text-sm">One-time or flexible installments</p>
              </div>
              
              <div className="bg-gold/10 rounded-xl p-4 mb-6">
                <p className="text-sm font-medium mb-3 text-foreground">Next Cohort Dates:</p>
                {cohorts.map((cohort) => (
                  <div key={cohort.date} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-foreground">{cohort.date}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      cohort.urgent ? "bg-warning/20 text-warning" : "bg-gold/20 text-primary"
                    }`}>
                      {cohort.seats} seats {cohort.urgent ? "left" : "available"}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-5 h-5 text-gold" />
                  12 weekly live group sessions
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-5 h-5 text-gold" />
                  Peer community access
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-5 h-5 text-gold" />
                  20-day money-back guarantee
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-5 h-5 text-gold" />
                  Tax-deductible investment
                </li>
              </ul>
              
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/contact">Reserve Your Spot</Link>
              </Button>
              <p className="text-xs text-foreground/60 text-center mt-3">Pay just CHF 475 (10%) to reserve. Balance before start date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">The CREATE-FIND-SEIZE Methodology</h2>
            <p className="text-foreground/70">Our proven 3-phase approach refined since 2019</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={phase.name} className="bg-background rounded-xl p-8 border border-border border-t-4 border-t-gold">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{phase.name}</h3>
                    <p className="text-sm text-gold">{phase.weeks}</p>
                  </div>
                </div>
                
                <p className="text-sm font-medium text-foreground/70 mb-2">{phase.icon} {phase.subtitle}</p>
                <p className="text-foreground/70 text-sm mb-6">{phase.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {phase.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      {topic}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gold/10 rounded-lg p-3">
                  <p className="text-xs font-medium text-gold">Outcome:</p>
                  <p className="text-sm text-foreground">{phase.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">What's Included</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card rounded-xl p-6 border border-border border-t-4 border-t-gold">
                <feature.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">What a Typical Week Looks Like</h2>
            <p className="text-foreground/70">Weekly Commitment: 2.5-3 hours</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-background rounded-xl p-4 border border-border">
                <div className="w-24 shrink-0">
                  <p className="text-sm font-medium text-gold">{item.day}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{item.activity}</p>
                </div>
                <div className="text-xs text-foreground/60">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Investment: CHF 4,750</h2>
          </div>

          <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 border border-border border-t-4 border-t-gold">
            <h3 className="font-semibold mb-4 text-foreground">Flexible Payment Options:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center justify-between text-sm text-foreground">
                <span>2 monthly installments:</span>
                <span className="font-medium">CHF 2,390/month</span>
              </li>
              <li className="flex items-center justify-between text-sm text-foreground">
                <span>3 monthly installments:</span>
                <span className="font-medium">CHF 1,600/month</span>
              </li>
              <li className="flex items-center justify-between text-sm text-foreground">
                <span>Full payment upfront (save 3%):</span>
                <span className="font-medium text-gold">CHF 4,608</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-4 justify-center text-xs text-foreground/70 mb-6 py-4 border-t border-border">
              <span>🔄 20-Day Money-Back Guarantee</span>
              <span>📜 Tax-Deductible (up to CHF 12,400/year)</span>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/contact">Reserve Your Spot</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Who Is This For?</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3">
              {personas.map((persona) => (
                <li key={persona} className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border">
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm text-foreground">{persona}</span>
                </li>
              ))}
            </ul>
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Elevate Your Career?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our next cohort and transform your career in 12 weeks.
          </p>
          <Button asChild variant="cta" size="xl">
            <Link to="/contact">Join Next Cohort</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
