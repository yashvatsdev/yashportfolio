import { ExternalLink, Clock } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

interface Project {
  title: string
  description: string
  tags: string[]
  code: string
  demo: string | null
}

const PROJECTS: Project[] = [
  {
    title: 'Weather App',
    description:
      'A web app that fetches real-time weather data based on user location or search, showing current conditions, temperature, and forecasts in a clean, responsive UI.',
    tags: ['React', 'JavaScript', 'Weather API', 'Tailwind CSS'],
    code: 'https://github.com/yashvatsdev',
    demo: null,
  },
  {
    title: 'To-Do List App',
    description:
      'A task management app with add, edit, delete, and complete functionality, persistent storage, and smooth transitions between task states.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    code: 'https://github.com/yashvatsdev',
    demo: null,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-label"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionLabel eyebrow="Projects" id="projects" />

      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:bg-card sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                >
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                  Code
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Demo
                  </a>
                ) : (
                  <span
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground/60"
                    aria-disabled="true"
                    title="Demo coming soon"
                  >
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    Demo — coming soon
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
