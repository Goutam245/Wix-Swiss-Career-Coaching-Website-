import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LogosSection } from "@/components/home/LogosSection";
import { TaxDeductionSection } from "@/components/home/TaxDeductionSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <ProgramsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <LogosSection />
      <TaxDeductionSection />
      <NewsletterSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
