import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";
import { Database, ShieldCheck, Zap, Globe, ArrowUpRight, X, LayoutGrid, FileText } from "lucide-react";

const projects = [
    {
        title: "Predictive Credit System",
        sector: "Fintech",
        impact: "40% lower default rates",
        tech: ["PyTorch", "M-Pesa API"],
        desc: "An AI-driven scoring engine for the unbanked, leveraging alternative data streams for reliable risk assessment.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        icon: ShieldCheck
    },
    {
        title: "Supply Chain AI",
        sector: "Logistics",
        impact: "25% cost reduction",
        tech: ["Reinforcement Learning", "Google Cloud"],
        desc: "Optimizing the 'Last Mile' in Nairobi with dynamic routing and demand forecasting models.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        icon: Zap
    },
    {
        title: "Visual Quality Control",
        sector: "Manufacturing",
        impact: "99.8% accuracy",
        tech: ["Computer Vision", "NVIDIA Jetson"],
        desc: "Real-time defect detection for food processing lines in Kenya's industrial hubs.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        icon: Globe
    },
];

const archivedProjects = [
    {
        title: "Retail Demand Predictor",
        sector: "Commerce",
        impact: "Stock-outs reduced by 50%",
        image: "https://images.unsplash.com/photo-1534452285082-6fc6a1ee2a73?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "SME Credit Bot",
        sector: "Fintech",
        impact: "10k loans processed",
        image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Traffic Neural Flow",
        sector: "Gov",
        impact: "15% faster commute",
        image: "https://images.unsplash.com/photo-1545147986-a9d6f21efe3c?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Soil Moisture AI",
        sector: "Agri-Tech",
        impact: "20% water savings",
        image: "https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Healthcare Chatbot",
        sector: "Medical",
        impact: "5k consultations/mo",
        image: "https://images.unsplash.com/photo-1576091160550-2173599bd14e?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Energy Grid Guard",
        sector: "Energy",
        impact: "99.9% uptime",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
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
    const [showArchive, setShowArchive] = useState(false);

    return (
        <section id="showcase" className="py-24 md:py-40 bg-background relative overflow-hidden">
            <div className="absolute inset-0 neural-grid opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollAnimator>
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[2px] bg-primary" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">SELECT CASE STUDIES</span>
                        </div>
                        <h2 className="text-h2-elite text-foreground">
                            Proven <br />
                            <span className="text-foreground/40">Architectures</span>
                        </h2>
                    </div>
                </ScrollAnimator>

                <div className="grid lg:grid-cols-3 gap-px bg-border border border-border overflow-hidden">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-12 bg-background transition-all duration-700 cursor-pointer h-full hover:bg-muted border border-border hover:border-primary/20"
                        >
                            {/* High-Fidelity Project Image */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-1000 pointer-events-none overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[3s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-transparent opacity-80" />
                            </div>

                            <ProjectVisual sector={project.sector} />

                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <project.icon size={40} className="text-primary group-hover:scale-110 group-hover:glow-text-cyan transition-all duration-500" />
                                <ArrowUpRight size={24} className="text-foreground/20 group-hover:text-primary transition-colors" />
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ffb700] mb-2 block">{project.sector}</span>
                                    <h3 className="text-3xl font-black text-foreground leading-tight uppercase tracking-tighter">{project.title}</h3>
                                </div>

                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="pt-8 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-sm font-bold text-foreground uppercase tracking-widest">{project.impact}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-muted border border-border text-[9px] font-black uppercase tracking-tighter text-foreground/40">
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
                    <button
                        onClick={() => setShowArchive(true)}
                        className="px-12 py-6 border border-border text-foreground font-black text-xs uppercase tracking-widest hover:bg-muted transition-all group"
                    >
                        Explore Full Project Archive
                    </button>
                </div>
            </div>

            {/* Project Archive Modal */}
            <AnimatePresence>
                {showArchive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full max-w-6xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-border flex items-center justify-between bg-background/50">
                                <div className="flex items-center gap-6">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <LayoutGrid className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter">Deep Dive Archive</h2>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-foreground/30">Select Technical Deployments // KIVO AI</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowArchive(false)}
                                    className="p-3 hover:bg-muted rounded-full text-foreground/40 hover:text-foreground transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {archivedProjects.map((project, i) => (
                                        <div key={i} className="group relative aspect-square bg-background border border-border overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                <span className="text-[10px] font-black tracking-widest text-primary uppercase mb-2">
                                                    {project.sector}
                                                </span>
                                                <h4 className="text-xl font-black text-foreground uppercase mb-2 tracking-tighter">
                                                    {project.title}
                                                </h4>
                                                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
                                                    {project.impact}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-20 p-12 bg-primary/5 border border-primary/20 rounded-2xl text-center">
                                    <FileText className="text-primary mx-auto mb-6" size={48} />
                                    <h3 className="text-3xl font-black text-foreground uppercase mb-4 tracking-tighter">Request Full Engineering Portfolio</h3>
                                    <p className="text-foreground/60 mb-8 max-w-xl mx-auto leading-relaxed">
                                        Our full archive contains proprietary architecture diagrams and deployment logs for 50+ enterprise AI projects across Africa.
                                    </p>
                                    <a
                                        href="#contact"
                                        onClick={() => setShowArchive(false)}
                                        className="inline-block px-10 py-5 bg-primary text-primary-foreground font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20"
                                    >
                                        Request Full PDF Portfolio
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ShowcaseSection;
