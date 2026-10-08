import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import { createPageMetadata } from '@/lib/seo'
import { blogPosts } from '@/lib/blog-posts'

export const metadata = createPageMetadata({
  title: 'Dating and Relationship Advice',
  description: 'Practical dating advice, relationship insights, and stories about building authentic connections from Fynd Mee.',
  path: '/blog',
  image: '/images/meaningful-connections-in-2025.jpg',
  imageAlt: 'Dating and relationship advice from the Fynd Mee blog',
})

const posts = [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
const [featured, ...morePosts] = posts
const serif = { fontFamily: "var(--font-fraunces), Georgia, serif" }

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#281b1e] dark:bg-[#110c0f] dark:text-[#fff8f6]">
      <header className="border-b border-[#eadcd9] dark:border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-[#7a3850] hover:text-[#9f1e41] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e] dark:text-[#ffb6c8] dark:hover:text-white"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back home</Link>
          <Link href="/" aria-label="Fynd Mee home" className="inline-flex min-h-11 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ab1e3e]"><Image src="/images/logo-cherry.svg" alt="" width={32} height={32} /><span className="font-bold">Fynd Mee</span></Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 lg:px-12 lg:pt-20" aria-labelledby="blog-title">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a52649] dark:text-[#ff9bb4]">The Fynd Mee journal</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <h1 id="blog-title" className="max-w-3xl text-balance text-5xl font-bold leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Better conversations. <span className="italic text-[#a52649] dark:text-[#ff9bb4]" style={serif}>Deeper connections.</span></h1>
          <p className="max-w-md text-lg leading-8 text-[#67575b] dark:text-white/70">Thoughtful reads on showing up as yourself, building trust, and making room for meaningful relationships.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12" aria-label="Featured article">
        <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-[#421427] text-white shadow-[0_25px_65px_rgba(68,20,38,0.15)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ab1e3e] focus-visible:ring-offset-4 dark:ring-offset-[#110c0f] lg:grid-cols-2">
          <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden lg:aspect-auto">
            <Image src={featured.imageUrl} alt="" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14" style={{ color: '#fff' }}>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#ffc2d1]">Featured story · {featured.category}</p>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl" style={serif}>{featured.title}</h2>
            <p className="mt-5 text-base leading-7 text-[#f4d6de]">{featured.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#edc4cf]"><time dateTime={featured.datePublished}>{featured.date}</time><span className="inline-flex items-center gap-1.5"><Clock3 aria-hidden="true" className="h-4 w-4" />{featured.readTime}</span></div>
            <span className="mt-8 inline-flex min-h-11 items-center gap-2 self-start border-b border-[#ffc2d1] font-bold">Read the story <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24" aria-labelledby="more-stories">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a52649] dark:text-[#ff9bb4]">Keep reading</p><h2 id="more-stories" className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">More from the journal</h2></div>
          <p className="text-sm text-[#76636a] dark:text-white/60">{posts.length} articles</p>
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {morePosts.map(post => (
            <article key={post.slug} className="group overflow-hidden rounded-[1.75rem] border border-[#eedfdb] bg-white shadow-[0_12px_35px_rgba(66,22,38,0.04)] transition-shadow hover:shadow-[0_20px_45px_rgba(66,22,38,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
              <Link href={`/blog/${post.slug}`} className="flex h-full flex-col rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ab1e3e]">
                <div className="relative aspect-[16/10] shrink-0 overflow-hidden"><Image src={post.imageUrl} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none" /></div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#a52649] dark:text-[#ff9bb4]">{post.category}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug tracking-[-0.025em] group-hover:text-[#a52649] dark:group-hover:text-[#ffb6c8]">{post.title}</h3>
                  <p className="mb-6 mt-3 text-sm leading-6 text-[#67575b] dark:text-white/70">{post.excerpt}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#f0e6e3] pt-5 text-xs text-[#76636a] dark:border-white/10 dark:text-white/60"><time dateTime={post.datePublished}>{post.date}</time><span>{post.readTime}</span></div>
                  <span className="mt-4 inline-flex items-center gap-2 self-start font-semibold text-[#9f1e41] dark:text-[#ffb6c8]">Read article <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
