<template>
  <div class="min-h-screen">
    <AppHeader />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <TestimonialsSection />
    <ContactSection />
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Calson Genesis - Full Stack Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Calson Genesis, a passionate Full Stack Developer from Cameroon specializing in Vue.js, React, and modern web technologies.' }
  ]
})
</script>