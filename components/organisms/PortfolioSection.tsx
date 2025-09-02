import { Heading } from "@/components/atoms/Heading"
import { Text } from "@/components/atoms/Text"
import { LoadingSpinner } from "@/components/atoms/LoadingSpinner"
import { ProjectCard } from "@/components/molecules/ProjectCard"
import { usePortfolio } from "@/hooks/usePortfolio"

export function PortfolioSection() {
  const { data: portfolioData, loading, error } = usePortfolio()

  if (loading) {
    return (
      <section id="portafolio" className="py-16 px-4">
        <div className="container max-w-6xl mx-auto flex justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    )
  }

  if (error || !portfolioData) {
    return (
      <section id="portafolio" className="py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <Text variant="muted">Error al cargar los datos del portafolio</Text>
        </div>
      </section>
    )
  }

  return (
    <section id="portafolio" className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <Heading level={2} className="mb-8 text-center">
          Portafolio de Proyectos
        </Heading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
