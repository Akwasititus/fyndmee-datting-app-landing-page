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

// export const metadata: Metadata = {
//   title: "Fynd Mee",
//   description: "Welcome to fyndmee",
//   generator: "BB-group",
//   icons: {
//     icon: '/favicon.png',
//   },
// }

export const metadata: Metadata = {
  title: "Fynd Mee",
  description: "Welcome to fyndmee",
  generator: "BB-group",
  icons: {
    icon: [
      {
        url: '/favicon.ico', // Google prefers .ico format for root
        sizes: 'any',
      },
      {
        url: '/favicon.png', // Your PNG version
        type: 'image/png',
      },
      {
        url: '/icon.png', // Alternative icon
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-192.png', // For PWA/Android
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: ['/favicon.ico'],
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning className={kumbhSans.variable}>
//       <head>
//       {/* <link rel="icon" href="/favicon.ico" /> */}
//         <Script
//           src="https://cdn.lordicon.com/lordicon.js"
//           strategy="afterInteractive"
//         />
//       </head>
//       <body className={inter.className}>
//         <ThemeProvider>
//           {children}
//         </ThemeProvider>

//                 {/* Global Radio Player */}
//                 {/* <RadioPlayer /> */}
//       </body>
//     </html>
//   )
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={kumbhSans.variable}>
      <head>
        {/* Explicit favicon links for better crawler discovery */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
