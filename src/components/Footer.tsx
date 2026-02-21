import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4 max-w-sm">
            <Link to="/" className="flex items-center gap-3 group mb-8">
              <div className="w-12 h-12 bg-primary flex items-center justify-center font-black">
                <span className="text-[#050505] text-2xl">K</span>
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white">KIVO</span>
            </Link>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed">
              Engineering high-impact AI architectures for the African continent. Solving complexity through intelligence.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-8">Navigation</p>
            <ul className="space-y-4">
              <li><a href="#showcase" className="text-sm font-bold text-white/80 hover:text-primary transition-colors">Showcase</a></li>
              <li><a href="#services" className="text-sm font-bold text-white/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#industries" className="text-sm font-bold text-white/80 hover:text-primary transition-colors">Industries</a></li>
              <li><a href="#quiz" className="text-sm font-bold text-white/80 hover:text-primary transition-colors">AI Audit</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-8">HQ: Nairobi</p>
            <address className="not-italic space-y-4">
              <p className="text-sm font-bold text-white/80">Westlands, Nairobi</p>
              <p className="text-sm font-bold text-white/80">Monday – Friday</p>
              <p className="text-sm font-bold text-white/80">9:00 – 18:00 EAT</p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-8">Connect</p>
            <div className="flex flex-wrap gap-4">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 hover:border-primary/30 text-white/50 hover:text-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">© 2026 KIVO AI</span>
            <a href="#" className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] hover:text-white transition-colors">Privacy Privacy</a>
          </div>
          <div className="flex items-center gap-4 text-white/20">
            <Globe size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Global Engineering Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
