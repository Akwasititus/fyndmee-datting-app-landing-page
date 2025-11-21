// app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle, Bookmark } from 'lucide-react'

const blogPosts = [
  {
    slug: "perfect-match-tips", // not required
    title: "How to Find Your Perfect Match", // required
    excerpt: "Discover five proven ways to meet someone who truly connects with you on a deeper level.", // required
    content: `
      <p>Finding your perfect match involves understanding yourself, being open to new experiences, and using the right tools to connect with compatible partners. In today's digital age, it's easier than ever to meet new people, but finding genuine connections requires intention and strategy.</p>
      
      <h2>Know What You Want</h2>
      <p>Before you can find your perfect match, you need to understand what you're looking for. Take time to reflect on your values, goals, and non-negotiables. What qualities are essential in a partner? What lifestyle do you envision?</p>
      
      <h2>Be Authentically You</h2>
      <p>Authenticity attracts authenticity. When you're genuine about who you are and what you want, you're more likely to attract people who appreciate the real you. Don't try to mold yourself into what you think others want.</p>
      
      <h2>Expand Your Social Circles</h2>
      <p>While dating apps are great, don't underestimate the power of real-world connections. Join clubs, attend events, and participate in activities that genuinely interest you. You're more likely to meet compatible partners in environments where you feel comfortable.</p>
    `, // required
    imageUrl: "https://images.pexels.com/photos/17704448/pexels-photo-17704448.jpeg", // required
    date: "October 30, 2025", // required
    category: "Dating Advice", // required
    author: "Sarah Johnson", // required
    authorRole: "Relationship Coach", // required
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", // required  
    readTime: "5 min read", // required
    likes: 142, // required
    comments: 28 // required
  },
  {
    slug: "smart-matching-ai",
    title: "How Our AI Matchmaking Works",
    excerpt: "Discover how cutting-edge technology powers better, more meaningful real-world connections.",
    content: `
      <p>Our AI matchmaking system uses machine learning algorithms to analyze compatibility factors and suggest matches that have the highest potential for meaningful connections. We consider everything from shared interests and values to communication styles and life goals.</p>
      
      <h2>The Science Behind Our Algorithm</h2>
      <p>Our algorithm processes thousands of data points to understand what makes relationships successful. We look at behavioral patterns, communication preferences, and long-term compatibility factors that go beyond surface-level interests.</p>
      
      <h2>Privacy and Security First</h2>
      <p>While we analyze compatibility factors, we prioritize your privacy. Your personal conversations and sensitive information remain encrypted and private. The algorithm only uses information you choose to share for matching purposes.</p>
      
      <h2>Continuous Learning</h2>
      <p>Our AI system learns and improves over time. As you interact with matches and provide feedback, the algorithm refines its understanding of your preferences, leading to better suggestions with each use.</p>
    `,
    imageUrl: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg",
    date: "October 22, 2025",
    category: "Technology",
    author: "Mike Chen",
    authorRole: "Head of AI Development",
    authorImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    readTime: "7 min read",
    likes: 89,
    comments: 15
  },
  {
    slug: "privacy-trust-fyndmee",
    title: "Privacy & Trust on FyndMee",
    excerpt: "Why your data security and personal safety are at the heart of everything we do.",
    content: `
      <p>At FyndMee, we believe that trust is the foundation of any meaningful connection. That's why we've built our platform with privacy and security as core principles. Your data is encrypted, and you have full control over what information you share and with whom.</p>
      
      <h2>Data Encryption and Security</h2>
      <p>All your personal data is encrypted both in transit and at rest. We use industry-standard encryption protocols to ensure that your information remains secure and private.</p>
      
      <h2>Control Your Visibility</h2>
      <p>You have complete control over who sees your profile and what information they can access. Our granular privacy settings allow you to customize your visibility based on your comfort level.</p>
      
      <h2>Verified Profiles</h2>
      <p>We implement multiple verification methods to ensure that you're connecting with real people. From photo verification to social media linking, we work hard to maintain a trustworthy community.</p>
    `,
    imageUrl: "https://images.pexels.com/photos/6146822/pexels-photo-6146822.jpeg",
    date: "October 14, 2025",
    category: "Community",
    author: "Emma Davis",
    authorRole: "Privacy Advocate",
    authorImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    readTime: "4 min read",
    likes: 156,
    comments: 32
  },
  {
    slug: "first-date-ideas",
    title: "10 Creative First Date Ideas That Actually Work",
    excerpt: "Move beyond coffee dates with these engaging and memorable first date suggestions.",
    content: `
      <p>First dates don't have to be awkward coffee meetings. Here are 10 creative ideas that help break the ice and create genuine connections. From outdoor activities to cultural experiences, these date ideas will help you get to know each other in a relaxed, authentic setting.</p>
      
      <h2>1. Art Gallery Walk</h2>
      <p>Explore local art galleries or museums together. The art provides natural conversation starters and reveals insights into each other's tastes and perspectives.</p>
      
      <h2>2. Cooking Class</h2>
      <p>Take a cooking class together. Working as a team to create a meal fosters collaboration and gives you a shared accomplishment to celebrate.</p>
      
      <h2>3. Outdoor Adventure</h2>
      <p>Go for a hike, bike ride, or visit a botanical garden. Being in nature reduces stress and creates opportunities for meaningful conversation.</p>
    `,
    imageUrl: "https://images.pexels.com/photos/7645294/pexels-photo-7645294.jpeg",
    date: "October 5, 2025",
    category: "Dating Advice",
    author: "Alex Rodriguez",
    authorRole: "Dating Expert",
    authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    readTime: "6 min read",
    likes: 203,
    comments: 41
  },
  {
    slug: "long-distance-success",
    title: "Making Long-Distance Relationships Work",
    excerpt: "Expert tips for maintaining connection and intimacy across miles.",
    content: `
      <p>Long-distance relationships can be challenging, but with the right strategies and tools, they can also be incredibly rewarding. Learn how to maintain emotional intimacy, communicate effectively, and plan visits that strengthen your bond despite the physical distance.</p>
      
      <h2>Communication is Key</h2>
      <p>Establish regular communication routines that work for both of you. Mix up your methods – video calls, voice messages, and thoughtful texts can all play different roles in maintaining connection.</p>
      
      <h2>Create Shared Experiences</h2>
      <p>Watch movies simultaneously, play online games together, or read the same book. Creating shared experiences helps maintain emotional closeness despite the physical distance.</p>
      
      <h2>Plan Your Future Together</h2>
      <p>Having a clear plan for when you'll be together again provides hope and something to look forward to. Discuss your long-term goals and create a timeline for closing the distance.</p>
    `,
    imageUrl: "https://images.pexels.com/photos/4474063/pexels-photo-4474063.jpeg",
    date: "September 28, 2025",
    category: "Relationships",
    author: "Jessica Williams",
    authorRole: "Relationship Therapist",
    authorImage: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    readTime: "8 min read",
    likes: 178,
    comments: 29
  }
]

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - FyndMee'
    }
  }

  return {
    title: `${post.title} - FyndMee Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="relative py-8 border-b border-gray-200 dark:border-gray-800"> 
        <div className="container mx-auto px-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex justify-start mb-6">
              <span className="px-4 py-2 bg-[#AB1E3E]/60 text-white/60 rounded-full font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author and Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-t border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {post.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {post.authorRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Engagement Stats */}
            {/* <div className="flex items-center gap-6 mt-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>{post.likes} likes</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments} comments</span>
              </div>
            </div> */}
          </header>

          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div 
              className="text-gray-700 dark:text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>



          {/* Action Buttons */}

          {/* <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 dark:border-gray-800 mb-12">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition-colors">
                <Heart className="w-4 h-4" />
                Like
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4" />
                Comment
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div> */}

          {/* Author Bio */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.authorRole} with years of experience helping people build meaningful connections. Passionate about creating authentic relationships in the digital age.
                </p>
                <div className="text-sm text-[#AB1E3E] dark:text-rose-400 font-semibold">
                  {post.likes} article likes • {post.comments} reader comments
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {/* {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                        {relatedPost.category}
                      </span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* Newsletter CTA */}
      {/* <section className="py-16 bg-rose-50 dark:bg-rose-950/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get more dating tips, success stories, and relationship advice delivered to your inbox.
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center px-8 py-3 bg-[#AB1E3E] hover:bg-[#AB1E3E]/80 text-white/90 font-semibold rounded-lg transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section> */}
    </div>
  )
}
