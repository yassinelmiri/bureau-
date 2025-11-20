'use client';

import { useWorkspace } from '@/context/workspace-context';

export default function WorkspaceFloor() {
  const { desks, rooms } = useWorkspace();
  
  // Calculate total space needed
  const maxX = Math.max(...desks.map(d => d.position.x), ...rooms.map(r => r.position.x)) + 3;
  const maxY = Math.max(...desks.map(d => d.position.y), ...rooms.map(r => r.position.y)) + 3;

  return (
    <>
      {/* Floor plane */}
      <mesh position={[maxX / 2, -0.05, maxY / 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[maxX, maxY]} />
        <meshStandardMaterial color="#ffffff" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Walls - using box geometries to create walls around the perimeter */}
      {/* Left wall */}
      <mesh position={[-0.1, 1.5, maxY / 2]} castShadow>
        <boxGeometry args={[0.2, 3, maxY]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>

      {/* Back wall */}
      <mesh position={[maxX / 2, 1.5, -0.1]} castShadow>
        <boxGeometry args={[maxX, 3, 0.2]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>

      {/* Right wall */}
      <mesh position={[maxX + 0.1, 1.5, maxY / 2]} castShadow>
        <boxGeometry args={[0.2, 3, maxY]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>

      {/* Front wall */}
      <mesh position={[maxX / 2, 1.5, maxY + 0.1]} castShadow>
        <boxGeometry args={[maxX, 3, 0.2]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
    </>
  );
}
