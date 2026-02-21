import { motion } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";
import { Search, PenTool, BarChart3, ChevronRight } from "lucide-react";

const steps = [
    {
        phase: "01",
        title: "Intelligence Discovery",
        desc: "We dive deep into your data ecosystem and business logic to identify high-ROI AI opportunities unique to the African market context.",
        icon: Search,
        details: ["Data Gap Analysis", "Infrastructure Audit", "Strategic AI Roadmap"],
        color: "primary"
    },
    {
        phase: "02",
        title: "Rapid Prototyping",
        desc: "Our engineers build functional MVPs in 4-6 weeks, validating core neural architectures and user experience before large-scale deployment.",
        icon: PenTool,
        details: ["Algorithm Validation", "Cloud/Edge Architecture", "Performance Benchmarking"],
        color: "secondary"
    },
    {
        phase: "03",
        title: "Production Scaling",
        desc: "We deploy enterprise-grade AI systems with full monitoring, security hardening, and continuous learning pipelines for long-term impact.",
        icon: BarChart3,
        details: ["CI/CD for Machine Learning", "Security Hardening", "Regional Support Ops"],
        color: "primary"
    }
];

const MethodologySection = () => {
    return (
        <section id="methodology" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimator>
                    <div className="mb-24 text-center">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-8 h-[2px] bg-primary" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">THE KIVO BLUEPRINT</span>
                            <div className="w-8 h-[2px] bg-primary" />
                        </div>
                        <h2 className="text-h2-elite text-white">How We <br /> <span className="text-white/40 text-glow-cyan">Deploy Impact</span></h2>
                    </div>
                </ScrollAnimator>

                <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group p-10 bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8">
                                <span className="text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors uppercase">{step.phase}</span>
                            </div>

                            <div className="relative z-10">
                                <step.icon size={48} className="text-primary mb-8 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-muted-foreground font-medium mb-10 leading-relaxed max-w-sm">
                                    {step.desc}
                                </p>

                                <div className="space-y-4">
                                    {step.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <ChevronRight size={14} className="text-primary" />
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover highlight */}
                            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-10 bg-primary flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer hover:bg-white transition-all duration-700">
                    <div>
                        <h4 className="text-xl md:text-2xl font-black text-[#050505] uppercase tracking-tighter">Ready to initiate Discovery Phase?</h4>
                        <p className="text-[#050505]/60 font-bold text-xs uppercase tracking-widest mt-2 uppercase">Complimentary 30-min Strategy Session</p>
                    </div>
                    <button className="px-10 py-5 bg-[#050505] text-white font-black text-xs uppercase tracking-[0.3em] group-hover:bg-primary transition-all">
                        Secure Session
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
