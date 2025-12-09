import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Programs", 
    href: "/programs",
    children: [
      { name: "Accelerate", href: "/programs/accelerate" },
      { name: "Elevate", href: "/programs/elevate" },
      { name: "Executive", href: "/programs/executive" },
      { name: "Compare Programs", href: "/programs/compare" },
    ]
  },
  { 
    name: "About", 
    href: "/about",
    children: [
      { name: "Our Team", href: "/about" },
      { name: "Success Stories", href: "/success-stories" },
    ]
  },
  { 
    name: "Resources", 
    href: "/blog",
    children: [
      { name: "Blog", href: "/blog" },
      { name: "Newsletter Archive", href: "/newsletter" },
      { name: "Free Career Assessment", href: "/career-assessment" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown) {
        const currentRef = dropdownRefs.current[openDropdown];
        if (currentRef && !currentRef.contains(e.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // Close dropdown on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleDropdownToggle = (e: React.MouseEvent, itemName: string) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleDropdownItemClick = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group transition-transform hover:scale-[1.02]">
          <img 
            src={logo} 
            alt="Career Bootcamp" 
            className="h-8 sm:h-10 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              ref={(el) => { dropdownRefs.current[item.name] = el; }}
              className="relative"
            >
              {item.children ? (
                <button
                  onClick={(e) => handleDropdownToggle(e, item.name)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1",
                    openDropdown === item.name
                      ? "text-gold bg-gold/10"
                      : isActive(item.href)
                      ? "text-gold bg-gold/10"
                      : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                  )}
                >
                  {item.name}
                  <ChevronDown className={cn(
                    "w-3 h-3 transition-transform duration-200",
                    openDropdown === item.name && "rotate-180"
                  )} />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1",
                    isActive(item.href)
                      ? "text-gold bg-gold/10"
                      : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && openDropdown === item.name && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-primary rounded-xl shadow-2xl border border-gold/20 py-2 animate-fade-in z-[1000]"
                  style={{ 
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      onClick={handleDropdownItemClick}
                      className="block px-4 py-3 text-sm text-primary-foreground/80 hover:text-foreground hover:bg-gold transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button asChild variant="cta" size="default">
            <Link to="/contact">Book Free Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg text-primary-foreground hover:bg-gold/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-gold/20 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      openDropdown === item.name || isActive(item.href)
                        ? "text-gold bg-gold/10"
                        : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      openDropdown === item.name && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "text-gold bg-gold/10"
                        : "text-primary-foreground/80 hover:text-gold hover:bg-gold/10"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.children && openDropdown === item.name && (
                  <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-primary-foreground/70 hover:text-foreground hover:bg-gold rounded-lg transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild variant="cta" size="lg" className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Free Strategy Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
