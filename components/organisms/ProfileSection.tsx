import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { ContactInfo } from "@/components/molecules/ContactInfo"
import { SkillBadge } from "@/components/molecules/SkillBadge"
import { Mail, Phone, MapPin, User } from "lucide-react"
import { useProfile } from "@/hooks/useProfile"

export function ProfileSection() {
  const { data: profileData, loading, error } = useProfile()

  if (loading) {
    return (
      <section id="perfil" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    )
  }

  if (error || !profileData) {
    return (
      <section id="perfil" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Text variant="muted">Error al cargar los datos del perfil</Text>
        </div>
      </section>
    )
  }

  const { personalInfo, skills } = profileData

  return (
    <section id="perfil" className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <Heading level={2} className="mb-8 text-center">
          Perfil Profesional
        </Heading>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Sobre Mí
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="muted" className="leading-relaxed">
                {personalInfo.description}
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ContactInfo icon={Mail} text={personalInfo.email} />
              <ContactInfo icon={MapPin} text={personalInfo.location} />
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Habilidades Técnicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
