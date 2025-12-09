import { Phone, Target, Rocket, Users, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Book Your Free Strategy Call",
    description: "We'll discuss your career goals, challenges, and which program fits best.",
  },
  {
    icon: Target,
    title: "Choose Your Program",
    description: "Select Accelerate, Elevate, or Executive based on your needs and timeline.",
  },
  {
    icon: Rocket,
    title: "Begin Your Transformation",
    description: "Access our app, join your cohort or 1:1 sessions, and start your structured journey.",
  },
  {
    icon: Users,
    title: "Get Expert Guidance",
    description: "Weekly coaching, real-time feedback, and personalized strategies from our certified team.",
  },
  {
    icon: PartyPopper,
    title: "Land Your Ideal Role",
    description: "Apply with confidence, ace interviews, negotiate your salary, and celebrate your success!",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="mb-4">Your Journey to Career Success: Step by Step</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  {/* Number Circle */}
                  <div className="relative z-10 w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <step.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  
                  {/* Title */}
                  <h4 className="font-semibold text-sm mb-2">{step.title}</h4>
                  
                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                {/* Number & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                
                {/* Content */}
                <div className="pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
