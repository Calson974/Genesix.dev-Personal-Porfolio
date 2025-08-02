<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <AppHeader />
    
    <main class="pt-20">
      <section class="section-padding">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              <span class="gradient-text">Technical Blog</span>
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts on modern web development
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
              v-for="post in blogPosts"
              :key="post.id"
              class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div class="relative h-48">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <h2 class="text-xl font-bold mb-3 line-clamp-2">
                  {{ post.title }}
                </h2>
                
                <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {{ post.excerpt }}
                </p>
                
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{{ formatDate(post.date) }}</span>
                  <span>{{ post.readTime }}</span>
                </div>
                
                <router-link
                  :to="`/blog/${post.slug}`"
                  class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read more →
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Blog - Calson Genesis',
  meta: [
    { name: 'description', content: 'Technical articles and insights from Calson Genesis' }
  ]
})

const blogPosts = ref([
  {
    id: 1,
    title: 'Building Modern Web Applications with Vue 3',
    excerpt: 'Explore the latest features in Vue 3 and how they can improve your development workflow.',
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    slug: 'vue3-modern-development',
    tags: ['Vue.js', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    title: 'The Power of TypeScript in Vue Applications',
    excerpt: 'Why TypeScript has become essential for building scalable Vue applications.',
    date: '2024-01-10',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    slug: 'typescript-vue-applications',
    tags: ['TypeScript', 'Vue.js', 'Development']
  },
  {
    id: 3,
    title: 'Optimizing Vue Performance: Tips and Tricks',
    excerpt: 'Learn advanced techniques to make your Vue applications faster and more efficient.',
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    slug: 'vue-performance-optimization',
    tags: ['Vue.js', 'Performance', 'Optimization']
  }
])

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}
</script>