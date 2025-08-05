<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="headerClasses">
    <div class="container-custom">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
          Calson Genesis
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="handleNavClick(item.href, $event)"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <nav class="container-custom py-4 space-y-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="handleNavClick(item.href, $event)"
            class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' }
]

const headerClasses = computed(() => ({
  'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg': isScrolled.value,
  'bg-transparent': !isScrolled.value
}))

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleNavClick = (href: string, event: Event) => {
  if (href.startsWith('#')) {
    event.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>