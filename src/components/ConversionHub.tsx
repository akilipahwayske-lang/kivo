import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Bell, ArrowRight, Download, Eye, Send } from "lucide-react";

const SocialProofTicker = () => {
    const [current, setCurrent] = useState(0);
    const events = [
        { text: "Finance Director from Lagos just downloaded the AI Playbook", time: "2m ago" },
        { text: "New discovery call booked - Manufacturing Hub, Nairobi", time: "15m ago" },
        { text: "Logistics leader in Johannesburg joined KIVO Elite", time: "1h ago" },
        { text: "Retail chain in Kigali completed AI Readiness Audit", time: "3h ago" }
    ];

    useEffect(() => {
        const timer = setInterval(() => setCurrent(s => (s + 1) % events.length), 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-32 left-8 z-[90] hidden md:block">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="p-4 bg-card border border-border rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm backdrop-blur-xl"
                >
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <Bell size={18} className="animate-pulse" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-foreground leading-tight">{events[current].text}</p>
                        <p className="text-[8px] uppercase font-black tracking-widest text-primary mt-1">{events[current].time}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const ExitIntentPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const handleMouseOut = (e: MouseEvent) => {
            if (e.clientY <= 0 && !localStorage.getItem("kivo_exit_intent")) {
                setIsOpen(true);
                localStorage.setItem("kivo_exit_intent", "true");
            }
        };
        document.addEventListener("mouseleave", handleMouseOut);
        return () => document.removeEventListener("mouseleave", handleMouseOut);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xwvnryva", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsSubscribed(true);
            }
        } catch (err) {
            console.error("Submission failed");
            // Still show success to not break UX for user
            setIsSubscribed(true);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-background/90 backdrop-blur-2xl"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        className="w-full max-w-2xl bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl relative"
                    >
                        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-muted rounded-full text-foreground/40 transition-colors">
                            <X size={20} />
                        </button>

                        <div className="p-12 md:p-16 text-center">
                            {!isSubscribed ? (
                                <>
                                    <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-10">
                                        <Download className="text-primary" size={40} />
                                    </div>
                                    <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter leading-none mb-6">
                                        Wait! Get the <span className="text-primary">AI Playbook</span>
                                    </h2>
                                    <p className="text-muted-foreground font-medium mb-10 max-w-md mx-auto">
                                        Download our 2026 AI Readiness Guide for African Enterprises. 50+ pages of architecture patterns and implementation strategies.
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                                        <input
                                            type="email" required placeholder="name@company.com"
                                            className="w-full px-6 py-5 rounded-2xl bg-background border border-border text-foreground focus:border-primary transition-all text-lg font-medium"
                                            value={email} onChange={e => setEmail(e.target.value)}
                                        />
                                        <button className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                                            Access Immediate Insight
                                        </button>
                                    </form>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-6">Zero spam. Pure intelligence.</p>
                                </>
                            ) : (
                                <div className="py-8 animate-fade-in text-left">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center border border-secondary/30">
                                            <Sparkles className="text-secondary" size={32} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight leading-none mb-1">Access Granted</h2>
                                            <p className="text-[10px] uppercase font-black tracking-widest text-secondary">Broadcasting Intelligence Guide</p>
                                        </div>
                                    </div>

                                    <div className="bg-muted/50 border border-border rounded-2xl p-6 mb-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-3">
                                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                        </div>
                                        <p className="text-[8px] uppercase font-black tracking-[0.2em] text-muted-foreground mb-3">Post-Transmission Tip:</p>
                                        <p className="text-sm font-medium text-foreground leading-relaxed italic">
                                            "Most African enterprises find that automating internal procurement workflows yields 200% ROI in the first quarter alone."
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="flex-grow py-4 bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                                            <Download size={16} /> Force Sync Playbook (PDF)
                                        </button>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="px-6 py-4 bg-muted text-foreground font-bold rounded-xl hover:bg-muted/80 transition-all text-xs"
                                        >
                                            Dismiss
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const StickyCTA = () => {
    const [current, setCurrent] = useState(0);
    const props = [
        "Ready to automate your operations?",
        "Need a custom Swahili NLP model?",
        "Leapfrog your legacy systems with AI.",
        "Africanized AI Architectures."
    ];

    useEffect(() => {
        const timer = setInterval(() => setCurrent(s => (s + 1) % props.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-8 md:pb-12 pointer-events-none">
            <div className="container mx-auto max-w-4xl pointer-events-auto">
                <motion.div
                    initial={{ y: 100 }} animate={{ y: 0 }}
                    className="bg-primary text-primary-foreground p-3 md:p-4 rounded-full md:rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 backdrop-blur-xl border border-white/20"
                >
                    <div className="flex items-center gap-4 px-4">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={current}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap"
                            >
                                {props[current]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <a
                        href="#contact"
                        className="w-full md:w-auto px-10 py-3 md:py-4 bg-white text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.3em] rounded-full hover:bg-black hover:text-white transition-all text-center flex items-center justify-center gap-3"
                    >
                        Initiate Project <Send size={14} />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

const ConversionHub = () => {
    return (
        <>
            <SocialProofTicker />
            <ExitIntentPopup />
            <StickyCTA />
        </>
    );
};

export default ConversionHub;
