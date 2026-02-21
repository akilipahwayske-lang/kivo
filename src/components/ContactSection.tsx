import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2, Users, Rocket, Globe } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", org: "", industry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Contact Form Lead:", form);
  };

  const socialProof = [
    { icon: <Users size={20} />, label: "50+ Organizations" },
    { icon: <Rocket size={20} />, label: "200+ Workshops" },
    { icon: <Globe size={20} />, label: "African Footprint" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-40 bg-kivo-dark">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block">Connect with Experts</span>
              <h2 className="font-display font-black text-5xl md:text-7xl text-white leading-[0.9]">
                Let's Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-kivo-glow text-glow">Intelligent Edge</span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-md leading-relaxed">
                Whether you're exploring AI strategy or ready to scale deep learning, our team in Nairobi is here to guide your journey.
              </p>
            </div>

            <div className="grid gap-6">
              {socialProof.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-lg font-bold text-white/80">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email Us</p>
                  <p className="text-white font-bold text-lg">hello@kivo.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Visit Us</p>
                  <p className="text-white font-bold text-lg">Westlands, Nairobi, Kenya 🇰🇪</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-bold"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-bold"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Organization</label>
                  <input
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-bold"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-bold resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/30 border-glow"
                >
                  Initiate Discovery <Send size={20} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center space-y-6"
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-black text-3xl text-white">Inquiry Received</h3>
                  <p className="text-muted-foreground text-lg max-w-xs mx-auto">
                    An AI strategist will reach out within 12 business hours. <br /> Asante sana! 🙏
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

