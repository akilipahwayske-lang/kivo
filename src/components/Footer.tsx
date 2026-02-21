import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Globe } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3 group">
    <div className="relative w-10 h-10 bg-background border border-primary/40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:4px_4px]" />
      <span className="relative z-10 text-primary font-black text-xl tracking-tighter">K</span>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/40 animate-logo-scan" />
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-display font-black tracking-tighter text-foreground leading-none">KIVO</span>
      <span className="text-[7px] font-black tracking-[0.4em] text-primary/60 uppercase">Intelligence Frontier</span>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 max-w-sm">
            <Link to="/" className="inline-block mb-8">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed opacity-60">
              Engineering the intelligence layer for the African continent. Solving systemic complexity through elite AI architecture.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em] mb-8">Navigation</p>
            <ul className="space-y-4">
              <li><a href="#showcase" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">Showcase</a></li>
              <li><a href="#services" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#industries" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">Industries</a></li>
              <li><a href="#quiz" className="text-sm font-bold text-foreground/80 hover:text-primary transition-colors">AI Audit</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em] mb-8">HQ: Nairobi</p>
            <address className="not-italic space-y-4">
              <p className="text-sm font-bold text-foreground/80">Westlands, Nairobi</p>
              <p className="text-sm font-bold text-foreground/80">Monday – Friday</p>
              <p className="text-sm font-bold text-foreground/80">9:00 – 18:00 EAT</p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em] mb-8">Connect</p>
            <div className="flex flex-wrap gap-4">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-muted border border-border hover:border-primary/30 text-foreground/50 hover:text-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.3em]">© 2026 KIVO AI</span>
            <a href="#" className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.3em] hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-4 text-foreground/20">
            <Globe size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Global Engineering Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
