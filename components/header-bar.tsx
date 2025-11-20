"use client"

import { useLanguage } from "@/context/language-context"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"

interface HeaderBarProps {
  onAdminToggle?: (show: boolean) => void
  view?: "2d" | "3d"
  onViewChange?: (view: "2d" | "3d") => void
}

export default function HeaderBar({ onAdminToggle, view = "2d", onViewChange }: HeaderBarProps) {
  const { language, setLanguage, t } = useLanguage()
  const { isAdmin, setIsAdmin } = useAuth()

  return (
    <header className="absolute top-0 left-0 right-0 z-40 bg-gradient-to-r from-background to-background border-b-2 border-primary px-6 py-4 pointer-events-auto shadow-md">
      <div className="flex items-center justify-between max-w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">W</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">{t("header.title")}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 bg-muted rounded-lg p-1">
            <Button
              variant={view === "2d" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange?.("2d")}
              className={view === "2d" ? "bg-primary hover:bg-primary/90" : "hover:bg-secondary/20"}
            >
              2D
            </Button>
            <Button
              variant={view === "3d" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange?.("3d")}
              className={view === "3d" ? "bg-accent hover:bg-accent/90" : "hover:bg-secondary/20"}
            >
              3D
            </Button>
          </div>

          {/* Language toggle - Blue and Orange buttons */}
          <div className="flex gap-2 bg-muted rounded-lg p-1">
            <Button
              variant={language === "en" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("en")}
              className={language === "en" ? "bg-primary hover:bg-primary/90" : "hover:bg-secondary/20"}
            >
              EN
            </Button>
            <Button
              variant={language === "fr" ? "default" : "ghost"}
              size="sm"
              onClick={() => setLanguage("fr")}
              className={language === "fr" ? "bg-accent hover:bg-accent/90" : "hover:bg-secondary/20"}
            >
              FR
            </Button>
          </div>

          {/* Admin toggle button */}
          <Button
            variant={isAdmin ? "default" : "outline"}
            size="sm"
            onClick={() => {
              if (!isAdmin) {
                setIsAdmin(true)
              } else {
                onAdminToggle?.(true)
              }
            }}
            className={isAdmin ? "bg-secondary hover:bg-secondary/90" : ""}
          >
            {t("header.admin")}
          </Button>
        </div>
      </div>
    </header>
  )
}
