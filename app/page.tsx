import { GalaxyBackground } from '@/components/galaxy-background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Dsa } from '@/components/dsa'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Contact, Footer } from '@/components/contact'

export default function Page() {
  return (
    <div className="relative min-h-svh bg-background">
      <GalaxyBackground />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Dsa />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
