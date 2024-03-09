<script setup lang="ts">
const links = [{
  label: 'Nuxt UI',
  to: 'https://ui.nuxt.com/'
}, {
  label: 'Nuxt Docs',
  to: 'https://nuxt.com'
}, {
  label: 'Nuxt Studio',
  to: 'https://nuxt.studio'
}]
</script>

<template>
  
  <UContainer class="w-full">
      <footer class="border-t flex items-center justify-center border-gray-200 dark:border-gray-800/80 py-2">
      Copyright © {{ new Date().getFullYear() }}
      <ThemeSwitch />
    </footer>
    </UContainer>

</template>

