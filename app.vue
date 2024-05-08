<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'nuxt-ui-scrollbars'
  }
})
</script>

<template>
  <NuxtLoadingIndicator />
    <NuxtLayout >
      <UContainer>
        <NuxtPage :page-key="route => route.fullPath" />
      </UContainer>
    </NuxtLayout>
    <UModals />
</template>

<style>
html,body,#__nuxt {
  @apply h-full font-sans
}

</style>