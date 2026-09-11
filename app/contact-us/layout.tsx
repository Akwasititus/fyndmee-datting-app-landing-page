import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Contact Fynd Mee",
  description:
    "Contact the Fynd Mee team for account support, general questions, partnerships, or help using the dating app.",
  path: "/contact-us",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
