import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Rocket, Building2, Landmark } from "lucide-react";

const industries = [
  {
    icon: Rocket,
    title: "SMEs & Startups",
    desc: "Lean AI adoption for growing businesses.",
    cases: ["AI-powered customer insights", "Automated operations", "Smart product recommendations", "Chatbot-first customer support"],
  },
  {
    icon: Building2,
    title: "Large Corporates",
    desc: "Enterprise-scale AI transformation.",
    cases: ["Predictive maintenance", "Supply chain optimization", "HR analytics & talent matching", "Risk assessment automation"],
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    desc: "AI for public service delivery.",
    cases: ["Citizen service chatbots", "Data-driven policy making", "Fraud detection systems", "Healthcare AI diagnostics"],
  },
];

const IndustriesSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="absolute inset-0 afro-pattern opacity-20" />
      <div className="container mx-auto px-4 relative">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Industries</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              Who We <span className="text-secondary text-glow-gold">Serve</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From agile startups to national governments, we tailor AI solutions to your sector's unique challenges.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {industries.map((ind, i) => {
            const isActive = activeIdx === i;
            return (
              <ScrollAnimator key={ind.title} delay={i * 150}>
                <div
                  className={`p-8 rounded-2xl bg-card border transition-all duration-500 cursor-pointer h-full ${
                    isActive ? "border-secondary/50 border-glow-gold scale-[1.02]" : "border-border hover:border-secondary/30"
                  }`}
                  onClick={() => setActiveIdx(isActive ? null : i)}
                >
                  <ind.icon className="text-secondary mb-4" size={36} />
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{ind.title}</h3>
                  <p className="text-muted-foreground mb-4">{ind.desc}</p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-2">Use Cases</p>
                    <ul className="space-y-2">
                      {ind.cases.map((c) => (
                        <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {!isActive && (
                    <p className="text-secondary text-xs font-medium mt-2">Tap to see use cases →</p>
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
