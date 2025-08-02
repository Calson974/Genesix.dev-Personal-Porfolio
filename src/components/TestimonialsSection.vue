<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          What People <span class="gradient-text">Say</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Don't just take my word for it - here's what clients and collaborators have to say about working with me
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover"
        >
          <!-- Rating Stars -->
          <div class="flex items-center mb-4">
            <StarIcon
              v-for="i in testimonial.rating"
              :key="i"
              class="w-5 h-5 text-yellow-400"
            />
          </div>
          
          <!-- Testimonial Content -->
          <blockquote class="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
            "{{ testimonial.content }}"
          </blockquote>
          
          <!-- Author Info -->
          <div class="flex items-center">
            <div class="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">
                {{ testimonial.name }}
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>
          <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
            Join these satisfied clients and let's create something amazing together. 
            I'm always excited to take on new challenges and deliver exceptional results.
          </p>
          <button
            @click="scrollToContact"
            class="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    content: 'Calson delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Working with Calson was a game-changer for our startup. He built our MVP quickly and with great quality. His communication and problem-solving skills are outstanding.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Calson has an excellent eye for design and user experience. He transformed our designs into pixel-perfect, responsive web applications that our users love.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'CTO at InnovateLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Calson\'s technical skills and professionalism are impressive. He delivered a complex web application on time and within budget. Highly recommended!',
    rating: 5
  }
]

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>