import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What makes Career Bootcamp different from other career coaches?",
    answer: "Our proprietary CBC Method combines executive-level coaching, AI integration, Swiss market expertise, and a structured, time-boxed approach. We have a 96% success rate and over 5,000 hours of coaching experience since 2019.",
  },
  {
    question: "Which program is right for me?",
    answer: "Accelerate is best for self-directed learners wanting AI skills and fast results. Elevate suits professionals needing structure, community, and comprehensive support. Executive is for senior leaders seeking C-level or board positions with complete confidentiality.",
  },
  {
    question: "Can I really deduct this from my Swiss taxes?",
    answer: "Yes! In most Swiss cantons, including Zürich, career coaching qualifies as professional education (Weiterbildung) and is tax-deductible up to CHF 12,400 per year. Consult your tax advisor for specifics.",
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 100% money-back guarantee: 20 days for Accelerate/Elevate, 4 weeks for Executive. No questions asked.",
  },
  {
    question: "Do you work with expats?",
    answer: "Absolutely! Over 60% of our clients are expats navigating the Swiss job market. We specialize in \"Swissifying\" applications and accessing the hidden job market.",
  },
  {
    question: "How long does it take to land a job?",
    answer: "Results vary, but our average client lands interviews within 8-12 weeks and secures positions within 18-24 weeks. Executive placements average 18-24 weeks.",
  },
  {
    question: "Is coaching conducted in English or German?",
    answer: "Both! Our team is fluent in English and German, and we tailor sessions to your preference. We can also accommodate French speakers.",
  },
  {
    question: "What payment options are available?",
    answer: "We accept Swiss bank transfer, credit card, Apple Pay, Google Pay, and PayPal. Flexible installment plans available for all programs.",
  },
  {
    question: "When do Elevate cohorts start?",
    answer: "New cohorts begin monthly. Next start dates: December 1, 2025 | January 19, 2026 | March 2, 2026.",
  },
  {
    question: "Is everything confidential?",
    answer: "Yes. We maintain complete confidentiality, especially for executive clients navigating sensitive career transitions. Your trust is paramount.",
  },
  {
    question: "What's your success rate?",
    answer: "We have a 96% overall success rate, with 78% of clients landing interviews within 8-12 weeks since 2019. Our executive program boasts a 90% interview success rate.",
  },
  {
    question: "Do you offer corporate packages?",
    answer: "Yes! We provide tailored outplacement and career transition services for companies. Contact us for enterprise solutions.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="mb-4">Frequently Asked Questions</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
