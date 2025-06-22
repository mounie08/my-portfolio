// src/components/LiquidDistortion.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { GradientTexture } from '@react-three/drei';

const WaterShaderMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  // vertex shader
  `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.z += sin(pos.x * 10.0 + uTime) * 0.05;
      pos.z += sin(pos.y * 10.0 + uTime) * 0.05;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  `
    varying vec2 vUv;
    void main() {
      vec3 color = vec3(0.4 + 0.4 * sin(vUv.x * 10.0), 0.5, 0.9);
      gl_FragColor = vec4(color, 0.3); // adjust alpha if needed
    }
  `
);

extend({ WaterShaderMaterial });

const DistortedPlane = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[4, 4, 100, 100]} />
      <waterShaderMaterial ref={ref} transparent />
    </mesh>
  );
};

const LiquidDistortion = () => {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={1} />
      <DistortedPlane />
    </Canvas>
  );
};

export default LiquidDistortion;
