import { Mail, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-heading'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const CHANNELS = [
  {
    label: 'Email',
    value: 'yash10252@gmail.com',
    href: 'mailto:yash10252@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/yashvatsdev',
    href: 'https://github.com/yashvatsdev',
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Yash Kumar Vats',
    href: 'https://linkedin.com/in/yash-kumar-vats-28b856327',
    icon: LinkedinIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-label"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionLabel eyebrow="Contact" id="contact" />

      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Have an opportunity, a project idea, or just want to talk tech?
            Reach out through any of the channels below.
          </p>
        </Reveal>

        <div className="md:col-span-7">
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/40">
            {CHANNELS.map((channel, i) => {
              const Icon = channel.icon
              return (
                <Reveal as="li" key={channel.label} delay={i * 0.06}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-accent"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="block truncate text-foreground">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 sm:px-8">
        <p className="text-sm text-muted-foreground">
          © 2026 Yash Vats. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
