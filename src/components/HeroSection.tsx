import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroScene from "./HeroScene";

const stats = [
  { value: 50, label: "Organizations Served", suffix: "+" },
  { value: 10, label: "Industries", suffix: "+" },
  { value: 200, label: "Workshops Delivered", suffix: "+" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span className="font-display font-bold text-3xl md:text-4xl text-primary text-glow">
      {count}{suffix}
    </span>
  );
};

const HeroSection = () => {
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTaglineVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const taglineParts = ["Knowledge", "Innovation", "Vision", "Optimization"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-[1]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-[1]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium animate-count-up">
            <Sparkles size={14} />
            AI Consultancy — Nairobi, Kenya 🇰🇪
          </div>

          {/* Headline */}
          <h1 className="font-display font-900 text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            <span className="text-foreground">KIVO</span>
            <br />
            <span className="text-primary text-glow">Powering Africa's</span>
            <br />
            <span className="text-secondary text-glow-gold">Intelligent Future</span>
          </h1>

          {/* Animated tagline */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-muted-foreground text-lg">
            {taglineParts.map((part, i) => (
              <span
                key={part}
                className={`transition-all duration-700 ${
                  taglineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 200 + 600}ms` }}
              >
                {part}
                {i < taglineParts.length - 1 && (
                  <span className="ml-2 md:ml-4 text-primary/50">·</span>
                )}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg hover:bg-primary/90 transition-all border-glow hover:scale-105 duration-300"
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-card/50 text-foreground font-display font-semibold text-lg hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
