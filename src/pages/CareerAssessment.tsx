import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Clock, Lock, BarChart3, CheckCircle, Rocket, Mountain, Crown, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What is your current career stage?",
    type: "single",
    options: [
      "Actively job seeking (unemployed or seeking change)",
      "Employed but exploring opportunities",
      "Mid-career professional (5-15 years experience)",
      "Senior executive (C-level or aspiring C-level)",
      "Career changer/recent graduate"
    ]
  },
  {
    id: 2,
    question: "What is your primary career challenge right now?",
    type: "multi",
    options: [
      "Not getting responses to applications",
      "Unclear about next career steps",
      "Need to improve interview skills",
      "Want to transition to a new industry/role",
      "Seeking C-level or board position",
      "Struggling with Swiss job market norms",
      "Need help with salary negotiation",
      "Building professional network"
    ]
  },
  {
    id: 3,
    question: "What are your main career goals?",
    type: "single",
    options: [
      "Land a new job ASAP",
      "Strategic career advancement (promotion, better role)",
      "C-level transition or board appointment",
      "Career pivot to new industry",
      "Improve marketability and skills"
    ]
  },
  {
    id: 4,
    question: "How do you prefer to learn and receive coaching?",
    type: "single",
    options: [
      "Self-paced online learning (work at my own speed)",
      "Structured group coaching with peers (community support)",
      "Premium 1:1 coaching (personalized attention)",
      "Hybrid approach (mix of formats)"
    ]
  },
  {
    id: 5,
    question: "How urgent is your career transition?",
    type: "single",
    options: [
      "Immediate (need results within 4 weeks)",
      "Short-term (1-3 months)",
      "Medium-term (3-6 months)",
      "Long-term (6+ months, strategic planning)"
    ]
  },
  {
    id: 6,
    question: "What is your budget for career coaching?",
    type: "single",
    options: [
      "CHF 1,000 - 3,000",
      "CHF 3,000 - 6,000",
      "CHF 6,000 - 10,000",
      "CHF 10,000 - 20,000",
      "CHF 20,000+"
    ]
  },
  {
    id: 7,
    question: "How comfortable are you with AI tools?",
    type: "single",
    options: [
      "Beginner (never used AI for career purposes)",
      "Intermediate (some exposure to ChatGPT, etc.)",
      "Advanced (regularly use AI tools)",
      "Expert (deeply proficient with AI)"
    ]
  },
  {
    id: 8,
    question: "How familiar are you with the Swiss job market?",
    type: "single",
    options: [
      "New to Swiss market (expat or recent arrival)",
      "Some experience (1-3 years in Switzerland)",
      "Very familiar (3+ years, understand norms)",
      "Swiss native"
    ]
  },
  {
    id: 9,
    question: "Which aspect of job search do you struggle with most?",
    type: "single",
    options: [
      "CV and application materials",
      "Networking and accessing hidden job market",
      "Interview performance",
      "Salary negotiation",
      "Personal branding and LinkedIn",
      "Career clarity and direction",
      "Executive positioning and board readiness"
    ]
  },
  {
    id: 10,
    question: "Do you prefer community support or complete confidentiality?",
    type: "single",
    options: [
      "I value peer community and group learning",
      "I prefer complete confidentiality and 1:1 coaching",
      "I'm comfortable with either approach"
    ]
  }
];

