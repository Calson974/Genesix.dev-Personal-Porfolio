<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <AppHeader />
    
    <main class="pt-20">
      <article class="section-padding" v-if="post">
        <div class="container-custom max-w-4xl">
          <router-link
            to="/blog"
            class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeftIcon class="w-4 h-4" />
            Back to Blog
          </router-link>
          
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-4">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              {{ post.title }}
            </h1>
            
            <div class="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <span>{{ formatDate(post.date) }}</span>
              <span>•</span>
              <span>{{ post.readTime }}</span>
            </div>
          </div>
          
          <div class="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="prose prose-lg dark:prose-invert max-w-none" v-html="post.content" />
        </div>
      </article>
      
      <div v-else class="section-padding">
        <div class="container-custom text-center">
          <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
          <router-link to="/blog" class="btn-primary">
            Back to Blog
          </router-link>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useHead } from '@vueuse/head'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const blogPosts = ref({
  'vue3-modern-development': {
    title: 'Building Modern Web Applications with Vue 3',
    content: `
      <p>Vue 3 introduces several groundbreaking features that revolutionize how we build web applications. In this comprehensive guide, we'll explore these new capabilities and how they can enhance your development workflow.</p>
      
      <h2>Composition API Revolution</h2>
      <p>The Composition API represents a paradigm shift in Vue development. It allows us to organize component logic in a more flexible and reusable way.</p>
      
      <h2>Performance Improvements</h2>
      <p>Vue 3 brings significant performance improvements, including faster rendering, smaller bundle sizes, and better tree-shaking.</p>
      
      <h2>TypeScript Support</h2>
      <p>Vue 3 was built with TypeScript in mind, providing excellent type inference and development experience.</p>
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    tags: ['Vue.js', 'JavaScript', 'Web Development']
  }
})

const post = computed(() => {
  return blogPosts.value[slug.value as keyof typeof blogPosts.value] || null
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}

useHead(() => ({
  title: post.value ? `${post.value.title} - Calson Genesis Blog` : 'Post Not Found',
  meta: [
    { name: 'description', content: post.value ? post.value.content.substring(0, 160) : 'Post not found' }
  ]
}))
</script>