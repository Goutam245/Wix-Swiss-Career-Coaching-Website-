import { Layout } from "@/components/layout/Layout";
import { FAQSection } from "@/components/home/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <Layout>
      <section className="bg-background pt-16">
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">FAQ</p>
          <h1 className="mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our programs, methodology, and results.</p>
        </div>
      </section>
      <FAQSection />
      <section className="bg-foreground section-padding"><div className="container-wide text-center"><h2 className="text-primary-foreground mb-6">Still Have Questions?</h2><p className="text-xl text-primary-foreground/80 mb-8">Book a free strategy call and we'll answer all your questions.</p><Button asChild variant="default" size="xl"><Link to="/contact">Book Free Strategy Call</Link></Button></div></section>
    </Layout>
  );
}
