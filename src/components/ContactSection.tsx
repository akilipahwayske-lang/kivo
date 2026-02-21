import { useState } from "react";
import ScrollAnimator from "./ScrollAnimator";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", industry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimator>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              Book a Free <span className="text-primary text-glow">Discovery Call</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to explore AI for your organization? Let's talk.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <ScrollAnimator>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:border-glow transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Organization</label>
                  <input
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Industry</label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground focus:outline-none focus:border-primary transition-all"
                  >
                    <option value="">Select your industry</option>
                    <option>Fintech / Banking</option>
                    <option>Healthcare</option>
                    <option>Agriculture</option>
                    <option>Government</option>
                    <option>Education</option>
                    <option>Retail / E-commerce</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your AI goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg hover:bg-primary/90 transition-all border-glow"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-2xl bg-card border border-primary/30 border-glow">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours. Asante sana! 🙏</p>
              </div>
            )}
          </ScrollAnimator>

          {/* Info */}
          <ScrollAnimator delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Let's Build Together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're just starting to explore AI or looking to scale existing capabilities, we'll help you find the right path. Every engagement starts with a free discovery call.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Nairobi, Kenya 🇰🇪</p>
                    <p className="text-muted-foreground text-sm">Westlands, Nairobi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">hello@kivo.ai</p>
                    <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">+254 700 000 000</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm EAT</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
