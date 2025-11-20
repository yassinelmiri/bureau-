"use client"

import { useState } from "react"
import { useWorkspace } from "@/context/workspace-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function KitchenManagement() {
  const { kitchenItems, updateKitchenItem, addKitchenItem, removeKitchenItem } = useWorkspace()
  const [showAdd, setShowAdd] = useState(false)
  const [formData, setFormData] = useState({ name: "", quantity: "" })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingQuantity, setEditingQuantity] = useState("")

  const handleAdd = () => {
    if (formData.name && formData.quantity) {
      addKitchenItem({
        id: `kit-${Date.now()}`,
        name: formData.name,
        quantity: Number.parseInt(formData.quantity),
      })
      setFormData({ name: "", quantity: "" })
      setShowAdd(false)
    }
  }

  const handleSaveEdit = (id: string) => {
    const quantity = Number.parseInt(editingQuantity)
    if (!isNaN(quantity) && quantity >= 0) {
      updateKitchenItem(id, quantity)
      setEditingId(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <span className="text-2xl">🍳</span> Kitchen Inventory ({kitchenItems.length})
        </h3>
        <Button
          size="sm"
          onClick={() => setShowAdd(!showAdd)}
          className={`font-semibold ${showAdd ? "bg-red-600 hover:bg-red-700" : "bg-orange-500 hover:bg-orange-600"} text-white`}
        >
          {showAdd ? "✕ Cancel" : "➕ Add Item"}
        </Button>
      </div>

      {showAdd && (
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 space-y-3">
          <Input
            placeholder="Item name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-2 border-orange-300"
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            min="0"
            className="border-2 border-orange-300"
          />
          <Button onClick={handleAdd} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
            Add Item
          </Button>
        </div>
      )}

      {/* Existing code */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {kitchenItems.map((item) => (
          <Card
            key={item.id}
            className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-bold text-gray-900">{item.name}</p>
              </div>
              {editingId === item.id ? (
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    value={editingQuantity}
                    onChange={(e) => setEditingQuantity(e.target.value)}
                    className="w-20 h-8 text-sm border-orange-300"
                    min="0"
                  />
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 h-8"
                    onClick={() => handleSaveEdit(item.id)}
                  >
                    ✓
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 bg-transparent" onClick={() => setEditingId(null)}>
                    ✕
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-lg min-w-16 text-center">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => {
                      setEditingId(item.id)
                      setEditingQuantity(item.quantity.toString())
                    }}
                  >
                    ✏️
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => removeKitchenItem(item.id)}
                  >
                    🗑️
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
