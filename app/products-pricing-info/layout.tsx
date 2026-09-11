import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Fynd Mee Plans and Dating Features",
  description:
    "Compare Fynd Mee Plus, Gold, and Royal plans, including unlimited likes, profile boosts, Supa Likes, advanced filters, and global access.",
  path: "/products-pricing-info",
})

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
