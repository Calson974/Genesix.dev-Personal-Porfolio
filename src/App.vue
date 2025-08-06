<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onMounted, watch } from 'vue'

const isDark = ref(false)

// Load theme from localStorage on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
  } else if (savedTheme === 'light') {
    isDark.value = false
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Apply initial theme
  updateTheme()
})

// Watch for theme changes and apply them
watch(isDark, () => {
  updateTheme()
})

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleDark = () => {
  isDark.value = !isDark.value
}

// Provide theme context to all components
provide('theme', {
  isDark,
  toggleDark
})
</script>