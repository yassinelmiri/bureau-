"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { useEffect, useRef } from "react"
import WorkspaceFloor from "./workspace-floor"
import RoomObjects from "./room-objects"
import DeskObjects from "./desk-objects"

export default function WorkspaceCanvas3D() {
  const cameraRef = useRef<any>(null)

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(10, 8, 10)
      cameraRef.current.lookAt(6, 0, 6)
    }
  }, [])

  return (
    <Canvas
      camera={{ position: [10, 8, 10], fov: 50, far: 1000 }}
      className="w-full h-full"
      style={{ background: "#ffffff" }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <Environment preset="studio" />
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 15, 10]} intensity={0.8} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.4} />

      {/* Floor and objects */}
      <WorkspaceFloor />
      <RoomObjects />
      <DeskObjects />

      <OrbitControls
        autoRotate={false}
        enableZoom={true}
        enablePan={true}
        minDistance={5}
        maxDistance={50}
        makeDefault
      />
    </Canvas>
  )
}
