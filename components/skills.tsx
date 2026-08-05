import { Code2, Database, Wrench, Binary } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Figma', 'Notion'],
  },
  {
    icon: Binary,
    title: 'DSA',
    skills: [
      'Algorithms',
      'Data Structures',
      'Dynamic Programming',
      'Graphs',
      'Complexity',
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-label"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionLabel eyebrow="Skills" id="skills" />

      <div className="grid gap-5 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = group.icon
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:bg-card sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors group-hover:border-foreground/30">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
