<script lang="ts" setup>
const {signIn} = useAuth()
// definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/dashboard/pages" } })
</script>

<template>
  <UContainer class="max-w-md">

    <UCard>
      <template #header>
        Sign In
      </template>
      <UButton block @click="signIn(`github`)" size="xl" >
        <Icon name="mdi:github" />
        <span>Github</span>
      </UButton>
    </UCard>
  </UContainer>
</template>

<style scoped></style>
