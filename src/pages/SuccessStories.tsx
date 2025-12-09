import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Users, TrendingUp, Award, Building2 } from "lucide-react";
import { useState } from "react";

// Import client photos
import evaPhoto from "@/assets/clients/eva-l.jpg";
import sandraPhoto from "@/assets/clients/sandra-k.jpg";
import andreasPhoto from "@/assets/clients/andreas-c.jpg";
import stephanPhoto from "@/assets/clients/stephan-g.jpg";
import peterPhoto from "@/assets/clients/peter-l.jpg";
import lorenaPhoto from "@/assets/clients/lorena-c.jpg";
import marcusPhoto from "@/assets/clients/marcus-k.jpg";
import sarahPhoto from "@/assets/clients/sarah-m.jpg";
import annaPhoto from "@/assets/clients/anna-s.jpg";
import michaelPhoto from "@/assets/clients/michael-r.jpg";
import lisaPhoto from "@/assets/clients/lisa-w.jpg";
import robertPhoto from "@/assets/clients/robert-s.jpg";

const categories = ["All Stories", "Job Seekers & Expats", "Mid-Career Professionals", "Executives & Leaders"];

const testimonials = [
  { name: "Eva L.", role: "VP Marketing", company: "Swiss MedTech", category: "Executives & Leaders", program: "Executive 2024", quote: "As an expat, I was skeptical about the Swiss job market. Career Bootcamp opened doors I didn't know existed. I secured my VP role within 15 weeks.", rating: 5, highlight: "VP role in 15 weeks", photo: evaPhoto },
  { name: "Sandra K.", role: "Head of HR", company: "Pharma Leader", category: "Executives & Leaders", program: "Executive 2024", quote: "The executive coaching was transformative. Michael's strategic guidance helped me navigate a confidential career transition with precision.", rating: 5, highlight: "Confidential C-level transition", photo: sandraPhoto },
  { name: "Dr. Andreas C.", role: "CFO", company: "Sports Apparel", category: "Executives & Leaders", program: "Executive 2023", quote: "From the moment I engaged with Career Bootcamp, I knew I was in expert hands. Their deep understanding of the Swiss executive market accelerated my journey to CFO.", rating: 5, highlight: "CFO appointment accelerated", photo: andreasPhoto },
  { name: "Stephan G.", role: "CFO", company: "Swiss Banking", category: "Executives & Leaders", program: "Executive 2023", quote: "The 1:1 coaching with Michael was exceptional. His F1 background brings a unique perspective on precision and performance. I negotiated a 22% salary increase.", rating: 5, highlight: "22% salary increase", photo: stephanPhoto },
  { name: "Peter L.", role: "CEO", company: "Global Sport Apparel", category: "Executives & Leaders", program: "Executive 2023", quote: "Career Bootcamp delivered exactly what they promised: a tailored approach that positioned me for my CEO role. Their boutique precision is unmatched.", rating: 5, highlight: "CEO role secured", photo: peterPhoto },
  { name: "Lorena C.", role: "Senior Manager", company: "Global Pharma", category: "Mid-Career Professionals", program: "Elevate 2024", quote: "The Elevate program changed my perspective on my career. The micro-group format was perfect. I landed my dream role in just 20 weeks.", rating: 5, highlight: "Dream role in 20 weeks", photo: lorenaPhoto },
  { name: "Marcus K.", role: "Director", company: "Fortune 500", category: "Mid-Career Professionals", program: "Elevate 2024", quote: "The CBC method helped me land a director role at a Fortune 500 company in just 8 weeks. The Swiss market insights were invaluable.", rating: 5, highlight: "Promoted in 8 weeks", photo: marcusPhoto },
  { name: "Sarah M.", role: "Product Manager", company: "Tech Startup", category: "Job Seekers & Expats", program: "Accelerate 2024", quote: "After 6 months of unsuccessful job hunting, Career Bootcamp helped me secure 3 offers in 4 weeks. The AI tools were game-changing.", rating: 5, highlight: "3 offers in 4 weeks", photo: sarahPhoto },
  { name: "Anna Schneider", role: "Product Manager", company: "Google", category: "Job Seekers & Expats", program: "Accelerate 2024", quote: "As a career changer, I was lost. The Accelerate program gave me clarity, confidence, and a concrete plan. I landed my dream job at Google within 4 months.", rating: 5, highlight: "Landed role at Google", photo: annaPhoto },
  { name: "Michael R.", role: "Engineering Manager", company: "Roche", category: "Mid-Career Professionals", program: "Elevate 2024", quote: "The CREATE-FIND-SEIZE methodology is incredibly effective. Week by week, I transformed from feeling stuck to confidently negotiating my new role at Roche.", rating: 5, highlight: "Career transformation at Roche", photo: michaelPhoto },
  { name: "Lisa W.", role: "Marketing Lead", company: "Nestlé", category: "Job Seekers & Expats", program: "Accelerate 2024", quote: "As an American expat, the Swiss job market was a mystery. The Accelerate modules demystified everything. I got my Nestlé role within 3 months.", rating: 5, highlight: "Expat success at Nestlé", photo: lisaPhoto },
  { name: "Robert S.", role: "CTO", company: "FinTech Scale-up", category: "Executives & Leaders", program: "Executive 2024", quote: "The board readiness coaching was exactly what I needed. Michael's understanding of the Swiss executive ecosystem is unparalleled.", rating: 5, highlight: "Board-ready positioning", photo: robertPhoto },
];

