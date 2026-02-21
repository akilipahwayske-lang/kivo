import ScrollAnimator from "./ScrollAnimator";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", text: "To accelerate Africa's digital transformation by making AI accessible, practical, and impactful for every organization." },
  { icon: Eye, title: "Vision", text: "A continent where every organization — from startups to governments — harnesses AI to solve real problems and create lasting value." },
  { icon: Heart, title: "Values", text: "Innovation with integrity, African-first solutions, collaborative growth, and responsible AI adoption that benefits communities." },
];

const team = [
  { name: "Dr. Amina Osei", role: "Chief AI Strategist", bio: "15+ years in ML research and enterprise AI deployment across East Africa." },
  { name: "James Kariuki", role: "Head of Engineering", bio: "Former Google engineer, specializing in scalable AI infrastructure." },
  { name: "Fatima Ndegwa", role: "AI Ethics Lead", bio: "Policy advisor and researcher focused on responsible AI governance in Africa." },
  { name: "Samuel Okonkwo", role: "Training Director", bio: "Educator and workshop facilitator who has upskilled 5,000+ professionals." },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 afro-pattern opacity-30" />
    <div className="container mx-auto px-4 relative">
      <ScrollAnimator>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About KIVO</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-foreground">
            Built in <span className="text-secondary text-glow-gold">Kenya</span>, designed for <span className="text-primary text-glow">Africa</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kenya is Africa's Silicon Savannah — a thriving tech ecosystem with world-class talent, mobile-first innovation, and a bold vision for the future. KIVO was born here to bridge the gap between AI's global potential and Africa's unique opportunities.
          </p>
        </div>
      </ScrollAnimator>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {values.map((v, i) => (
          <ScrollAnimator key={v.title} delay={i * 150}>
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 group hover:border-glow h-full">
              <v.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          </ScrollAnimator>
        ))}
      </div>

      {/* Team */}
      <ScrollAnimator>
        <h3 className="font-display font-bold text-3xl text-center mb-10 text-foreground">
          The Team Behind <span className="text-primary">KIVO</span>
        </h3>
      </ScrollAnimator>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <ScrollAnimator key={member.name} delay={i * 100}>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-500 text-center group hover:border-glow-gold">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-primary">{member.name[0]}{member.name.split(" ")[1][0]}</span>
              </div>
              <h4 className="font-display font-bold text-lg text-foreground">{member.name}</h4>
              <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
