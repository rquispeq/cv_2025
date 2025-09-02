"use client"

import { useState } from "react"
import { Header } from "@/components/organisms/Header"
import { BottomNavigation } from "@/components/organisms/BottomNavigation"
import { HeroSection } from "@/components/organisms/HeroSection"
import { ProfileSection } from "@/components/organisms/ProfileSection"
import { ExperienceSection } from "@/components/organisms/ExperienceSection"
import { EducationSection } from "@/components/organisms/EducationSection"
import { PortfolioSection } from "@/components/organisms/PortfolioSection"
import { Footer } from "@/components/organisms/Footer"
import { Separator } from "@/components/ui/separator"
import { useProfile } from "@/hooks/useProfile"

export default function CVPage() {
  const [activeSection, setActiveSection] = useState("perfil")
  const { data: profileData, loading: profileLoading } = useProfile()

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <BottomNavigation activeSection={activeSection} onNavigate={scrollToSection} />

      <HeroSection personalInfo={profileData?.personalInfo || null} loading={profileLoading} />

      <ProfileSection />
      <Separator />

      <ExperienceSection />
      <Separator />

      <EducationSection />
      <Separator />

      <PortfolioSection />

      <Footer />
    </div>
  )
}
