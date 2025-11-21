import type { Metadata } from "next"
import { Kumbh_Sans, Geist, Geist_Mono, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import RadioPlayer from "@/components/RadioPlayer"
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Configure the font
const kumbhSans = Kumbh_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kumbh-sans',
})

export const metadata: Metadata = {
  title: "Fynd Mee",
  description: "Welcome to fyndmee",
  generator: "BB-group",
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={kumbhSans.variable}>
      <head>
      {/* <link rel="icon" href="/favicon.ico" /> */}
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

                {/* Global Radio Player */}
                {/* <RadioPlayer /> */}
      </body>
    </html>
  )
}
