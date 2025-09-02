"use client"

import type { LucideIcon } from "lucide-react"
import { Icon } from "@/components/atoms/Icon"

interface NavigationItemProps {
  id: string
  label: string
  icon: LucideIcon
  isActive: boolean
  onClick: (id: string) => void
  variant?: "desktop" | "mobile"
}

export function NavigationItem({ id, label, icon, isActive, onClick, variant = "desktop" }: NavigationItemProps) {
  if (variant === "mobile") {
    return (
      <button
        onClick={() => onClick(id)}
        className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
          isActive
            ? "text-primary bg-primary/10 scale-105"
            : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:scale-105"
        }`}
      >
        <Icon icon={icon} className="mb-1" />
        <span className="text-xs font-medium truncate">{label}</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => onClick(id)}
      className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </button>
  )
}
