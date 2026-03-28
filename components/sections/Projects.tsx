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
  title: "Drimov",
  description:
    "A premium rideshare application with dedicated rider and driver experiences, focused on seamless booking, real-time trip coordination, secure authentication, and scalable mobility operations. Built to deliver a modern alternative to traditional ride-hailing platforms.",
  image: "/images/projects/DrimovImage.png",
  tags: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB"],
  demoUrl: "https://www.drimov.com",
  githubUrl: "https://github.com/TonyBarretor/drimov",
},
  {
  id: 2,
  title: "Premium House Cleaning Service",
  description:
    "A premium house cleaning website designed for busy professionals, featuring service plan presentation, recurring cleaning options, strong trust signals, and a polished booking flow focused on free estimates and customer conversion.",
  image: "/images/projects/HouseCleaning.png",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  demoUrl: "https://housecleaning-eta.vercel.app/",
  githubUrl: "https://github.com/TonyBarretor/housecleaning",
},
 
  
  {
    id: 3,
    title: "Be Surf Co.",
    description:
    "A premium surf e-commerce experience built to highlight high-end surfboards, wetsuits, and accessories through elegant product presentation, clear category navigation, and strong lifestyle-driven branding.",
  image: "/images/projects/SurfCo.png",
  tags: ["E-Commerce", "Responsive Design", "Product Showcase", "Branding"],
    demoUrl: "https://besurf-sage.vercel.app/",
    githubUrl: "https://github.com/TonyBarretor/BESurf",
  },
  {
    id: 4,
    title: "Baykery E-commerce",
    description:
    "An artisanal bakery storefront built to present fresh weekend-baked products, organize categories like breads, cakes, cookies, and croissants, and reinforce a warm local brand identity for customers in Lima, Peru.",
  image: "/images/projects/Baykery.png",
  tags: ["E-Commerce", "Responsive Design", "Product Showcase", "Brand Experience"],
  demoUrl: "https://baykerymvp.vercel.app/",
  githubUrl: "https://github.com/TonyBarretor/BaykeryProject",
  },
   {
    id: 5,
    title: "QR Generator",
    description:
      "A web-based tool to generate custom QR codes that point to any URL. Features a clean interface for creating, previewing, and downloading QR codes in bulk.",
    image: "/images/projects/qrGenerator.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "/projects/qrGenerator",
    githubUrl: "https://github.com/carlosbarreto/project1",
  },
  {
    id: 6,
    title: "Software Prompt Generator",
    description:
      "A React-based web application that generates customized, professional software development prompts for AI assistants. Features a comprehensive form for project requirements with smart customization, export options (copy/download as .md), and dynamic recommendations based on project size and priorities.",
    image: "/images/projects/SoftwarePromptGeneratorImage.png",
    tags: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
    demoUrl: "https://tonybarretor.github.io/SoftwarePromptGenerator/",
    githubUrl: "https://github.com/TonyBarretor/SoftwarePromptGenerator/settings/pages",
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
