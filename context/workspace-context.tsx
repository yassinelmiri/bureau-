"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"

interface Employee {
  id: string
  name: string
  email: string
  deskId: string
  status: "available" | "occupied" | "out"
  photo?: string
}

interface Desk {
  id: string
  position: { x: number; y: number }
  width: number
  depth: number
  employeeId?: string
  type: "desk"
}

interface KitchenItem {
  id: string
  name: string
  quantity: number
}

interface Room {
  id: string
  type: "kitchen" | "restroom" | "meeting"
  position: { x: number; y: number }
  status: string
}

interface WorkspaceContextType {
  desks: Desk[]
  employees: Employee[]
  kitchenItems: KitchenItem[]
  rooms: Room[]
  selectedDeskId: string | null
  selectedRoomId: string | null
  draggingDeskId: string | null
  draggingRoomId: string | null
  setSelectedDeskId: (id: string | null) => void
  setSelectedRoomId: (id: string | null) => void
  setDraggingDeskId: (id: string | null) => void
  setDraggingRoomId: (id: string | null) => void
  updateEmployee: (id: string, data: Partial<Employee>) => void
  addEmployee: (employee: Employee) => void
  removeEmployee: (id: string) => void
  updateKitchenItem: (id: string, quantity: number) => void
  addKitchenItem: (item: KitchenItem) => void
  removeKitchenItem: (id: string) => void
  updateRoomStatus: (id: string, status: string) => void
  updateRoomPosition: (id: string, position: { x: number; y: number }) => void
  addDesk: (position: { x: number; y: number }) => void
  removeDesk: (id: string) => void
  updateDeskPosition: (id: string, position: { x: number; y: number }) => void
  updateDeskDimensions: (id: string, width: number, depth: number) => void
  resetToDefaults: () => void
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined)

const initialDesks: Desk[] = Array.from({ length: 12 }, (_, i) => ({
  id: `desk-${i + 1}`,
  position: { x: (i % 4) * 3, y: Math.floor(i / 4) * 3 },
  width: 2.5,
  depth: 1.5,
  type: "desk",
}))

const initialEmployees: Employee[] = [
  {
    id: "emp-1",
    name: "Alice Johnson",
    email: "alice@company.com",
    deskId: "desk-1",
    status: "available",
  },
  { id: "emp-2", name: "Bob Smith", email: "bob@company.com", deskId: "desk-2", status: "occupied" },
  { id: "emp-3", name: "Carol Davis", email: "carol@company.com", deskId: "desk-3", status: "available" },
  { id: "emp-4", name: "David Wilson", email: "david@company.com", deskId: "desk-4", status: "out" },
]

const initialKitchenItems: KitchenItem[] = [
  { id: "kit-1", name: "Coffee", quantity: 10 },
  { id: "kit-2", name: "Tea", quantity: 8 },
  { id: "kit-3", name: "Sugar", quantity: 5 },
  { id: "kit-4", name: "Napkins", quantity: 50 },
  { id: "kit-5", name: "Cleaning Products", quantity: 3 },
]

const initialRooms: Room[] = [
  { id: "room-1", type: "kitchen", position: { x: 12, y: 0 }, status: "ready" },
  { id: "room-2", type: "meeting", position: { x: 12, y: 3 }, status: "available" },
  { id: "room-3", type: "restroom", position: { x: 12, y: 6 }, status: "available" },
]

const STORAGE_KEY = "workspace-data"

const loadFromLocalStorage = () => {
  try {
    if (typeof window === "undefined") return null
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error("[v0] Error loading from localStorage:", error)
    return null
  }
}

