import type { Metadata } from "next"
import { Fraunces, Kumbh_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL, siteConfig } from "@/lib/seo"
import "./globals.css"

// Configure the font
const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kumbh-sans',
})

// Editorial display serif — used for the hero headline (see components/hero-section.tsx).
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fynd Mee | Verified Dating App for Real Connections",
    template: "%s | Fynd Mee",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Fynd Mee",
    "FyndMee",
    "verified dating app",
    "meaningful relationships",
    "online dating",
    "smart matching",
    "dating app in Africa",
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "relationships",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE_URL,
    siteName: siteConfig.name,
    title: "Fynd Mee | Verified Dating App for Real Connections",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.socialImage,
        width: 1500,
        height: 1000,
        alt: siteConfig.socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fynd Mee | Verified Dating App for Real Connections",
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  generator: "Next.js",
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${kumbhSans.variable} ${fraunces.variable}`}>
      <head>
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="afterInteractive"
        />
      </head>
      <body >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
