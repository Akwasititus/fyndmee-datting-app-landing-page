import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Download the Fynd Mee Dating App",
  description:
    "Download Fynd Mee for iPhone or Android and start meeting verified people through smart, compatibility-based matching.",
  path: "/download",
  image: "/images/download-image.png",
  imageAlt: "Download the Fynd Mee dating app",
})

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children
}
