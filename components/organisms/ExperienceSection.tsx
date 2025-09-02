import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { Calendar } from "lucide-react"
import { useExperience } from "@/hooks/useExperience"

export function ExperienceSection() {
  const { data: experienceData, loading, error } = useExperience()

  if (loading) {
    return (
      <section id="experiencia" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    )
  }

  if (error || !experienceData) {
    return (
      <section id="experiencia" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Text variant="muted">Error al cargar los datos de experiencia</Text>
        </div>
      </section>
    )
  }

  return (
    <section id="experiencia" className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <Heading level={2} className="mb-8 text-center">
          Experiencia Profesional
        </Heading>

        <div className="space-y-6">
          {experienceData.experience.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex justify-between items-start flex-col md:flex-row gap-1 md:gap-0">
                  <div>
                    <CardTitle>{exp.position}</CardTitle>
                    <CardDescription className="text-lg">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.startDate} - {exp.endDate}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
