import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Analytics } from "@/components/Analytics"
import { Suspense } from "react"

// Load Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] })

// SEO metadata
export const metadata: Metadata = {
  title: "Carlos Barreto | Full-Stack Engineer & UX Enthusiast",
  description:
    "Portfolio of Carlos Barreto, a Full-Stack Engineer with 5 years of experience in web and mobile development, specializing in React, Node.js, and TypeScript.",
  keywords: ["developer", "portfolio", "full-stack", "react", "node.js", "typescript"],
  authors: [{ name: "Carlos Barreto" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carlosbarreto.dev",
    title: "Carlos Barreto | Full-Stack Engineer & UX Enthusiast",
    description:
      "Portfolio of Carlos Barreto, a Full-Stack Engineer with 5 years of experience in web and mobile development.",
    siteName: "Carlos Barreto Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carlos Barreto - Full-Stack Engineer & UX Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Barreto | Full-Stack Engineer & UX Enthusiast",
    description:
      "Portfolio of Carlos Barreto, a Full-Stack Engineer with 5 years of experience in web and mobile development.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <Header />
            {children}
            <Footer />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
