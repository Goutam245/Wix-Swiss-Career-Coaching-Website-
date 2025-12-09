import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp, Crown, Check, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    name: "Accelerate",
    tagline: "Fast-Track Your Swiss Job Search",
    description: "Self-paced online program with AI-powered tools and one live coaching session.",
    bestFor: "Job seekers who want practical AI skills and results without weekly coaching",
    duration: "3 months",
    price: "CHF 5,250",
    href: "/programs/accelerate",
    features: [
      "12 self-paced online modules",
      "Career Bootcamp app with micro-quests",
      "AI advantage training",
      "1 live coaching session",
      "CV & LinkedIn optimization",
      "Lifetime access",
    ],
  },
  {
    icon: TrendingUp,
    name: "Elevate",
    tagline: "Transform Your Career in 12 Weeks",
    description: "Intensive micro-group coaching program with weekly live sessions and peer community.",
    bestFor: "Professionals needing structure, expert feedback, and community support",
    duration: "12 weeks",
    price: "CHF 4,750",
    href: "/programs/elevate",
    featured: true,
    features: [
      "12 weekly live coaching sessions",
      "5-10 person micro-groups",
      "CREATE-FIND-SEIZE methodology",
      "Personal branding development",
      "Interview mastery",
      "Peer community",
    ],
  },
  {
    icon: Crown,
    name: "Executive",
    tagline: "Exclusive Coaching for C-Level Leaders",
    description: "Premium 1:1 executive coaching with senior coaches who've held C-level positions.",
    bestFor: "Senior executives seeking board appointments or C-level transitions",
    duration: "6 months",
    price: "From CHF 16,500",
    href: "/programs/executive",
    features: [
      "Premium 1:1 coaching",
      "Weekly 90-120 min sessions",
      "24/7 WhatsApp support",
      "Board positioning",
      "Executive search intelligence",
      "Complete confidentiality",
    ],
  },
];

export default function Programs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <p className="eyebrow mb-4">OUR PROGRAMS</p>
            <h1 className="mb-6">Three Programs. One Mission: Your Career Success.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're starting your job search, accelerating your career, or 
              targeting a C-level position, we have a program tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.name}
                className={`relative bg-background rounded-2xl border-2 ${
                  program.featured ? "border-primary shadow-lg" : "border-border"
                } overflow-hidden card-hover`}
              >
                {program.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="h-1.5 bg-primary" />
                
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                  <p className="text-primary italic mb-4">{program.tagline}</p>
                  <p className="text-muted-foreground mb-6">{program.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="text-muted-foreground">Duration: <strong className="text-foreground">{program.duration}</strong></span>
                  </div>

                  <div className="border-t border-border my-6" />

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <p className="text-2xl font-bold">{program.price}</p>
                  </div>

                  <Button asChild variant="cta" size="lg">
                    <Link to={program.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programs/compare"
              className="text-primary font-medium hover:underline"
            >
              Compare all programs side-by-side →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-6">Not Sure Which Program Is Right For You?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and we'll help you choose the perfect program for your goals.
          </p>
          <Button asChild variant="default" size="xl">
            <Link to="/contact">Book Free Strategy Call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
