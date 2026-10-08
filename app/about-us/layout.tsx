import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn how Fynd Mee combines verified profiles, smart matching, and a safety-first approach to help people form meaningful relationships.",
  path: "/about-us",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
