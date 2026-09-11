import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Online Dating Safety Tips",
  description:
    "Read practical Fynd Mee safety tips for protecting your privacy, spotting suspicious behavior, chatting securely, and meeting in person.",
  path: "/safety",
})

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return children
}
