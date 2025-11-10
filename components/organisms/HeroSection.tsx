import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { SocialLink } from "@/components/molecules/SocialLink"
import { Github, Linkedin } from "lucide-react"
import type { PersonalInfo } from "@/types"
import Image from "next/image"

interface HeroSectionProps {
  personalInfo: PersonalInfo | null
  loading: boolean
}

export function HeroSection({ personalInfo, loading }: HeroSectionProps) {
  if (loading) {
    return (
      <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
        <div className="container max-w-4xl mx-auto flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    )
  }

  if (!personalInfo) return null

  return (
    <section className="pt-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-8">
          <Image
            src={personalInfo.photo || "/placeholder.svg"}
            alt="Foto de perfil"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-background shadow-lg"
          />
          <Heading level={1} className="mb-4">
            {personalInfo.name}
          </Heading>
          <Text variant="body" className="text-xl text-muted-foreground mb-6">
            {personalInfo.title}
          </Text>
          <div className="flex justify-center space-x-4">
            <SocialLink href={personalInfo.socialLinks.github} icon={Github} label="GitHub" variant="blue" />
            <SocialLink href={personalInfo.socialLinks.linkedin} icon={Linkedin} label="LinkedIn" variant="blue" />
          </div>
        </div>
      </div>
    </section>
  )
}
