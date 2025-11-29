import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import { FloatingShapes } from './FloatingShapes';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className = "" }: Scene3DProps) => {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas style={{ background: '#000000' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00d4ff" />
        <pointLight position={[0, 10, 5]} intensity={0.8} color="#0099ff" />
        
        <Suspense fallback={null}>
          <ParticleField />
          <FloatingShapes />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
