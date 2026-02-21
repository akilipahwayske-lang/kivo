import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, MeshWobbleMaterial, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const BackgroundParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 3000;

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
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00b4d8"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const AfricaWireframe = () => {
  const ref = useRef<THREE.Group>(null);

  // Simplified Africa Shape Wireframe
  const points = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1);
    shape.lineTo(0.5, 0.8);
    shape.lineTo(0.7, 0.4);
    shape.lineTo(0.8, 0);
    shape.lineTo(0.6, -0.6);
    shape.lineTo(0.2, -1);
    shape.lineTo(-0.1, -0.6);
    shape.lineTo(-0.4, -0.2);
    shape.lineTo(-0.8, 0);
    shape.lineTo(-0.7, 0.6);
    shape.lineTo(-0.3, 0.9);
    shape.closePath();
    return new THREE.ShapeGeometry(shape);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh geometry={points} scale={1.8} position={[0, 0, -1]} rotation={[0, 0, 0]}>
        <meshBasicMaterial color="#00b4d8" wireframe opacity={0.15} transparent />
      </mesh>
    </Float>
  );
};

const OrbitRing = ({ radius, speed, color, rotationX = 0 }: { radius: number; speed: number; color: string; rotationX?: number }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[rotationX, 0, 0]}>
      <ringGeometry args={[radius, radius + 0.015, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
};

const HeroScene = () => {
  return (
    <div className="w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00b4d8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffb703" />

        <BackgroundParticles />
        <AfricaWireframe />

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshWobbleMaterial
            color="#00b4d8"
            factor={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
            emissive="#00b4d8"
            emissiveIntensity={0.5}
          />
        </mesh>

        <OrbitRing radius={1.8} speed={0.4} color="#00b4d8" rotationX={Math.PI / 3} />
        <OrbitRing radius={2.2} speed={-0.3} color="#ffb703" rotationX={-Math.PI / 4} />
        <OrbitRing radius={2.6} speed={0.2} color="#00b4d8" rotationX={Math.PI / 2.5} />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
