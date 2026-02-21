import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import HeroVideoSimulation from "./HeroVideoSimulation";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplayValue(target);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{displayValue}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Cinematic Simulation Layer */}
      <div className="absolute inset-0 z-0">
        <HeroVideoSimulation />
      </div>

      {/* Film Texture Overlays */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-film-grain" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80" />
        <div className="absolute inset-0 neural-grid opacity-10" />

        {/* Kinetic Light Leaks */}
        <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-secondary/5 blur-[150px] rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-10 overflow-hidden"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary/80">AI STRATEGY • ENGINEERING • OPTIMIZATION</span>
          </motion.div>

          {/* Elite Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-h1-elite mb-12"
          >
            <span className="text-white">Engineering</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00f0ff] glow-text-cyan">
              Intelligence
            </span> <br />
            <span className="text-white/40">For Africa</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-xl md:text-2xl font-medium leading-relaxed"
            >
              We don't just build AI. We architect systems that solve complex regional challenges—from Nairobi to the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a
                href="#contact"
                className="group flex items-center justify-between px-8 py-6 bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-500"
              >
                Inquire Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#showcase"
                className="group flex items-center justify-between px-8 py-6 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all duration-500"
              >
                View Showcase <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform opacity-50" />
              </a>
            </motion.div>
          </div>

          {/* Metric Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "Systems Deployed", value: "50+", color: "text-primary" },
              { label: "Strategic Partners", value: "30+", color: "text-white" },
              { label: "Regional Nodes", value: "12", color: "text-white" },
              { label: "Engineering Lead", value: "8yr+", color: "text-[#ffb700]" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className={`text-4xl font-black ${stat.color} tracking-tighter`}>{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground opacity-60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
