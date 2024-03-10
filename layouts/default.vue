<script lang="ts" setup>
definePageMeta({
  colorMode: 'light',
})
</script>

<template>
  <div class="layout">
    <Header/>
    <main class="py-8">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  
}
</style>
