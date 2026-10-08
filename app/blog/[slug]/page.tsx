import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import StructuredData from '@/components/structured-data'
import { SITE_URL, siteConfig } from '@/lib/seo'
import { blogPosts } from '@/lib/blog-posts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found', robots: { index: false, follow: false } }

  const canonical = `${SITE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: { canonical },
    openGraph: {
      type: 'article', locale: 'en_GH', url: canonical, siteName: siteConfig.name,
      title: post.title, description: post.excerpt, publishedTime: post.datePublished,
      authors: [post.author], section: post.category,
      images: [{ url: post.imageUrl, width: 1500, height: 1000, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.imageUrl] },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, 2)
  const canonical = `${SITE_URL}/blog/${post.slug}`
  const articleJsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: post.title, description: post.excerpt, image: `${SITE_URL}${post.imageUrl}`,
    datePublished: post.datePublished, dateModified: post.datePublished,
    mainEntityOfPage: canonical,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#281b1e] dark:bg-[#110c0f] dark:text-[#fff8f6]">
      <StructuredData data={articleJsonLd} />
      <header className="border-b border-[#eadcd9] dark:border-white/10">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#7a3850] hover:text-[#9f1e41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] dark:text-[#ffb6c8] dark:hover:text-white"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> All articles</Link>
          <Link href="/" aria-label="Fynd Mee home" className="inline-flex min-h-11 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e]"><Image src="/images/logo-cherry.svg" alt="" width={32} height={32} /><span className="font-bold">Fynd Mee</span></Link>
        </div>
      </header>

      <article>
        <header className="mx-auto max-w-[920px] px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a52649] dark:text-[#ff9bb4]">{post.category}</p>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#67575b] dark:text-white/70 sm:text-xl">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#eadcd9] pt-6 text-sm text-[#67575b] dark:border-white/10 dark:text-white/70">
            <div className="flex items-center gap-3"><div className="relative h-10 w-10 overflow-hidden rounded-full"><Image src={post.authorImage} alt="" fill sizes="40px" className="object-cover" /></div><span className="font-semibold text-[#281b1e] dark:text-white">{post.author}</span></div>
            <time dateTime={post.datePublished}>{post.date}</time>
            <span className="inline-flex items-center gap-1.5"><Clock3 aria-hidden="true" className="h-4 w-4" />{post.readTime}</span>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] sm:aspect-[16/8] sm:rounded-[2rem]"><Image src={post.imageUrl} alt="" fill priority sizes="(max-width: 1152px) 100vw, 1152px" className="object-cover" /></div>
        </div>

        <div className="mx-auto max-w-[760px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <div className="text-[1.0625rem] leading-[1.85] text-[#41363a] dark:text-[#e8dde0] [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:tracking-[-0.03em] [&_h2]:text-[#281b1e] dark:[&_h2]:text-white [&_p]:mb-7 [&_strong]:font-bold" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#eadcd9] pt-7 dark:border-white/10">
            <div className="flex items-center gap-3"><div className="relative h-12 w-12 overflow-hidden rounded-full"><Image src={post.authorImage} alt="" fill sizes="48px" className="object-cover" /></div><div><p className="font-bold">{post.author}</p><p className="text-sm text-[#67575b] dark:text-white/60">{post.authorRole}</p></div></div>
            <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-[#9f1e41] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] dark:text-[#ffb6c8]"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to blog</Link>
          </div>
        </div>
      </article>

      <section className="border-t border-[#eadcd9] bg-[#f8eae7] px-5 py-16 dark:border-white/10 dark:bg-[#24141b] sm:px-8" aria-labelledby="related-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="related-heading" className="text-3xl font-bold tracking-[-0.04em]">Keep reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedPosts.map(related => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group grid overflow-hidden rounded-2xl bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ab1e3e] dark:bg-white/[0.06] sm:grid-cols-[160px_1fr]">
                <div className="relative aspect-[16/9] sm:aspect-auto"><Image src={related.imageUrl} alt="" fill sizes="(max-width: 640px) 100vw, 160px" className="object-cover" /></div>
                <div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#a52649] dark:text-[#ff9bb4]">{related.category}</p><h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-[#a52649] dark:group-hover:text-[#ffb6c8]">{related.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#9f1e41] dark:text-[#ffb6c8]">Read article <ArrowRight aria-hidden="true" className="h-4 w-4" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
