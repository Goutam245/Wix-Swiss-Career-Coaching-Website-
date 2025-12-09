import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-primary-foreground mb-4 text-3xl md:text-4xl">
            Ready to Secure Your Next Great Role?
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 250+ professionals who've transformed their careers with Career Bootcamp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" className="bg-gold text-foreground hover:bg-gold-dark">
              <Link to="/contact">
                Book Free Strategy Call
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-foreground">
              <Link to="/programs">
                Download Program Brochure
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-primary-foreground/80">
            <a href="tel:+41782228002" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" />
              +41 78 222 80 02
            </a>
            <span className="hidden md:inline text-primary-foreground/40">|</span>
            <a href="mailto:michael@career-bootcamp.net" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" />
              michael@career-bootcamp.net
            </a>
            <span className="hidden md:inline text-primary-foreground/40">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bahnhofplatz 1, 8001 Zürich
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
