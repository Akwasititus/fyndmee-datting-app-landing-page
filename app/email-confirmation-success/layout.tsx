import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Email Confirmed",
  description: "Your Fynd Mee email address has been confirmed.",
  path: "/email-confirmation-success",
  noIndex: true,
})

export default function EmailConfirmationLayout({ children }: { children: React.ReactNode }) {
  return children
}
