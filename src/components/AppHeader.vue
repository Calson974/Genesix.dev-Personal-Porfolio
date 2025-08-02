<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold gradient-text">
          Calson Genesis
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="handleNavClick(item.href, $event)"
            :class="[
              'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
              activeSection === item.href.substring(1)
                ? 'text-primary-600'
                : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
            ]"
          >
            {{ item.name }}
            <div
              v-if="activeSection === item.href.substring(1)"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 transition-all duration-300"
            />
          </a>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <button
            @click="toggleDark()"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>

          <button
            @click="isOpen = !isOpen"
            class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <XMarkIcon v-if="isOpen" class="w-6 h-6" />
            <Bars3Icon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isOpen"
          class="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="py-4 space-y-2">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              @click="handleNavClick(item.href, $event)"
              class="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const theme = inject('theme') as any
const { isDark, toggleDark } = theme

const isOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  // Update active section based on scroll position
  const sections = navigation.filter(item => item.href.startsWith('#'))
  const currentSection = sections.find(section => {
    const element = document.querySelector(section.href)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom >= 100
    }
    return false
  })
  
  if (currentSection) {
    activeSection.value = currentSection.href.substring(1)
  }
}

const handleNavClick = (href: string, event: Event) => {
  if (href.startsWith('#')) {
    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push(href)
  }
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>