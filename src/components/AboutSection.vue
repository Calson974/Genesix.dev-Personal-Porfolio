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
        <div class="flex justify-center lg:justify-start">
          <div class="relative">
            <div class="w-80 h-80 md:w-96 md:h-96 relative">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl transform rotate-6"></div>
              <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/img/Me-Square-tx.jpg"
                  alt="Calson Genesis - About"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Bio Content -->
        <div class="space-y-6">
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
              With expertise in modern web technologies like Vue.js, React, and Node.js, 
              I specialize in building scalable applications that provide exceptional user experiences. 
              I believe in writing clean, maintainable code and following best practices.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. 
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
            class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center card-hover"
          >
            <div class="w-12 h-12 mx-auto mb-3 relative">
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="w-full h-full object-contain"
              />
            </div>
            <p class="text-sm font-medium">{{ tech.name }}</p>
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

const techStack = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

const goals = [
  {
    icon: CodeBracketIcon,
    title: 'Master Full-Stack Development',
    description: 'Continuously improving my skills in both frontend and backend technologies to build complete solutions.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile-First Approach',
    description: 'Creating responsive, mobile-optimized experiences that work seamlessly across all devices.'
  },
  {
    icon: PaintBrushIcon,
    title: 'Design & User Experience',
    description: 'Bridging the gap between design and development to create beautiful, intuitive interfaces.'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation & Growth',
    description: 'Staying at the forefront of technology trends and contributing to open-source projects.'
  }
]
</script>