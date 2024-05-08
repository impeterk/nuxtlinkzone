<script lang="ts" setup>
const {session, cookies} = useAuth()
console.log(useAuth())

const user = session.value?.user
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <header class="prose dark:prose-invert flex max-w-full justify-center flex-col items-center ">
          <h1>Profile</h1>
          <h2>{{ user?.name }}</h2>
          {{ useState('counter') }}
        </header>
      </template>
      {{ user }}
      {{ cookies }}
    </UCard>
  </UContainer>
</template>

<style scoped></style>
