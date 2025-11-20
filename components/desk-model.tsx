"use client"

import { useRef, useState } from "react"
import { useWorkspace } from "@/context/workspace-context"
import { useLanguage } from "@/context/language-context"
import type * as THREE from "three"

interface DeskProps {
  desk: {
    id: string
    position: { x: number; y: number }
    width: number
    depth: number
  }
}

export default function DeskModel({ desk }: DeskProps) {
  const { employees, selectedDeskId, setSelectedDeskId, draggingDeskId, setDraggingDeskId, updateDeskPosition } =
    useWorkspace()
  const { t } = useLanguage()
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  const employee = employees.find((e) => e.deskId === desk.id)
  const isSelected = selectedDeskId === desk.id
  const isDragging = draggingDeskId === desk.id

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "#0055ff"
      case "occupied":
        return "#ff6b6b"
      case "out":
        return "#999999"
      default:
        return "#0055ff"
    }
  }

  const statusColor = employee ? getStatusColor(employee.status) : "#999999"

  const handlePointerDown = (e: any) => {
    e.stopPropagation()
    setDraggingDeskId(desk.id)
    setSelectedDeskId(desk.id)
  }

  const handlePointerMove = (e: any) => {
    if (isDragging && meshRef.current) {
      const worldPos = e.point
      updateDeskPosition(desk.id, {
        x: Math.round(worldPos.x * 2) / 2, // Snap to 0.5 grid
        y: Math.round(worldPos.z * 2) / 2, // Use Z as Y (XZ plane)
      })
    }
  }

  const handlePointerUp = () => {
    setDraggingDeskId(null)
  }

  return (
    <group position={[desk.position.x, 0, desk.position.y]}>
      {/* Desk surface */}
      <mesh
        ref={meshRef}
        position={[0, 0.75, 0]}
        castShadow
        receiveShadow
        onClick={(e) => {
          e.stopPropagation()
          setSelectedDeskId(isSelected ? null : desk.id)
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerEnter={() => setHovered(true)}
      >
        <boxGeometry args={[desk.width, 0.05, desk.depth]} />
        <meshStandardMaterial
          color={isDragging ? "#ff9500" : isSelected ? "#0055ff" : hovered ? "#e8e8ff" : "#f0f0f0"}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Desk legs */}
      {[
        [-desk.width / 2 + 0.2, 0.3, -desk.depth / 2 + 0.2],
        [-desk.width / 2 + 0.2, 0.3, desk.depth / 2 - 0.2],
        [desk.width / 2 - 0.2, 0.3, -desk.depth / 2 + 0.2],
        [desk.width / 2 - 0.2, 0.3, desk.depth / 2 - 0.2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.08, 0.6, 0.08]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      ))}

      {/* Monitor indicator */}
      {employee && (
        <mesh position={[0, 1.2, -desk.depth / 2 - 0.3]} castShadow>
          <boxGeometry args={[desk.width - 0.2, 1.2, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.2} />
        </mesh>
      )}

      <mesh position={[desk.width / 2 + 0.2, 0.85, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial
          color={statusColor}
          emissive={statusColor}
          emissiveIntensity={hovered || isSelected ? 1 : 0.5}
        />
      </mesh>

      {/* Pulsing light effect when occupied */}
      {employee && employee.status === "occupied" && (
        <mesh position={[desk.width / 2 + 0.2, 0.85, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.06, 32]} />
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} transparent opacity={0.3} />
        </mesh>
      )}

      {/* Selection highlight */}
      {isSelected && (
        <mesh position={[0, 0.76, 0]}>
          <boxGeometry args={[desk.width + 0.2, 0.02, desk.depth + 0.2]} />
          <meshStandardMaterial
            color={isDragging ? "#ff9500" : "#0055ff"}
            emissive={isDragging ? "#ff9500" : "#0055ff"}
            emissiveIntensity={1}
          />
        </mesh>
      )}
    </group>
  )
}
