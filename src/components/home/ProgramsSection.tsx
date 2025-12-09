import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Crown, Check, AlertCircle } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    name: "Accelerate",
    tagline: "Fast-Track Your Swiss Job Search",
    bestFor: "Job seekers who want practical AI skills and results without weekly coaching",
    features: [
      "12 self-paced online modules",
      "Career Bootcamp app with micro-quests",
      "AI advantage training (4x faster applications)",
      "1 live coaching session with executive coach",
      "CV, LinkedIn, and Swiss application optimization",
      "Lifetime access to materials",
    ],
    outcome: "Reskill for AI employability. Up to 4x faster job search.",
    price: "CHF 1,750/month × 3 months",
    priceNote: "Total: CHF 5,250",
    cta: "Start Accelerate Program",
    href: "/programs/accelerate",
    cohorts: null,
  },
  {
    icon: TrendingUp,
    name: "Elevate",
    tagline: "Transform Your Career in 12 Weeks",
    bestFor: "Professionals needing structure, expert feedback, and community support, without the impersonal feel of large outplacement programs",
    features: [
      "12-week CREATE-FIND-SEIZE methodology",
      "12 weekly live micro-group coaching sessions",
      "Intimate cohorts of 5-10 participants only",
      "Hand-selected coaches matched to your industry",
      "Bite-sized micro-quests via Career Bootcamp app",
      "Personal branding and value proposition development",
      "Swiss networking strategies and hidden job market",
      "Interview mastery and salary negotiation",
      "Peer community and ongoing support",
    ],
    outcome: "Clarity on your brand. Tailored application strategy. Master interviews. Access Swiss networks.",
    callout: "Unlike large workshops or solo coaching, our 5-10 person cohorts deliver the perfect balance: intimate enough for personalized attention, dynamic enough for peer learning.",
    price: "CHF 4,750",
    priceNote: "Flexible payment: 2-3 monthly installments",
    cta: "Join Next Elevate Cohort",
    href: "/programs/elevate",
    cohorts: [
      { date: "December 1, 2025", seats: 3, urgent: true },
      { date: "January 19, 2026", seats: 7, urgent: false },
      { date: "March 2, 2026", seats: 10, urgent: false },
    ],
    featured: true,
  },
  {
    icon: Crown,
    name: "Executive",
    tagline: "Exclusive Coaching for C-Level Leaders",
    bestFor: "Senior executives seeking board appointments, C-level transitions, or confidential career advancement, who demand coaches with actual C-level experience",
    features: [
      "6 months of premium 1:1 executive coaching",
      "Weekly 90-120 min sessions with senior coaches",
      "Former F1 Executive + CEOs, CHROs, Board Members",
      "Coach matching based on your target industry",
      "24/7 WhatsApp support channel",
      "Executive search intelligence and board positioning",
      "C-level salary benchmarking and negotiation mastery",
      "Executive presence enhancement",
      "Complete confidentiality and discretion",
    ],
    outcome: "Secure C-level or board positions. 90% interview success rate. Average 18-24 week placement.",
    callout: "Your coach has lived your journey, held C-level positions, navigated board appointments, led through crises. Since 2019, we've placed executives at UBS, Nestlé, Roche, Fortune 500 companies.",
    price: "CHF 19,000 (6 months)",
    priceNote: "OR CHF 16,500 + 3% success fee",
    cta: "Schedule Confidential Consultation",
    href: "/programs/executive",
    cohorts: null,
  },
];

export function ProgramsSection() {
  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[42px] font-bold mb-3 leading-tight">Three Programs. One Mission: Your Career Success.</h2>
          <p className="text-sm text-muted-foreground">
            Choose the path that fits your ambition and career stage
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {programs.map((program) => (
            <div
              key={program.name}
              className={`relative bg-card rounded-2xl border-2 ${
                program.featured ? "border-primary shadow-lg" : "border-border"
              } overflow-hidden card-hover`}
            >
              {/* Top Accent - Gold Border */}
              <div className="h-1 bg-gold" />
              
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Name & Tagline */}
                <h3 className="text-lg font-bold mb-1">{program.name}</h3>
                <p className="text-primary italic text-sm mb-3">{program.tagline}</p>

                {/* Best For */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-foreground">Best For: </span>
                  <span className="text-xs text-muted-foreground">{program.bestFor}</span>
                </div>

                <div className="border-t border-border my-4" />

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold mb-2">What You Get:</p>
                  <ul className="space-y-1.5">
                    {program.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {program.features.length > 5 && (
                      <li className="text-xs text-primary font-medium">
                        +{program.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Callout Box */}
                {program.callout && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground italic">{program.callout}</p>
                  </div>
                )}

                {/* Outcome Box */}
                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-foreground">{program.outcome}</p>
                </div>

                {/* Price */}
                <div className="mb-4 bg-gold/10 rounded-lg p-3">
                  <p className="text-xl font-extrabold text-gold">{program.price}</p>
                  <p className="text-xs text-muted-foreground">{program.priceNote}</p>
                </div>

                {/* CTA */}
                <Button asChild variant="cta" size="default" className="w-full">
                  <Link to={program.href}>{program.cta}</Link>
                </Button>

                {/* Cohort Dates */}
                {program.cohorts && (
                  <div className="mt-4 space-y-1.5">
                    <p className="text-xs font-semibold">Next Cohort Dates:</p>
                    {program.cohorts.map((cohort, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{cohort.date}</span>
                        <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                          cohort.urgent
                            ? "bg-warning/20 text-warning"
                            : "bg-primary/10 text-primary"
                        }`}>
                          {cohort.seats} seats {cohort.urgent ? "remaining" : "available"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Compare Link */}
        <div className="text-center">
          <Link
            to="/programs/compare"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <AlertCircle className="w-4 h-4" />
            Not sure which program is right for you? Compare all programs side-by-side →
          </Link>
        </div>
      </div>
    </section>
  );
}
