import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  programs: [
    { name: "Accelerate Program", href: "/programs/accelerate" },
    { name: "Elevate Program", href: "/programs/elevate" },
    { name: "Executive Program", href: "/programs/executive" },
    { name: "Compare Programs", href: "/programs/compare" },
  ],
  resources: [
    { name: "Newsletter Archive", href: "/newsletter" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Blog", href: "/blog" },
    { name: "Free Career Assessment", href: "/career-assessment" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Career Bootcamp" 
                className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
              Switzerland's premier career coaching boutique. Since 2019.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a href="mailto:michael@career-bootcamp.net" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                michael@career-bootcamp.net
              </a>
              <a href="tel:+41782228002" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                +41 78 222 80 02
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold" />
                Bahnhofplatz 1, 8001 Zürich
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gold">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold hover:underline hover:underline-offset-4 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold hover:underline hover:underline-offset-4 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold hover:underline hover:underline-offset-4 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-gold hover:underline hover:underline-offset-4 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/60 text-xs">
            © {new Date().getFullYear()} Career Bootcamp. All rights reserved.
          </p>
          <div className="text-xs text-primary-foreground/60 text-center">
            Bahnhofplatz 1, 8001 Zürich, Switzerland
          </div>
          <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
            <span>🇨🇭</span>
            <span>Made in Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
