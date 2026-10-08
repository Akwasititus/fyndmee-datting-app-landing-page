import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Online Dating Safety Tips",
  description:
    "Read Fynd Mee safety guidance, reporting information, and standards prohibiting child sexual abuse and exploitation.",
  path: "/safety",
})

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return children
}