const saveToLocalStorage = (data: {
  desks: Desk[]
  employees: Employee[]
  kitchenItems: KitchenItem[]
  rooms: Room[]
}) => {
  try {
    if (typeof window === "undefined") return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error("[v0] Error saving to localStorage:", error)
  }
}

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [desks, setDesks] = useState<Desk[]>(initialDesks)
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees)
  const [kitchenItems, setKitchenItems] = useState<KitchenItem[]>(initialKitchenItems)
  const [rooms, setRooms] = useState<Room[]>(initialRooms)
  const [selectedDeskId, setSelectedDeskId] = useState<string | null>(null)
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null)
  const [draggingDeskId, setDraggingDeskId] = useState<string | null>(null)
  const [draggingRoomId, setDraggingRoomId] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedData = loadFromLocalStorage()
    if (savedData) {
      setDesks(savedData.desks)
      setEmployees(savedData.employees)
      setKitchenItems(savedData.kitchenItems)
      setRooms(savedData.rooms)
    }
    setIsLoaded(true)
  }, [])

  const updateEmployee = useCallback(
    (id: string, data: Partial<Employee>) => {
      setEmployees((prev) => {
        const updated = prev.map((emp) => (emp.id === id ? { ...emp, ...data } : emp))
        saveToLocalStorage({ desks, employees: updated, kitchenItems, rooms })
        return updated
      })
    },
    [desks, kitchenItems, rooms],
  )

  const addEmployee = useCallback(
    (employee: Employee) => {
      setEmployees((prev) => {
        const updated = [...prev, employee]
        saveToLocalStorage({ desks, employees: updated, kitchenItems, rooms })
        return updated
      })
    },
    [desks, kitchenItems, rooms],
  )

  const removeEmployee = useCallback(
    (id: string) => {
      setEmployees((prev) => {
        const updated = prev.filter((emp) => emp.id !== id)
        saveToLocalStorage({ desks, employees: updated, kitchenItems, rooms })
        return updated
      })
    },
    [desks, kitchenItems, rooms],
  )

  const updateKitchenItem = useCallback(
    (id: string, quantity: number) => {
      setKitchenItems((prev) => {
        const updated = prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        saveToLocalStorage({ desks, employees, kitchenItems: updated, rooms })
        return updated
      })
    },
    [desks, employees, rooms],
  )

  const addKitchenItem = useCallback(
    (item: KitchenItem) => {
      setKitchenItems((prev) => {
        const updated = [...prev, item]
        saveToLocalStorage({ desks, employees, kitchenItems: updated, rooms })
        return updated
      })
    },
    [desks, employees, rooms],
  )

  const removeKitchenItem = useCallback(
    (id: string) => {
      setKitchenItems((prev) => {
        const updated = prev.filter((item) => item.id !== id)
        saveToLocalStorage({ desks, employees, kitchenItems: updated, rooms })
        return updated
      })
    },
    [desks, employees, rooms],
  )

  const updateRoomStatus = useCallback(
    (id: string, status: string) => {
      setRooms((prev) => {
        const updated = prev.map((room) => (room.id === id ? { ...room, status } : room))
        saveToLocalStorage({ desks, employees, kitchenItems, rooms: updated })
        return updated
      })
    },
    [desks, employees, kitchenItems],
  )

  const updateRoomPosition = useCallback(
    (id: string, position: { x: number; y: number }) => {
      setRooms((prev) => {
        const updated = prev.map((room) => (room.id === id ? { ...room, position } : room))
        saveToLocalStorage({ desks, employees, kitchenItems, rooms: updated })
        return updated
      })
    },
    [desks, employees, kitchenItems],
  )

  const addDesk = useCallback(
    (position: { x: number; y: number }) => {
      const newDesk: Desk = {
        id: `desk-${Date.now()}`,
        position,
        width: 2.5,
        depth: 1.5,
        type: "desk",
      }
      setDesks((prev) => {
        const updated = [...prev, newDesk]
        saveToLocalStorage({ desks: updated, employees, kitchenItems, rooms })
        return updated
      })
    },
    [employees, kitchenItems, rooms],
  )

  const removeDesk = useCallback(
    (id: string) => {
      setEmployees((prev) => {
        const updated = prev.filter((emp) => emp.deskId !== id)
        setDesks((prevDesks) => {
          const updatedDesks = prevDesks.filter((desk) => desk.id !== id)
          saveToLocalStorage({ desks: updatedDesks, employees: updated, kitchenItems, rooms })
          return updatedDesks
        })
        return updated
      })
    },
    [kitchenItems, rooms],
  )

  const updateDeskPosition = useCallback(
    (id: string, position: { x: number; y: number }) => {
      setDesks((prev) => {
        const updated = prev.map((desk) => (desk.id === id ? { ...desk, position } : desk))
        saveToLocalStorage({ desks: updated, employees, kitchenItems, rooms })
        return updated
      })
    },
    [employees, kitchenItems, rooms],
  )

  const updateDeskDimensions = useCallback(
    (id: string, width: number, depth: number) => {
      setDesks((prev) => {
        const updated = prev.map((desk) => (desk.id === id ? { ...desk, width, depth } : desk))
        saveToLocalStorage({ desks: updated, employees, kitchenItems, rooms })
        return updated
      })
    },
    [employees, kitchenItems, rooms],
  )

  const resetToDefaults = useCallback(() => {
    setDesks(initialDesks)
    setEmployees(initialEmployees)
    setKitchenItems(initialKitchenItems)
    setRooms(initialRooms)
    saveToLocalStorage({
      desks: initialDesks,
      employees: initialEmployees,
      kitchenItems: initialKitchenItems,
      rooms: initialRooms,
    })
  }, [])

  return (
    <WorkspaceContext.Provider
      value={{
        desks,
        employees,
        kitchenItems,
        rooms,
        selectedDeskId,
        selectedRoomId,
        draggingDeskId,
        draggingRoomId,
        setSelectedDeskId,
        setSelectedRoomId,
        setDraggingDeskId,
        setDraggingRoomId,
        updateEmployee,
        addEmployee,
        removeEmployee,
        updateKitchenItem,
        addKitchenItem,
        removeKitchenItem,
        updateRoomStatus,
        updateRoomPosition,
        addDesk,
        removeDesk,
        updateDeskPosition,
        updateDeskDimensions,
        resetToDefaults,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext)
  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider")
  }
  return context
}
