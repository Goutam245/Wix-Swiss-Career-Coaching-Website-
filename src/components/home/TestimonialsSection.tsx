import { Link } from "react-router-dom";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Import client photos
import evaPhoto from "@/assets/clients/eva-l.jpg";
import sandraPhoto from "@/assets/clients/sandra-k.jpg";
import andreasPhoto from "@/assets/clients/andreas-c.jpg";
import stephanPhoto from "@/assets/clients/stephan-g.jpg";
import peterPhoto from "@/assets/clients/peter-l.jpg";
import lorenaPhoto from "@/assets/clients/lorena-c.jpg";

const testimonials = [
  {
    name: "Eva L.",
    role: "Global Supply Manager",
    company: "Pharmaceutical",
    program: "Elevate 2024",
    quote: "As an expat, I was struggling to adapt my CV to Swiss standards. The personalized coaching and AI tools training were invaluable. My applications improved dramatically, and I started getting interviews almost immediately. The confidence boost was real!",
    rating: 5,
    photo: evaPhoto,
  },
  {
    name: "Sandra K.",
    role: "CEO Assistant",
    company: "Former Self-employed",
    program: "Elevate 2024",
    quote: "The ELEVATE program was a game-changer for my job search in Switzerland and Austria. The structured roadmap gave me the direction I needed. I landed my first job in just 20 weeks!",
    rating: 5,
    photo: sandraPhoto,
  },
  {
    name: "Dr. Andreas C.",
    role: "Sports Apparel Executive",
    company: "",
    program: "Executive 2023",
    quote: "Michael's Career Bootcamp methodology is truly one of a kind: high-impact, goal-driven, efficient and fun. If you want truly transformative executive career coaching, Michael is in a class of his own.",
    rating: 5,
    photo: andreasPhoto,
  },
  {
    name: "Stephan G.",
    role: "CFO",
    company: "Swiss Banking",
    program: "Executive 2024",
    quote: "15 weeks from zero to C-Level. I wouldn't have believed it if someone had told me before. The Career Bootcamp method and Michael's ambitious, dynamic approach are unparalleled. Plus, deducting the program cost from taxes made this a no-brainer investment.",
    rating: 5,
    photo: stephanPhoto,
  },
  {
    name: "Peter L.",
    role: "CEO",
    company: "Global Sport Apparel Company",
    program: "Executive 2023",
    quote: "As a long-time COO, I wanted to pivot into a CEO role in an international A-Brand but struggled to enter the hidden executive job market. The personalized coaching and strategic advice were invaluable. I secured my CEO role!",
    rating: 5,
    photo: peterPhoto,
  },
  {
    name: "Lorena C.",
    role: "Diversity Manager",
    company: "Big Pharma",
    program: "Elevate 2024",
    quote: "The structured roadmap cut my job search time in half. I negotiated a 22% higher salary thanks to their coaching!",
    rating: 5,
    photo: lorenaPhoto,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="mb-4 text-foreground">Real People. Real Results. Real Career Success.</h2>
          <p className="text-lg text-foreground/70">
            Hear from 250+ professionals who transformed their careers with Career Bootcamp
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-card rounded-2xl p-8 border border-border border-t-4 border-t-gold shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-base leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-3 border-gold shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">
                      {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>

                {/* Program Badge */}
                {testimonial.program && (
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-foreground border border-gold/30 rounded-full">
                      {testimonial.program}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-gold" : "bg-border"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/success-stories"
            className="text-gold font-medium hover:underline"
          >
            Read More Success Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
