import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroScene from "./HeroScene";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-kivo-darker">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-kivo-darker/20 via-transparent to-kivo-darker" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 afro-tech-overlay opacity-5" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 blur-[100px] rounded-full animate-pulse-glow delay-700 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white/70">AI Excellence — Nairobi, Kenya 🇰🇪</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-6xl md:text-9xl mb-8 tracking-tighter leading-[0.85] text-white"
          >
            KIVO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-kivo-glow to-secondary text-glow-intense">
              Powering Africa's <br />
              Intelligent Future
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Nairobi's premier AI consultancy driving innovation through bespoke <br className="hidden md:block" />
            <span className="text-white">Knowledge, Innovation, Vision, and Optimization.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="group relative px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-3">
                Book Discovery Call <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a
              href="#quiz"
              className="px-10 py-5 rounded-2xl glass-card text-white font-black text-xl hover:bg-white/10 hover:border-white/20 transition-all border-glow"
            >
              Take Readiness Quiz
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-24 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-20"
          >
            {[
              { label: "AI Deployments", value: "50", suffix: "+" },
              { label: "Organizations Served", value: "30", suffix: "+" },
              { label: "Talent Upskilled", value: "5000", suffix: "+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 flex items-center justify-center group-hover:text-primary transition-colors">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
