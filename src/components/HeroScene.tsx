import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 1000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00b4d8" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

const CoreSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 10]} />
        <MeshDistortMaterial
          color="#00b4d8"
          emissive="#00b4d8"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={1}
          distort={0.4}
          speed={4}
        />
      </mesh>
      {/* Outer Glow Sphere */}
      <mesh scale={[1.4, 1.4, 1.4]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00b4d8" transparent opacity={0.05} wireframe />
      </mesh>
    </Float>
  );
};

const OrbitRing = ({ radius, speed, color, rotationX = 0 }: { radius: number; speed: number; color: string; rotationX?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[rotationX, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00b4d8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4a012" />

        <CoreSphere />

        <OrbitRing radius={2.2} speed={0.5} color="#00b4d8" rotationX={Math.PI / 3} />
        <OrbitRing radius={2.8} speed={-0.3} color="#d4a012" rotationX={-Math.PI / 4} />
        <OrbitRing radius={3.5} speed={0.2} color="#00b4d8" rotationX={Math.PI / 2.5} />

        <Particles />
      </Canvas>
    </div>
  );
};


export default HeroScene;
