<template>
  <section id="skills" class="section-padding bg-gray-50 dark:bg-gray-800/50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          My <span class="gradient-text">Skills</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="(category, categoryIndex) in skillCategories"
          :key="category.title"
          class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h3 class="text-xl font-bold mb-8 text-center gradient-text">
            {{ category.title }}
          </h3>
          
          <div class="space-y-6">
            <div
              v-for="(skill, skillIndex) in category.skills"
              :key="skill.name"
              class="mb-6"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {{ skill.name }}
                </span>
                <span class="text-sm font-medium text-primary-600">
                  {{ skill.level }}%
                </span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills Tags -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold mb-8">
          Additional <span class="gradient-text">Technologies</span>
        </h3>
        
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="(tech, index) in additionalTechs"
            :key="tech"
            class="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm font-medium cursor-default transition-all duration-300 hover:scale-110"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const isVisible = ref(false)
const target = ref<HTMLElement>()

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 88 },
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'REST APIs', level: 80 },
      { name: 'GraphQL', level: 50 }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 75 },
      { name: 'Responsive Design', level: 95 },
      { name: 'UI/UX Design', level: 70 },
      { name: 'Performance Optimization', level: 65 }
    ]
  }
]

const additionalTechs = [
  'Vite', 'Nuxt.js', 'Next.js', 'Firebase', 'Supabase', 'Prisma',
  'Jest', 'Cypress', 'Docker', 'AWS', 'Vercel', 'Netlify'
]

onMounted(() => {
  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )
})
</script>