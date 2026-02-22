import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Twitter, Github, CheckCircle, ArrowRight, X } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [calendlyBooked, setCalendlyBooked] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);

  const missionSteps = [
    "Encrypting Inquiry Protocol...",
    "Establishing Secure Satellite Link...",
    "Transmitting Data packet to Nairobi Hub...",
    "Handshake Verified. Protocol Initiated."
  ];

  useEffect(() => {
    if (status === "success" && terminalStep < missionSteps.length - 1) {
      const timer = setTimeout(() => {
        setTerminalStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [status, terminalStep]);

  useEffect(() => {
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event === "calendly.event_scheduled") {
        setCalendlyBooked(true);
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Formspree Integration Point
    try {
      const response = await fetch("https://formspree.io/f/xqedynek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display font-black text-5xl md:text-7xl mb-6 text-foreground leading-none">
                Let's Build the <span className="text-primary text-glow">Future</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md">
                Ready to transform your organization with AI? Our team in Nairobi is ready to help you innovate and scale.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "hello@kivo.ai", href: "mailto:hello@kivo.ai" },
                { icon: MapPin, label: "Nexus", value: "Nairobi, Kenya" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-6 rounded-2xl bg-muted border border-border backdrop-blur-sm group hover:border-primary/30 transition-colors">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-xl font-bold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col gap-6">
              <button
                onClick={() => setCalendlyOpen(true)}
                className="w-full sm:w-fit px-8 py-4 bg-primary text-primary-foreground font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                Book a Strategic Call <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-6">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Calendly Modal */}
          <AnimatePresence>
            {calendlyOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[80vh]"
                >
                  <div className="p-4 border-b border-border flex justify-between items-center bg-muted/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Schedule Discovery // KIVO AI</span>
                    <button
                      onClick={() => setCalendlyOpen(false)}
                      className="p-2 hover:bg-muted rounded-full text-foreground/40 hover:text-foreground transition-all"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="flex-grow bg-muted/20">
                    {calendlyBooked ? (
                      <div className="h-full flex flex-col items-center justify-center p-12 text-center animate-fade-in">
                        <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mb-10 border border-primary/30 relative">
                          <CheckCircle className="text-primary" size={48} />
                          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                        </div>
                        <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter mb-4">Synchronization Complete</h2>
                        <p className="text-muted-foreground font-medium max-w-md mb-12">
                          Your discovery session has been linked to the KIVO Network. Check your encrypted channel (inbox) for the protocol briefing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                          <div className="p-4 bg-muted border border-border rounded-xl text-left">
                            <p className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-2">Protocol 01</p>
                            <p className="text-xs font-bold text-foreground">Review the 2026 AI Readiness Playbook</p>
                          </div>
                          <div className="p-4 bg-muted border border-border rounded-xl text-left">
                            <p className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-2">Protocol 02</p>
                            <p className="text-xs font-bold text-foreground">Gather your core operational KPIs</p>
                          </div>
                        </div>
                        <button
                          onClick={() => { setCalendlyOpen(false); setCalendlyBooked(false); }}
                          className="mt-12 px-10 py-4 bg-foreground text-background font-black text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all rounded-xl"
                        >
                          Return to Hub
                        </button>
                      </div>
                    ) : (
                      <iframe
                        src="https://calendly.com/kivokenya?embed_domain=kivo.ai&embed_type=inline"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                      ></iframe>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-10" />
            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-2xl backdrop-blur-2xl">
              {status === "success" ? (
                <div className="text-left font-mono py-12">
                  <div className="space-y-4 mb-12">
                    {missionSteps.slice(0, terminalStep + 1).map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-primary font-black">{">"}</span>
                        <span className={`text-xs ${i === missionSteps.length - 1 ? "text-primary font-black" : "text-foreground/70"}`}>
                          {step}
                        </span>
                        {i === terminalStep && i < missionSteps.length - 1 && (
                          <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-primary"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {terminalStep === missionSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="pt-8 animate-fade-in"
                    >
                      <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl mb-8">
                        <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-2">Mission Initiated</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Your data has been processed. A KIVO strategist will reach out within 24 standard hours to bypass your operational bottlenecks.
                        </p>
                      </div>
                      <button
                        onClick={() => { setStatus("idle"); setTerminalStep(0); }}
                        className="w-full py-4 rounded-xl bg-muted text-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-all border border-border uppercase text-[10px] tracking-widest"
                      >
                        New Submission Protocol
                      </button>
                    </motion.div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors font-medium"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Work Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors font-medium"
                      placeholder="you@company.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 transition-colors font-medium resize-none"
                      placeholder="Tell us about your project"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                  <button
                    disabled={status === "submitting"}
                    className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending..." : (
                      <>
                        Initiate Transmission <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
