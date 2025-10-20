"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

// Project data
const projects = [
  {
    id: 1,
    title: "QR Generator",
    description:
      "A web-based tool to generate custom QR codes that point to any URL. Features a clean interface for creating, previewing, and downloading QR codes in bulk.",
    image: "/images/projects/qrGenerator.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "/projects/qrGenerator",
    githubUrl: "https://github.com/carlosbarreto/project1",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with real-time inventory management. Solved complex state management challenges while maintaining optimal performance.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    demoUrl: "https://project1.example.com",
    githubUrl: "https://github.com/carlosbarreto/project1",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Implemented drag-and-drop functionality and real-time notifications.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://project2.example.com",
    githubUrl: "https://github.com/carlosbarreto/project2",
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description:
      "An interactive dashboard for financial data visualization. Created intuitive data visualizations and implemented complex filtering capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "D3.js", "PostgreSQL", "TypeScript"],
    demoUrl: "https://project3.example.com",
    githubUrl: "https://github.com/carlosbarreto/project3",
  },
  {
    id: 5,
    title: "Health & Fitness Tracker",
    description:
      "A mobile-first application for tracking health and fitness goals. Designed an intuitive UX for complex data entry and progress visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    demoUrl: "https://project4.example.com",
    githubUrl: "https://github.com/carlosbarreto/project4",
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
