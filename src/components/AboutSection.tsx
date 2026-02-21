import ScrollAnimator from "./ScrollAnimator";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", text: "To accelerate Africa's digital transformation by making AI accessible, practical, and impactful for every organization." },
  { icon: Eye, title: "Vision", text: "A continent where every organization harnesses AI to solve local problems and create lasting value." },
  { icon: Heart, title: "Values", text: "Innovation with integrity, African-first solutions, and the highest standards of engineering excellence." },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 md:py-40 bg-background overflow-hidden border-t border-border">
    <div className="absolute inset-0 neural-grid opacity-5" />
    <div className="container mx-auto px-4 relative z-10">
      <ScrollAnimator>
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">THE SILICON SAVANNAH</span>
          </div>
          <h2 className="text-h2-elite text-foreground">
            Built in <span className="text-foreground/40">Nairobi</span>, <br /> Built for <span className="text-foreground/40">Africa</span>
          </h2>
        </div>
      </ScrollAnimator>

      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <ScrollAnimator>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/70">
            Kenya is Africa's heart of innovation — a thriving ecosystem with world-class talent and a bold vision. KIVO was born here to bridge the gap between AI's global potential and Africa's unique infrastructure. Our mission is to build the intelligence layer for the continent's next decade of growth.
          </p>
        </ScrollAnimator>

        <div className="relative aspect-video bg-muted border border-border group overflow-hidden">
          {/* High-Fidelity Cinematic Image */}
          <img
            src="https://images.unsplash.com/photo-1590424744295-ff443e4983df?q=80&w=1200&auto=format&fit=crop"
            alt="Silicon Savannah - Nairobi"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
          />

          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Abstract visual fallback / overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity">
            <span className="text-[8rem] font-black text-foreground/5 tracking-tighter">KE // AI</span>
          </div>

          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Technical Hub</div>
            <div className="text-xs font-mono text-foreground/40 uppercase">Lat: -1.2921 // Long: 36.8219</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-border border border-border overflow-hidden">
        {values.map((v, i) => (
          <ScrollAnimator key={v.title} delay={i * 150}>
            <div className="p-12 bg-background hover:bg-muted transition-colors duration-700 h-full group">
              <v.icon className="text-primary mb-12 group-hover:scale-110 transition-transform duration-500" size={32} />
              <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter mb-6">{v.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{v.text}</p>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
