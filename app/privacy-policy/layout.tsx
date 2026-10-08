import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Fynd Mee privacy policy to learn how personal information is collected, used, protected, and managed across our services.",
  path: "/privacy-policy",
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
