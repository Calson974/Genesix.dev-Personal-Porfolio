<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
    <!-- Particle Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 50" :key="i" 
           class="absolute animate-float opacity-20 dark:opacity-10"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 5 + 's',
             animationDuration: (3 + Math.random() * 4) + 's'
           }">
        <div class="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Profile Image -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="Calson Genesis" 
              class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Calson Genesis</span>
        </h1>

        <!-- Typewriter Effect -->
        <div class="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center justify-center">
          <span class="typewriter">{{ displayText }}</span>
          <span class="cursor animate-pulse">|</span>
        </div>

        <!-- Description -->
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Passionate front-end developer crafting beautiful, responsive web experiences with modern technologies. 
          I bring ideas to life through clean code and intuitive design.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>View My Work</span>
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          
          <a 
            href="#contact" 
            class="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            <span>Get In Touch</span>
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" class="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  'Front-End Developer',
  'React Specialist',
  'TypeScript Expert',
  'Vue.js Developer',
  'UI/UX Enthusiast'
]

const displayText = ref('')
const currentPhraseIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)

let typewriterInterval: number

const typeWriter = () => {
  const currentPhrase = phrases[currentPhraseIndex.value]
  
  if (isDeleting.value) {
    displayText.value = currentPhrase.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--
    
    if (currentCharIndex.value === 0) {
      isDeleting.value = false
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
      setTimeout(() => {
        typewriterInterval = setInterval(typeWriter, 100)
      }, 500)
      return
    }
  } else {
    displayText.value = currentPhrase.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    
    if (currentCharIndex.value === currentPhrase.length) {
      setTimeout(() => {
        isDeleting.value = true
        typewriterInterval = setInterval(typeWriter, 50)
      }, 2000)
      return
    }
  }
  
  typewriterInterval = setInterval(typeWriter, isDeleting.value ? 50 : 100)
}

onMounted(() => {
  typeWriter()
})

onUnmounted(() => {
  if (typewriterInterval) {
    clearInterval(typewriterInterval)
  }
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.typewriter {
  font-family: 'Courier New', monospace;
}

.cursor {
  color: #3b82f6;
}
</style>