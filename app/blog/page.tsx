// app/blog/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - FyndMee',
  description: 'Insights, stories and updates from the FyndMee team.',
}

const blogPosts = [
  {
    slug: "perfect-match-tips",
    title: "How to Find Your Perfect Match",
    excerpt: "Discover five proven ways to meet someone who truly connects with you.",
    imageUrl: "https://images.pexels.com/photos/17704448/pexels-photo-17704448.jpeg",
    date: "October 30, 2025",
    category: "Dating Advice",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    slug: "smart-matching-ai",
    title: "How Our AI Matchmaking Works",
    excerpt: "Discover how technology powers better, real-world connections.",
    imageUrl: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg",
    date: "October 22, 2025",
    category: "Technology",
    author: "Mike Chen",
    readTime: "7 min read"
  },
  {
    slug: "privacy-trust-fyndmee",
    title: "Privacy & Trust on FyndMee",
    excerpt: "Why your data and safety are at the heart of what we do.",
    imageUrl: "https://images.pexels.com/photos/6146822/pexels-photo-6146822.jpeg",
    date: "October 14, 2025",
    category: "Community",
    author: "Emma Davis",
    readTime: "4 min read"
  },
  {
    slug: "first-date-ideas",
    title: "10 Creative First Date Ideas",
    excerpt: "Move beyond coffee dates with these engaging suggestions.",
    imageUrl: "https://images.pexels.com/photos/7645294/pexels-photo-7645294.jpeg",
    date: "October 5, 2025",
    category: "Dating Advice",
    author: "Alex Rodriguez",
    readTime: "6 min read"
  },
  {
    slug: "long-distance-success",
    title: "Making Long-Distance Relationships Work",
    excerpt: "Expert tips for maintaining connection across miles.",
    imageUrl: "https://images.pexels.com/photos/4474063/pexels-photo-4474063.jpeg",
    date: "September 28, 2025",
    category: "Relationships",
    author: "Jessica Williams",
    readTime: "8 min read"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="relative py-16 bg-linear-to-br from-rose-50 to-pink-100 dark:from-rose-950/20 dark:to-pink-950/20">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              FyndMee Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Insights, stories, and updates from the FyndMee team.
            </p>
          </div>
        </div>
      </header>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-rose-500 hover:text-rose-600 font-semibold text-sm transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
