<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Particle Background -->
    <div class="particles">
      <div
        v-for="i in 9"
        :key="i"
        class="particle"
        :style="{
          width: Math.random() * 10 + 5 + 'px',
          height: Math.random() * 10 + 5 + 'px',
          animationDelay: Math.random() * 6 + 's',
          animationDuration: Math.random() * 3 + 6 + 's',
        }"
      />
    </div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left animate-fade-in">
          <p class="text-lg md:text-xl text-primary-600 font-medium mb-4 animate-slide-up">
            Hello, I'm
          </p>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Calson Genesis
          </h1>
          
          <div class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-16 animate-slide-up">
            <span class="gradient-text">{{ currentSkill }}</span>
            <span class="animate-pulse">|</span>
          </div>
          
          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-slide-up">
            I create exceptional digital experiences through clean code, innovative design, 
            and user-centered thinking. Let's build something amazing together.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
            <button
              @click="downloadCV"
              class="btn-primary inline-flex items-center gap-2"
            >
              <ArrowDownTrayIcon class="w-5 h-5" />
              Download CV
            </button>
            
            <button
              @click="scrollToAbout"
              class="btn-secondary"
            >
              Learn More
            </button>
          </div>
        </div>

        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-end animate-fade-in">
          <div class="relative">
            <div class="relative w-80 h-80 md:w-96 md:h-96 animate-float">
              <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              <div class="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/assets/img/Me-Square-tx.jpg"
                  alt="Calson Genesis"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-80 animate-bounce-slow"></div>
            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        @click="scrollToAbout"
        class="text-gray-400 hover:text-primary-600 transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDownIcon class="w-8 h-8" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const skills = ['Full Stack Developer', 'Vue.js Specialist', 'UI/UX Enthusiast', 'Problem Solver']
const currentSkill = ref('')
const currentSkillIndex = ref(0)
const isDeleting = ref(false)

const typewriterEffect = () => {
  const fullSkill = skills[currentSkillIndex.value]
  
  if (isDeleting.value) {
    currentSkill.value = fullSkill.substring(0, currentSkill.value.length - 1)
  } else {
    currentSkill.value = fullSkill.substring(0, currentSkill.value.length + 1)
  }

  let typeSpeed = isDeleting.value ? 50 : 100

  if (!isDeleting.value && currentSkill.value === fullSkill) {
    typeSpeed = 2000
    isDeleting.value = true
  } else if (isDeleting.value && currentSkill.value === '') {
    isDeleting.value = false
    currentSkillIndex.value = (currentSkillIndex.value + 1) % skills.length
    typeSpeed = 500
  }

  setTimeout(typewriterEffect, typeSpeed)
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/assets/Calson_Genesis_CV.pdf'
  link.download = 'Calson_Genesis_CV.pdf'
  link.click()
}

const scrollToAbout = () => {
  const aboutSection = document.querySelector('#about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  typewriterEffect()
})
</script>