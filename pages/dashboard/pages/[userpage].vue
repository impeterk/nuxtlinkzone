<script lang="ts" setup>

</script>

<template>
  <Suspense>
  <!-- component with nested async dependencies -->
  <Page />

  <!-- loading state via #fallback slot -->
  <template #fallback>
    <PageSkeleton /> 
  </template>
</Suspense>
</template>

<style scoped></style>
