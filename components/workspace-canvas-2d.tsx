"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { useWorkspace } from "@/context/workspace-context"
import { useLanguage } from "@/context/language-context"

const GRID_SIZE = 40 // pixels per unit
const PADDING = 60

export default function WorkspaceCanvas2D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const {
    desks,
    rooms,
    employees,
    selectedDeskId,
    selectedRoomId,
    draggingDeskId,
    draggingRoomId, // add dragging room
    setSelectedDeskId,
    setSelectedRoomId,
    setDraggingDeskId,
    setDraggingRoomId, // add setter
    updateDeskPosition,
    updateRoomPosition, // add method
  } = useWorkspace()
  const { t } = useLanguage()
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [canvasSize, setCanvasSize] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const handleResize = () => {
      const container = canvasRef.current?.parentElement
      if (container) {
        setCanvasSize({
          width: container.clientWidth,
          height: container.clientHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const worldToScreen = (x: number, y: number) => ({
    x: x * GRID_SIZE + PADDING,
    y: y * GRID_SIZE + PADDING,
  })

  const screenToWorld = (x: number, y: number) => ({
    x: Math.round(((x - PADDING) / GRID_SIZE) * 2) / 2,
    y: Math.round(((y - PADDING) / GRID_SIZE) * 2) / 2,
  })

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if clicking on a desk
    for (const desk of desks) {
      const screen = worldToScreen(desk.position.x, desk.position.y)
      const width = desk.width * GRID_SIZE
      const depth = desk.depth * GRID_SIZE

      if (
        x >= screen.x - width / 2 &&
        x <= screen.x + width / 2 &&
        y >= screen.y - depth / 2 &&
        y <= screen.y + depth / 2
      ) {
        setSelectedDeskId(desk.id)
        setSelectedRoomId(null)
        setDraggingDeskId(desk.id)
        setDragOffset({ x: x - screen.x, y: y - screen.y })
        return
      }
    }

    for (const room of rooms) {
      const screen = worldToScreen(room.position.x, room.position.y)
      const size = 2.5 * GRID_SIZE

      if (
        x >= screen.x - size / 2 &&
        x <= screen.x + size / 2 &&
        y >= screen.y - size / 2 &&
        y <= screen.y + size / 2
      ) {
        setSelectedRoomId(room.id)
        setSelectedDeskId(null)
        setDraggingRoomId(room.id) // set dragging room
        setDragOffset({ x: x - screen.x, y: y - screen.y })
        return
      }
    }

    setSelectedDeskId(null)
    setSelectedRoomId(null)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - dragOffset.x
    const y = e.clientY - rect.top - dragOffset.y

    if (draggingDeskId) {
      const world = screenToWorld(x, y)
      updateDeskPosition(draggingDeskId, { x: world.x, y: world.y })
    }

    if (draggingRoomId) {
      const world = screenToWorld(x, y)
      updateRoomPosition(draggingRoomId, { x: world.x, y: world.y })
    }
  }

  const handleMouseUp = () => {
    setDraggingDeskId(null)
    setDraggingRoomId(null) // clear dragging room
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height)

    // Draw grid background
    ctx.strokeStyle = "#f0f0f0"
    ctx.lineWidth = 1
    for (let i = 0; i <= canvasSize.width; i += GRID_SIZE) {
      ctx.beginPath()
      ctx.moveTo(i, PADDING)
      ctx.lineTo(i, canvasSize.height)
      ctx.stroke()
    }
    for (let i = PADDING; i <= canvasSize.height; i += GRID_SIZE) {
      ctx.beginPath()
      ctx.moveTo(PADDING, i)
      ctx.lineTo(canvasSize.width, i)
      ctx.stroke()
    }

    // Draw rooms first
    for (const room of rooms) {
      const screen = worldToScreen(room.position.x, room.position.y)
      const size = 2.5 * GRID_SIZE

      const isSelected = selectedRoomId === room.id

      // Room colors
      let fillColor = "#f0f0f0"
      let borderColor = "#999999"

      if (room.type === "kitchen") {
        fillColor = "#fff0e6"
        borderColor = "#ff9500"
      } else if (room.type === "meeting") {
        fillColor = "#e6f0ff"
        borderColor = "#0055ff"
      } else if (room.type === "restroom") {
        fillColor = "#f5f5f5"
        borderColor = "#666666"
      }

      // Draw room
      ctx.fillStyle = isSelected ? borderColor : fillColor
      ctx.strokeStyle = borderColor
      ctx.lineWidth = isSelected ? 3 : 2
      ctx.fillRect(screen.x - size / 2, screen.y - size / 2, size, size)
      ctx.strokeRect(screen.x - size / 2, screen.y - size / 2, size, size)

      // Room label
      ctx.fillStyle = "#000000"
      ctx.font = "bold 12px Geist"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      const roomLabel = room.type === "kitchen" ? "🍳 Kitchen" : room.type === "meeting" ? "📋 Meeting" : "🚽 Restroom"
      ctx.fillText(roomLabel, screen.x, screen.y)
    }

    // Draw desks
    for (const desk of desks) {
      const screen = worldToScreen(desk.position.x, desk.position.y)
      const width = desk.width * GRID_SIZE
      const depth = desk.depth * GRID_SIZE
      const employee = employees.find((e) => e.deskId === desk.id)
      const isSelected = selectedDeskId === desk.id

      // Determine desk color based on status
      let fillColor = "#f8f8f8"
      let borderColor = "#cccccc"

      if (employee) {
        if (employee.status === "available") {
          fillColor = "#e6f0ff"
          borderColor = "#0055ff"
        } else if (employee.status === "occupied") {
          fillColor = "#ffe6e6"
          borderColor = "#ff3b30"
        } else {
          fillColor = "#f0f0f0"
          borderColor = "#999999"
        }
      }

      // Draw desk
      ctx.fillStyle = isSelected ? borderColor : fillColor
      ctx.strokeStyle = borderColor
      ctx.lineWidth = isSelected ? 3 : 2
      ctx.fillRect(screen.x - width / 2, screen.y - depth / 2, width, depth)
      ctx.strokeRect(screen.x - width / 2, screen.y - depth / 2, width, depth)

      // Status indicator dot
      ctx.fillStyle = borderColor
      ctx.beginPath()
      ctx.arc(screen.x + width / 2 - 8, screen.y - depth / 2 + 8, 5, 0, Math.PI * 2)
      ctx.fill()

      // Employee name
      if (employee) {
        ctx.fillStyle = "#000000"
        ctx.font = "11px Geist"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        const name = employee.name.split(" ")[0]
        ctx.fillText(name, screen.x, screen.y - 4)

        // Employee status
        ctx.font = "bold 9px Geist"
        const statusText =
          employee.status === "available" ? "Available" : employee.status === "occupied" ? "Occupied" : "Out"
        ctx.fillText(statusText, screen.x, screen.y + 6)
      } else {
        ctx.fillStyle = "#999999"
        ctx.font = "bold 10px Geist"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("Empty", screen.x, screen.y)
      }
    }
  }, [desks, rooms, employees, selectedDeskId, selectedRoomId, canvasSize])

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-full h-full cursor-move bg-background"
    />
  )
}
