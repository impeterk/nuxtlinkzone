<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: null,
    required: true
  },
  image: {
    type: String,
    default: null
  }
})

</script>

<template>
  <header>
        <UCard class="h-64 relative flex items-center justify-center">
          <section
            class="prose dark:prose-invert text-pretty text-center">
            <h1  >{{ name }}</h1>
            <p class="mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis!</p>
          </section>
          <UAvatar :src="image" :ui="{ size: 'size-full' }" :alt="name" 
          class="size-36 absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2 border border-primary text-4xl" />
        </UCard>
      </header>
</template>

<style scoped></style>
