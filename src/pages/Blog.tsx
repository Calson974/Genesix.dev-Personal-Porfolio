import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

/**
 * Blog Page Component
 * 
 * Features:
 * - Blog post grid layout
 * - Glassmorphism design
 * - Hover animations
 * - SEO optimization
 */
const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern React Applications',
      excerpt: 'Explore the latest features in React 18 and how they can improve your development workflow with concurrent features and automatic batching.',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      tags: ['React', 'JavaScript', 'Web Development'],
      featured: true
    },
    {
      id: 2,
      title: 'The Power of TypeScript in Frontend Development',
      excerpt: 'Why TypeScript has become essential for building scalable frontend applications and how it improves developer experience.',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
      tags: ['TypeScript', 'React', 'Development'],
      featured: false
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use What',
      excerpt: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      tags: ['CSS', 'Layout', 'Frontend'],
      featured: false
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <Helmet>
        <title>Blog - Calson Genesis</title>
        <meta name="description" content="Technical articles and insights about frontend development, React, TypeScript, and modern web technologies." />
      </Helmet>

      <div className="min-h-screen pt-20 pb-16 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technical{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and thoughts on modern frontend development
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Featured badge */}
                {post.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <motion.button
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                More Articles Coming Soon!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm working on more in-depth articles about React, TypeScript, performance optimization, 
                and modern frontend development practices. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Blog