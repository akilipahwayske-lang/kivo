import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Line, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BaobabStructure = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Create procedural "branches" for the Baobab
    const branches = useMemo(() => {
        const lines = [];
        const count = 40;

        // Trunk
        for (let i = 0; i < 5; i++) {
            const x = (Math.random() - 0.5) * 0.5;
            const z = (Math.random() - 0.5) * 0.5;
            lines.push({
                points: [[x, -2, z], [x * 1.5, 0.5, z * 1.5]],
                color: "#ffb700",
                delay: Math.random() * 2
            });
        }

        // Main Branches
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = 2 + Math.random() * 2;
            const height = 1 + Math.random() * 2;

            const start = [(Math.random() - 0.5) * 0.8, 0.5, (Math.random() - 0.5) * 0.8];
            const end = [
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius
            ];

            lines.push({
                points: [start, end],
                color: Math.random() > 0.3 ? "#00f0ff" : "#ffb700",
                delay: Math.random() * 4
            });

            // Twigs
            if (Math.random() > 0.5) {
                const twigEnd = [
                    end[0] + (Math.random() - 0.5) * 1,
                    end[1] + Math.random() * 1,
                    end[2] + (Math.random() - 0.5) * 1
                ];
                lines.push({
                    points: [end, twigEnd],
                    color: "#ffffff",
                    delay: Math.random() * 5
                });
            }
        }
        return lines;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {branches.map((branch, i) => (
                <NeuralLine key={i} {...branch} />
            ))}

            {/* Central "Core" of the Baobab */}
            <Sphere args={[0.5, 32, 32]} position={[0, -0.5, 0]}>
                <MeshDistortMaterial
                    color="#ffb700"
                    speed={2}
                    distort={0.4}
                    radius={0.5}
                    emissive="#ffb700"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.2}
                />
            </Sphere>
        </group>
    );
};

const NeuralLine = ({ points, color, delay }: { points: any, color: string, delay: number }) => {
    const lineRef = useRef<any>(null);

    useFrame((state) => {
        if (lineRef.current) {
            const t = (state.clock.getElapsedTime() + delay) % 5;
            const pulse = Math.max(0, 1 - Math.abs(t - 1) * 2);
            lineRef.current.material.opacity = 0.05 + pulse * 0.4;
            lineRef.current.material.linewidth = 0.5 + pulse * 2;
        }
    });

    return (
        <Line
            ref={lineRef}
            points={points}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.1}
        />
    );
};

const ParticleField = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 1000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = -state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#00f0ff"
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.2}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const NextLevelHero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-background overflow-hidden flex items-center">
            {/* Kinetic 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
                    {/* The canvas background should stay dark to keep the 3D scene cinematic */}
                    <color attach="background" args={["#050505"]} />
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#ffb700" />

                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                        <BaobabStructure />
                    </Float>

                    <ParticleField />
                </Canvas>
            </div>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-1 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.04] bg-film-grain" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
                <div className="absolute inset-0 backdrop-blur-[1px]" />

                {/* Large Cinematic Glows */}
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[200px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary/10 blur-[200px] rounded-full" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-4 relative z-10 pt-20"
            >
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-12 h-[2px] bg-primary" />
                        <span className="text-[10px] uppercase font-black tracking-[0.5em] text-primary">ELITE AI FOR AFRICA</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-black leading-[0.9] tracking-[-0.04em] uppercase mb-12 text-foreground"
                    >
                        We don't just <br />
                        <span className="text-foreground/30">do AI. </span> <br />
                        <span className="text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-primary dark:via-white dark:to-secondary dark:glow-text-cyan">
                            We do AI <br />
                            that works.
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
                    >
                        <a
                            href="#contact"
                            className="px-10 py-6 bg-white text-[#050505] font-black text-xs uppercase tracking-[0.3em] hover:bg-primary transition-all flex items-center gap-4 group"
                        >
                            Book Discovery <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </a>

                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-black text-white/40 tracking-widest mb-2">Regional Hub</span>
                            <span className="text-sm font-bold text-white uppercase tracking-tighter">Nairobi • Lagos • Johannesburg</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Decorative Technical Line */}
            <div className="absolute bottom-12 right-12 flex items-center gap-8 opacity-20 hidden md:flex">
                <div className="text-right">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em]">Latent Space Visualization</div>
                    <div className="text-[8px] font-mono text-primary uppercase mt-1">Status: Stable // Output: Cinema</div>
                </div>
                <div className="w-24 h-px bg-white/20" />
            </div>
        </section>
    );
};

export default NextLevelHero;
