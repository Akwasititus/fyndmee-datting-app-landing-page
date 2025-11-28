"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  imageUrl: string
  date: string
  category: string
}

const posts: BlogPost[] = [
  {
    slug: "authentic-professional-connections-online",
    title: "How to Build Authentic Professional Connections Online",
    excerpt: "Learn three simple steps to build genuine professional relationships online without being fake or overwhelmed.",
    imageUrl: "/images/blog-3.jpg",
    date: "November 26, 2025",
    category: "Professional Growth",
  },
  {
    slug: "art-of-being-intentional",
    title: "The Art of Being Intentional",
    excerpt: "Signs you're truly ready for a real relationship and what it means to date with intention.",
    imageUrl: "/images/blog-intentional.jpg",
    date: "December 4, 2025",
    category: "Relationships",
  },
  {
    slug: "healthy-boundaries-for-lasting-connections",
    title: "The Secret to Long-Lasting Connections",
    excerpt: "Discover three essential boundaries that strengthen relationships and keep love healthy and real.",
    imageUrl: "/images/blog-secret-long-lasting-connection.jpg",
    date: "December 2, 2025",
    category: "Relationship Growth",
  },
]

export default function BlogPostSection() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-linear-to-b dark:from-black dark:via-slate-950 dark:to-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Newsletter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-white/70"
        >
          Insights, stories and updates from the FyndMee team.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="group block rounded-3xl overflow-hidden bg-gray-50 hover:bg-gray-100 transition dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="relative w-full h-48 md:h-56 lg:h-64">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-rose-400 mb-2">{post.category}</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-white/70 mb-4">{post.excerpt}</p>
              <div className="text-sm text-gray-500 dark:text-white/50">{post.date}</div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* View All Posts Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >

        <Link
          href="/blog"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#AB1E3E] text-white/90 font-semibold rounded-lg hover:bg-[#8B1830] transition-all duration-300 hover:scale-105 group/view-all"
        >
          View All Posts
          <ArrowRight className="w-5 h-5 group-hover/view-all:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}
