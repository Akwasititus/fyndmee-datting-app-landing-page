import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Open Profile",
  description: "Open this profile in the Fynd Mee app.",
  robots: { index: false, follow: false, nocache: true },
}

export default function ProfileRedirectLayout({ children }: { children: React.ReactNode }) {
  return children
}
