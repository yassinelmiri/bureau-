"use client"

import { useState } from "react"
import { useWorkspace } from "@/context/workspace-context"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DeskManagement() {
  const { desks, addDesk, removeDesk, employees, updateDeskDimensions } = useWorkspace()
  const { t } = useLanguage()
  const [posX, setPosX] = useState(15)
  const [posY, setPosY] = useState(0)
  const [width, setWidth] = useState(2.5)
  const [depth, setDepth] = useState(1.5)
  const [editingDeskId, setEditingDeskId] = useState<string | null>(null)
  const [editWidth, setEditWidth] = useState(2.5)
  const [editDepth, setEditDepth] = useState(1.5)

  const handleAddDesk = () => {
    addDesk({ x: Number.parseFloat(posX.toString()), y: Number.parseFloat(posY.toString()) })
    setPosX(15)
    setPosY(0)
  }

  const handleUpdateDimensions = (deskId: string) => {
    updateDeskDimensions(deskId, editWidth, editDepth)
    setEditingDeskId(null)
  }

  const handleStartEdit = (desk: any) => {
    setEditingDeskId(desk.id)
    setEditWidth(desk.width)
    setEditDepth(desk.depth)
  }

  const getEmployeeForDesk = (deskId: string) => {
    return employees.find((emp) => emp.deskId === deskId)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">➕</span> Add New Desk
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">Position X</label>
            <Input
              type="number"
              step={0.5}
              value={posX}
              onChange={(e) => setPosX(Number.parseFloat(e.target.value) || 0)}
              className="border-2 border-blue-300"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">Position Y</label>
            <Input
              type="number"
              step={0.5}
              value={posY}
              onChange={(e) => setPosY(Number.parseFloat(e.target.value) || 0)}
              className="border-2 border-blue-300"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">Width</label>
            <Input
              type="number"
              step={0.5}
              value={width}
              onChange={(e) => setWidth(Number.parseFloat(e.target.value) || 2.5)}
              className="border-2 border-blue-300"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-2">Depth</label>
            <Input
              type="number"
              step={0.5}
              value={depth}
              onChange={(e) => setDepth(Number.parseFloat(e.target.value) || 1.5)}
              className="border-2 border-blue-300"
            />
          </div>
        </div>
        <Button
          onClick={handleAddDesk}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all"
        >
          ✓ Add Desk
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-2xl">📍</span> Existing Desks ({desks.length})
        </h3>
        <ScrollArea className="h-96 border border-gray-200 rounded-xl">
          <div className="space-y-3 p-4">
            {desks.map((desk) => {
              const emp = getEmployeeForDesk(desk.id)
              const isEditing = editingDeskId === desk.id

              return (
                <div
                  key={desk.id}
                  className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">{desk.id}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        📍 Position: ({desk.position.x}, {desk.position.y})
                      </div>
                      <div className="text-xs text-gray-600">
                        📏 Dimensions: {desk.width} × {desk.depth}
                      </div>
                      {emp && <div className="text-xs text-blue-600 font-semibold mt-2">👤 {emp.name}</div>}
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="space-y-2 pt-2 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs font-semibold text-gray-700">Width</label>
                          <Input
                            type="number"
                            step={0.5}
                            value={editWidth}
                            onChange={(e) => setEditWidth(Number.parseFloat(e.target.value) || 1)}
                            className="h-8 text-sm border-blue-300"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-700">Depth</label>
                          <Input
                            type="number"
                            step={0.5}
                            value={editDepth}
                            onChange={(e) => setEditDepth(Number.parseFloat(e.target.value) || 1)}
                            className="h-8 text-sm border-blue-300"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-green-600 hover:bg-green-700 h-8"
                          onClick={() => handleUpdateDimensions(desk.id)}
                        >
                          ✓ Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 h-8 bg-transparent"
                          onClick={() => setEditingDeskId(null)}
                        >
                          ✕ Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 pt-2 border-t border-gray-200">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white h-8"
                        onClick={() => handleStartEdit(desk)}
                      >
                        ✏️ Edit Size
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="bg-red-500 hover:bg-red-600 h-8"
                        onClick={() => removeDesk(desk.id)}
                      >
                        🗑️ Remove
                      </Button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
