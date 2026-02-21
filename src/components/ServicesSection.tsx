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

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Expertise</span>
            <h2 className="font-display font-black text-4xl md:text-6xl mt-4 mb-6 text-foreground">
              What We <span className="text-secondary text-glow-gold">Execute</span>
            </h2>
            <p className="text-muted-foreground text-lg font-medium">
              Elite AI solutions engineered for the unique challenges and opportunities of the African continent.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const isExpanded = expanded === i;
            const colorClasses = service.color === "secondary"
              ? "border-secondary/30 border-glow-gold"
              : "border-primary/30 border-glow";

            return (
              <ScrollAnimator key={service.title} delay={i * 100}>
                <div
                  className={`relative p-10 rounded-3xl bg-card border transition-all duration-500 cursor-pointer group hover:scale-[1.02] ${isExpanded
                      ? `${colorClasses} md:col-span-2 lg:col-span-1 shadow-2xl`
                      : "border-border hover:border-primary/50"
                    }`}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                >
                  <service.icon
                    className={`mb-6 transition-all duration-300 ${service.color === "secondary" ? "text-secondary" : "text-primary"
                      } ${isExpanded ? "scale-125" : "group-hover:scale-110"}`}
                    size={42}
                  />

                  <h3 className="font-display font-black text-2xl mb-4 text-foreground tracking-tight">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 font-medium leading-relaxed">{service.short}</p>

                  {isExpanded && (
                    <div className="space-y-6 animate-fade-in">
                      <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/20 pl-4">{service.details}</p>
                      <div>
                        <p className="text-[10px] text-secondary font-black uppercase tracking-[0.2em] mb-3">Key Use Cases</p>
                        <ul className="space-y-2">
                          {service.useCases.map((uc) => (
                            <li key={uc} className="text-sm text-foreground/80 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {uc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest hover:text-secondary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Initiate Project <ArrowRight size={14} />
                      </a>
                    </div>
                  )}

                  {!isExpanded && (
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                        Details <ArrowRight size={10} className="inline ml-1" />
                      </span>
                    </div>
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

export default ServicesSection;
