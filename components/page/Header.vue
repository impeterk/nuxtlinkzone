<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String || null,
    default: null,
    required: true
  },
  image: {
    type: String || null,
    default: null
  }
})

</script>

<template>
  <header>
    <UCard class="h-64 relative flex items-center justify-center shadow-md">
      <section class="prose dark:prose-invert text-pretty text-center">
        <h1>{{ name }}</h1>
        <p class="mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis!</p>
      </section>
      <UAvatar :src="image" :ui="{ size: 'size-full' }" :alt="name"
        class="size-36 absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2 border border-primary text-4xl" />
      <div class="absolute top-1/3 -translate-y-full right-1/3 translate-x-full">
        <slot name="header"></slot>
      </div>
    </UCard>
  </header>
</template>

<style scoped></style>
