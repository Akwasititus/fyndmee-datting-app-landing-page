import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, User, Heart, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - FyndMee',
  description: 'Insights, stories and updates from the FyndMee team.',
}

const blogPosts = [
  {
    slug: "authentic-professional-connections-online",
    title: "How to Build Authentic Professional Connections Online",
    excerpt: "Learn three simple steps to build genuine professional relationships online without being fake or overwhelmed.",
    content: `
      <p>3 Easy Steps</p>
  
      <p>We've all been there, scrolling through profiles, wondering if anyone out there is actually real. In a world where everyone's putting their best filter forward, finding genuine connections online can feel like searching for a needle in a haystack. But here's the good news: building authentic professional connections doesn't have to be complicated or fake. Whether you're looking to expand your network or find meaningful relationships that could lead somewhere special, these three simple steps will help you connect with real people in real ways.</p>
  
      <h2>Step 1: Be Genuinely Yourself From the Start</h2>
      <p>The biggest mistake people make online is trying to be who they think others want them to be. But authentic connections start with authenticity, plain and simple. Share what you're actually passionate about, not what sounds impressive. Talk about your real hobbies, your actual job (even if it's not glamorous), and what genuinely makes you laugh. When you present the real you, you attract people who appreciate that person. Yes, it might mean fewer connections at first, but the ones you make will actually matter. Think of it this way: would you rather have a hundred superficial contacts or ten people who truly get you?</p>
  
      <h2>Step 2: Ask Questions That Go Beyond Small Talk</h2>
      <p>"Hey, how are you?" might be the easiest conversation starter, but it's also the quickest way to get lost in someone's inbox. Instead, look at what people share about themselves and ask about those things. If someone mentions they love hiking, ask about their favorite trail. If they're proud of a work project, ask what made it meaningful to them. Real connections happen when people feel seen and heard. And here's a secret: most people love talking about things they care about. When you show genuine curiosity, conversations flow naturally, and you start building something real instead of just exchanging pleasantries.</p>
  
      <h2>Step 3: Follow Through and Stay Consistent</h2>
      <p>This is where most online connections fall apart. You have a great conversation, exchange contact info, and then... nothing. Building authentic relationships means showing up consistently, even in small ways. Send that article you thought they'd find interesting. Check in when they mentioned having a big presentation. Remember the little details they shared and bring them up later. You don't need to message every day, but staying present shows you value the connection. Real professional relationships, and personal ones, are built over time through steady, genuine interactions, not grand gestures or perfect first impressions.</p>
  
      <h2>The Bottom Line</h2>
      <p>Building authentic connections online isn't about having the perfect profile or saying all the right things. It's about being real, showing genuine interest in others, and putting in consistent effort over time. These three steps might sound simple, but they work because they're based on how humans actually connect with honesty, curiosity, and care. So take a breath, be yourself, and start reaching out. The right professional connections and meaningful relationships are out there waiting for someone exactly like you. All you have to do is show up as your authentic self and give others the chance to do the same.</p>
  
      <p><strong>Image idea for this blog post:</strong><br/>
      Split screen concept: One side showing someone authentically smiling at their laptop screen, the other side showing the person they're connecting with doing the same, suggesting genuine online connection.</p>
    `,
    imageUrl: "/images/blog-3.jpg",
    date: "November 26, 2025",
    category: "Professional Growth",
    author: "Paulina Mwindor",
    authorRole: "Product Marketing Lead",
    authorImage: "/images/Paulina-BB-Group.jpg",
    readTime: "6 min read",
    likes: 200,
    comments: 5
  },
  {
    slug: "art-of-being-intentional",
    title: "The Art of Being Intentional",
    excerpt: "Signs you're truly ready for a real relationship and what it means to date with intention.",
    content: `
      <p><strong>Signs You're Ready for a Real Relationship</strong></p>
  
      <p>We've all been there: swiping through profiles at midnight, going on dates that feel more like job interviews, or staying in something that doesn't quite fit because it's easier than being alone. But there comes a moment when something shifts inside you. You stop looking for just anyone and start wanting someone who actually matters. That's when you know you're ready to date with intention. Real relationships don't happen by accident. They happen when you're genuinely ready for them. So how do you know if you've reached that point?</p>
  
      <p>One of the biggest signs is that you've stopped trying to force connections that aren't there. You're no longer texting someone back just because you're bored or staying in a situationship hoping it'll magically turn into more. When you're ready for something real, you become comfortable walking away from people who don't meet you halfway. You recognize that chemistry without compatibility is just a spark that burns out quickly. You're looking for someone whose values align with yours, who communicates openly, and who's on the same page about what they want. It's not about being picky—it's about knowing your worth.</p>
  
      <p>Another clear indicator is that you've done the inner work on yourself. Maybe you've spent time figuring out what went wrong in past relationships, or you've learned to be happy on your own without needing someone else to complete you. You're not looking for someone to fix your problems or fill a void. Instead, you want a partner to share your already full life with. You've identified your own patterns, worked through your baggage, and you're bringing your best self to the table. This doesn't mean you're perfect, but it means you're self aware and willing to grow.</p>
  
      <p>You also know you're ready when you can be vulnerable without losing yourself. You're willing to open up, share your feelings, and let someone really see you, flaws and all. But you also maintain healthy boundaries and don't sacrifice your own needs to keep someone else happy. You understand that a real relationship requires both people to show up authentically. You're not playing games, keeping score, or trying to protect yourself by staying emotionally distant. You're brave enough to risk getting hurt because you know that's the only way to find something genuine.</p>
  
      <p>If these signs resonate with you, congratulations. You're in a really good place to find something meaningful. Being intentional about dating doesn't mean it'll be easy or that you'll find the right person overnight. But it does mean you'll stop wasting time on connections that don't serve you. You'll attract people who are equally serious about building something real. And when you do meet someone special, you'll be ready to nurture that connection into something beautiful. So trust yourself, stay patient, and keep showing up as the incredible person you are. The right relationship is worth the wait.</p>
    `,
    imageUrl: "/images/blog-intentional.jpg",
    date: "December 4, 2025",
    category: "Relationships",
    author: "Paulina Mwindor",
    authorRole: "Product Marketing Lead",
    authorImage: "/images/Paulina-BB-Group.jpg",
    readTime: "7 min read",
    likes: 150,
    comments: 12
  },
  {
    slug: "healthy-boundaries-for-lasting-connections",
    title: "The Secret to Long-Lasting Connections",
    excerpt: "Discover three essential boundaries that strengthen relationships and keep love healthy and real.",
    content: `
      <p>3 Healthy Boundaries</p>

      <p>We've all heard that relationships take work, but what does that actually mean? One of the most important things you can do for any relationship is set healthy boundaries. I know the word "boundaries" can sound cold or like you're pushing someone away. But here's the truth: boundaries aren't walls that keep love out. They're actually the foundation that keeps love strong and lasting. When you know where you end and your partner begins, you create space for genuine connection instead of resentment or burnout.</p>

      <h2>Make Time for Yourself</h2>
      <p>It's easy to get swept up in the excitement of a new relationship and want to spend every waking moment together. But here's what nobody tells you: losing yourself in someone else isn't romantic, it's exhausting. You need time to recharge, pursue your hobbies, see your friends, and just be alone with your thoughts. This doesn't mean you care about your partner any less. In fact, when you take care of yourself first, you show up as a better, happier version of yourself in the relationship. Tell your partner you need a night to yourself, or keep that weekly coffee date with your best friend. A healthy relationship has room for two whole people, not two halves trying to become one.</p>

      <h2>Communicate Your Needs Clearly</h2>
      <p>Mind reading isn't real, even though we sometimes wish it was. If something bothers you, your partner probably doesn't know unless you tell them. Maybe you need more quality time together, or perhaps you'd prefer a heads-up before they invite friends over. Whatever it is, speak up kindly but directly. And here's the flip side: when your partner shares their needs with you, really listen. Don't get defensive or dismissive. Healthy boundaries mean both people feel safe expressing what they need without fear of judgment. It might feel awkward at first, but this open communication builds trust and understanding over time.</p>

      <h2>Respect Each Other's Privacy and Independence</h2>
      <p>Just because you're in a relationship doesn't mean you're entitled to know every single thing about your partner's life, or that they need to be involved in every decision you make. Checking their phone, demanding passwords, or feeling threatened when they have separate interests are red flags, not signs of love. Trust means giving each other space to be individuals. Your partner should be able to have conversations with friends privately, maintain their own interests, and make some decisions without consulting you first. When you respect each other's independence, you're saying "I trust you, and I value who you are as a person." That's where real intimacy grows.</p>

      <h2>The Bottom Line</h2>
      <p>Setting boundaries isn't about creating distance in your relationship, it's about creating sustainability. When both people feel respected, heard, and free to be themselves, love doesn't feel like a burden or a sacrifice. It feels like coming home. The strongest couples aren't the ones who do everything together or never disagree. They're the ones who know how to maintain their sense of self while building something beautiful together. So take that time for yourself, say what you need, and trust your partner to be their own person. Your relationship will be healthier, happier, and built to last.</p>

      <p><strong>Image idea for this blog post:</strong><br/>
      A couple sitting together but doing different things — one reading, one journaling — showing closeness without losing individuality.</p>
  `,
    imageUrl: "/images/blog-secret-long-lasting-connection.jpg",
    date: "December 2, 2025",
    category: "Relationship Growth",
    author: "Paulina Mwindor",
    authorRole: "Relationship Writer",
    authorImage: "/images/Paulina-BB-Group.jpg",
    readTime: "7 min read",
    likes: 150,
    comments: 12
  },
  {
    slug: "meaningful-connections-in-2025",
    title: "Why Meaningful Connections Matter More Than Ever in 2025",
    excerpt: "Explore why trust, community, and real conversations have become the heart of modern relationships in 2025.",
    content: `
  <br/>
      <p>The Rising Need for Trust, Community, and Real Conversations</p>

      <br/>
      <p>Let's be honest: dating in 2025 feels different. We're more connected than ever through our screens, yet so many of us feel lonelier than before. We swipe through hundreds of faces, exchange a few messages that go nowhere, and wonder why finding someone who truly gets us feels so hard. If you've felt this way, you're not alone. Something has shifted in how we connect, and more people are realizing that what we really need isn't just another match but a meaningful connection.</p>

      <br/>
      <p>The truth is, we're all craving something real. After years of surface-level interactions and perfectly filtered photos, people are tired of the games. We want conversations that go beyond "hey" and "what's up." We want to know what makes someone laugh at 2 AM, what they're passionate about, and what they value in life. Trust has become the foundation we're all searching for because we've learned the hard way that connections built on anything less just don't last. When someone shows up authentically and consistently, it stands out in a world where ghosting has become the norm.</p>

      <p>Community matters more now because we've realized we can't do this alone. Dating isn't just about finding "the one." It's about building a life with someone who shares your values and vision. We're looking for partners who feel like home, who make us feel part of something bigger. Whether it's shared hobbies, similar life goals, or just having the same weird sense of humor, finding your people creates a sense of belonging that makes everything better. The best relationships grow from communities where people support each other and celebrate real connections.</p>

      <p>Real conversations are making a comeback, and it's about time. We're moving away from small talk and toward the deep stuff: hopes, fears, dreams, and everything in between. People want to be seen for who they really are, not just their best angle in good lighting. These genuine conversations create bonds that actually matter, the kind that make you excited to text someone back, not just out of politeness but because you genuinely care about what they have to say. When you connect with someone on this level, you know it, and that feeling is worth so much more than any quick dopamine hit from a new match.</p>

      <p>So if you're tired of feeling disconnected in an overly connected world, you're exactly where you need to be. 2025 is the year we stop settling for less and start investing in what really matters: trust, community, and real conversations. The meaningful connection you're looking for is out there, and it starts with being honest about what you need and brave enough to show up as yourself. Because at the end of the day, the best relationships aren't perfect. They're real. And real is exactly what we all need right now.</p>

      <p><strong>Image idea for this blog post:</strong><br/>
      A collage-style image showing people having deep conversations, sharing moments, and engaging in real, unfiltered connection — representing trust, community, and meaningful interaction.</p>
  `,
    imageUrl: "/images/meaningful-connections-in-2025.jpg",
    date: "December 5, 2025",
    category: "Modern Relationships",
    author: "Paulina Mwindor",
    authorRole: "Relationship Writer",
    authorImage: "/images/Paulina-BB-Group.jpg",
    readTime: "6 min read",
    likes: 180,
    comments: 9
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black">
      {/* Background effects - only visible in dark mode */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none dark:block hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative py-16">
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#AB1E3E] hover:text-rose-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              FyndMee{" "}
              <span className="bg-gradient-to-r from-[#AB1E3E] to-rose-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-white/60">
              Insights, stories, and updates from the FyndMee team.
            </p>
          </div>
        </div>
      </header>

      {/* All Posts */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden hover:border-[#AB1E3E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/5">
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-gray-800 dark:text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#AB1E3E] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/70 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AB1E3E] to-rose-500 flex items-center justify-center text-white/90 text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">{post.author}</p>
                        <p className="text-xs text-gray-500 dark:text-white/60">{post.authorRole}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#AB1E3E] hover:text-rose-700 font-semibold text-sm transition-colors inline-flex items-center gap-1"
                    >
                      Read
                      <ArrowLeft className="w-4 h-4 rotate-180" />
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