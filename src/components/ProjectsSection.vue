<template>
  <section id="projects" class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of my recent work and contributions to the development community
        </p>
      </div>

      <!-- Featured Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4 sm:px-0">
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover group"
        >
          <div class="relative h-40 sm:h-48 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <EyeIcon class="w-6 h-6 text-white" />
              </a>
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <CodeBracketIcon class="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div class="p-4 sm:p-6">
            <h3 class="text-xl font-bold mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies.slice(0, 2)"
                :key="tech"
                class="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs rounded-full"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.technologies.length > 2"
                class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
              >
                +{{ project.technologies.length - 2 }}
              </span>
            </div>
            
            <button
              @click="selectedProject = project"
              class="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
            >
              Read more <ArrowTopRightOnSquareIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <!-- GitHub Repositories -->
      <div class="mb-12">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl md:text-3xl font-bold">
            GitHub <span class="gradient-text">Repositories</span>
          </h3>
          <a
            href="https://github.com/Calson974"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary text-sm"
          >
            View All on GitHub
          </a>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
          <div
            v-for="repo in githubRepos.slice(0, showAllProjects ? githubRepos.length : 6)"
            :key="repo.id"
            class="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg card-hover"
          >
            <div class="flex items-start justify-between mb-3">
              <h4 class="text-lg font-semibold truncate">{{ repo.name }}</h4>
              <div class="flex items-center gap-1 text-yellow-500">
                <StarIcon class="w-4 h-4" />
                <span class="text-sm">{{ repo.stargazers_count }}</span>
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {{ repo.description || 'No description available' }}
            </p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span
                  v-if="repo.language"
                  class="w-3 h-3 bg-primary-500 rounded-full"
                ></span>
                <span class="text-sm text-gray-600 dark:text-gray-300">
                  {{ repo.language }}
                </span>
              </div>
              
              <div class="flex gap-2">
                <a
                  v-if="repo.homepage"
                  :href="repo.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-600 hover:text-primary-700"
                >
                  <EyeIcon class="w-4 h-4" />
                </a>
                <a
                  :href="repo.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-600 hover:text-primary-700"
                >
                  <CodeBracketIcon class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="githubRepos.length > 6" class="text-center mt-8">
          <button
            @click="showAllProjects = !showAllProjects"
            class="btn-secondary"
          >
            {{ showAllProjects ? 'Show Less' : 'Show More Projects' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="selectedProject = null"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <div class="relative h-64 md:h-80">
            <img
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-full object-cover"
            />
            <button
              @click="selectedProject = null"
              class="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div class="p-8">
            <h3 class="text-2xl md:text-3xl font-bold mb-4">{{ selectedProject.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {{ selectedProject.longDescription }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in selectedProject.technologies"
                :key="tech"
                class="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="flex gap-4">
              <a
                :href="selectedProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary inline-flex items-center gap-2"
              >
                <EyeIcon class="w-5 h-5" />
                Live Demo
              </a>
              <a
                :href="selectedProject.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary inline-flex items-center gap-2"
              >
                <CodeBracketIcon class="w-5 h-5" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { 
  EyeIcon, 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  StarIcon 
} from '@heroicons/vue/24/outline'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
  topics: string[]
}

const selectedProject = ref<typeof featuredProjects[0] | null>(null)
const githubRepos = ref<GitHubRepo[]>([])
const showAllProjects = ref(false)

const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring product catalog, shopping cart, and secure checkout.',
    longDescription: 'This comprehensive e-commerce solution includes user authentication, product management, order processing, and payment integration. Built with modern technologies for optimal performance and user experience.',
    image: '/assets/img/Screenshot 2025-05-25 140623.jpg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/Calson974/NOVAShop',
    liveUrl: 'https://nova-shop-git-main-calson974s-projects.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Memory Card Game',
    description: 'An engaging memory card game with smooth animations and score tracking.',
    longDescription: 'Memory Magic is an interactive card-matching game that tests memory and concentration. Features include multiple difficulty levels, score tracking, and responsive design for all devices.',
    image: '/assets/img/Screenshot 2025-05-14 022208.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/Calson974/Memory-Magic-Memory-Game',
    liveUrl: 'https://memory-magic-memory-game-git-master-calson974s-projects.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A clean and intuitive to-do list application with local storage persistence.',
    longDescription: 'List It Yourself is a minimal yet powerful task management application. Users can add, complete, and delete tasks with all data saved locally in the browser for persistence.',
    image: '/assets/img/Screenshot 2025-05-17 140117.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/Calson974/List-it-Yourself---To-do-App',
    liveUrl: 'https://list-it-yourself-to-do-app-git-master-calson974s-projects.vercel.app',
    featured: true
  }
]

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/Calson974/repos?sort=updated&per_page=6')
    const repos = await response.json()
    githubRepos.value = repos.filter((repo: GitHubRepo) => !repo.name.includes('Calson974'))
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
  }
})
</script>