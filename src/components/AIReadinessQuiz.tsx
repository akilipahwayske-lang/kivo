import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

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
    level: "Explorer",
    color: "text-red-400",
    text: "Your organization is at the beginning of its AI journey. Start with awareness and strategy.",
    services: ["AI Strategy & Roadmapping", "AI Training & Capacity Building"],
  };
  if (totalScore <= 16) return {
    level: "Builder",
    color: "text-secondary",
    text: "You have foundations in place. Now it's time to pilot and integrate AI solutions.",
    services: ["AI Integration & Automation", "Custom AI Development"],
  };
  return {
    level: "Leader",
    color: "text-primary",
    text: "You're advanced! Focus on scaling, governance, and optimizing your AI capabilities.",
    services: ["AI Governance & Ethics", "Custom AI Development"],
  };
};

const AIReadinessQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const isComplete = step >= questions.length;

  const handleNext = () => {
    if (selectedOption === null) return;
    setAnswers([...answers, questions[step].options[selectedOption].score]);
    setSelectedOption(null);
    setStep(step + 1);
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
    <section id="quiz" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Gamified Assessment</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              AI Readiness <span className="text-primary text-glow">Quiz</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answer 6 quick questions to discover your organization's AI maturity level and get personalized recommendations.
            </p>
          </div>
        </ScrollAnimator>

        <div className="max-w-2xl mx-auto">
          {!isComplete ? (
            <ScrollAnimator>
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                {/* Progress */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">Question {step + 1} of {questions.length}</span>
                  <span className="text-sm text-primary font-semibold">{Math.round(((step) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted mb-8">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  />
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl mb-6 text-foreground">
                  {questions[step].question}
                </h3>

                <div className="space-y-3 mb-8">
                  {questions[step].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedOption(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                        selectedOption === i
                          ? "border-primary bg-primary/10 text-foreground border-glow"
                          : "border-border bg-card hover:border-muted-foreground/30 text-muted-foreground"
                      }`}
                    >
                      <span className="font-medium">{opt.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 justify-between">
                  <button
                    onClick={handleBack}
                    disabled={step === 0}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 transition-all"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-30 hover:bg-primary/90 transition-all"
                  >
                    {step === questions.length - 1 ? "See Results" : "Next"} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </ScrollAnimator>
          ) : (
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-primary/30 border-glow animate-fade-in">
              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-3xl text-foreground mb-2">Your AI Readiness Score</h3>
                <div className="inline-flex items-baseline gap-2">
                  <span className={`font-display font-bold text-6xl ${rec.color} text-glow`}>{percentage}%</span>
                  <span className="text-muted-foreground text-lg">/ 100</span>
                </div>
                <p className={`font-display font-bold text-2xl mt-2 ${rec.color}`}>{rec.level}</p>
              </div>

              {/* Radar Chart */}
              <div className="w-full h-72 mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(240 10% 20%)" />
                    <PolarAngleAxis dataKey="dimension" tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 4]} tick={false} axisLine={false} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="hsl(190 90% 50%)"
                      fill="hsl(190 90% 50%)"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <p className="text-muted-foreground text-center mb-6">{rec.text}</p>

              <div className="bg-muted/50 rounded-xl p-5 mb-6">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">Recommended KIVO Services</p>
                <ul className="space-y-2">
                  {rec.services.map((s) => (
                    <li key={s} className="text-foreground font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" /> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
                >
                  Book a Consultation <ArrowRight size={16} />
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-all"
                >
                  <RotateCcw size={16} /> Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIReadinessQuiz;
