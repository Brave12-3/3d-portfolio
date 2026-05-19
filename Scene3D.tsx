"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

function Rotator() {
  const ref = useRef<any>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.28;
  });
  return (
    <mesh ref={ref} scale={1.05}>
      <torusKnotGeometry args={[0.6, 0.18, 128, 16]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
  <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black">
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        {/* Example sphere */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
