import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Users, Clock, Zap } from "lucide-react";

const ROICalculator = () => {
    const [teamSize, setTeamSize] = useState(20);
    const [avgSalary, setAvgSalary] = useState(50000);
    const [inefficiency, setInefficiency] = useState(20);
    const [aiEfficiency, setAiEfficiency] = useState(40);

    const results = useMemo(() => {
        const totalPayroll = teamSize * avgSalary;
        const currentWaste = totalPayroll * (inefficiency / 100);
        const potentialSaving = currentWaste * (aiEfficiency / 100);
        const monthlySaving = potentialSaving / 12;
        const yearlySaving = potentialSaving;

        return {
            monthly: Math.round(monthlySaving).toLocaleString(),
            yearly: Math.round(yearlySaving).toLocaleString(),
            hoursSaved: Math.round(teamSize * 160 * (inefficiency / 100) * (aiEfficiency / 100)).toLocaleString()
        };
    }, [teamSize, avgSalary, inefficiency, aiEfficiency]);

    return (
        <section className="py-24 md:py-40 bg-muted/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Input Side */}
                        <div className="space-y-12">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-8 h-[2px] bg-primary" />
                                    <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">VALUE PROJECTION</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none mb-6">
                                    Quantify Your <br /> <span className="text-primary text-glow">AI ROI</span>
                                </h2>
                                <p className="text-muted-foreground font-medium text-lg max-w-md">
                                    See the direct economic impact of intelligent automation on your specific team structure and operations.
                                </p>
                            </div>

                            <div className="space-y-10">
                                {/* Team Size */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center group">
                                        <label className="text-xs font-black uppercase tracking-widest text-foreground/60 flex items-center gap-2">
                                            <Users size={14} className="text-primary" /> Team Size
                                        </label>
                                        <span className="text-xl font-black text-primary">{teamSize}</span>
                                    </div>
                                    <input
                                        type="range" min="5" max="500" step="5"
                                        className="w-full h-1.5 bg-background border border-border rounded-full appearance-none cursor-pointer accent-primary"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                    />
                                </div>

                                {/* Avg Salary (approx) */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-black uppercase tracking-widest text-foreground/60 flex items-center gap-2">
                                            <TrendingUp size={14} className="text-primary" /> Avg Annual Comp (USD)
                                        </label>
                                        <span className="text-xl font-black text-primary">${avgSalary.toLocaleString()}</span>
                                    </div>
                                    <input
                                        type="range" min="10000" max="200000" step="5000"
                                        className="w-full h-1.5 bg-background border border-border rounded-full appearance-none cursor-pointer accent-primary"
                                        value={avgSalary}
                                        onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                                    />
                                </div>

                                {/* Inefficiency */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-black uppercase tracking-widest text-foreground/60 flex items-center gap-2">
                                            <Clock size={14} className="text-primary" /> Current Inefficiency %
                                        </label>
                                        <span className="text-xl font-black text-primary">{inefficiency}%</span>
                                    </div>
                                    <input
                                        type="range" min="10" max="60" step="5"
                                        className="w-full h-1.5 bg-background border border-border rounded-full appearance-none cursor-pointer accent-primary"
                                        value={inefficiency}
                                        onChange={(e) => setInefficiency(parseInt(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Result Side */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
                            <div className="relative p-10 md:p-16 rounded-[3rem] bg-card border border-border shadow-2xl backdrop-blur-2xl">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="p-3 bg-primary/20 rounded-xl text-primary">
                                        <Calculator size={24} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Projected Savings</span>
                                </div>

                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter mb-2">
                                            ${results.yearly}
                                        </h3>
                                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Est. Annual Operational Savings</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 pt-12 border-t border-border">
                                        <div>
                                            <span className="text-3xl font-black text-primary">${results.monthly}</span>
                                            <p className="text-[8px] uppercase font-bold tracking-widest text-muted-foreground mt-1">Monthly Optimization</p>
                                        </div>
                                        <div>
                                            <span className="text-3xl font-black text-primary">{results.hoursSaved}</span>
                                            <p className="text-[8px] uppercase font-bold tracking-widest text-muted-foreground mt-1">Hours Reclaimed / Mo</p>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <a
                                            href="#contact"
                                            className="group w-full py-6 bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-xl shadow-primary/30"
                                        >
                                            Audit My Infrastructure <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                        </a>
                                        <p className="text-[8px] text-center mt-6 text-muted-foreground uppercase font-bold tracking-widest">
                                            Calculated based on 40% efficiency gain via AI implementation
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-6 right-6 opacity-10">
                                    <Zap size={60} className="text-primary fill-current" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
