"use client"

import { Suspense, useState } from "react"
import { LanguageProvider } from "@/context/language-context"
import { WorkspaceProvider } from "@/context/workspace-context"
import { AuthProvider } from "@/context/auth-context"
import WorkspaceScene from "@/components/workspace-scene"
import UIOverlay from "@/components/ui-overlay"

export default function Home() {
  const [view, setView] = useState<"2d" | "3d">("2d")

  return (
    <LanguageProvider>
      <AuthProvider>
        <WorkspaceProvider>
          <div className="w-full h-screen bg-background text-foreground flex flex-col overflow-hidden">
            <Suspense
              fallback={<div className="flex items-center justify-center w-full h-full">Loading workspace...</div>}
            >
              <WorkspaceScene view={view} />
            </Suspense>
            <UIOverlay view={view} onViewChange={setView} />
          </div>
        </WorkspaceProvider>
      </AuthProvider>
    </LanguageProvider>
  )
}
