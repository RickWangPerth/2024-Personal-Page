import { type Metadata } from 'next'
import type { Viewport } from 'next'


import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: {
    template: '%s - Rick Wang',
    default:
      'Rick Wang - Application designer, engineer, and psychology enthusiast.',
  },
  description:
    'I’m Rick, a software developer and entrepreneur based in Perth Western Australia. I’m the co-founder of QuokkAI, where we leverage cutting-edge technology to empower local businesses to fostering innovation and building a sustainable community.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
