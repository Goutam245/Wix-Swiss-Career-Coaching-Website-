import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Check, Video, Users, Briefcase, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const bookingOptions = [
  {
    title: "Free 30-Minute Strategy Call",
    description: "For job seekers, mid-career professionals, and anyone exploring our programs",
    icon: Video,
    features: [
      "Discuss your career goals and challenges",
      "Explore which program fits best",
      "Get honest, no-pressure advice",
      "Ask any questions about our methodology"
    ],
    cta: "Book Strategy Call",
    popular: true
  },
  {
    title: "Elevate Group Coaching Info",
    description: "Learn about our 12-week group coaching program",
    icon: Users,
    features: [
      "Understand the CREATE-FIND-SEIZE methodology",
      "See upcoming cohort dates",
      "Learn about peer networking benefits",
      "Get enrollment details"
    ],
    cta: "Learn About Elevate",
    popular: false
  },
  {
    title: "Confidential Executive Consultation",
    description: "For C-level executives and senior leaders seeking confidential guidance",
    icon: Briefcase,
    features: [
      "Private, confidential discussion",
      "Executive-level career strategy",
      "Board appointment guidance",
      "Speak with Michael M. Schmidt or Jacqueline Gestach"
    ],
    cta: "Book Executive Consultation",
    popular: false
  }
];

const faqs = [
  {
    question: "What happens on the strategy call?",
    answer: "We'll discuss your career goals, current challenges, and explore which program (if any) is the best fit for you. There's no pressure, just honest, expert advice tailored to your situation."
  },
  {
    question: "Who will I speak with?",
    answer: "You'll speak with a senior Career Bootcamp coach. For executive consultations, you'll speak with Michael M. Schmidt or Jacqueline Gestach directly."
  },
  {
    question: "Is there any obligation?",
    answer: "None whatsoever. This is a free consultation to help you make an informed decision about your career next steps."
  },
  {
    question: "How should I prepare?",
    answer: "Come ready to discuss your career goals, challenges, and timeline. Bring any questions you have about our programs or methodology. No formal preparation needed."
  },
  {
    question: "What if I'm not in Switzerland?",
    answer: "No problem! All consultations are conducted online via Zoom or phone, so we work with clients globally."
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "", 
    program: "", 
    preferredTime: "",
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsSubmitting(false);
    toast({ title: "Request submitted!", description: "We'll contact you within 24 hours to schedule your call." });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", program: "", preferredTime: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-background section-padding">
        <div className="container-wide text-center">
          <p className="eyebrow mb-4">GET IN TOUCH</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Let's Talk About Your Career Goals</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your free 30-minute strategy call: no obligation, just honest guidance.
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {bookingOptions.map((option, i) => (
              <div key={i} className={`bg-card rounded-xl p-6 border ${option.popular ? 'border-primary border-2 shadow-lg' : 'border-border'}`}>
                {option.popular && (
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <option.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={option.popular ? "cta" : "outline"} className="w-full">
                  {option.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Or Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Prefer to write? Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <p className="font-semibold text-sm mb-1 text-gold">Office</p>
                  <p className="text-sm text-foreground">Career Bootcamp<br />Bahnhofplatz 1<br />8001 Zürich, Switzerland</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <p className="font-semibold text-sm mb-1 text-gold">Phone</p>
                  <p className="text-sm text-foreground">+41 78 222 80 02<br />Mon-Fri, 9:00-18:00 CET</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <p className="font-semibold text-sm mb-1 text-gold">Email</p>
                  <p className="text-sm text-foreground">michael@career-bootcamp.net<br />Response within 24 hours</p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <p className="font-semibold text-sm mb-1 text-gold">Hours</p>
                  <p className="text-sm text-foreground">Mon-Fri: 9:00-18:00<br />Sat: By appointment</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
                <MessageCircle className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Prefer WhatsApp?</p>
                  <p className="text-sm text-muted-foreground">Message us at +41 78 222 80 02</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Request a Call</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.firstName} 
                      onChange={e => setFormData({...formData, firstName: e.target.value})} 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.lastName} 
                      onChange={e => setFormData({...formData, lastName: e.target.value})} 
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Program Interest *</label>
                  <select 
                    required
                    value={formData.program} 
                    onChange={e => setFormData({...formData, program: e.target.value})} 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="strategy-call">Free Strategy Call</option>
                    <option value="accelerate">Accelerate Program</option>
                    <option value="elevate">Elevate Program</option>
                    <option value="executive">Executive Program</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date/Time</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Next week, mornings preferred"
                    value={formData.preferredTime} 
                    onChange={e => setFormData({...formData, preferredTime: e.target.value})} 
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message} 
                    onChange={e => setFormData({...formData, message: e.target.value})} 
                    placeholder="Tell us about your career goals and challenges..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none" 
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
                <p className="text-xs text-muted-foreground flex items-center gap-2 justify-center">
                  <Check className="w-4 h-4" /> No obligation. 100% confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What to Expect on Your Strategy Call</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Career?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your free strategy call today and take the first step toward your next great role.
          </p>
          <Button variant="cta" size="lg">
            Book Your Call Today
          </Button>
        </div>
      </section>
    </Layout>
  );
}
