import { Flame, ExternalLink, Layers, Trophy } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'

const CODOLIO_USERNAME = 'yashvats'
const CODOLIO_URL = `https://codolio.com/profile/${CODOLIO_USERNAME}`
const CODOLIO_CARD_IMAGE = `https://codolio.com/api/og/${CODOLIO_USERNAME}`

const HIGHLIGHTS = [
  {
    icon: Flame,
    title: 'Daily practice',
    desc: 'Steady, ongoing problem-solving rather than one-off bursts.',
  },
  {
    icon: Layers,
    title: 'Multi-platform',
    desc: 'Progress unified across LeetCode, GfG and more via Codolio.',
  },
  {
    icon: Trophy,
    title: 'Contest tracking',
    desc: 'Rating and contest history kept up to date automatically.',
  },
]

export function Dsa() {
  return (
    <section
      id="dsa"
      aria-labelledby="dsa-label"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionLabel eyebrow="DSA Consistency" id="dsa" />

      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Problem solving, tracked and consistent.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I track every problem I solve across platforms in one place with
            Codolio, so progress stays visible and consistent instead of
            scattered.
          </p>

          <ul className="mt-8 space-y-5">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon
              return (
                <Reveal key={h.title} delay={0.05 + i * 0.06}>
                  <li className="group flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-foreground/30">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{h.title}</p>
                      <p className="text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <a
            href={CODOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:bg-card"
          >
            <div className="relative aspect-[1200/630] w-full overflow-hidden border-b border-border bg-background">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CODOLIO_CARD_IMAGE}
                alt="Yash Vats — live Codolio DSA stats card"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-6 sm:p-7">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Live stats
                </p>
                <p className="mt-1 text-foreground">
                  codolio.com/profile/{CODOLIO_USERNAME}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors group-hover:bg-accent">
                View profile
                <ExternalLink
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
