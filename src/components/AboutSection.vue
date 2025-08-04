<template>
  <section id="about" class="section-padding bg-gray-50 dark:bg-gray-800/50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          About <span class="gradient-text">Me</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Get to know me better - my journey, skills, and aspirations in the world of technology
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Profile Image -->
        <div class="flex justify-center lg:justify-start px-4 sm:px-0">
          <div class="relative">
            <div class="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative cursor-pointer group" @click="triggerPhotoEffect">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl transform rotate-6"></div>
              <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105">
                <img
                  src="/assets/img/Me-Square-tx.jpg"
                  alt="Calson Genesis - About"
                  class="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
                <!-- Overlay for click effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div class="text-2xl mb-2">✨</div>
                    <div class="text-sm font-medium">Click me!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bio Content -->
        <div class="space-y-6 px-4 sm:px-0">
          <h3 class="text-2xl md:text-3xl font-bold mb-6">
            Hi, I'm <span class="gradient-text">Calson Genesis</span>
          </h3>
          
          <div class="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a passionate Front-End Developer from Cameroon with a keen eye for creating 
              beautiful, functional web applications. My journey in tech started with curiosity 
              about how websites work, which led me to dive deep into the world of programming.
            </p>
            
            <p>
              With expertise in modern web technologies like React, Vue.js, TypeScript, and Tailwind CSS, 
              I specialize in building responsive, user-friendly applications that provide exceptional experiences. 
              I believe in writing clean, maintainable code and following industry best practices.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, working with databases like PostgreSQL, or sharing knowledge with the developer community. 
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 class="text-lg font-semibold mb-4">Quick Info</h4>
            <div class="space-y-2 text-gray-600 dark:text-gray-300">
              <p><span class="font-medium">📍 Location:</span> Bamenda, Cameroon</p>
              <p><span class="font-medium">📧 Email:</span> cooljimmy974@gmail.com</p>
              <p><span class="font-medium">📱 Phone:</span> +237 681 849 054</p>
              <p><span class="font-medium">💼 Status:</span> Available for freelance</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mb-20">
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-12">
          My <span class="gradient-text">Tech Stack</span>
        </h3>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg text-center card-hover"
          >
            <div class="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 relative">
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="w-full h-full object-contain"
              />
            </div>
            <p class="text-xs sm:text-sm font-medium">{{ tech.name }}</p>
          </div>
        </div>
      </div>

      <!-- Goals & Aspirations -->
      <div>
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-12">
          My <span class="gradient-text">Goals</span>
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="goal in goals"
            :key="goal.title"
            class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover"
          >
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <component :is="goal.icon" class="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-3">{{ goal.title }}</h4>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ goal.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  RocketLaunchIcon 
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const showEffect = ref(false)

const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
]

const goals = [
  {
    icon: CodeBracketIcon,
    title: 'Master Front-End Development',
    description: 'Continuously improving my skills in React, Vue.js, and TypeScript to build exceptional user interfaces.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile-First Approach',
    description: 'Creating responsive, mobile-optimized experiences that work seamlessly across all devices.'
  },
  {
    icon: PaintBrushIcon,
    title: 'UI/UX Excellence',
    description: 'Bridging the gap between design and development to create beautiful, intuitive interfaces.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation & Growth',
    description: 'Staying at the forefront of technology trends and contributing to open-source projects.'
  }
]

const triggerPhotoEffect = () => {
  showEffect.value = true
  
  // Create floating elements
  const container = document.querySelector('.about-photo-container')
  if (container) {
    // Add sparkle effect
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping'
      sparkle.style.left = Math.random() * 100 + '%'
      sparkle.style.top = Math.random() * 100 + '%'
      sparkle.style.animationDelay = Math.random() * 2 + 's'
      container.appendChild(sparkle)
      
      setTimeout(() => sparkle.remove(), 3000)
    }
  }
  
  // Show achievement popup
  const popup = document.createElement('div')
  popup.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-4 rounded-lg shadow-2xl z-50 animate-bounce'
  popup.innerHTML = `
    <div class="text-center">
      <div class="text-2xl mb-2">🚀</div>
      <div class="font-bold">Impressive! You found the Easter egg!</div>
      <div class="text-sm opacity-90">This developer pays attention to details</div>
    </div>
  `
  document.body.appendChild(popup)
  setTimeout(() => popup.remove(), 4000)
  
  setTimeout(() => {
    showEffect.value = false
  }, 3000)
}
</script>