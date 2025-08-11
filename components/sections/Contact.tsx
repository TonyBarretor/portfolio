"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Simulate API call
    try {
      // In a real app, you would send this data to your API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify({ name, email, message }),
      //   headers: { 'Content-Type': 'application/json' },
      // })

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Reset form
      formRef.current?.reset()

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
    } catch (error) {
      // Show error message
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required aria-required="true" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              aria-required="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message" rows={5} required aria-required="true" />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8"
      >
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:tony.barretor@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  tony.barretor@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Linkedin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/tony-barreto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/tony-barreto
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Github className="h-5 w-5 mr-3 mt-0.5 text-primary" />
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a
                  href="https://github.com/TonyBarretor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/TonyBarretor
                </a>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="w-full">
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
