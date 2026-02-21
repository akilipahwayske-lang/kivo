import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { ArrowRight, ArrowLeft, RotateCcw, Mail, Sparkles, Download, CheckCircle2 } from "lucide-react";

// ... (questions array stays the same)
const questions = [
  {
    question: "How would you describe your organization's current use of AI?",
    options: [
      { label: "No AI usage at all", score: 1 },
      { label: "Exploring / researching AI", score: 2 },
      { label: "Piloting AI in one area", score: 3 },
      { label: "AI integrated across multiple areas", score: 4 },
    ],
    dimension: "AI Adoption",
  },
  {
    question: "How mature is your organization's data infrastructure?",
    options: [
      { label: "Data is scattered and unstructured", score: 1 },
      { label: "Some data is organized but siloed", score: 2 },
      { label: "Centralized data with basic analytics", score: 3 },
      { label: "Advanced data pipelines and governance", score: 4 },
    ],
    dimension: "Data Maturity",
  },
  {
    question: "Does your team have AI/ML skills in-house?",
    options: [
      { label: "No technical AI skills", score: 1 },
      { label: "Basic awareness, no practitioners", score: 2 },
      { label: "A few people with AI skills", score: 3 },
      { label: "Dedicated AI/ML team", score: 4 },
    ],
    dimension: "Team Skills",
  },
  {
    question: "How does leadership view AI investment?",
    options: [
      { label: "Not a priority", score: 1 },
      { label: "Interested but cautious", score: 2 },
      { label: "Actively budgeting for AI", score: 3 },
      { label: "AI is a strategic priority", score: 4 },
    ],
    dimension: "Leadership Buy-in",
  },
  {
    question: "Do you have AI governance or ethics policies?",
    options: [
      { label: "No policies at all", score: 1 },
      { label: "Aware but nothing formal", score: 2 },
      { label: "Basic guidelines in place", score: 3 },
      { label: "Comprehensive AI governance framework", score: 4 },
    ],
    dimension: "Governance",
  },
  {
    question: "How ready is your organization to scale AI solutions?",
    options: [
      { label: "No infrastructure for scaling", score: 1 },
      { label: "Could scale with significant investment", score: 2 },
      { label: "Infrastructure exists, needs optimization", score: 3 },
      { label: "Cloud-ready, scalable architecture", score: 4 },
    ],
    dimension: "Scalability",
  },
];

const getRecommendations = (totalScore: number) => {
  if (totalScore <= 10) return {
    level: "AI Explorer",
    color: "text-red-400",
    glow: "shadow-red-500/20",
    description: "Your organization is at the threshold of the AI revolution. You have a massive opportunity to leapfrog legacy systems and build an AI-first culture from the ground up.",
    steps: ["Conduct an AI Awareness Workshop for leadership", "Identify low-hanging fruit for initial pilots", "Audit existing data silos"],
    services: ["AI Strategy & Roadmapping", "AI Training & Capacity Building"],
  };
  if (totalScore <= 18) return {
    level: "AI Builder",
    color: "text-secondary",
    glow: "shadow-secondary/20",
    description: "You've moved past experimentation. Now you need to industrialize your AI efforts, ensuring they are scalable, secure, and deliver measurable ROI.",
    steps: ["Develop a centralized AI center of excellence", "Implement automated data pipelines", "Launch a cross-departmental AI pilot"],
    services: ["AI Integration & Automation", "Custom AI Development"],
  };
  return {
    level: "AI Leader",
    color: "text-primary",
    glow: "shadow-primary/20",
    description: "You are setting the pace for innovation in Africa. Your focus should be on sophisticated governance, ethical AI frameworks, and cutting-edge R&D.",
    steps: ["Establish an AI Ethics Committee", "Optimize model performance with MLOps", "Explore generative AI for proprietary use cases"],
    services: ["AI Governance & Ethics", "Custom AI Development"],
  };
};

const AIReadinessQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, questions[step].options[selectedOption].score];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowEmailGate(true);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Formspree Integration Point
    try {
      await fetch("https://formspree.io/f/xvgzpyzo", { // Placeholder - same as contact form
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, audit_score: totalScore, audit_percentage: percentage, audit_level: rec.level, answers }),
      });
      setIsComplete(true);
      setShowEmailGate(false);
    } catch (err) {
      console.error("Lead capture failed", err);
      // Still show results to user even if capture fails to ensure good UX
      setIsComplete(true);
      setShowEmailGate(false);
    }
  };

  const handleBack = () => {
    if (step === 0) return;
    setStep(step - 1);
    setSelectedOption(null);
    setAnswers(answers.slice(0, -1));
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setEmail("");
    setShowEmailGate(false);
    setIsComplete(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const rec = getRecommendations(totalScore);

  const radarData = questions.map((q, i) => ({
    dimension: q.dimension,
    score: answers[i] || 0,
    fullMark: 4,
  }));

  return (
    <section id="quiz" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Digital Assessment
          </motion.span>
          <h2 className="font-display font-black text-4xl md:text-6xl text-foreground leading-tight">
            AI Readiness <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-kivo-glow text-glow">Audit</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            Benchmark your organization against industry standards and receive a bespoke optimization roadmap.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!showEmailGate && !isComplete ? (
            <div className="glass-card p-8 md:p-12 rounded-[2rem] border-white/5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Step {step + 1} of {questions.length}</p>
                  <p className="text-primary font-bold">{questions[step].dimension}</p>
                </div>
                <div className="text-2xl font-display font-black text-white/20">
                  {Math.round(((step) / questions.length) * 100)}%
                </div>
              </div>

              <div className="w-full h-1.5 bg-white/5 rounded-full mb-12 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / questions.length) * 100}%` }}
                  className="h-full bg-primary shadow-[0_0_10px_rgba(0,180,216,0.5)]"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-10 text-white leading-tight">
                    {questions[step].question}
                  </h3>

                  <div className="grid gap-4 mb-12">
                    {questions[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedOption(i)}
                        className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 ${selectedOption === i
                          ? "border-primary bg-primary/10 text-white shadow-[0_0_20px_rgba(0,180,216,0.1)]"
                          : "border-white/5 bg-white/5 hover:border-white/20 text-muted-foreground hover:text-white"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedOption === i ? "border-primary bg-primary" : "border-white/20"
                            }`}>
                            {selectedOption === i && <CheckCircle2 size={14} className="text-primary-foreground" />}
                          </div>
                          <span className="font-semibold text-lg">{opt.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4 items-center justify-between pt-6 border-t border-white/5">
                <button
                  onClick={handleBack}
                  disabled={step === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-muted-foreground hover:text-white disabled:opacity-30 transition-all"
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="group flex items-center gap-3 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-black text-lg disabled:opacity-30 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  {step === questions.length - 1 ? "Analyze Results" : "Next Question"}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ) : showEmailGate ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 md:p-16 rounded-[2.5rem] text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Sparkles className="text-primary" size={40} />
              </div>
              <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-4">Your Analysis is Ready</h3>
              <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
                Enter your work email to unlock your AI maturity score and receive a personalized 5-page implementation roadmap.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-sm mx-auto">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/30"
                >
                  Get Instant Access
                </button>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-6">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border-primary/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-center md:text-left">
                    <p className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-2">Audit Results</p>
                    <h3 className={`font-display font-black text-5xl md:text-6xl mb-4 ${rec.color} text-glow`}>
                      {rec.level}
                    </h3>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-white font-bold text-2xl">{percentage}% Maturity</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                      "{rec.description}"
                    </p>
                  </div>
                  <div className="h-72 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="rgba(255,255,255,0.05)" />
                        <PolarAngleAxis dataKey="dimension" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: "bold" }} />
                        <PolarRadiusAxis angle={30} domain={[0, 4]} tick={false} axisLine={false} />
                        <Radar
                          name="Score"
                          dataKey="score"
                          stroke="hsl(var(--primary))"
                          fill="hsl(var(--primary))"
                          fillOpacity={0.3}
                          strokeWidth={3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-3xl border-white/5">
                  <h4 className="font-display font-black text-xl text-white mb-6 flex items-center gap-3">
                    <CheckCircle2 className="text-primary" /> Key Next Steps
                  </h4>
                  <ul className="space-y-4">
                    {rec.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 text-muted-foreground font-medium bg-white/5 p-4 rounded-xl border border-white/5">
                        <span className="text-primary font-black">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-8 rounded-3xl border-primary/20 bg-primary/5">
                  <h4 className="font-display font-black text-xl text-white mb-6 flex items-center gap-3">
                    <Sparkles className="text-secondary" /> Tailored Services
                  </h4>
                  <div className="space-y-4">
                    {rec.services.map((s) => (
                      <div key={s} className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all cursor-pointer">
                        <span className="text-white font-bold">{s}</span>
                        <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="w-full mt-8 py-4 rounded-xl bg-white text-black font-black text-center block hover:bg-white/90 transition-all border-glow"
                  >
                    Discuss My Results
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                  <Download size={20} /> Download Full PDF
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-muted-foreground hover:text-white transition-all font-bold"
                >
                  <RotateCcw size={20} /> Restart Audit
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIReadinessQuiz;

