import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Target, Award, Linkedin, Clock, BookOpen, Globe, Check, X, Zap, Heart } from "lucide-react";

// Import client photos to use for founder/coach sections
import michaelPhoto from "@/assets/clients/michael-r.jpg";
import lisaPhoto from "@/assets/clients/lisa-w.jpg";

const founder = {
  name: "Michael M. Schmidt",
  role: "Founder & Head Coach",
  credentials: ["ICI", "CAS", "ISO 17024"],
  photo: michaelPhoto,
  bio: `Michael M. Schmidt is the founder and head coach of Career Bootcamp. From big corporate executive and Formula 1 team leadership to successful entrepreneur, Michael has dedicated his second professional life to empowering professionals to secure fulfilling, well-compensated roles in today's competitive market.

With a career spanning three continents, Michael developed and launched the proprietary Career Bootcamp Method in 2019. He holds an MBA, master degrees in Communication Science and Political Science, and is a certified Master Business Coach (ICI, CAS, ISO 17024).

Michael is also an international keynote speaker and author, passionate about AI integration in career development and life-long learning.`,
  languages: ["German", "English"],
};

const seniorCoach = {
  name: "Jacqueline Gestach",
  role: "Senior Executive Coach",
  photo: lisaPhoto,
  bio: `Jacqueline Gestach is a senior executive coach specializing in C-level transitions and board appointments. With over 15 years in HR leadership and executive search, Jacqueline brings deep insight into Swiss and international executive markets.

She partners with senior leaders to navigate complex career transitions with confidence and strategic clarity.`,
  expertise: ["C-level career transitions", "Board readiness and appointments", "Executive presence and leadership development", "Confidential career advisory"],
  languages: ["German", "English", "French"],
};

const stats = [
  { icon: Trophy, value: "250+", label: "Professionals Coached" },
  { icon: Clock, value: "5,000+", label: "Coaching Hours" },
  { icon: BookOpen, value: "96%", label: "Success Rate" },
  { icon: Globe, value: "30+", label: "Partner Companies" },
];

const values = [
  { icon: Target, title: "Zielorientiert (Goal-Oriented)", description: "Every action we take is focused on one goal: helping you secure your next great role with confidence and strategic positioning." },
  { icon: Zap, title: "Intensiv (Intensive)", description: "We bring energy, expertise, and commitment to every coaching session and interaction." },
  { icon: Heart, title: "Persönlich (Personal)", description: "Your journey is unique. We tailor our approach to your individual needs and aspirations." },
];

const comparison = [
  { category: "Perspective", solo: "Single perspective", us: "Hand-selected expert team", big: "Generic programs" },
  { category: "Expertise", solo: "Limited expertise depth", us: "C-level, CHRO, headhunter backgrounds", big: "Rigid structures" },
  { category: "Methodology", solo: "Inconsistent methodology", us: "Proven CBC Method since 2019", big: "Impersonal service" },
  { category: "Scalability", solo: "No scalability", us: "Tailored programs for every need", big: "High overhead costs" },
  { category: "Quality", solo: "Variable quality", us: "96% success rate, 4.95/5 satisfaction", big: "Volume over personalization" },
];

const differences = [
  { title: "Not a Solo Coach", icon: "🚫👤", description: "Unlike one-person operations, we offer deep bench strength: a hand-selected team of former C-level executives, CHROs, headhunters, and industry experts. When you work with us, you access collective wisdom, not just one perspective." },
  { title: "Not a Corporate Factory", icon: "🚫🏢", description: "Unlike large outplacement firms like LHH or Right Management, we don't process you through rigid, one-size-fits-all programs. Every client receives tailored coaching matched to their unique needs, from self-paced courses to intimate micro-groups to premium executive 1:1 sessions." },
  { title: "We Are", icon: "✅", description: "Switzerland's high-impact career coaching boutique: agile, expert-driven, and results-obsessed. Founded by a former F1 executive who understands that winning requires precision, speed, and the right team." },
];

const certifications = ["ISO 17024 Certified", "International Association of Coaching Institutes (ICI)", "Coach Akademie Schweiz (CAS)", "ICF (International Coaching Federation) aligned"];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">ABOUT CAREER BOOTCAMP</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Elite Team Behind Switzerland's High-Impact Career Coaching Boutique
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founded 2019 by Former F1 Executive Michael M. Schmidt. Hand-Selected Coaches with Proven C-Level Track Records.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From Formula 1 precision to career transformation excellence. We're the agile boutique challenging both solo coaches and corporate outplacement giants.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img 
                  src={founder.photo} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-4">
                {founder.credentials.map((cred) => (
                  <span key={cred} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {cred}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{founder.name}</h2>
              <p className="text-primary font-medium mb-6">{founder.role}</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                {founder.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <span className="text-sm text-muted-foreground">Languages: {founder.languages.join(", ")}</span>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Coach */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img 
                src={seniorCoach.photo} 
                alt={seniorCoach.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{seniorCoach.name}</h3>
              <p className="text-primary font-medium mb-4">{seniorCoach.role}</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm mb-6">
                {seniorCoach.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Expertise:</p>
                <ul className="space-y-1">
                  {seniorCoach.expertise.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-sm text-muted-foreground">Languages: {seniorCoach.languages.join(", ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">A Dynamic Team of Career Experts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Career Bootcamp, we are a dynamic team of career experts, including coaches, trainers, marketers, HR specialists, and AI experts, who transmit our passion for professional development and life-long learning into a thriving, transformative career coaching method.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Together, we bring a unique blend of executive management, entrepreneurial experience, Human Resources insight, cutting-edge AI know-how, and hands-on experience from world-class industries and the Swiss market.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 text-center border border-border">
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-primary/5 section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission by 2030</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are dedicated to empowering one million people to pursue fulfilling careers: professional paths that align with their unique skills, values, and passions while providing stability and growth in today's competitive market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2019, we've built Switzerland's most distinguished career coaching boutique, combining the personalized attention of a small firm with the proven expertise of senior executives from renowned Swiss and international companies.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differences.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 border border-border">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Career Bootcamp Stands Apart</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground"></th>
                  <th className="p-4 text-center text-sm font-medium text-muted-foreground">Solo Coaches</th>
                  <th className="p-4 text-center text-sm font-medium bg-primary/5 text-primary">Career Bootcamp</th>
                  <th className="p-4 text-center text-sm font-medium text-muted-foreground">Big Outplacement Firms</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.category} className="border-b border-border">
                    <td className="p-4 text-sm font-medium">{row.category}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{row.solo}</td>
                    <td className="p-4 text-center text-sm bg-primary/5 font-medium text-foreground">{row.us}</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">{row.big}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-card section-padding">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Certifications & Recognitions</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span key={cert} className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary-light section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and discover how our expert coaches can help you achieve your career goals.
          </p>
          <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/contact">Book Free Strategy Call</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
