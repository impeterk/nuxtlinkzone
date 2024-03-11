<script lang="ts" setup>
definePageMeta({
  layout: 'user-page'
})
</script>
<template>
  <Suspense>
  <!-- component with nested async dependencies -->
  <div class="max-w-4xl mx-auto">
    
    <Page />
  </div>

  <!-- loading state via #fallback slot -->
  <template #fallback>
    <PageSkeleton /> 
  </template>
</Suspense>
</template>

<style scoped></style>
