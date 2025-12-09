import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Search, Clock, Download, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

const categories = [
  "All Articles",
  "AI & Job Search",
  "Swiss Job Market",
  "Bewerbungstipps",
  "Vorstellungsgespräch",
  "Salary Negotiation",
  "Networking Strategies",
  "Career Transitions",
  "Executive Coaching",
  "Resume & LinkedIn",
];

const featuredArticle = {
  title: "The Hidden Job Market in Switzerland: 5 Strategies That Actually Work",
  excerpt: "80% of Swiss jobs are never advertised. Here's how to access the hidden job market using insider strategies that have worked for 250+ Career Bootcamp clients since 2019.",
  category: "Swiss Job Market",
  author: "Michael M. Schmidt",
  date: "Nov 15, 2024",
  readTime: "6 min read",
  image: null
};

const articles = [
  { title: "Top 10 Bewerbungstipps für den Schweizer Arbeitsmarkt 2025", category: "Bewerbungstipps", date: "Nov 12, 2024", readTime: "8 min" },
  { title: "Karrierecoaching Zürich: Der ultimative Guide für 2025", category: "Swiss Job Market", date: "Nov 8, 2024", readTime: "12 min" },
  { title: "How AI is Transforming Bewerbungscoaching in Switzerland", category: "AI & Job Search", date: "Nov 5, 2024", readTime: "7 min" },
  { title: "Bewerbungsdossier erstellen: Swiss CV Standards Explained", category: "Bewerbungstipps", date: "Nov 1, 2024", readTime: "10 min" },
  { title: "Vorstellungsgespräch Mastery: 15 Swiss Interview Success Tips", category: "Vorstellungsgespräch", date: "Oct 28, 2024", readTime: "9 min" },
  { title: "Expat Guide: Karrierecoaching for International Professionals in Zürich", category: "Swiss Job Market", date: "Oct 24, 2024", readTime: "11 min" },
  { title: "Outplacement Zürich: Executive Career Transition Guide", category: "Executive Coaching", date: "Oct 20, 2024", readTime: "8 min" },
  { title: "LinkedIn Optimization for Swiss Job Seekers: A Complete Guide", category: "Resume & LinkedIn", date: "Oct 16, 2024", readTime: "13 min" },
  { title: "Salary Negotiation Scripts That Work in Switzerland", category: "Salary Negotiation", date: "Oct 12, 2024", readTime: "7 min" },
  { title: "Laufbahnberatung: When and Why You Need Career Counseling", category: "Career Transitions", date: "Oct 8, 2024", readTime: "6 min" },
  { title: "Tax Deductions for Karrierecoaching in Switzerland", category: "Swiss Job Market", date: "Oct 4, 2024", readTime: "5 min" },
  { title: "From Application to Offer: Complete Bewerbungscoaching Timeline", category: "Bewerbungstipps", date: "Sep 30, 2024", readTime: "10 min" },
];

const resources = [
  { icon: FileText, title: "Swiss Interview Secrets eBook", desc: "15-20 page guide with common Swiss interview questions and model answers", cta: "Download Free eBook" },
  { icon: FileText, title: "Tax Deduction Guide", desc: "Canton-by-canton breakdown of tax deductions for professional development", cta: "Download PDF Guide" },
  { icon: FileText, title: "CV Template (Swiss Standard)", desc: "ATS-optimized Word template with Swiss formatting standards", cta: "Download Template" },
  { icon: CheckCircle, title: "LinkedIn Optimization Checklist", desc: "20-point checklist with headline formulas and keyword strategies", cta: "Download Checklist" },
  { icon: FileText, title: "Salary Benchmarking Tool", desc: "Interactive PDF with Swiss salary ranges by industry and role", cta: "Download Tool" },
  { icon: FileText, title: "Networking Email Templates", desc: "Ready-to-use templates for LinkedIn outreach and informational interviews", cta: "Download Templates" },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All Articles" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background section-padding">
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">BLOG & RESOURCES</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Karrierecoaching Insights, AI Tools, and Swiss Job Market Strategies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert Bewerbungshilfe and Laufbahnberatung guidance to accelerate your career success in Switzerland.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles... (Suchen Sie Karrieretipps...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-base"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide">
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 bg-gradient-to-br from-primary/20 to-primary/5 p-12 flex items-center justify-center min-h-[300px]">
                <FileText className="w-24 h-24 text-primary/30" />
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full w-fit mb-4">
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl font-bold mb-3">{featuredArticle.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{featuredArticle.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featuredArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredArticle.readTime}</span>
                </div>
                <Button variant="outline" className="w-fit">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-background border-b border-border sticky top-0 z-10">
        <div className="container-wide py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border-2 ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-card text-foreground border-border hover:border-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary/30" />
                </div>
                <div className="p-6">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 mb-3 line-clamp-2">{article.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  <button className="text-primary text-sm font-medium mt-4 inline-flex items-center gap-1 hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No articles found matching your criteria.</p>
          )}
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Free Career Resources</h2>
            <p className="text-muted-foreground">Download expert templates, guides, and tools to accelerate your career</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <resource.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.desc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" /> {resource.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Get Weekly Career Tips</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe for exclusive insights, job market updates, and AI tools delivered to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button variant="cta">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
