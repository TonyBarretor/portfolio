"use client"

import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

// Blog post data (in a real app, this would come from Markdown files)
const blogPosts = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    date: "May 15, 2023",
    excerpt:
      "Learn how to create React applications that are accessible to all users, including those with disabilities. This post covers ARIA attributes, keyboard navigation, and more.",
    slug: "building-accessible-react-applications",
  },
  {
    id: 2,
    title: "State Management in 2023: Beyond Redux",
    date: "April 22, 2023",
    excerpt:
      "Explore modern state management solutions for React applications. We'll compare Redux, Context API, Zustand, Jotai, and Recoil to help you choose the right tool for your needs.",
    slug: "state-management-in-2023",
  },
]

const BlogPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <div ref={ref} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href={`/blog/${post.slug}`} className="flex items-center text-primary font-medium">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button asChild variant="outline">
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </div>
  )
}

export default BlogPreview
