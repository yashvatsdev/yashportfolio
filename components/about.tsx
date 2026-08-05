import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionLabel eyebrow="About" id="about" />

      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A student who codes with discipline.
          </h2>
        </Reveal>

        <div className="space-y-6 md:col-span-7">
          <Reveal delay={0.05}>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m Yash Vats, a second-year Computer Science student at
              Manipal University Jaipur. I enjoy building full-stack web
              applications from the ground up — designing clean interfaces and
              pairing them with reliable, well-structured backends.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I&apos;m also a DSA enthusiast — I spend a good chunk of my time
              solving algorithmic problems, sharpening how I think about
              efficiency and structure, and I try to bring that same discipline
              into every project I build.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
