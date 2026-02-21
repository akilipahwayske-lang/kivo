import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const architects = [
    {
        name: "Dr. James Mwangi",
        role: "Lead AI Architect",
        specialty: "Neural Systems & Scale",
        bio: "Ex-Google DeepMind engineer focused on regional financial intelligence.",
        initials: "JM"
    },
    {
        name: "Sarah Otieno",
        role: "Senior Data Scientist",
        specialty: "Agri-Compute & Edge",
        bio: "Pioneering distributed AI models for the East African agricultural frontier.",
        initials: "SO"
    },
    {
        name: "David Kamau",
        role: "Logistics Engine Lead",
        specialty: "Optimization & RL",
        bio: "Master of reinforcement learning for complex supply chain networks.",
        initials: "DK"
    }
];

const ArchitectsSection = () => {
    return (
        <section id="team" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-[2px] bg-primary" />
                        <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">HUMAN CAPITAL</span>
                    </div>
                    <h2 className="text-h2-elite text-white">The Founding <br /> <span className="text-white/40">Architects</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {architects.map((architect, i) => (
                        <motion.div
                            key={architect.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-700"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden bg-[#0a0a0a]">
                                {/* Silhouette Placeholder with technical overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                                    <span className="text-[10rem] font-black text-white/5">{architect.initials}</span>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-film-grain transition-opacity" />

                                {/* Kinetic Pulse Overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                            </div>

                            <div className="p-8">
                                <span className="text-[10px] uppercase font-black tracking-widest text-primary mb-2 block">{architect.role}</span>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{architect.name}</h3>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8 opacity-60">
                                    {architect.bio}
                                </p>

                                <div className="flex items-center gap-6">
                                    <Linkedin size={16} className="text-white/20 hover:text-primary cursor-pointer transition-colors" />
                                    <Github size={16} className="text-white/20 hover:text-primary cursor-pointer transition-colors" />
                                    <Mail size={16} className="text-white/20 hover:text-primary cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArchitectsSection;
