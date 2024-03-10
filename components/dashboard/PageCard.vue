<script lang="ts" setup>
const route = useRoute()
const props = defineProps({
  name: {
    type: String,
    default: null,
    required: true
  }
})

const variant = computed(() => {
  return route.params?.userpage === props.name ? 'outline': 'ghost'
  })
</script>

<template>
  <div>
    <NuxtLink :to="`/dashboard/pages/${name}`">
      <UCard 
      :ui="{strategy: 'override', body: {padding: 'p-0'}}">
      <UButton :variant class="h-full w-full px-6 py-8 sm:p-10">
        {{ name }}
      </UButton>
    </UCard>
  </NuxtLink>
  </div>
</template>

<style scoped></style>
