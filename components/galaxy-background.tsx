"use client"

import Galaxy from "@/components/galaxy"

export function GalaxyBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-black">
      <Galaxy
        className="h-full w-full"
        transparent={false}
        saturation={0}
        hueShift={0}
        density={0.6}
        glowIntensity={0.25}
        starSpeed={0.35}
        speed={0.7}
        rotationSpeed={0.04}
        twinkleIntensity={0.35}
        mouseInteraction
        mouseRepulsion
        repulsionStrength={1.5}
      />
      {/* Soft black overlay keeps foreground text high-contrast and readable. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  )
}
