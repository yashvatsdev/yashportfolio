'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center px-5 pt-24 pb-16 sm:px-8"
    >
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Full Stack Developer
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl"
        >
          Yash Vats
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Second-year Computer Science student at Manipal University Jaipur. I
          build precise, dependable software across full-stack web development,
          with a strong focus on data structures and algorithmic problem
          solving.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
