import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Review the terms that govern access to and use of the Fynd Mee dating app, website, subscriptions, and related services.",
  path: "/terms-of-service",
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
