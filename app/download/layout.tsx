import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Find the Fynd Mee App",
  description:
    "Meet Fynd Mee, discover how it works, and find guidance for locating the official app listing.",
  path: "/download",
  image: "/images/download-image.png",
  imageAlt: "Download the Fynd Mee dating app",
})

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children
}
