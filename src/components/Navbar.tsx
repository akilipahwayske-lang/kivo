import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Showcase", href: "#showcase" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "AI Quiz", href: "#quiz" },
  { name: "Contact", href: "#contact" },
];

const Logo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative w-10 h-10 bg-[#050505] border border-primary/40 flex items-center justify-center overflow-hidden">
      {/* Dynamic Grid Background in Logo */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:4px_4px]" />
      <span className="relative z-10 text-primary font-black text-xl tracking-tighter">K</span>
      {/* Animated Scanline */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/40 animate-logo-scan" />
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-display font-black tracking-tighter text-foreground leading-none">KIVO</span>
      <span className="text-[7px] font-black tracking-[0.4em] text-primary/60 uppercase">Intelligence Frontier</span>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase font-black tracking-[0.2em] text-white/50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <a
                href="#contact"
                className="px-6 py-3 bg-foreground text-background font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 group"
              >
                Initiate Project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black text-foreground hover:text-primary transition-colors uppercase tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-8 px-8 py-5 bg-primary text-[#050505] font-black text-xl uppercase tracking-widest flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                Launch Discovery <ArrowRight size={24} />
              </a>
            </div>
            <div className="mt-auto border-t border-white/5 pt-8">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Nairobi, Kenya • 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
