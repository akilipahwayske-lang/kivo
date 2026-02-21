import ScrollAnimator from "./ScrollAnimator";
import { TrendingUp, Users, Zap } from "lucide-react";

const cases = [
  {
    title: "Fintech AI Automation",
    client: "Leading Mobile Money Provider",
    metric: "40% reduction in fraud",
    desc: "Deployed ML-powered fraud detection that reduced false positives by 60% while catching 40% more actual fraud attempts.",
    icon: TrendingUp,
  },
  {
    title: "Government Service Chatbot",
    client: "County Government, Kenya",
    metric: "10,000+ citizens served/month",
    desc: "Built a multilingual AI chatbot that handles citizen queries in English and Swahili, reducing call center volume by 35%.",
    icon: Users,
  },
  {
    title: "Agricultural Yield Prediction",
    client: "East African Agri-Corp",
    metric: "25% improved yield forecasting",
    desc: "Custom computer vision and weather data model that helps farmers optimize planting schedules and resource allocation.",
    icon: Zap,
  },
];

const CaseStudiesSection = () => (
  <section id="impact" className="relative py-24 md:py-32">
    <div className="absolute inset-0 afro-pattern opacity-20" />
    <div className="container mx-auto px-4 relative">
      <ScrollAnimator>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">Impact</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-foreground">
            Real Results, <span className="text-secondary text-glow-gold">Real Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Placeholder showcases of the kind of impact KIVO delivers across Africa.
          </p>
        </div>
      </ScrollAnimator>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cases.map((c, i) => (
          <ScrollAnimator key={c.title} delay={i * 150}>
            <div className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover:border-glow-gold hover:-translate-y-1 h-full flex flex-col">
              <c.icon className="text-secondary mb-4" size={32} />
              <h3 className="font-display font-bold text-xl mb-1 text-foreground">{c.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{c.client}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-bold mb-4 w-fit">
                {c.metric}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{c.desc}</p>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
