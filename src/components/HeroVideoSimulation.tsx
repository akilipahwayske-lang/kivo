import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Line, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const DataCloud = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 2000;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
            pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#00f0ff"
                size={0.008}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const NeuralPath = ({ color, startPos, endPos, delay }: { color: string, startPos: [number, number, number], endPos: [number, number, number], delay: number }) => {
    const lineRef = useRef<any>(null);

    useFrame((state) => {
        if (lineRef.current) {
            const t = (state.clock.getElapsedTime() + delay) % 4;
            const opacity = t < 1 ? t : t > 3 ? 4 - t : 1;
            lineRef.current.material.opacity = opacity * 0.2;
        }
    });

    return (
        <Line
            ref={lineRef}
            points={[startPos, endPos]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0}
        />
    );
};

const AfricaTechnical = () => {
    const groupRef = useRef<THREE.Group>(null);

    const shape = useMemo(() => {
        const s = new THREE.Shape();
        s.moveTo(0, 1.5);
        s.lineTo(0.8, 1.1);
        s.lineTo(1.1, 0.5);
        s.lineTo(1.2, 0);
        s.lineTo(0.9, -0.9);
        s.lineTo(0.3, -1.5);
        s.lineTo(-0.1, -0.9);
        s.lineTo(-0.6, -0.3);
        s.lineTo(-1.1, 0);
        s.lineTo(-1, 0.9);
        s.lineTo(-0.5, 1.4);
        s.closePath();
        return new THREE.ShapeGeometry(s);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2.5} rotationIntensity={0.1} floatIntensity={0.2}>
                <mesh geometry={shape}>
                    <meshBasicMaterial color="#ffb700" wireframe opacity={0.08} transparent />
                </mesh>

                {/* Connection points on Africa */}
                <Sphere args={[0.03, 16, 16]} position={[0, 1.5, 0]}>
                    <meshBasicMaterial color="#00f0ff" />
                </Sphere>
                <Sphere args={[0.03, 16, 16]} position={[0.7, 0, 0]}>
                    <meshBasicMaterial color="#ffb700" />
                </Sphere>
                <Sphere args={[0.03, 16, 16]} position={[-0.5, -0.5, 0]}>
                    <meshBasicMaterial color="#00f0ff" />
                </Sphere>
            </Float>
        </group>
    );
};

const HeroVideoSimulation = () => {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                <color attach="background" args={["#050505"]} />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />

                <DataCloud />
                <AfricaTechnical />

                {/* Animated Neural Connections */}
                <NeuralPath color="#00f0ff" startPos={[-4, 2, -2]} endPos={[0, 1.5, 0]} delay={0} />
                <NeuralPath color="#ffb700" startPos={[4, -1, -1]} endPos={[0.7, 0, 0]} delay={1} />
                <NeuralPath color="#00f0ff" startPos={[-3, -3, -1]} endPos={[-0.5, -0.5, 0]} delay={2.5} />
                <NeuralPath color="#ffffff" startPos={[2, 4, -2]} endPos={[0, 1.5, 0]} delay={1.5} />

                <Sphere args={[1, 64, 64]} position={[0, 0, -1]}>
                    <MeshDistortMaterial
                        color="#00f0ff"
                        speed={2}
                        distort={0.3}
                        radius={1}
                        emissive="#00f0ff"
                        emissiveIntensity={0.1}
                        transparent
                        opacity={0.05}
                    />
                </Sphere>
            </Canvas>
        </div>
    );
};

export default HeroVideoSimulation;
