import type { Metadata } from "next"

export const SITE_URL = "https://fyndmee.app"

export const siteConfig = {
  name: "Fynd Mee",
  alternateName: "FyndMee",
  url: SITE_URL,
  description:
    "Meet verified singles and build meaningful relationships with Fynd Mee, a safer dating app with smart matching, compatibility scores, and profile verification.",
  socialImage: "/images/fyndmee-bg-3.jpg",
  socialImageAlt: "A couple connecting through Fynd Mee",
  email: "info@fyndmee.app",
  socialProfiles: [
    "https://www.tiktok.com/@fyndmee_app",
    "https://www.linkedin.com/company/fynd-mee/",
    "https://www.instagram.com/fyndmee.app/",
    "https://www.facebook.com/profile.php?id=61579879823028",
  ],
} as const

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}` | "/"
  image?: string
  imageAlt?: string
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.socialImage,
  imageAlt = siteConfig.socialImageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, SITE_URL).toString()

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GH",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: 1500,
          height: 1000,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  }
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  email: siteConfig.email,
  sameAs: siteConfig.socialProfiles,
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
}

export const mobileApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${SITE_URL}/#mobile-application`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateName,
  url: `${SITE_URL}/download`,
  description: siteConfig.description,
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
}
