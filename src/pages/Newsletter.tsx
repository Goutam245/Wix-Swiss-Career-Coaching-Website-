import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Search, Mail, Users, Star, FileText, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const categories = [
  "All Articles",
  "AI & Technology",
  "Bewerbungstipps",
  "Swiss Job Market",
  "Karrierecoaching Insights",
  "Executive Coaching",
  "Interview Preparation",
  "Salary Negotiation",
];

const featuredArticles = [
  { 
    title: "The Hidden Job Market in Switzerland: 5 Strategies That Actually Work", 
    date: "Mar 15, 2024", 
    category: "Swiss Job Market",
    excerpt: "80% of Swiss jobs are never advertised. Here's how to access them using insider strategies that have worked for 250+ Career Bootcamp clients.",
    readTime: "5 min read"
  },
  { 
    title: "AI-Powered Job Search: How to Use ChatGPT to Land Interviews 4x Faster", 
    date: "Mar 8, 2024", 
    category: "AI & Technology",
    excerpt: "From CV optimization to interview prep, here are the exact prompts and workflows that have helped our clients quadruple their interview rate.",
    readTime: "7 min read"
  },
  { 
    title: "Bewerbungsdossier erstellen: Swiss CV Mistakes That Cost You Interviews", 
    date: "Mar 1, 2024", 
    category: "Bewerbungstipps",
    excerpt: "These 7 CV errors will get you rejected by Swiss recruiters before a human even sees your application. Here's how to fix them today.",
    readTime: "6 min read"
  },
  { 
    title: "From COO to CEO: My Client's Executive Transition in 15 Weeks", 
    date: "Feb 22, 2024", 
    category: "Executive Coaching",
    excerpt: "How Peter L. navigated the hidden executive job market to secure his CEO role at a global A-Brand in record time.",
    readTime: "8 min read"
  },
  { 
    title: "LinkedIn Optimization for Swiss Professionals: A Complete 2025 Guide", 
    date: "Feb 15, 2024", 
    category: "Karrierecoaching Insights",
    excerpt: "Your LinkedIn profile is your digital handshake in Switzerland. Make it count with these proven optimization strategies.",
    readTime: "10 min read"
  },
  { 
    title: "Salary Negotiation Scripts: How My Clients Negotiate 15-30% Higher Offers", 
    date: "Feb 8, 2024", 
    category: "Salary Negotiation",
    excerpt: "The exact frameworks and phrases that work in Swiss compensation discussions, based on 250+ successful negotiations.",
    readTime: "6 min read"
  },
];

const allArticles = [
  { title: "Top 10 Bewerbungstipps für den Schweizer Arbeitsmarkt 2025", date: "Jan 28, 2024", category: "Bewerbungstipps", readTime: "8 min" },
  { title: "Karrierecoaching Zürich: Der ultimative Guide für 2025", date: "Jan 21, 2024", category: "Karrierecoaching Insights", readTime: "12 min" },
  { title: "How AI is Transforming Bewerbungscoaching in Switzerland", date: "Jan 14, 2024", category: "AI & Technology", readTime: "7 min" },
  { title: "Vorstellungsgespräch Mastery: 15 Swiss Interview Success Tips", date: "Jan 7, 2024", category: "Interview Preparation", readTime: "9 min" },
  { title: "Expat Guide: Karrierecoaching for International Professionals", date: "Dec 28, 2023", category: "Swiss Job Market", readTime: "10 min" },
  { title: "Outplacement Zürich: Executive Career Transition Guide", date: "Dec 21, 2023", category: "Executive Coaching", readTime: "8 min" },
  { title: "LinkedIn Optimization for Swiss Job Seekers", date: "Dec 14, 2023", category: "Karrierecoaching Insights", readTime: "11 min" },
  { title: "Tax Deductions for Karrierecoaching in Switzerland", date: "Dec 7, 2023", category: "Swiss Job Market", readTime: "5 min" },
  { title: "From Application to Offer: Complete Bewerbungscoaching Timeline", date: "Nov 30, 2023", category: "Bewerbungstipps", readTime: "10 min" },
  { title: "Networking in Zürich: Events, Groups, and Strategies", date: "Nov 23, 2023", category: "Swiss Job Market", readTime: "8 min" },
  { title: "How to Choose the Right Karrierecoach in Zürich", date: "Nov 16, 2023", category: "Karrierecoaching Insights", readTime: "6 min" },
  { title: "Laufbahnberatung: When and Why You Need Career Counseling", date: "Nov 9, 2023", category: "Karrierecoaching Insights", readTime: "7 min" },
];

