<script lang="ts" setup>
const props = defineProps({
href: {
  type: String || null,
  default: null
},
name: {
  type: String || null,
  default: null
},
icon: {
  type: String,
  default: undefined
}

})
</script>

<template>
  <a :href target="_blank">
  <UCard :ui="{strategy: 'override', body: {padding: 'p-0'}}">
    <UButton block variant="ghost" size="xl" class="flex justify-center items-center h-12 text-gray dark:text-gray">

      <Icon :name="icon" v-if="icon"/>
        <span>
          {{name}}
        </span>
      </UButton>
    </UCard>
  </a>
</template>

<style scoped></style>
