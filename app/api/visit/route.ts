import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

// --- tiny best-effort user-agent parser (no dependency) ---
function parseUserAgent(ua: string) {
  let browser = 'Unknown'
  if (/edg\//i.test(ua)) browser = 'Edge'
  else if (/chrome\//i.test(ua) && !/chromium/i.test(ua)) browser = 'Chrome'
  else if (/firefox\//i.test(ua)) browser = 'Firefox'
  else if (/safari\//i.test(ua) && /version\//i.test(ua)) browser = 'Safari'
  else if (/opr\//i.test(ua)) browser = 'Opera'

  let os = 'Unknown'
  if (/windows nt/i.test(ua)) os = 'Windows'
  else if (/mac os x/i.test(ua)) os = 'macOS'
  else if (/android/i.test(ua)) os = 'Android'
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS'
  else if (/linux/i.test(ua)) os = 'Linux'

  const device = /mobi/i.test(ua)
    ? 'Mobile'
    : /tablet|ipad/i.test(ua)
      ? 'Tablet'
      : 'Desktop'

  return { browser, os, device }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    // No-op if not configured, so the site never breaks for anyone
    // who clones the repo without setting these up.
    if (!botToken || !chatId) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    const body = await req.json().catch(() => ({}))
    const {
      userAgent = 'Unknown',
      language = 'Unknown',
      screen = 'Unknown',
      timezone = 'Unknown',
      referrer = 'direct',
      path = '/',
    } = body ?? {}

    // Resolve the visitor's IP from standard proxy headers (Vercel/most hosts set these).
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip =
      forwardedFor?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'Unknown'

    // Best-effort approximate (IP-based, city-level) geolocation.
    // This is NOT precise GPS location — it never asks the visitor for permission.
    let geo: {
      city?: string
      region?: string
      country_name?: string
      org?: string
    } = {}
    if (ip && ip !== 'Unknown') {
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {
          headers: { 'User-Agent': 'portfolio-visitor-alert' },
          signal: AbortSignal.timeout(3000),
        })
        if (geoRes.ok) {
          geo = await geoRes.json()
        }
      } catch {
        // Geo lookup failing should never block the notification.
      }
    }

    const { browser, os, device } = parseUserAgent(userAgent)
    const location = [geo.city, geo.region, geo.country_name]
      .filter(Boolean)
      .join(', ') || 'Unknown'

    const lines = [
      `<b>New visitor on your portfolio</b>`,
      ``,
      `<b>Page:</b> ${escapeHtml(path)}`,
      `<b>Location (approx, IP-based):</b> ${escapeHtml(location)}`,
      `<b>IP:</b> ${escapeHtml(ip)}`,
      `<b>ISP:</b> ${escapeHtml(geo.org || 'Unknown')}`,
      `<b>Device:</b> ${device}`,
      `<b>OS:</b> ${os}`,
      `<b>Browser:</b> ${browser}`,
      `<b>Language:</b> ${escapeHtml(language)}`,
      `<b>Screen:</b> ${escapeHtml(screen)}`,
      `<b>Timezone:</b> ${escapeHtml(timezone)}`,
      `<b>Referrer:</b> ${escapeHtml(referrer)}`,
      `<b>Time:</b> ${new Date().toISOString()}`,
    ]

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    return NextResponse.json({ ok: true })
  } catch {
    // Never surface tracker errors to the visitor.
    return NextResponse.json({ ok: false })
  }
}
