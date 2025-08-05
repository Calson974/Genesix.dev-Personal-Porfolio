<template>
  <section id="home" class="justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <!-- Particle Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-for="i in 50"
        :key="i"
        class="absolute w-2 h-2 bg-primary-400/20 rounded-full animate-float"
        :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 5 + 's',
          animationDuration: (3 + Math.random() * 4) + 's'
        }"
      />
    </div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <div class="mb-6">
            <p class="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
              Hello, I'm
            </p>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Calson Genesis
            </h1>
            <div class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              I'm a <span class="gradient-text font-bold">{{ currentSkill }}</span>
            </div>
          </div>

          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            Passionate Front-End Developer from Cameroon, creating beautiful and functional 
            web applications with modern technologies. I love turning ideas into reality through code.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              @click="handleNavClick('#contact', $event)"
              class="btn-primary inline-flex items-center justify-center"
            >
              Get In Touch
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/assets/Calson_Genesis_CV.pdf"
              download
              class="btn-secondary inline-flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-4-4m4 4l4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="w-80 h-80 md:w-96 md:h-96 relative">
              <!-- Background decoration -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full transform rotate-6 opacity-20"></div>
              <div class="absolute inset-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full transform -rotate-6 opacity-30"></div>
              
              <!-- Profile image -->
              <div class="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img
                  src="/assets/img/Me-Square-tx.jpg"
                  alt="Calson Genesis - Front-End Developer"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const skills = ['Full Stack Developer', 'Web Developer', 'Freelancer', 'YouTuber', 'Graphic Designer']
const currentSkill = ref(skills[0])
let skillIndex = 0
let charIndex = 0
let isDeleting = false
let typewriterInterval: number

const typewriterEffect = () => {
  const skill = skills[skillIndex]
  
  if (isDeleting) {
    currentSkill.value = skill.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentSkill.value = skill.substring(0, charIndex + 1)
    charIndex++
  }
  
  if (!isDeleting && charIndex === skill.length) {
    setTimeout(() => {
      isDeleting = true
    }, 2000)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    skillIndex = (skillIndex + 1) % skills.length
  }
}

const handleNavClick = (href: string, event: Event) => {
  event.preventDefault()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  typewriterInterval = setInterval(typewriterEffect, 100)
})

onUnmounted(() => {
  if (typewriterInterval) {
    clearInterval(typewriterInterval)
  }
})
</script>