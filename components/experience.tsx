import { Briefcase } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-label"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionLabel eyebrow="Experience" id="experience" />

      <Reveal>
        <article className="group flex flex-col items-start gap-6 rounded-2xl border border-dashed border-border bg-card/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:bg-card sm:flex-row sm:items-center sm:p-10">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-foreground/30">
            <Briefcase className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-medium">Open to opportunities</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                Available
              </span>
            </div>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Experience details coming soon. I&apos;m actively looking for
              internships and collaborative projects where I can contribute,
              learn, and grow as a developer.
            </p>
          </div>
        </article>
      </Reveal>
    </section>
  )
}
