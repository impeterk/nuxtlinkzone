<script setup lang="ts">

const user = true
const guestLinks = [[],
[{
  label: 'Sign In',
  to: '/sign-in',
  icon: 'i-heroicons-arrow-right-end-on-rectangle'
}]
]
const userLinks = [[],
[{
  label: 'Dashboard',
  to: '/dashboard/pages',
  icon: 'mdi:view-dashboard'
},
{
  label: 'Profile',
  to: '/dashboard/profile',
  icon: 'mdi:account'
}
]
]
</script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800 w-full">
  <UContainer class="flex items-center justify-between gap-4"  >
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
      <UHorizontalNavigation :links="user ? userLinks : guestLinks"   >
        <template #icon="{link}" v-if="user">
          <Icon :name="link.icon" class="group-hover:text-white group-hover:invert group-hover:dark:text-black size-5"/>
        </template>
        <template #default="{ link }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
      </UHorizontalNavigation>
      <UButton v-if="user" variant="outline" color="rose" icon="i-heroicons-arrow-right-on-rectangle">
        Sign Out
      </UButton>
    </UContainer>
  </header>
</template>

