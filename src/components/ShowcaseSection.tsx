import { motion } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";
import { Database, ShieldCheck, Zap, Globe, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Regional Financial Firewall",
        sector: "Fintech",
        impact: "99.9% Fraud Detection",
        tech: ["Neural Networks", "Real-time Kafka", "M-Pesa API"],
        desc: "Real-time AI-powered transaction monitoring system designed for the complexities of East African mobile money ecosystems.",
        icon: ShieldCheck,
    },
    {
        title: "Agri-Yield Neural Engine",
        sector: "Logistics",
        impact: "40% Yield Increase",
        tech: ["Satellite Imagery", "PyTorch", "Rust Edge Cloud"],
        desc: "A distributed intelligence platform providing localized crop yield predictions for over 200,000 smallholder farmers.",
        icon: Zap,
    },
    {
        title: "Pan-African Language Mesh",
        sector: "NLP",
        impact: "12 Dialects Supported",
        tech: ["Custom Transformers", "Low-Resource Learning"],
        desc: "First enterprise-grade Swahili NLP system natively understanding regional slang and local context for customer service.",
        icon: Globe,
    }
];

const ProjectVisual = ({ sector }: { sector: string }) => (
    <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-transparent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
        <div className="absolute top-6 right-6 text-[4rem] font-black text-white/10 uppercase tracking-tighter leading-none">
            {sector.substring(0, 2)}
        </div>
    </div>
);

const ShowcaseSection = () => {
    return (
        <section id="showcase" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 neural-grid opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimator>
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[2px] bg-primary" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">SELECT CASE STUDIES</span>
                        </div>
                        <h2 className="text-h2-elite text-white">
                            Proven <br />
                            <span className="text-white/40">Architectures</span>
                        </h2>
                    </div>
                </ScrollAnimator>

                <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-12 bg-[#050505] hover:bg-white/[0.02] transition-colors duration-700"
                        >
                            <ProjectVisual sector={project.sector} />

                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <project.icon size={40} className="text-primary group-hover:scale-110 group-hover:glow-text-cyan transition-all duration-500" />
                                <ArrowUpRight size={24} className="text-white/20 group-hover:text-primary transition-colors" />
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffb700] mb-2 block">{project.sector}</span>
                                    <h3 className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">{project.title}</h3>
                                </div>

                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="pt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-sm font-bold text-white uppercase tracking-widest">{project.impact}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-tighter text-white/40">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover highlight */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <button className="px-12 py-6 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                        Explore Full Project Archive
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
