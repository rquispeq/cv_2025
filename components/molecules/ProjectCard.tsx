import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Fullscreen, ZoomIn } from "lucide-react"
import type { Project } from "@/types"
import Image from "next/image"
import Link from "next/link"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from "react-photoswipe-gallery"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const defaultDatasource = [
    {
      sourceId: 1,
      original: project.image
    }
  ]
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Gallery dataSource={project.images || defaultDatasource}>
          <Item sourceId={1}>
            {({ref, open}) => (
              <>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform h-auto m-auto w-full absolute"
                
              />
              {/* Button in desktop */}
              <button
                  className="transition-all duration-500 hidden md:flex justify-center items-center opacity-0 hover:opacity-100 absolute inset-0 w-full h-full hover:bg-gray-900 hover:bg-opacity-40 text-white"
                  ref={ref}
                  onClick={open}
                  aria-label="Abrir imagen"
                >
                  <Fullscreen />
                </button>

              {/* Button in mobile */}
              <button className=" md:hidden block absolute right-0 bottom-0 bg-gray-900 text-sm bg-opacity-80 p-1 rounded-xl m-1 text-white border border-gray-100" ref={ref} onClick={open}>
                <Fullscreen />
              </button>
              </>
            )}
          </Item>
        </Gallery>
        {/* <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform h-auto m-auto w-full absolute"
        /> */}
        
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {project.title}
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all duration-200"
            >
              <Link href={project.githubUrl} target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            {project.liveUrl ? <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-all duration-200"
            >
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button> : <></>}
          </div>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
