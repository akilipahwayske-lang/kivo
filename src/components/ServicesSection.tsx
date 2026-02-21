import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Map, Cpu, GraduationCap, Code, Shield, ArrowRight, X } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "AI Strategy & Roadmapping",
    short: "Actionable AI transformation plans tailored to African growth markets.",
    details: "We assess your current capabilities, identify high-impact AI opportunities, and create a step-by-step roadmap. From quick wins to long-term digital sovereignty.",
    useCases: ["Digital transformation for SMEs", "AI opportunity assessment", "Regional market expansion strategy"],
    color: "primary" as const,
  },
  {
    icon: Cpu,
    title: "Mobile Money & Fintech AI",
    short: "Securing and optimizing transactions with intelligent automation.",
    details: "We build AI layers for fintech ecosystems, focusing on fraud detection, credit scoring for the unbanked, and automated currency hedging.",
    useCases: ["M-Pesa AI integration", "Credit scoring models", "Algorithmic fraud prevention"],
    color: "primary" as const,
  },
  {
    icon: GraduationCap,
    title: "Talent & Capacity Building",
    short: "Upskilling the next generation of African AI leaders.",
    details: "Hands-on training programs designed for the local context. We've bridged the skill gap for 5,000+ professionals in Nairobi and beyond.",
    useCases: ["Executive AI literacy", "Data science bootcamps", "AI policy workshops"],
    color: "secondary" as const,
  },
  {
    icon: Code,
    title: "Swahili & Local Language NLP",
    short: "Bespoke Language Models for regional dialects and Swahili.",
    details: "Break language barriers with custom NLP models. We specialize in Swahili, Amharic, and local dialects to ensure your AI speaks to everyone.",
    useCases: ["Swahili customer support bots", "Dialect sentiment analysis", "Localized content generation"],
    color: "primary" as const,
  },
  {
    icon: Shield,
    title: "AI Governance & Data Privacy",
    short: "Navigating African data protection acts with responsible AI.",
    details: "Ensure your AI complies with Kenyan Data Protection Act and international standards. We build bias-free, transparent systems you can trust.",
    useCases: ["Compliance auditing", "Ethics frameworks", "Bias mitigation"],
    color: "secondary" as const,
  },
];

const ServiceGrid = ({ type }: { type: string }) => (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:20px_20px]" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-[12rem] font-black text-white tracking-widest uppercase opacity-10 rotate-12">
        {type.substring(0, 3)}
      </span>
    </div>
  </div>
);

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-40 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="max-w-3xl mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">ELITE CAPABILITIES</span>
            </div>
            <h2 className="text-h2-elite text-foreground">
              What We <br /> <span className="text-foreground/40">Execute</span>
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden">
          {services.map((service, i) => {
            const isExpanded = expanded === i;

            return (
              <ScrollAnimator key={service.title} delay={i * 100}>
                <div
                  className={`relative p-12 bg-background transition-all duration-700 cursor-pointer h-full group hover:bg-muted ${isExpanded ? "z-10 bg-muted" : ""
                    }`}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                >
                  <ServiceGrid type={service.title} />

                  <div className="relative z-10">
                    <div className={`p-4 border border-border w-fit mb-12 transition-colors ${isExpanded || "group-hover:border-primary/40"}`}>
                      <service.icon
                        className={`transition-all duration-300 ${isExpanded ? "text-primary scale-110" : "text-foreground/40 group-hover:text-primary"
                          }`}
                        size={24}
                      />
                    </div>

                    <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tighter leading-tight">{service.title}</h3>
                    <p className="text-muted-foreground font-medium mb-8 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{service.short}</p>

                    {isExpanded && (
                      <div className="space-y-8 animate-fade-in pt-8 border-t border-border">
                        <p className="text-foreground/70 text-sm leading-relaxed font-medium">{service.details}</p>
                        <div>
                          <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-4">Strategic Applications</p>
                          <ul className="space-y-3">
                            {service.useCases.map((uc) => (
                              <li key={uc} className="text-xs text-foreground/60 flex items-center gap-2 font-bold uppercase tracking-tight">
                                <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                                {uc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-3 text-foreground font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors pt-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Project Brief <ArrowRight size={12} />
                        </a>
                      </div>
                    )}

                    {!isExpanded && (
                      <div className="flex items-center justify-between mt-8 pt-8 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                          Analyze Expertise
                        </span>
                        <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollAnimator>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
