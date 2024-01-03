import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

import { SessionProvider } from 'next-auth/react'
import { auth } from '@/lib/auth'
import { Toaster } from '@/components/ui/sonner'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth Masterclass',
  description: 'Next Auth Masterclass',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <body className={font.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
