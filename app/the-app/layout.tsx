import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "How the Fynd Mee Dating App Works",
  description:
    "Explore Fynd Mee's verified community, smart matching, compatibility tools, video calls, and conversation starters for safer online dating.",
  path: "/the-app",
})

export default function AppOverviewLayout({ children }: { children: React.ReactNode }) {
  return children
}
