"use client"

import { useWorkspace } from "@/context/workspace-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export default function RoomManagement() {
  const { rooms, updateRoomStatus } = useWorkspace()

  const getStatusOptions = (type: string) => {
    if (type === "restroom") {
      return ["available", "occupied", "cleaning"]
    }
    return ["available", "occupied"]
  }

  const getRoomIcon = (type: string) => {
    switch (type) {
      case "kitchen":
        return "🍳"
      case "meeting":
        return "📊"
      case "restroom":
        return "🚽"
      default:
        return "🏢"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-700 border-green-300"
      case "occupied":
        return "bg-orange-100 text-orange-700 border-orange-300"
      case "cleaning":
        return "bg-yellow-100 text-yellow-700 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
        <span className="text-2xl">🏢</span> Room Status Management
      </h3>
      <div className="space-y-3">
        {rooms.map((room) => (
          <Card
            key={room.id}
            className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{getRoomIcon(room.type)}</span>
                <div>
                  <p className="font-bold text-gray-900 capitalize">{room.type}</p>
                  <p className="text-sm text-gray-600">{room.id}</p>
                </div>
              </div>
              <Select value={room.status} onValueChange={(value) => updateRoomStatus(room.id, value)}>
                <SelectTrigger className={`w-32 font-semibold border-2 ${getStatusColor(room.status)}`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {getStatusOptions(room.type).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
