"use client"

import { useState, useRef } from "react"
import { useWorkspace } from "@/context/workspace-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export default function EmployeeManagement() {
  const { employees, desks, addEmployee, removeEmployee, updateEmployee } = useWorkspace()
  const [showAdd, setShowAdd] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", deskId: "" })
  const [expandedEmpId, setExpandedEmpId] = useState<string | null>(null)
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})

  const handlePhotoUpload = (empId: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const photoData = e.target?.result as string
      updateEmployee(empId, { photo: photoData })
    }
    reader.readAsDataURL(file)
  }

  const handleAdd = () => {
    if (formData.name && formData.email && formData.deskId) {
      addEmployee({
        id: `emp-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        deskId: formData.deskId,
        status: "available",
      })
      setFormData({ name: "", email: "", deskId: "" })
      setShowAdd(false)
    }
  }

  const unassignedDesks = desks.filter((desk) => !employees.some((emp) => emp.deskId === desk.id))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <span className="text-2xl">👥</span> Employee List ({employees.length})
        </h3>
        <Button
          size="sm"
          onClick={() => setShowAdd(!showAdd)}
          className={`font-semibold ${showAdd ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
        >
          {showAdd ? "✕ Cancel" : "➕ Add Employee"}
        </Button>
      </div>

      {showAdd && (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 space-y-3">
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-2 border-blue-300"
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-2 border-blue-300"
          />
          <Select value={formData.deskId} onValueChange={(value) => setFormData({ ...formData, deskId: value })}>
            <SelectTrigger className="border-2 border-blue-300">
              <SelectValue placeholder="Select Desk" />
            </SelectTrigger>
            <SelectContent>
              {unassignedDesks.map((desk) => (
                <SelectItem key={desk.id} value={desk.id}>
                  {desk.id}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleAdd} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Add Employee
          </Button>
        </div>
      )}

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {employees.map((emp) => (
          <div key={emp.id}>
            <Card className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    {emp.photo ? (
                      <img
                        src={emp.photo || "/placeholder.svg"}
                        alt={emp.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white font-bold text-xl">{emp.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{emp.name}</p>
                    <p className="text-sm text-gray-600">✉️ {emp.email}</p>
                    <p className="text-xs text-blue-600 font-semibold mt-1">📍 {emp.deskId}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                  onClick={() => setExpandedEmpId(expandedEmpId === emp.id ? null : emp.id)}
                >
                  {expandedEmpId === emp.id ? "✕ Hide" : "✏️ Edit"}
                </Button>
              </div>
            </Card>

            {expandedEmpId === emp.id && (
              <Card className="p-4 bg-blue-50 border border-blue-300 mt-2 rounded-lg space-y-3">
                <div className="flex gap-2">
                  <input
                    ref={(ref) => {
                      fileInputRefs.current[emp.id] = ref
                    }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handlePhotoUpload(emp.id, file)
                    }}
                  />
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    onClick={() => fileInputRefs.current[emp.id]?.click()}
                  >
                    📸 {emp.photo ? "Change" : "Upload"} Photo
                  </Button>
                  {emp.photo && (
                    <Button
                      size="sm"
                      variant="destructive"
                      className="bg-red-500 hover:bg-red-600"
                      onClick={() => updateEmployee(emp.id, { photo: undefined })}
                    >
                      🗑️ Remove
                    </Button>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    removeEmployee(emp.id)
                    setExpandedEmpId(null)
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 font-semibold"
                >
                  🗑️ Remove Employee
                </Button>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
