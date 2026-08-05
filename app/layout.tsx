import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { VisitorTracker } from '@/components/visitor-tracker'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Yash Vats — Full Stack Developer',
  description:
    'Yash Vats is a second-year Computer Science student at Manipal University Jaipur building precise, dependable full-stack software with a focus on data structures and algorithms.',
  generator: 'v0.app',
  keywords: [
    'Yash Vats',
    'Full Stack Developer',
    'Next.js',
    'React',
    'DSA',
    'Manipal University Jaipur',
    'Portfolio',
  ],
  authors: [{ name: 'Yash Vats' }],
  openGraph: {
    title: 'Yash Vats — Full Stack Developer',
    description:
      'Second-year CS student building precise, dependable full-stack software with a focus on DSA.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <VisitorTracker />}
      </body>
    </html>
  )
}
