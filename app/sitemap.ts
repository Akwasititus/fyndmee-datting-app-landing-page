// app/sitemap.ts
import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const staticPages = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/the-app', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/download', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/products-pricing-info', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/about-us', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/safety', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/contact-us', changeFrequency: 'yearly' as const, priority: 0.5 },
  { path: '/careers', changeFrequency: 'weekly' as const, priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
  { path: '/terms-of-service', changeFrequency: 'yearly' as const, priority: 0.3 },
]

const blogPosts = [
  { slug: 'authentic-professional-connections-online', published: '2025-11-26' },
  { slug: 'art-of-being-intentional', published: '2025-12-04' },
  { slug: 'healthy-boundaries-for-lasting-connections', published: '2025-12-02' },
  { slug: 'meaningful-connections-in-2025', published: '2025-12-05' },
]

const careerIds = ['1', '2', '3', '4']

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date('2026-09-11')

  return [
    ...staticPages.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: siteUpdated,
      changeFrequency,
      priority,
    })),
    ...blogPosts.map(({ slug, published }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(published),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    ...careerIds.map((id) => ({
      url: `${SITE_URL}/careers/${id}`,
      lastModified: siteUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })),
  ]
}
