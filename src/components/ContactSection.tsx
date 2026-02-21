import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Twitter, Github, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Formspree Integration Point
    try {
      const response = await fetch("https://formspree.io/f/xvgzpyzo", { // Placeholder - user should update with their ID
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

            <div className="pt-8 flex items-center gap-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-10" />
            <div className="relative p-10 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-2xl backdrop-blur-2xl">
              {status === "success" ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30">
                    <CheckCircle className="text-primary" size={40} />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground font-medium mb-8">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-8 py-3 rounded-xl bg-muted text-foreground font-bold hover:bg-muted/80 transition-all border border-border"
                  >
                    Send another message
                  </button>
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
