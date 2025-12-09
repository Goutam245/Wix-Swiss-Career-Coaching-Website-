import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, Rocket, TrendingUp, Crown } from "lucide-react";

const programs = [
  {
    name: "Accelerate",
    icon: Rocket,
    price: "CHF 5,250",
    duration: "3 months",
    format: "Self-paced + 1 session",
    bestFor: "Self-motivated job seekers wanting AI skills",
    href: "/programs/accelerate",
  },
  {
    name: "Elevate",
    icon: TrendingUp,
    price: "CHF 4,750",
    duration: "12 weeks",
    format: "Micro-group coaching",
    bestFor: "Professionals needing structure & community",
    href: "/programs/elevate",
    featured: true,
  },
  {
    name: "Executive",
    icon: Crown,
    price: "From CHF 16,500",
    duration: "6 months",
    format: "Premium 1:1 coaching",
    bestFor: "C-level & board aspirants",
    href: "/programs/executive",
  },
];

const categories = [
  {
    name: "BASICS",
    features: [
      { name: "Best For", accelerate: "Self-directed learners", elevate: "Professionals seeking structure", executive: "C-level/board aspirants" },
      { name: "Duration", accelerate: "3 months", elevate: "12 weeks", executive: "6 months" },
      { name: "Format", accelerate: "Self-paced online", elevate: "Live group sessions", executive: "1:1 premium coaching" },
      { name: "Time Commitment", accelerate: "4-6 hrs/week", elevate: "2.5-3 hrs/week", executive: "2-3 hrs/week" },
    ]
  },
  {
    name: "COACHING",
    features: [
      { name: "Coaching Sessions", accelerate: "1 session (60 min)", elevate: "12 weekly sessions", executive: "24 sessions (90-120 min)" },
      { name: "Session Length", accelerate: "60 minutes", elevate: "90 minutes", executive: "90-120 minutes" },
      { name: "Coaching Type", accelerate: "1:1 Executive", elevate: "Micro-group (5-10)", executive: "1:1 Premium" },
      { name: "Coach Credentials", accelerate: "Certified coaches", elevate: "Matched by industry", executive: "Michael Schmidt / Senior" },
    ]
  },
  {
    name: "FEATURES",
    features: [
      { name: "Community/Networking", accelerate: false, elevate: true, executive: "Exclusive network" },
      { name: "AI Training Level", accelerate: "Comprehensive", elevate: "Integrated", executive: "Advanced executive" },
      { name: "Swiss Market Expertise", accelerate: true, elevate: true, executive: true },
      { name: "Application Materials", accelerate: "Templates", elevate: "Personalized feedback", executive: "Executive optimization" },
      { name: "Interview Prep", accelerate: "Basic modules", elevate: "Practice sessions", executive: "Executive level" },
      { name: "Networking Support", accelerate: "Strategies only", elevate: "Active networking", executive: "Executive search access" },
      { name: "Salary Negotiation", accelerate: "Basic", elevate: true, executive: "C-level benchmarking" },
      { name: "Board Readiness", accelerate: false, elevate: false, executive: true },
      { name: "Confidentiality Level", accelerate: "Standard", elevate: "Standard", executive: "Complete discretion" },
    ]
  },
  {
    name: "SUPPORT",
    features: [
      { name: "App Access", accelerate: true, elevate: true, executive: true },
      { name: "Email Support", accelerate: true, elevate: true, executive: true },
      { name: "WhatsApp Support", accelerate: false, elevate: false, executive: "24/7" },
      { name: "Lifetime Alumni Access", accelerate: true, elevate: true, executive: true },
    ]
  },
  {
    name: "INVESTMENT",
    features: [
      { name: "Total Investment", accelerate: "CHF 5,250", elevate: "CHF 4,750", executive: "CHF 16,500-19,000" },
      { name: "Payment Options", accelerate: "3 monthly", elevate: "2-3 monthly", executive: "2-4 monthly or success fee" },
      { name: "Money-Back Guarantee", accelerate: "20 days", elevate: "20 days", executive: "4 weeks" },
      { name: "Tax Deductible", accelerate: true, elevate: true, executive: true },
      { name: "Average ROI", accelerate: "10x", elevate: "12x", executive: "15x" },
    ]
  },
  {
    name: "RESULTS",
    features: [
      { name: "Average Time to Job", accelerate: "12-16 weeks", elevate: "8-12 weeks", executive: "18-24 weeks" },
      { name: "Interview Success Rate", accelerate: "72%", elevate: "78%", executive: "90%" },
      { name: "Client Satisfaction", accelerate: "4.8/5", elevate: "4.9/5", executive: "4.95/5" },
    ]
  }
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-primary mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-muted mx-auto" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function ProgramCompare() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <p className="eyebrow mb-4">COMPARE PROGRAMS</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Which Career Bootcamp Program Is Right for You?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare features, pricing, and outcomes side-by-side.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-card section-padding">
        <div className="container-wide overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-border w-1/4"></th>
                {programs.map((program) => (
                  <th key={program.name} className={`p-4 border-b border-border ${program.featured ? 'bg-primary/5' : ''}`}>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-bold text-lg">{program.name}</span>
                      {program.featured && (
                        <span className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded-full">Most Popular</span>
                      )}
                      <span className="text-primary font-semibold">{program.price}</span>
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <>
                  <tr key={category.name} className="bg-muted/30">
                    <td colSpan={4} className="p-3 font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? 'bg-background' : ''}>
                      <td className="p-4 text-sm border-b border-border">{feature.name}</td>
                      <td className={`p-4 text-center border-b border-border`}>
                        <FeatureCell value={feature.accelerate} />
                      </td>
                      <td className={`p-4 text-center border-b border-border bg-primary/5`}>
                        <FeatureCell value={feature.elevate} />
                      </td>
                      <td className={`p-4 text-center border-b border-border`}>
                        <FeatureCell value={feature.executive} />
                      </td>
                    </tr>
                  ))}
                </>
              ))}
              
              <tr>
                <td className="p-4"></td>
                {programs.map((program) => (
                  <td key={program.name} className={`p-6 text-center ${program.featured ? 'bg-primary/5' : ''}`}>
                    <Button asChild variant={program.featured ? "default" : "outline"} size="lg" className="w-full">
                      <Link to={program.href}>Choose {program.name}</Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-light section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Still Not Sure?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and we'll help you choose the right program for your goals.
          </p>
          <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Book Free Strategy Call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
