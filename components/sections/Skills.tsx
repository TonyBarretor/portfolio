"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"

// Skills data
const skills = [
  { name: "JavaScript", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "AWS", level: 65, category: "DevOps" },
  { name: "GraphQL", level: 80, category: "API" },
  { name: "REST API", level: 90, category: "API" },
]

// Tools data
const tools = [
  { name: "VS Code", icon: "💻" },
  { name: "Git", icon: "🔄" },
  { name: "Figma", icon: "🎨" },
  { name: "Postman", icon: "📬" },
  { name: "Jest", icon: "🧪" },
  { name: "GitHub Actions", icon: "🔄" },
  { name: "Webpack", icon: "📦" },
  { name: "npm", icon: "📦" },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div ref={ref} className="space-y-12">
      <div className="space-y-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorySkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-6">Tools & Environment</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center p-4 bg-muted/50 rounded-lg">
              <span className="text-2xl mr-3">{tool.icon}</span>
              <span className="font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
