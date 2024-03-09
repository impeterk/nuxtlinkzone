<script lang="ts" setup>
const pages = [1]
</script>

<template>
  <div>
    <h1>Pages</h1>
    <div v-if="pages.length === 0" class="text-primary" >You have not yet crated any page</div>
    <NuxtLayout name="dashboard">
      <NuxtPage />
    </ NuxtLayout>
  </div>
</template>

<style scoped></style>
