<script lang="ts" setup>
const props = defineProps({
href: {
  type: String,
  default: null
},
name: {
  type: String,
  default: null
},
icon: {
  type: String,
  default: null
}

})
</script>

<template>
  <a :href target="_blank">
  <UCard :ui="{strategy: 'override', body: {padding: 'p-0'}}">
    <UButton block variant="ghost" size="xl" class="flex justify-center items-center h-12 text-gray dark:text-gray">

      <Icon :name="icon" />
        <span>
          {{name}}
        </span>
      </UButton>
    </UCard>
  </a>
</template>

<style scoped></style>
