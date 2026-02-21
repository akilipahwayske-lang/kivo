import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

const articles = [
    {
        title: "The State of Generative AI in East African Enterprise",
        category: "Whitepaper",
        date: "Feb 2026",
        readTime: "12 min",
        excerpt: "An in-depth analysis of how regional leaders are leveraging LLMs to solve local infrastructure and language challenges.",
        tag: "Strategy"
    },
    {
        title: "Optimizing Neural Networks for Edge Computing in Agriculture",
        category: "Technical",
        date: "Jan 2026",
        readTime: "8 min",
        excerpt: "Exploring the engineering hurdles of deploying high-accuracy models in low-connectivity rural environments.",
        tag: "Engineering"
    },
    {
        title: "Fintech Security: AI-Driven Fraud Prevention for Mobile Money",
        category: "Case Study",
        date: "Dec 2025",
        readTime: "10 min",
        excerpt: "How real-time intelligence is safeguarding millions of transactions across the Safaricom and KCB ecosystems.",
        tag: "Security"
    }
];

const InsightsSection = () => {
    return (
        <section id="insights" className="py-24 md:py-40 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-[2px] bg-primary" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">THOUGHT LEADERSHIP</span>
                        </div>
                        <h2 className="text-h2-elite text-white">Insights <br /> <span className="text-white/40">From the Frontier</span></h2>
                    </div>

                    <button className="flex items-center gap-3 px-8 py-4 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#050505] transition-all group">
                        View All Insights <BookOpen size={14} className="group-hover:rotate-12 transition-transform" />
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    {articles.map((article, i) => (
                        <motion.div
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-0 bg-[#050505] hover:bg-white/[0.02] transition-colors duration-700 cursor-pointer flex flex-col"
                        >
                            {/* Thumbnail Placeholder */}
                            <div className="aspect-video relative bg-[#0a0a0a] border-b border-white/10 overflow-hidden">
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:10px_10px]" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                                    <span className="text-6xl font-black text-white/5">{article.category[0]}</span>
                                </div>
                            </div>

                            <div className="p-12 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="flex items-center justify-between mb-12">
                                        <span className="text-[10px] uppercase font-black tracking-widest text-primary">{article.category}</span>
                                        <span className="text-[10px] uppercase font-bold text-white/30">{article.readTime}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-primary transition-colors leading-tight uppercase">
                                        {article.title}
                                    </h3>

                                    <p className="text-muted-foreground font-medium mb-12 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-white/40">{article.tag}</span>
                                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>

                            {/* Hover Grain Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none bg-film-grain transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;
