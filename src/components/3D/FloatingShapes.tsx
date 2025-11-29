import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingShapes = () => {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);
  const torus = useRef<THREE.Mesh>(null);
  const box = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(t * 0.8) * 3;
      sphere1.current.position.x = -6 + Math.cos(t * 0.3) * 2;
      sphere1.current.rotation.x = t * 0.5;
      sphere1.current.rotation.z = t * 0.4;
    }
    
    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(t * 1.2) * 2.5;
      sphere2.current.position.x = 6 + Math.sin(t * 0.4) * 1.5;
      sphere2.current.rotation.y = t * 0.6;
      sphere2.current.rotation.x = t * 0.3;
    }
    
    if (torus.current) {
      torus.current.position.y = Math.sin(t * 1 + 1) * 2;
      torus.current.position.z = -10 + Math.cos(t * 0.2) * 2;
      torus.current.rotation.x = t * 0.8;
      torus.current.rotation.y = t * 0.5;
    }
    
    if (box.current) {
      box.current.position.y = Math.cos(t * 0.7 + 2) * 2.5;
      box.current.position.z = -12 + Math.sin(t * 0.25) * 2;
      box.current.rotation.x = t * 0.4;
      box.current.rotation.y = t * 0.6;
      box.current.rotation.z = t * 0.2;
    }
  });

  return (
    <group>
      <Sphere ref={sphere1} args={[1, 32, 32]} position={[-6, 2, -5]}>
        <MeshDistortMaterial
          color="#00e5ff"
          attach="material"
          distort={0.3}
          speed={2}
          transparent
          opacity={0.75}
          emissive="#00e5ff"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      <Sphere ref={sphere2} args={[0.8, 32, 32]} position={[6, -1, -8]}>
        <MeshDistortMaterial
          color="#00b4ff"
          attach="material"
          distort={0.4}
          speed={1.5}
          transparent
          opacity={0.7}
          emissive="#00b4ff"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      <Torus ref={torus} args={[1.5, 0.4, 16, 100]} position={[4, 3, -10]}>
        <MeshDistortMaterial
          color="#00ffee"
          attach="material"
          distort={0.2}
          speed={3}
          transparent
          opacity={0.6}
          emissive="#00ffee"
          emissiveIntensity={0.6}
        />
      </Torus>
      
      <Box ref={box} args={[1.5, 1.5, 1.5]} position={[-5, -2, -12]}>
        <MeshDistortMaterial
          color="#0088ff"
          attach="material"
          distort={0.25}
          speed={2.5}
          transparent
          opacity={0.65}
          emissive="#0088ff"
          emissiveIntensity={0.45}
        />
      </Box>
    </group>
  );
};
