"use client"
import { motion } from "framer-motion"
import Image from "next/image"

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
    slug: "perfect-match-tips",
    title: "How to Find Your Perfect Match",
    excerpt: "Five proven ways to meet someone who truly connects with you.",
    imageUrl: "https://images.pexels.com/photos/17704448/pexels-photo-17704448.jpeg",
    date: "October 30, 2025",
    category: "Advice",
  },
  {
    slug: "smart-matching-ai",
    title: "How Our AI Matchmaking Works",
    excerpt: "Discover how technology powers better, real-world connections.",
    imageUrl: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg",
    date: "October 22, 2025",
    category: "Tech",
  },
  {
    slug: "privacy-trust-fyndmee",
    title: "Privacy & Trust on FyndMee",
    excerpt: "Why your data and safety are at the heart of what we do.",
    imageUrl: "https://images.pexels.com/photos/6146822/pexels-photo-6146822.jpeg",
    date: "October 14, 2025",
    category: "Community",
  },
]



export default function BlogPostSection() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Newsletter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-white/70"
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
            className="group block rounded-3xl overflow-hidden bg-white/5 hover:bg-white/10 transition"
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
              <h3 className="text-2xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-white/70 mb-4">{post.excerpt}</p>
              <div className="text-sm text-white/50">{post.date}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
