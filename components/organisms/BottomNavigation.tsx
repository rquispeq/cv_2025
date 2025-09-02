"use client"

import { NavigationItem } from "@/components/molecules/NavigationItem"
import { User, Briefcase, GraduationCap, FolderOpen } from "lucide-react"

interface BottomNavigationProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export function BottomNavigation({ activeSection, onNavigate }: BottomNavigationProps) {
  const navigationItems = [
    { id: "perfil", label: "Perfil", icon: User },
    { id: "experiencia", label: "Experiencia", icon: Briefcase },
    { id: "educacion", label: "Educación", icon: GraduationCap },
    { id: "portafolio", label: "Portafolio", icon: FolderOpen },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="flex items-center justify-around px-2 py-2">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.id}
            id={item.id}
            label={item.label}
            icon={item.icon}
            isActive={activeSection === item.id}
            onClick={onNavigate}
            variant="mobile"
          />
        ))}
      </div>
    </nav>
  )
}
