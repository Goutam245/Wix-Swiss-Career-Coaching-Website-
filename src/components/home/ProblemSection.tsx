import { Globe, BarChart3, Briefcase, X } from "lucide-react";

const challenges = [
  {
    icon: Globe,
    title: "Job Seekers & Expats",
    painPoints: [
      "Hundreds of applications, zero responses",
      "AI filters blocking your CV before human eyes see it",
      "Swiss \"hidden job market\" feels impossible to access",
      "Don't know how to \"Swissify\" your application",
      "Solo coaches lack Swiss market depth; big firms treat you like a number",
    ],
  },
  {
    icon: BarChart3,
    title: "Mid-Career Professionals",
    painPoints: [
      "Stuck in the wrong role, unclear about next steps",
      "Personal brand doesn't reflect your true value",
      "Networking feels awkward and ineffective",
      "Interview skills rusty or never mastered",
      "Need structured guidance, not generic advice",
    ],
  },
  {
    icon: Briefcase,
    title: "Executives & Leaders",
    painPoints: [
      "Ready for C-level or board position but don't know how to position yourself",
      "Executive search process feels opaque",
      "Compensation negotiation anxiety",
      "Need confidential, strategic career guidance",
      "Want coaches who've actually held C-level roles, not just studied them",
    ],
  },
];

export function ProblemSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header">
          <p className="eyebrow mb-4">THE CHALLENGE</p>
          <h2 className="mb-4">
            The Swiss Job Market in 2025: Tougher Than Ever, But Not Impossible
          </h2>
          <p className="text-lg text-muted-foreground">
            Since 2019, We've Helped 250+ Professionals Navigate These Exact Challenges
          </p>
        </div>

        {/* 3 Column Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-background rounded-xl p-8 border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <challenge.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-6">{challenge.title}</h3>

              {/* Pain Points */}
              <ul className="space-y-3">
                {challenge.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Transition Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
            "You're not alone. Since 2019, we've pioneered a proven methodology that combines 
            boutique precision with executive-level expertise. Welcome to Career Bootcamp, where 
            former F1 executives, CHROs, and C-level leaders coach you to victory."
          </p>
        </div>
      </div>
    </section>
  );
}
