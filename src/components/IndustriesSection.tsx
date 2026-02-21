import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Trees as Plant, Landmark, Building2, Zap } from "lucide-react";

const industries = [
  {
    icon: Plant,
    title: "Agri-Tech & Logistics",
    desc: "Predictive AI for the heartbeat of Africa.",
    cases: ["Yield forecasting for smallholders", "Supply chain route optimization", "Soil health computer vision", "Pest outbreak early warning"],
  },
  {
    icon: Building2,
    title: "Financial Institutions",
    desc: "The next evolution of Mobile Money.",
    cases: ["Micro-lending credit risk AI", "Automated AML for SACCOs", "Personalized wealth management", "Forex liquidity forecasting"],
  },
  {
    icon: Landmark,
    title: "Public Sector & Gov",
    desc: "Intelligent citizen-centric services.",
    cases: ["Multilingual citizen chatbots", "Data-driven urban planning", "Public health resource allocation", "Tax fraud detection systems"],
  },
  {
    icon: Zap,
    title: "Energy & Infrastructure",
    desc: "Optimizing the power of tomorrow.",
    cases: ["Smart grid load forecasting", "Solar microgrid optimization", "Predictive maintenance for telcos", "Water distribution analytics"],
  },
];

const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-kivo-dark">
      <div className="absolute inset-0 afro-pattern opacity-10" />
      <div className="container mx-auto px-4 relative">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">Industry Impact</span>
            <h2 className="font-display font-black text-4xl md:text-6xl mt-4 mb-6 text-foreground leading-tight">
              Sectors We <span className="text-primary text-glow">Transform</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium">
              We focus on the industries that shape our future, delivering AI that solves real-world African challenges.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((ind, i) => {
            const isActive = activeIdx === i;
            return (
              <ScrollAnimator key={ind.title} delay={i * 100}>
                <div
                  className={`p-10 rounded-3xl bg-card/40 border transition-all duration-500 cursor-pointer h-full group backdrop-blur-sm ${isActive ? "border-primary/50 border-glow scale-[1.02]" : "border-white/5 hover:border-primary/20"
                    }`}
                  onClick={() => setActiveIdx(isActive ? null : i)}
                >
                  <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors ${isActive ? "bg-primary/20" : "bg-white/5 group-hover:bg-primary/10"}`}>
                    <ind.icon className={`transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-muted-foreground group-hover:text-primary"}`} size={32} />
                  </div>

                  <h3 className="font-display font-black text-xl mb-3 text-foreground tracking-tight">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium mb-6 leading-relaxed">{ind.desc}</p>

                  <div
                    className={`overflow-hidden transition-all duration-500 border-t border-white/5 pt-4 ${isActive ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-4">Strategic Applications</p>
                    <ul className="space-y-3">
                      {ind.cases.map((c) => (
                        <li key={c} className="text-xs text-white/70 flex items-start gap-2 leading-relaxed">
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