const stats = [
  { value: "250+", label: "Professionals Coached", icon: Users },
  { value: "96%", label: "Success Rate", icon: TrendingUp },
  { value: "4.95/5", label: "Client Satisfaction", icon: Star },
  { value: "30+", label: "Leading Companies", icon: Building2 },
];

const companyLogos = ["UBS", "Credit Suisse", "Nestlé", "Novartis", "Roche", "ABB", "Zurich Insurance", "Swiss Re", "Google", "Microsoft", "McKinsey", "BCG", "Deloitte", "KPMG", "EY", "Accenture", "Siemens", "Syngenta", "Givaudan", "Lonza"];

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const filteredTestimonials = activeCategory === "All Stories" ? testimonials : testimonials.filter(t => t.category === activeCategory);

  return (
    <Layout>
      <section className="bg-background section-padding">
        <div className="container-wide text-center">
          <p className="text-gold font-bold text-sm uppercase tracking-widest mb-4">SUCCESS STORIES</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Real People. Real Results. Real Career Success.</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Hear from 250+ professionals who transformed their careers with Career Bootcamp.</p>
        </div>
      </section>

      <section className="bg-background border-b border-border sticky top-16 z-10">
        <div className="container-wide py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${activeCategory === category ? "bg-primary text-white border-primary" : "bg-card text-foreground border-border hover:border-gold"}`}>{category}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border border-t-4 border-t-gold shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}</div>
                <p className="text-foreground text-base leading-relaxed mb-4">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-4">
                    {/* Client Photo */}
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-gold"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-foreground/70">{t.role}, {t.company}</p>
                    </div>
                    <span className="text-xs bg-gold/10 text-foreground font-medium px-2 py-1 rounded-full border border-gold/30">{t.program}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2"><Award className="w-4 h-4 text-gold" /><span className="text-xs font-medium text-gold">{t.highlight}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-wide text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Where Our Clients Have Landed</h2>
          <p className="text-foreground/70 mb-8">Professionals from 30+ leading companies trust Career Bootcamp</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {companyLogos.map((company, i) => (
              <div key={i} className="bg-card px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground">{company}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="text-primary-foreground">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-gold" />
                <p className="text-3xl md:text-4xl font-bold mb-1 text-white">{stat.value}</p>
                <p className="text-sm text-primary-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Become Our Next Success Story</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">Join 250+ professionals who have transformed their careers with Career Bootcamp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg"><Link to="/contact">Book Free Strategy Call</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/programs/compare">Compare Programs</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