export default function CareerAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [contactInfo, setContactInfo] = useState({ firstName: "", lastName: "", email: "" });

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  const handleSingleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: answer });
  };

  const handleMultiAnswer = (answer: string) => {
    const current = (answers[currentQuestion.id] as string[]) || [];
    if (current.includes(answer)) {
      setAnswers({ ...answers, [currentQuestion.id]: current.filter(a => a !== answer) });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: [...current, answer] });
    }
  };

  const canProceed = () => {
    if (currentStep === questions.length) {
      return contactInfo.firstName && contactInfo.email;
    }
    const answer = answers[currentQuestion?.id];
    if (!answer) return false;
    if (Array.isArray(answer)) return answer.length > 0;
    return true;
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const budget = answers[6] as string;
    const preference = answers[4] as string;
    const stage = answers[1] as string;
    
    if (stage?.includes("Senior executive") || budget?.includes("20,000") || budget?.includes("10,000 - 20,000")) {
      return "executive";
    }
    if (preference?.includes("Self-paced") || budget?.includes("1,000 - 3,000") || budget?.includes("3,000 - 6,000")) {
      return "accelerate";
    }
    return "elevate";
  };

  const recommendations = {
    accelerate: {
      icon: Rocket,
      name: "Accelerate Program",
      tagline: "Fast-Track Your Swiss Job Search",
      price: "CHF 1,750/month × 3 months",
      reasons: [
        "You prefer self-paced learning and want to work at your own speed",
        "Your budget aligns with our most accessible program (CHF 5,250 total)",
        "You want to upskill with AI tools to get 4x faster results",
        "You value efficiency and want immediate access to all materials",
        "One expert coaching session will give you personalized guidance when needed"
      ],
      href: "/programs/accelerate"
    },
    elevate: {
      icon: Mountain,
      name: "Elevate Program",
      tagline: "Transform Your Career in 12 Weeks",
      price: "CHF 4,750",
      reasons: [
        "You value structured learning with expert guidance",
        "Peer community and group support enhance your motivation",
        "The CREATE-FIND-SEIZE methodology matches your goals",
        "Weekly accountability keeps you on track",
        "You want comprehensive career transformation"
      ],
      href: "/programs/elevate"
    },
    executive: {
      icon: Crown,
      name: "Executive Program",
      tagline: "Premium 1:1 Coaching for C-Level Leaders",
      price: "CHF 19,000",
      reasons: [
        "You're pursuing C-level or board positions",
        "Complete confidentiality is essential for your transition",
        "You want direct access to former C-level coaches",
        "Your budget allows for premium personalized attention",
        "Executive-level challenges require executive-level coaching"
      ],
      href: "/programs/executive"
    }
  };

  const recommendation = recommendations[getRecommendation()];
  const RecommendationIcon = recommendation.icon;

  if (showResults) {
    return (
      <Layout>
        <section className="bg-background section-padding min-h-[80vh]">
          <div className="container-wide max-w-3xl">
            <div className="text-center mb-8">
              <p className="eyebrow mb-4">YOUR PERSONALIZED RESULTS</p>
              <h1 className="text-2xl md:text-3xl font-bold">Based on Your Answers, We Recommend:</h1>
            </div>

            <div className="bg-card border-2 border-primary rounded-2xl p-8 mb-8">
              <div className="text-center mb-6">
                <RecommendationIcon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold">{recommendation.name}</h2>
                <p className="text-primary italic">{recommendation.tagline}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-4">Why This Program Fits:</h3>
                <ul className="space-y-2">
                  {recommendation.reasons.map((reason, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Investment</p>
                <p className="text-xl font-bold">{recommendation.price}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta" className="flex-1">
                  <Link to={recommendation.href}>Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/contact">Book Strategy Call</Link>
                </Button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4">Not quite right? Explore other options:</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {Object.entries(recommendations)
                  .filter(([key]) => key !== getRecommendation())
                  .map(([key, prog]) => (
                    <Button key={key} asChild variant="ghost" size="sm">
                      <Link to={prog.href}>{prog.name}</Link>
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section - Only show on first step */}
      {currentStep === 0 && (
        <section className="bg-gradient-to-b from-muted/30 to-background py-12">
          <div className="container-wide text-center">
            <p className="eyebrow mb-4">FREE CAREER ASSESSMENT</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Best Career Path Forward in 5 Minutes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Take our free assessment and get personalized program recommendations tailored to today's Swiss job market.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Takes 5 minutes</span>
              <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> 100% confidential</span>
              <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> Personalized recommendations</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Used by 1,000+ professionals</span>
            </div>
          </div>
        </section>
      )}

      {/* Assessment Form */}
      <section className="bg-background section-padding">
        <div className="container-wide max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {Math.min(currentStep + 1, questions.length)} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {currentStep < questions.length ? (
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, i) => {
                  const isSelected = currentQuestion.type === "single" 
                    ? answers[currentQuestion.id] === option
                    : ((answers[currentQuestion.id] as string[]) || []).includes(option);
                  
                  return (
                    <button
                      key={i}
                      onClick={() => currentQuestion.type === "single" 
                        ? handleSingleAnswer(option) 
                        : handleMultiAnswer(option)
                      }
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        isSelected 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-${currentQuestion.type === "single" ? "full" : "md"} border-2 flex items-center justify-center ${
                          isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                        }`}>
                          {isSelected && <CheckCircle className="w-3 h-3 text-primary-foreground" />}
                        </div>
                        <span className="text-sm">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {currentQuestion.type === "multi" && (
                <p className="text-xs text-muted-foreground mt-4">Select all that apply</p>
              )}
            </div>
          ) : (
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-xl font-semibold mb-6">To receive your personalized recommendations:</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={contactInfo.firstName}
                    onChange={e => setContactInfo({...contactInfo, firstName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={contactInfo.lastName}
                    onChange={e => setContactInfo({...contactInfo, lastName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={e => setContactInfo({...contactInfo, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button
              variant="cta"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {currentStep === questions.length ? "Get My Results" : "Next"} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
