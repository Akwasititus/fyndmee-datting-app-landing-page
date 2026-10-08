import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Delete Your Account",
  description:
    "Request deletion of your Fynd Mee account and learn which account data is deleted or may need to be retained.",
  path: "/delete-account",
})

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
