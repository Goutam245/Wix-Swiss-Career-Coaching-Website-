import { Lightbulb, Download } from "lucide-react";

export function TaxDeductionSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto bg-gold/5 border border-gold/20 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0">
              <Lightbulb className="w-8 h-8 text-gold" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Pro Tip: Tax-Deductible Investment
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In most Swiss cantons, including Zürich, career coaching qualifies as professional 
                education and can be deducted from your taxes, up to CHF 12,400 per year. 
                Consult your tax advisor to maximize your savings.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
              >
                <Download className="w-4 h-4" />
                Download Tax Deduction Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
