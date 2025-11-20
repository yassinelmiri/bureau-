"use client"

import { useRef, useState } from "react"
import { useWorkspace } from "@/context/workspace-context"
import type * as THREE from "three"

interface RoomProps {
  room: {
    id: string
    type: "kitchen" | "restroom" | "meeting"
    position: { x: number; y: number }
    status: string
  }
}

export default function RoomModel({ room }: RoomProps) {
  const { selectedRoomId, setSelectedRoomId, draggingRoomId, setDraggingRoomId, updateRoomPosition } = useWorkspace()
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const isSelected = selectedRoomId === room.id
  const isDragging = draggingRoomId === room.id

  const getRoomColor = (type: string) => {
    switch (type) {
      case "kitchen":
        return "#fff0e6"
      case "meeting":
        return "#e6f0ff"
      case "restroom":
        return "#f0f0f0"
      default:
        return "#f0f0f0"
    }
  }

  const getRoomAccent = (type: string) => {
    switch (type) {
      case "kitchen":
        return "#ff9933"
      case "meeting":
        return "#0055ff"
      case "restroom":
        return "#666666"
      default:
        return "#0055ff"
    }
  }

  const handlePointerDown = (e: any) => {
    e.stopPropagation()
    setDraggingRoomId(room.id)
    setSelectedRoomId(room.id)
  }

  const handlePointerMove = (e: any) => {
    if (isDragging && meshRef.current) {
      const worldPos = e.point
      updateRoomPosition(room.id, {
        x: Math.round(worldPos.x * 2) / 2,
        y: Math.round(worldPos.z * 2) / 2,
      })
    }
  }

  const handlePointerUp = () => {
    setDraggingRoomId(null)
  }

  return (
    <group position={[room.position.x, 0, room.position.y]}>
      {/* Room floor */}
      <mesh
        ref={meshRef}
        position={[0, 0.01, 0]}
        castShadow
        receiveShadow
        onClick={(e) => {
          e.stopPropagation()
          setSelectedRoomId(isSelected ? null : room.id)
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <boxGeometry args={[2.5, 0.02, 2.5]} />
        <meshStandardMaterial
          color={
            isDragging
              ? "#ff9500"
              : isSelected
                ? getRoomAccent(room.type)
                : hovered
                  ? "#eeeeee"
                  : getRoomColor(room.type)
          }
          metalness={0.05}
          roughness={0.9}
        />
      </mesh>

      {/* Room walls */}
      {[
        [-1.25, 1, 0],
        [1.25, 1, 0],
        [0, 1, -1.25],
        [0, 1, 1.25],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={i < 2 ? [0.1, 2, 2.5] : [2.5, 2, 0.1]} />
          <meshStandardMaterial color="#cccccc" metalness={0.05} />
        </mesh>
      ))}

      {/* Status indicator */}
      <mesh position={[0, 2.1, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color={getRoomAccent(room.type)}
          emissive={getRoomAccent(room.type)}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}
