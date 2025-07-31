import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nila Karthikesan — Project Portfolio',
  description: 'Full-stack developer specializing in LLM evaluation, vector search/RAG, and AI agent integration. Three end-to-end projects showcasing expertise in modern web development.',
  keywords: ['portfolio', 'full-stack', 'LLM', 'RAG', 'AI', 'React', 'Next.js', 'FastAPI'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 