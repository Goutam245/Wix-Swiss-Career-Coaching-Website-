import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Target, Star, TrendingUp, Award, Clock, Lock } from "lucide-react";
import heroImage from "@/assets/hero-coaching.jpg";

const badges = [
  { icon: Calendar, label: "Founded 2019" },
  { icon: Trophy, label: "Former F1 Executive" },
  { icon: Users, label: "Hand-Selected Coaches" },
  { icon: Target, label: "Proven Methodology" },
];

const stats = [
  { icon: Star, value: "4.95/5", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "78%", label: "Interview Success Rate" },
  { icon: Award, value: "ISO 17024", label: "Certified Coaches" },
  { icon: Users, value: "250+", label: "Professionals Coached" },
  { icon: Clock, value: "Since 2019", label: "Established Track Record" },
  { icon: Trophy, value: "30+", label: "Partner Companies" },
];

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(244,197,83,0.08),transparent)]" />
      
      <div className="container-wide py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3 animate-fade-in">
              SWITZERLAND'S PREMIER CAREER COACHING BOUTIQUE
            </p>
            
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-primary-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
              Secure Your Next Great Role in Switzerland:{" "}
              <span className="text-gold">Faster, Smarter</span>, with AI-Powered Karrierecoaching
            </h1>
            
            {/* Subheadline */}
            <p className="text-sm md:text-base text-primary-foreground/80 mb-5 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
              Join 250+ professionals who've transformed their careers since 2019 with our proven 
              Career Bootcamp Method. From job seekers to C-level executives, we deliver results 
              through hand-selected expert coaches and tailored programs.
            </p>
            
            {/* Value Proposition Badges */}
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
              {badges.map((badge, index) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-medium"
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Free Strategy Call
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
            
            {/* Trust Text */}
            <p className="flex items-center gap-2 text-sm text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <Lock className="w-4 h-4 text-gold" />
              No obligation. 100% confidential.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Professional career coaching session"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-md animate-float">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="font-bold text-sm text-foreground">4.95/5</span>
                </div>
                <p className="text-xs text-muted-foreground">Client Rating</p>
              </div>
              
              <div className="absolute bottom-3 left-3 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-md animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gold" />
                  <span className="font-bold text-sm text-foreground">250+</span>
                </div>
                <p className="text-xs text-muted-foreground">Professionals Coached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Indicators Bar */}
      <div className="bg-card border-y border-border py-6">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-secondary transition-colors"
              >
                <stat.icon className="w-5 h-5 text-gold mb-1.5" />
                <span className="font-extrabold text-xl text-foreground">{stat.value}</span>
                <span className="text-sm text-foreground/80 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
