import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Trees as Plant, Landmark, Building2, Zap } from "lucide-react";

const industries = [
  {
    icon: Plant,
    title: "Agri-Tech & Logistics",
    desc: "Predictive AI for the heartbeat of Africa.",
    cases: ["Yield forecasting for smallholders", "Supply chain route optimization", "Soil health computer vision", "Pest outbreak early warning"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Building2,
    title: "Financial Institutions",
    desc: "The next evolution of Mobile Money.",
    cases: ["Micro-lending credit risk AI", "Automated AML for SACCOs", "Personalized wealth management", "Forex liquidity forecasting"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Landmark,
    title: "Public Sector & Gov",
    desc: "Intelligent citizen-centric services.",
    cases: ["Multilingual citizen chatbots", "Data-driven urban planning", "Public health resource allocation", "Tax fraud detection systems"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Zap,
    title: "Energy & Infrastructure",
    desc: "Optimizing the power of tomorrow.",
    cases: ["Smart grid load forecasting", "Solar microgrid optimization", "Predictive maintenance for telcos", "Water distribution analytics"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  },
];

const SectorVisual = ({ image, type, isActive }: { image: string; type: string; isActive: boolean }) => (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-1000 pointer-events-none overflow-hidden">
    <img
      src={image}
      alt={type}
      className={`absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[3s] ${isActive ? "opacity-40 grayscale-0 brightness-75 scale-105" : ""}`}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-transparent opacity-60" />
    <div className="absolute top-4 right-4 text-[40px] font-black text-white/5 uppercase tracking-tighter">
      {type}
    </div>
  </div>
);

const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-background">
      <div className="absolute inset-0 neural-grid opacity-5" />
      <div className="container mx-auto px-4 relative">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">SECTOR IMPACT</span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-h2-elite text-foreground">
              Sectors We <br /> <span className="text-foreground/40">Transform</span>
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {industries.map((ind, i) => {
            const isActive = activeIdx === i;
            const sectorCode = ind.title.split(' ')[0].substring(0, 3);
            return (
              <ScrollAnimator key={ind.title} delay={i * 100}>
                <div
                  className={`relative p-12 bg-background transition-all duration-700 cursor-pointer h-full group hover:bg-muted ${isActive ? "z-10 ring-1 ring-primary/30" : ""
                    }`}
                  onClick={() => setActiveIdx(isActive ? null : i)}
                >
                  <SectorVisual image={ind.image} type={sectorCode} isActive={isActive} />

                  <div className={`p-4 border border-border w-fit mb-8 transition-colors ${isActive ? "bg-primary border-primary" : "group-hover:border-primary/40"}`}>
                    <ind.icon className={`transition-all duration-300 ${isActive ? "text-primary-foreground" : "text-foreground/40 group-hover:text-primary"}`} size={24} />
                  </div>

                  <h3 className="text-xl font-black text-foreground mb-4 uppercase tracking-tighter">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium mb-8 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{ind.desc}</p>

                  <div
                    className={`overflow-hidden transition-all duration-500 border-t border-border pt-4 ${isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-4">Strategic Applications</p>
                    <ul className="space-y-3">
                      {ind.cases.map((c) => (
                        <li key={c} className="text-xs text-foreground/70 flex items-start gap-2 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isActive && (
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Impact Cases
                    </p>
                  )}
                </div>
              </ScrollAnimator>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
