'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