const readerTestimonials = [
  {
    quote: "Michael's newsletter is the only career content I actually read every week. Practical, no-nonsense advice that's helped me navigate the Swiss job market as an expat.",
    name: "Sarah M.",
    role: "Marketing Manager"
  },
  {
    quote: "The AI tools series transformed how I approach applications. I went from 0 responses to 3 interviews in 2 weeks.",
    name: "Thomas K.",
    role: "IT Specialist"
  },
  {
    quote: "As a CHRO, I recommend Michael's newsletter to every outplacement candidate. His insights are spot-on.",
    name: "Dr. Andrea L.",
    role: "CHRO, Pharmaceutical"
  },
];

export default function Newsletter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [email, setEmail] = useState("");

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All Articles" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/30 to-background section-padding">
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">CAREER INSIGHTS NEWSLETTER</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Career Insights Newsletter: 100+ Articles on Swiss Career Success
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Since 2019, Michael M. Schmidt has shared weekly insights on Karrierecoaching, job search strategies, AI tools, and Swiss market trends with thousands of professionals on LinkedIn. Now access the complete archive.
          </p>
          <p className="text-base italic text-muted-foreground max-w-2xl mx-auto">
            From F1 executive to career transformation expert, get actionable advice that's helped 250+ professionals secure outstanding roles in today's competitive Swiss market.
          </p>
        </div>
      </section>

      {/* Newsletter Signup Box */}
      <section className="bg-background pb-16">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto bg-card border-2 border-primary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              Join 10,000+ Professionals Getting Weekly Career Insights
            </h2>
            <div className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none"
              />
              <input
                type="text"
                placeholder="First name (optional)"
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none"
              />
              <Button variant="cta" size="lg" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe anytime. See our Privacy Policy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <Mail className="w-6 h-6 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">100+ Articles</p>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">10,000+ Followers</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">Expert Insights</p>
              </div>
              <div className="text-center">
                <MapPin className="w-6 h-6 mx-auto text-primary mb-1" />
                <p className="text-xs text-muted-foreground">Swiss Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Most Popular Career Insights</h2>
          <p className="text-muted-foreground text-center mb-10">Our readers' favorite articles from the archive</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-primary/40" />
                </div>
                <div className="p-6">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <button className="text-primary text-sm font-medium mt-4 inline-flex items-center gap-1 hover:underline">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Complete Newsletter Archive: 100+ Career Insights</h2>
          <p className="text-muted-foreground text-center mb-8">Browse all articles by category, date, or search for specific topics</p>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search newsletter archive..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background"
              />
            </div>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-border bg-background"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all hover:-translate-y-1">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {article.category}
                </span>
                <h3 className="text-base font-semibold mt-3 mb-2 line-clamp-2">{article.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <button className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-8">
            Showing {filteredArticles.length} of 100+ articles
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Why 10,000+ Professionals Subscribe to Career Insights</h2>
          <p className="text-muted-foreground text-center mb-10">Join the leading community of career-focused professionals in Switzerland</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: "Actionable Strategies", desc: "Every article delivers practical, implementable advice you can use immediately. No fluff, just proven tactics from 5,000+ hours of coaching experience." },
              { icon: MapPin, title: "Swiss Market Expertise", desc: "Insights tailored specifically for the Swiss job market, from cultural nuances to hidden recruitment practices that only insiders know." },
              { icon: Star, title: "AI-Powered Advantage", desc: "Stay ahead with cutting-edge AI tools, prompt engineering techniques, and technology strategies that give you a competitive edge." },
              { icon: Users, title: "Real Success Stories", desc: "Learn from 250+ client transformations, from job seekers to C-level executives who've landed roles at UBS, Nestlé, Roche, Google, and beyond." },
            ].map((benefit, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Testimonials */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-8 text-center">What Readers Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {readerTestimonials.map((testimonial, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-primary to-[#32B8C6] section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Don't Miss the Next Insight</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join 10,000+ professionals who get weekly career strategies delivered to their inbox.
          </p>
          <div className="max-w-md mx-auto mb-6">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/90 border-0"
              />
              <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/90">
            {["Weekly actionable insights", "Exclusive AI tools", "Swiss market trends", "Success stories"].map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> {item}
              </span>
            ))}
          </div>
          <p className="text-xs text-primary-foreground/70 mt-6">
            Join readers from UBS, Nestlé, Roche, Google, and 30+ leading companies
          </p>
        </div>
      </section>
    </Layout>
  );
}
