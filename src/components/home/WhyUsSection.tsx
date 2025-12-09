import { Target, Users, Gift, Bot, Globe, Shield } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Proprietary Career Bootcamp Method",
    description: `Developed and refined since 2019, our structured CBC methodology combines the agility of personalized coaching with the rigor of proven frameworks. 96% success rate across 250+ clients, from job seekers to C-level executives.

Unlike generic approaches from big outplacement firms or untested solo coaches, our method is time-boxed, goal-oriented, and intensely personal.`,
  },
  {
    icon: Users,
    title: "Hand-Selected Expert Coaching Team",
    description: `Your success depends on the right coach, not just any coach. Our hand-picked team of former C-level executives, CHROs, headhunters, and marketing strategists brings 5,000+ collective coaching hours and real-world senior leadership experience.

We match you with coaches who've walked your path. Former F1 executive leadership. Fortune 500 HR directors. Executive search partners. CMOs. CEOs. Not career theorists, but career practitioners.`,
  },
  {
    icon: Gift,
    title: "Tailored Programs for Every Need",
    description: `From self-paced online courses (Accelerate) to dynamic micro-group coaching (Elevate) to premium 1:1 executive coaching, we offer flexibility without sacrificing quality.

Big firms force you into rigid programs. Solo coaches lack scalability. We provide choice, structure, and proven results at every level.`,
  },
  {
    icon: Bot,
    title: "AI Integration & Modern Tools",
    description: `Since 2019, we've pioneered AI-powered career coaching in Switzerland. Master cutting-edge tools for job search, personal branding, and 4x faster applications, staying ahead in a market transformed by technology.`,
  },
  {
    icon: Globe,
    title: "Swiss Market Mastery & International Reach",
    description: `Deep understanding of Swiss corporate culture, hidden job market dynamics, and local networking strategies, combined with global executive search expertise. Whether you're targeting Zürich, Geneva, or international C-level roles, we know the terrain.`,
  },
  {
    icon: Shield,
    title: "Established Track Record & Guaranteed Results",
    description: `Since 2019, we've placed professionals at UBS, Nestlé, Roche, Novartis, Google, and 30+ leading organizations. 100% money-back guarantee. Average ROI of 15x.

We're the high-impact boutique challenging both solo coaches and corporate giants, and winning.`,
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="mb-4">
            Why 250+ Professionals Choose Career Bootcamp Over Solo Coaches and Big Outplacement Firms
          </h2>
          <p className="text-lg text-gold font-semibold">
            The Precision of a Boutique. The Power of Proven Expertise. Since 2019.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background rounded-xl p-8 border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>

              {/* Description */}
              <div className="space-y-3">
                {benefit.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
