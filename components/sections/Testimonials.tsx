"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Carlos is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
    name: "Sarah Johnson",
    title: "CTO at TechInnovate",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote:
      "Working with Carlos was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product's user experience.",
    name: "Michael Chen",
    title: "Product Manager at DesignHub",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote:
      "Carlos has a rare combination of technical expertise and communication skills. He translated complex technical concepts into language our stakeholders could understand.",
    name: "Emily Rodriguez",
    title: "Engineering Lead at DataFlow",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-none shadow-lg bg-primary/5 dark:bg-primary/10">
          <CardContent className="pt-10 pb-6 px-6 md:px-10 relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/30" />
            <p className="text-lg md:text-xl italic text-center">"{testimonials[activeIndex].quote}"</p>
          </CardContent>
          <CardFooter className="flex flex-col items-center pb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
              <Image
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
              <CardDescription>{testimonials[activeIndex].title}</CardDescription>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <div className="flex justify-center mt-6 space-x-4">
        <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? "bg-primary" : "bg-muted"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
