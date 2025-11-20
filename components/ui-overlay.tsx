"use client"

import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { useWorkspace } from "@/context/workspace-context"
import HeaderBar from "./header-bar"
import DeskPanel from "./panels/desk-panel"
import RoomPanel from "./panels/room-panel"
import AdminDashboard from "./admin/admin-dashboard"

interface UIOverlayProps {
  view?: "2d" | "3d"
  onViewChange?: (view: "2d" | "3d") => void
}

export default function UIOverlay({ view = "2d", onViewChange }: UIOverlayProps) {
  const { selectedDeskId, selectedRoomId } = useWorkspace()
  const { isAdmin } = useAuth()
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Header */}
      <HeaderBar onAdminToggle={setShowAdmin} view={view} onViewChange={onViewChange} />

      {/* Admin Dashboard Modal */}
      {isAdmin && showAdmin && (
        <div className="pointer-events-auto fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <AdminDashboard onClose={() => setShowAdmin(false)} />
        </div>
      )}

      {/* Desk Detail Panel */}
      {selectedDeskId && !showAdmin && (
        <div className="pointer-events-auto absolute top-20 right-6 w-96 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <DeskPanel deskId={selectedDeskId} />
        </div>
      )}

      {/* Room Detail Panel */}
      {selectedRoomId && !showAdmin && (
        <div className="pointer-events-auto absolute bottom-6 left-6 w-96 max-h-96 overflow-y-auto">
          <RoomPanel roomId={selectedRoomId} />
        </div>
      )}
    </div>
  )
}
