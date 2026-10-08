import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

const jobTitles: Record<string, string> = {
  "1": "Marketing & Digital Strategy Lead",
  "2": "HR & Accounting Associate",
  "3": "UI/UX Designer (Web & Mobile)",
  "4": "Software Developer (Full Stack)",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const title = jobTitles[id]

  if (!title) {
    return {
      title: "Role Not Found",
      robots: { index: false, follow: false },
    }
  }

  return createPageMetadata({
    title: `${title} Career Opportunity`,
    description: `Learn about the ${title} role at Fynd Mee, including responsibilities, qualifications, and how to apply.`,
    path: `/careers/${id}`,
  })
}

export default function CareerDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
