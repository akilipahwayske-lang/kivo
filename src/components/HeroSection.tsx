import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import HeroScene from "./HeroScene";

const stats = [
  { value: 50, label: "Organizations Served", suffix: "+" },
  { value: 10, label: "Industries", suffix: "+" },
  { value: 200, label: "Workshops Delivered", suffix: "+" },
];

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
  const taglineParts = ["Knowledge", "Innovation", "Vision", "Optimization"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kivo-darker">
      <HeroScene />

      {/* Premium Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-[1]" />
      <div className="absolute inset-0 afro-pattern opacity-5 z-[1]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center space-y-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
              <Sparkles size={14} className="animate-pulse" />
              AI Excellence — Nairobi, Kenya 🇰🇪
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter">
              <span className="text-white opacity-90">KIVO</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-kivo-glow text-glow">
                Powering Africa's
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kivo-gold to-yellow-300 text-glow-gold">
                Intelligent Future
              </span>
            </h1>
          </motion.div>

          {/* Animated tagline */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {taglineParts.map((part, i) => (
              <span key={part} className="flex items-center gap-4 text-muted-foreground font-medium tracking-widest uppercase text-xs md:text-sm">
                {part}
                {i < taglineParts.length - 1 && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                )}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-display font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 border-glow"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Book Discovery Call</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#quiz"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass-morphism text-white font-display font-bold text-xl hover:bg-white/10 transition-all border-white/20 hover:border-white/40 active:scale-95"
            >
              Take Readiness Quiz
            </a>
          </motion.div>

          {/* Stats - Horizontal scrollable on mobile */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto border-t border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="group relative p-6 rounded-2xl glass-morphism hover:bg-white/5 transition-colors">
                <div className="font-display font-black text-4xl md:text-5xl text-primary text-glow mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground animate-pulse">Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};


export default HeroSection;
