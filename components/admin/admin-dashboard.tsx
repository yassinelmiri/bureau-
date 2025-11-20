"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmployeeManagement from "./employee-management"
import RoomManagement from "./room-management"
import KitchenManagement from "./kitchen-management"
import DeskManagement from "./desk-management"

interface AdminDashboardProps {
  onClose: () => void
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("desks")

  return (
    <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col rounded-2xl shadow-2xl border border-black/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-6 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{t("admin.title")}</h1>
            <p className="text-white/80 text-sm mt-1">Manage your workspace environment</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xl transition-all duration-200"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden flex flex-col bg-white">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-4 bg-gray-50 border-b border-black/10 px-8 py-4 h-auto gap-2 rounded-none">
            <TabsTrigger
              value="desks"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg font-medium transition-all duration-200"
            >
              📍 Desks
            </TabsTrigger>
            <TabsTrigger
              value="employees"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg font-medium transition-all duration-200"
            >
              👥 Employees
            </TabsTrigger>
            <TabsTrigger
              value="rooms"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg font-medium transition-all duration-200"
            >
              🏢 Rooms
            </TabsTrigger>
            <TabsTrigger
              value="kitchen"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg font-medium transition-all duration-200"
            >
              🍳 Kitchen
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <TabsContent value="desks" className="space-y-6 mt-0">
                <DeskManagement />
              </TabsContent>

              <TabsContent value="employees" className="space-y-6 mt-0">
                <EmployeeManagement />
              </TabsContent>

              <TabsContent value="rooms" className="space-y-6 mt-0">
                <RoomManagement />
              </TabsContent>

              <TabsContent value="kitchen" className="space-y-6 mt-0">
                <KitchenManagement />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
