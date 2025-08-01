import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// This would typically come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts = {
    'nextjs-14-features': {
      title: 'Building Modern Web Applications with Next.js 14',
      content: `
        <p>Next.js 14 introduces several groundbreaking features that revolutionize how we build web applications. In this comprehensive guide, we'll explore these new capabilities and how they can enhance your development workflow.</p>
        
        <h2>Server Components Revolution</h2>
        <p>Server Components represent a paradigm shift in React development. They allow us to render components on the server, reducing bundle size and improving performance.</p>
        
        <h2>App Router Enhancements</h2>
        <p>The App Router continues to evolve with better file-based routing, improved layouts, and enhanced data fetching capabilities.</p>
        
        <h2>Performance Improvements</h2>
        <p>Next.js 14 brings significant performance improvements, including faster builds, optimized bundling, and improved runtime performance.</p>
      `,
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
      tags: ['Next.js', 'React', 'Web Development']
    }
  }
  
  return posts[slug as keyof typeof posts] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} - Calson Genesis Blog`,
    description: post.content.substring(0, 160),
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main className="pt-20 section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        <article className="section-padding">
          <div className="container-custom max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  )
}