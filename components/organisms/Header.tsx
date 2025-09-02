"use client"

import { useState, useEffect } from "react"
import { Code, Moon, Sun, Mail } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { NavigationItem } from "@/components/molecules/NavigationItem"
import { SocialLink } from "@/components/molecules/SocialLink"
import { User, Briefcase, GraduationCap, FolderOpen } from "lucide-react"

interface HeaderProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationItems = [
    { id: "perfil", label: "Perfil", icon: User },
    { id: "experiencia", label: "Experiencia", icon: Briefcase },
    { id: "educacion", label: "Educación", icon: GraduationCap },
    { id: "portafolio", label: "Portafolio", icon: FolderOpen },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span className="font-bold text-xl">Mi CV</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              isActive={activeSection === item.id}
              onClick={onNavigate}
              variant="desktop"
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          {mounted && (
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          )}

          <SocialLink href="mailto:tu-email@ejemplo.com" icon={Mail} label="Contacto" variant="green" />
        </div>
      </div>
    </nav>
  )
}
