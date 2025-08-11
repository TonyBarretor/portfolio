"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-xl"
      >
        <Image
          src="/placeholder.svg?height=500&width=500"
          alt="Carlos Barreto"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold mb-4">Hello there!</h3>
        <p className="text-muted-foreground mb-4">
          I'm a Full-Stack Engineer with 5 years of experience crafting web and mobile applications that users love. My
          journey in tech has been driven by a passion for solving complex problems with clean, maintainable code.
        </p>
        <p className="text-muted-foreground mb-4">
          My expertise lies in building robust applications with React, Node.js, and TypeScript. I believe in creating
          software that not only works flawlessly but also provides an exceptional user experience.
        </p>
        <p className="text-muted-foreground mb-6">
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
          sharing my knowledge through technical writing and mentoring.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Location</h4>
            <p className="text-muted-foreground">San Francisco, CA</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Experience</h4>
            <p className="text-muted-foreground">5+ Years</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Education</h4>
            <p className="text-muted-foreground">A.D. Computer Science</p>
            <p className="text-muted-foreground">Master Business Administration (MBA)</p>
            <p className="text-muted-foreground">B.S. Automotive Engineer</p>

          </div>
          <div>
            <h4 className="font-medium mb-2">Languages</h4>
            <p className="text-muted-foreground">English, Spanish, German, Chinese Mandarin</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
