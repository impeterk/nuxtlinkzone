<script lang="ts" setup>
// definePageMeta({
//   colorMode: 'light',
// })
</script>

<template>
  <div class="layout">
<main class="py-8">

    <slot />
</main>
    <Footer />
  </div>
</template>

<style scoped>
.layout{
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
}
</style>
