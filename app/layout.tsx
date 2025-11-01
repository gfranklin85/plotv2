import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plot - AI-Powered Real Estate Platform',
  description: 'Multi-tenant real estate platform connecting agents, homeowners, and vendors through AI-powered interfaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-professional">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
