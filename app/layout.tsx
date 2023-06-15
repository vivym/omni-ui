import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OmniAI',
  description: 'OmniAI is a platform for building and deploying AI models.',
  // openGraph: {
  //   url: 'https://omniai.cc',
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" lang="en">
      <body className={`${inter.className} h-full`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
