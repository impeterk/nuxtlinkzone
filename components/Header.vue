<script setup lang="ts">
const route = useRoute()

const links = [[],
[{
  label: 'Sign In',
  to: '/sign-in',
  icon: 'i-heroicons-arrow-right-on-rectangle'
}]
]
</script>

<template>
  <UContainer  class="border-b border-gray-200 dark:border-gray-800 w-full">
    <header class="flex items-center justify-between">
      <NuxtLink to="/">
        MyLinkZone
      </NuxtLink>
      <UHorizontalNavigation :links="links" >
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </header>
  </UContainer>
</template>

