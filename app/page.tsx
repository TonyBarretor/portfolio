import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import BlogPreview from "@/components/sections/BlogPreview"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Full viewport hero section */}
      <Hero />

      {/* About section with two-column layout */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <About />
        </div>
      </section>

      {/* Projects section with grid layout */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Skills section with visual representation */}
      <section id="skills" className="py-20 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
          <Skills />
        </div>
      </section>

      {/* Blog preview section */}
      <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          <BlogPreview />
        </div>
      </section>

      {/* Testimonials section with carousel */}
      <section id="testimonials" className="py-20 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <Testimonials />
        </div>
      </section>

      {/* Contact section with form */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 scroll-mt-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <Contact />
        </div>
      </section>
    </main>
  )
}
