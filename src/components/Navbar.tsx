import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "AI Quiz", href: "#quiz" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${scrolled ? "bg-kivo-dark/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-glow group-hover:scale-110 transition-transform">
            <span className="font-display font-black text-primary text-xl">K</span>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-white">
            KIVO
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors font-bold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-black text-sm hover:scale-105 active:scale-95 transition-all border-glow"
          >
            Initiate Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-kivo-dark/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="container mx-auto px-4 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-xl font-display font-bold text-white/70 hover:text-primary py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center py-5 rounded-2xl bg-primary text-primary-foreground font-display font-black text-xl mt-6 shadow-xl shadow-primary/20"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
