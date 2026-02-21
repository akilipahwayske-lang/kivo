import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Map, Cpu, GraduationCap, Code, Shield, ArrowRight, X } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "AI Strategy & Roadmapping",
    short: "Actionable AI transformation plans tailored to your organization.",
    details: "We assess your current capabilities, identify high-impact AI opportunities, and create a step-by-step roadmap. From quick wins to long-term vision, every recommendation is grounded in your business reality.",
    useCases: ["Digital transformation planning", "AI opportunity assessment", "ROI modeling & prioritization"],
    color: "primary" as const,
  },
  {
    icon: Cpu,
    title: "AI Integration & Automation",
    short: "Deploy chatbots, copilots, and workflow automation into existing systems.",
    details: "We integrate AI-powered tools directly into your workflows — from intelligent chatbots and document processing to predictive analytics and decision support systems.",
    useCases: ["Customer service chatbots", "Process automation", "Predictive analytics dashboards"],
    color: "primary" as const,
  },
  {
    icon: GraduationCap,
    title: "AI Training & Capacity Building",
    short: "Workshops and bootcamps to upskill your teams on AI.",
    details: "Hands-on training programs designed for all levels — from executive AI literacy workshops to technical deep-dives for engineering teams. We've trained 5,000+ professionals across Africa.",
    useCases: ["Executive AI workshops", "Technical team bootcamps", "Train-the-trainer programs"],
    color: "secondary" as const,
  },
  {
    icon: Code,
    title: "Custom AI Development",
    short: "Build bespoke AI solutions, models, and data pipelines.",
    details: "From custom machine learning models to end-to-end AI applications, we build solutions tailored to your unique challenges. We handle everything from data engineering to deployment.",
    useCases: ["Custom ML models", "NLP solutions for local languages", "Computer vision systems"],
    color: "primary" as const,
  },
  {
    icon: Shield,
    title: "AI Governance & Ethics",
    short: "Responsible AI adoption frameworks and compliance guidance.",
    details: "Navigate the ethical and regulatory landscape of AI with confidence. We help organizations build responsible AI practices, ensure compliance, and establish governance frameworks.",
    useCases: ["AI policy development", "Bias auditing & fairness", "Regulatory compliance"],
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
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Services</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              Explore What We <span className="text-primary text-glow">Build</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Click any service to dive deeper. Each is designed to work independently or as part of a comprehensive AI transformation.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const isExpanded = expanded === i;
            const colorClasses = service.color === "secondary" 
              ? "border-secondary/40 border-glow-gold" 
              : "border-primary/40 border-glow";

            return (
              <ScrollAnimator key={service.title} delay={i * 100}>
                <div
                  className={`relative p-8 rounded-2xl bg-card border transition-all duration-500 cursor-pointer group ${
                    isExpanded
                      ? `${colorClasses} md:col-span-2 lg:col-span-1`
                      : "border-border hover:border-primary/30"
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : i)}
                >
                  {isExpanded && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setExpanded(null); }}
                      className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                    >
                      <X size={18} />
                    </button>
                  )}

                  <service.icon
                    className={`mb-4 transition-all duration-300 ${
                      service.color === "secondary" ? "text-secondary" : "text-primary"
                    } ${isExpanded ? "scale-110" : "group-hover:scale-110"}`}
                    size={36}
                  />

                  <h3 className="font-display font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.short}</p>

                  {isExpanded && (
                    <div className="space-y-4 animate-fade-in">
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.details}</p>
                      <div>
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Use Cases</p>
                        <ul className="space-y-1">
                          {service.useCases.map((uc) => (
                            <li key={uc} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              {uc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Get Started <ArrowRight size={14} />
                      </a>
                    </div>
                  )}

                  {!isExpanded && (
                    <span className="text-primary text-xs font-semibold flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to explore <ArrowRight size={12} />
                    </span>
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
