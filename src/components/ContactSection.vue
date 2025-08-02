<template>
  <section id="contact" class="section-padding bg-gray-50 dark:bg-gray-800/50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Let's create something amazing together!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold mb-6">Let's Connect</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a friendly chat about technology and development.
            </p>
          </div>

          <!-- Contact Details -->
          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-center group"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                <component :is="info.icon" class="w-6 h-6 text-primary-600" />
              </div>
              <div class="flex-grow">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ info.label }}</p>
                <a
                  v-if="info.href"
                  :href="info.href"
                  class="text-gray-900 dark:text-white font-medium hover:text-primary-600 transition-colors"
                >
                  {{ info.value }}
                </a>
                <p v-else class="text-gray-900 dark:text-white font-medium">{{ info.value }}</p>
              </div>
              <button
                v-if="info.copyable"
                @click="copyToClipboard(info.value, info.label)"
                class="flex-shrink-0 p-2 text-gray-400 hover:text-primary-600 transition-colors"
                :title="`Copy ${info.label}`"
              >
                <CheckIcon v-if="copiedItems.includes(info.label)" class="w-5 h-5 text-green-500" />
                <ClipboardDocumentIcon v-else class="w-5 h-5" />
              </button>
            </div>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:shadow-xl transition-all duration-200 hover:scale-110"
              >
                <component :is="social.icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 class="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    v-model="formData.name"
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    v-model="formData.email"
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  v-model="formData.subject"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  name="message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClipboardDocumentIcon,
  CheckIcon
} from '@heroicons/vue/24/outline'

// GitHub and LinkedIn icons as components
const GitHubIcon = {
  template: `
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `
}

const LinkedInIcon = {
  template: `
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  `
}

const WhatsAppIcon = {
  template: `
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  `
}

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'cooljimmy974@gmail.com',
    href: 'mailto:cooljimmy974@gmail.com',
    copyable: true
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+237 681 849 054',
    href: 'tel:+237681849054',
    copyable: true
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Bamenda, Cameroon',
    href: null,
    copyable: false
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Calson974',
    icon: GitHubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tengu-calson-genesis-438a83277',
    icon: LinkedInIcon
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+237681849054',
    icon: WhatsAppIcon
  }
]

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const copiedItems = ref<string[]>([])

const copyToClipboard = async (text: string, label: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedItems.value.push(label)
    
    // Remove from copied items after 2 seconds
    setTimeout(() => {
      copiedItems.value = copiedItems.value.filter(item => item !== label)
    }, 2000)
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    // Here you would integrate with EmailJS or your preferred email service
    // For now, we'll simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    Object.assign(formData, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    alert('Message sent successfully! I\'ll get back to you soon.')
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send message. Please try again or contact me directly.')
  } finally {
    isSubmitting.value = false
  }
}
</script>