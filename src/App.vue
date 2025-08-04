<template>
  <div id="app" :class="{ 'dark': isDark }" class="transition-colors duration-300">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// Provide theme context to all components
provide('theme', {
  isDark,
  toggleDark
})
</script>