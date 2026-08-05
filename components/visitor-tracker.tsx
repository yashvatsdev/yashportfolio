'use client'

import { useEffect } from 'react'

/**
 * Fires once when the site loads and pings /api/visit with basic,
 * non-precise client info (browser/OS/screen/timezone/referrer).
 * The server route enriches this with an approximate, IP-based
 * (city-level) location and sends a Telegram notification.
 *
 * This never requests the browser geolocation permission and never
 * collects precise GPS coordinates.
 */
export function VisitorTracker() {
  useEffect(() => {
    try {
      fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          userAgent: navigator.userAgent,
          language: navigator.language,
          screen: `${window.screen.width}x${window.screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          referrer: document.referrer || 'direct',
          path: window.location.pathname,
        }),
      }).catch(() => {})
    } catch {
      // Fail silently — this must never affect the visitor's experience.
    }
  }, [])

  return null
}
