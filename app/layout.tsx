import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calson Genesis - Full Stack Developer',
  description: 'Portfolio of Calson Genesis, a passionate Full Stack Developer from Cameroon specializing in React, Next.js, and modern web technologies.',
  keywords: ['Calson Genesis', 'Full Stack Developer', 'React', 'Next.js', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Calson Genesis' }],
  creator: 'Calson Genesis',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calson-genesis-portfolio.vercel.app',
    title: 'Calson Genesis - Full Stack Developer',
    description: 'Portfolio of Calson Genesis, a passionate Full Stack Developer from Cameroon.',
    siteName: 'Calson Genesis Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calson Genesis Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calson Genesis - Full Stack Developer',
    description: 'Portfolio of Calson Genesis, a passionate Full Stack Developer from Cameroon.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  )
}