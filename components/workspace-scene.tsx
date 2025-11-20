"use client"

import { Suspense } from "react"
import WorkspaceCanvas2D from "./workspace-canvas-2d"
import dynamic from "next/dynamic"

const WorkspaceCanvas3D = dynamic(() => import("./workspace-canvas-3d"), { ssr: false })

interface WorkspaceSceneProps {
  view: "2d" | "3d"
}

export default function WorkspaceScene({ view }: WorkspaceSceneProps) {
  return (
    <div className="w-full h-full bg-background relative">
      {view === "2d" ? (
        <Suspense fallback={<div className="flex items-center justify-center w-full h-full">Loading 2D...</div>}>
          <WorkspaceCanvas2D />
        </Suspense>
      ) : (
        <Suspense fallback={<div className="flex items-center justify-center w-full h-full">Loading 3D...</div>}>
          <WorkspaceCanvas3D />
        </Suspense>
      )}
    </div>
  )
}
