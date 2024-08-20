import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Made with NextJS 13',
}

export default function RootLayout({
  children,
 }: {
  children: React.ReactNode
 }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900`}>{children}</body>
    </html>
  )
}
