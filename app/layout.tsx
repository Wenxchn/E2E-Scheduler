import DeployButton from '@/components/deploy-button'
import { EnvVarWarning } from '@/components/env-var-warning'
import HeaderAuth from '@/components/header-auth'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { hasEnvVars } from '@/utils/supabase/check-env-vars'
import { Geist } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'
import './globals.css'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'E2E Scheduler',
  description: 'Schedule your end-to-end tests',
}

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-warmGray text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col">
              {/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16"></nav> */}
              <div className="flex flex-col max-w-5xl">{children}</div>
              {/* <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16"></footer> */}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
