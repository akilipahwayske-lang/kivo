import { motion } from "framer-motion";
import ScrollAnimator from "./ScrollAnimator";

const partners = [
    { name: "Safaricom", type: "Infrastructure" },
    { name: "KCB Bank", type: "Finance" },
    { name: "Gov of Kenya", type: "Public Sector" },
    { name: "Twiga Foods", type: "Agri-Tech" },
    { name: "Konza City", type: "Ecosystem" },
];

const PartnerBadge = ({ name, type }: { name: string; type: string }) => (
    <div className="relative group cursor-default">
        {/* Badge Background */}
        <div className="relative py-4 px-8 bg-muted border border-border group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
            {/* Technical Fingerprint (Tiny Grid) */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:4px_4px]" />

            <div className="relative z-10 flex flex-col items-center">
                <span className="text-xl md:text-2xl font-display font-black text-foreground/50 group-hover:text-foreground transition-colors tracking-tighter uppercase">
                    {name}
                </span>
                <span className="text-[6px] font-black uppercase tracking-[0.4em] text-foreground/20 group-hover:text-primary transition-colors mt-1">
                    {type}
                </span>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-border group-hover:border-primary" />
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-border group-hover:border-primary" />
        </div>
    </div>
);

const TrustSection = () => {
    // Duplicating for infinite feel
    const allPartners = [...partners, ...partners, ...partners];

    return (
        <section className="py-24 bg-background border-y border-border overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-primary" />
                    <span className="text-[8px] uppercase font-black tracking-[0.4em] text-primary">STRATEGIC ALLIANCE</span>
                </div>
                <h3 className="text-xl font-black text-foreground/40 uppercase leading-tight tracking-tighter">
                    Trusted by Industry Architects
                </h3>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex gap-6 pr-6"
                    animate={{ x: ["0%", "-33.333%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear"
                        }
                    }}
                >
                    {allPartners.map((partner, i) => (
                        <div key={`${partner.name}-${i}`} className="flex-shrink-0 w-64 md:w-80">
                            <PartnerBadge name={partner.name} type={partner.type} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustSection;
