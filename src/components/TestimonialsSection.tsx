import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "KIVO didn't just give us a report; they delivered a production-ready fraud engine that transformed our mobile money operations within three months. Their understanding of the regional market is unparalleled.",
        author: "James Mwangi",
        role: "Director of Digital Transformation",
        org: "Tier 1 Banking Partner",
        impact: "99.9% Detection Accuracy"
    },
    {
        quote: "The 'Intelligence Discovery' phase was a revelation. KIVO identified data efficiencies we hadn't considered, leading to a 30% reduction in our logistics overhead through AI optimization.",
        author: "Sarah Otieno",
        role: "Chief Innovation Officer",
        org: "Regional Logistics Leader",
        impact: "30% OpEx Reduction"
    },
    {
        quote: "Their commitment to engineering excellence is evident in every line of code. The Swahili NLP model they built for our customer service agent has a native fluency that off-the-shelf models simply cannot match.",
        author: "David Kamau",
        role: "Head of AI Engineering",
        org: "Pan-African Telecoms",
        impact: "85% Resolution Rate"
    }
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
            setProgress(0);
        }, 10000);

        const progressTimer = setInterval(() => {
            setProgress(prev => Math.min(prev + 1, 100));
        }, 100);

        return () => {
            clearInterval(timer);
            clearInterval(progressTimer);
        };
    }, []);

    const next = () => { setCurrent((c) => (c + 1) % testimonials.length); setProgress(0); };
    const prev = () => { setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); setProgress(0); };

    return (
        <section id="testimonials" className="py-24 md:py-40 bg-background relative overflow-hidden">
            <div className="absolute inset-0 neural-grid opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-20 md:mb-32">
                        <div className="w-12 h-[2px] bg-primary" />
                        <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">CLIENT VOICES</span>
                    </div>

                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="grid md:grid-cols-12 gap-12 items-center"
                            >
                                <div className="md:col-span-8">
                                    <Quote size={60} className="text-primary/20 mb-12" />
                                    <blockquote className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tighter uppercase">
                                        "{testimonials[current].quote}"
                                    </blockquote>
                                </div>

                                <div className="md:col-span-4 border-l border-border pl-12 py-8">
                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-2xl font-black text-foreground uppercase tracking-tight">{testimonials[current].author}</h4>
                                            <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest mt-1 opacity-60">
                                                {testimonials[current].role}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-[10px] uppercase font-black tracking-widest text-primary/80">Organization</span>
                                            <p className="text-lg font-black text-foreground/50 uppercase">{testimonials[current].org}</p>
                                        </div>

                                        <div>
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary">{testimonials[current].impact}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex flex-col gap-8 mt-20">
                            <div className="w-full h-px bg-border relative">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-primary"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1, ease: "linear" }}
                                />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={prev}
                                    className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
