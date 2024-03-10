<script lang="ts" setup>

defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const isOpen = useState('isCreatePageOpen', () => false)

</script>

<template>
  <UButton :disabled class="h-12" block @click="isOpen = true">
    <Icon name="mdi:plus" />
    <span>Create New Page</span>
    </UButton>
    <UModal v-model="isOpen">
      <div class="p-4">
        <UCard>
          <template #header>
            Create New Page
          </template>
        </UCard>
      </div>
    </UModal>

</template>

<style scoped></style>
