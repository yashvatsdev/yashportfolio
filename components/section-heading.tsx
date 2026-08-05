interface SectionHeadingProps {
  eyebrow: string
  id: string
}

export function SectionLabel({ eyebrow, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span
        className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        id={`${id}-label`}
      >
        {eyebrow}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
