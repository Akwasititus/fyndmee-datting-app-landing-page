import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Careers at Fynd Mee",
  description:
    "Explore open roles and join the team building Fynd Mee and technology products designed to improve everyday life across Africa.",
  path: "/careers",
})

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
