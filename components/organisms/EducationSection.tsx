import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { Calendar } from "lucide-react"
import { useEducation } from "@/hooks/useEducation"

export function EducationSection() {
  const { data: educationData, loading, error } = useEducation()

  if (loading) {
    return (
      <section id="educacion" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    )
  }

  if (error || !educationData) {
    return (
      <section id="educacion" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Text variant="muted">Error al cargar los datos de educación</Text>
        </div>
      </section>
    )
  }

  return (
    <section id="educacion" className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <Heading level={2} className="mb-8 text-center">
          Educación y Formación
        </Heading>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.education.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <CardTitle>{edu.title}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {edu.startDate} - {edu.endDate}
                </div>
                <Text variant="muted">{edu.description}</Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
