import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Portal - Plot',
  description: 'Your personalized real estate transaction portal',
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
