import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qib AI - Futuristic AI Education with Islamic Values',
  description: 'Learn AI through interactive activities while embracing Islamic cultural values. A 5-class curriculum designed for kids 13+ in Summer Camp.',
  keywords: 'AI education, Islamic values, kids learning, futuristic technology, summer camp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-futuristic-dark via-purple-900 to-futuristic-dark min-h-screen`}>
        <div className="cyber-grid min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
} 