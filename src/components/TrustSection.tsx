import { motion } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";

const partners = [
    { name: "Safaricom", type: "Infrastructure" },
    { name: "KCB Bank", type: "Finance" },
    { name: "Gov of Kenya", type: "Public Sector" },
    { name: "Twiga Foods", type: "Agri-Tech" },
    { name: "Konza City", type: "Ecosystem" },
];

const TrustSection = () => {
    return (
        <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 items-center">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-6 h-[1px] bg-primary" />
                            <span className="text-[8px] uppercase font-black tracking-[0.4em] text-primary">STRATEGIC ALLIANCE</span>
                        </div>
                        <h3 className="text-xl font-black text-white/50 uppercase leading-tight">Trusted by Industry <br /> Architects</h3>
                    </div>

                    <div className="md:col-span-3">
                        <div className="flex flex-wrap justify-between gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="text-2xl md:text-3xl font-display font-black text-white/80 group-hover:text-primary transition-colors cursor-default tracking-tighter">
                                        {partner.name}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
