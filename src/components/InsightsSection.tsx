import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, X, Clock, Share2, Printer } from "lucide-react";

const articles = [
    {
        title: "The State of Generative AI in East African Enterprise",
        category: "Whitepaper",
        date: "Feb 2026",
        readTime: "12 min",
        excerpt: "An in-depth analysis of how regional leaders are leveraging LLMs to solve local infrastructure and language challenges.",
        tag: "Strategy",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
        fullContent: `
            ## The Strategic Imperative
            Generative AI is not just a trend; for East African enterprises, it represents a "leapfrog" opportunity. By bypassing legacy infrastructure, businesses in Nairobi and beyond can build AI-first operations that are more agile and context-aware than their global counterparts.

            ### Key Adoption Trends
            1. **Customer Service 2.0**: Banks and telcos are moving beyond simple chatbots to sophisticated agents that understand Sheng and regional dialects.
            2. **Operational Efficiency**: Automated document processing is saving thousands of man-hours in logistics and government sectors.
            3. **Decision Intelligence**: Using LLMs to synthesize fragmented market data into actionable growth strategies.

            ### The Localization Challenge
            The primary barrier remains data parity. Most models are trained on Western datasets. KIVO AI is bridging this gap by fine-tuning models on regional specificities, ensuring that "Intelligence" actually speaks the language of the market.
        `
    },
    {
        title: "Optimizing Neural Networks for Edge Computing in Agriculture",
        category: "Technical",
        date: "Jan 2026",
        readTime: "8 min",
        excerpt: "Exploring the engineering hurdles of deploying high-accuracy models in low-connectivity rural environments.",
        tag: "Engineering",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        fullContent: `
            ## AI at the Edge
            For the East African farmer, AI must be "offline-first". We cannot rely on high-bandwidth fiber in the middle of a tea plantation in Kericho.

            ### Engineering Requirements
            - **Model Quantization**: Reducing 32-bit weights to 8-bit or 4-bit to run on low-power mobile devices.
            - **Local Inference**: Ensuring that pest detection and soil analysis happen on-device without a round-trip to the cloud.
            - **Sync Protocols**: Intelligent data synchronization when a signal becomes available.

            ### Real-World Impact
            By deploying optimized YOLO models on budget smartphones, we've enabled real-time disease detection for smallholders, reducing crop loss by 30% in our pilot regions.
        `
    },
    {
        title: "Fintech Security: AI-Driven Fraud Prevention for Mobile Money",
        category: "Case Study",
        date: "Dec 2025",
        readTime: "10 min",
        excerpt: "How real-time intelligence is safeguarding millions of transactions across the Safaricom and KCB ecosystems.",
        tag: "Security",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        fullContent: `
            ## Securing the Digital Wallet
            With mobile money being the backbone of the Kenyan economy, the stakes for security have never been higher. 

            ### The AI Defense Layer
            Traditional rule-based systems are too slow for modern social engineering and SIM-swap fraud. Our AI layer analyzes over 50 behavioral markers in real-time.

            ### Success Metrics
            - **Fraud Detection Rate**: Improved by 85% compared to legacy systems.
            - **False Positives**: Reduced by 60%, ensuring legitimate users aren't blocked from critical funds.
            - **Latency**: Sub-50ms inference time per transaction.

            ### Future Outlook
            The next frontier is Federated Learning, allowing different financial institutions to train shared security models without exposing sensitive customer data.
        `
    }
];

const InsightsSection = () => {
    const [selectedArticle, setSelectedArticle] = useState<any>(null);

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
                            onClick={() => setSelectedArticle(article)}
                            className="group relative p-0 bg-[#050505] hover:bg-white/[0.02] transition-colors duration-700 cursor-pointer flex flex-col"
                        >
                            {/* High-Fidelity Editorial Thumbnail */}
                            <div className="aspect-video relative bg-[#0a0a0a] border-b border-white/10 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:10px_10px]" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
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

            {/* Article Reader Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/50">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                                        {selectedArticle.category}
                                    </span>
                                    <span className="text-[10px] font-bold text-white/40 flex items-center gap-2">
                                        <Clock size={12} /> {selectedArticle.readTime}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    className="p-2 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-all"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                <div className="max-w-2xl mx-auto">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-12 h-[1px] bg-primary" />
                                        <span className="text-[10px] uppercase font-black tracking-[0.4em] text-primary">{selectedArticle.tag}</span>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter uppercase whitespace-pre-wrap">
                                        {selectedArticle.title}
                                    </h1>

                                    <img
                                        src={selectedArticle.image}
                                        alt={selectedArticle.title}
                                        className="w-full aspect-video object-cover rounded-xl mb-12 grayscale hover:grayscale-0 transition-all duration-700"
                                    />

                                    <div className="prose prose-invert prose-primary max-w-none text-white/70 leading-relaxed text-lg font-medium space-y-8">
                                        {selectedArticle.fullContent.split('\n\n').map((paragraph, idx) => (
                                            <div key={idx} className="whitespace-pre-wrap">
                                                {paragraph.startsWith('##') ? (
                                                    <h2 className="text-2xl font-black text-white mt-12 mb-6 uppercase tracking-tight border-l-4 border-primary pl-6">
                                                        {paragraph.replace('##', '').trim()}
                                                    </h2>
                                                ) : paragraph.startsWith('###') ? (
                                                    <h3 className="text-xl font-bold text-primary mt-8 mb-4 uppercase tracking-wide">
                                                        {paragraph.replace('###', '').trim()}
                                                    </h3>
                                                ) : paragraph.startsWith('-') ? (
                                                    <ul className="space-y-4 my-8">
                                                        {paragraph.split('\n').map((item, i) => (
                                                            <li key={i} className="flex gap-4">
                                                                <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                                                                <span>{item.replace('-', '').trim()}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>{paragraph.trim()}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap gap-8 items-center justify-between">
                                        <div className="flex gap-6">
                                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                                                <Share2 size={14} /> Share Article
                                            </button>
                                            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                                                <Printer size={14} /> Print
                                            </button>
                                        </div>
                                        <span className="text-[10px] font-mono text-white/20">KIVO_INTEL_FRONTIER_2026</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InsightsSection;
