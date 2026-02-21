import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, Float } from "@react-three/drei";
import * as THREE from "three";

const NeuralNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100;

  // Create nodes
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  // Create links between near nodes
  const links = useMemo(() => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2.5) {
          lines.push([
            [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]],
            [positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]]
          ]);
        }
      }
    }
    return lines;
  }, [positions]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      {links.map((points, i) => (
        <Line
          key={i}
          points={points as any}
          color="#00f0ff"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
};

const AfricaWireframe = () => {
  const ref = useRef<THREE.Group>(null);
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.2);
    s.lineTo(0.6, 0.9);
    s.lineTo(0.8, 0.4);
    s.lineTo(0.9, 0);
    s.lineTo(0.7, -0.7);
    s.lineTo(0.2, -1.2);
    s.lineTo(-0.1, -0.7);
    s.lineTo(-0.5, -0.2);
    s.lineTo(-0.9, 0);
    s.lineTo(-0.8, 0.7);
    s.lineTo(-0.4, 1.1);
    s.closePath();
    return new THREE.ShapeGeometry(s);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={ref} geometry={shape} scale={2} position={[0, 0, -2]}>
        <meshBasicMaterial color="#ffb700" wireframe opacity={0.1} transparent />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
        <AfricaWireframe />
      </Canvas>
    </div>
  );
};

export default HeroScene;
