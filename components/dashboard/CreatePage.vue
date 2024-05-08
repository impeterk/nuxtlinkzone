<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const newPage = useState("newPage", () => "");
const isOpen = useState("isCreatePageOpen", () => false);

async function handleSubmit() {
  const res = await $fetch("/api/page", {
    method: "POST",
    body: {
      pageId: newPage.value,
    },
  });
  if (res) {
    isOpen.value = false
    newPage.value = ""
    navigateTo(`/dashboard/pages/${res[0].id}`)
  }
  console.log(res);
}
</script>

<template>
  <UButton :disabled class="h-12" block @click="isOpen = true">
    <Icon name="mdi:plus" />
    <span>Create New Page</span>
  </UButton>
  <UModal v-model="isOpen">
    <div class="p-4">
      <UCard>
        <template #header> Create New Page </template>
          <UFormGroup label="New Page">
            <UInput
              placeholder="fesak"
              icon="i-heroicons-document-plus"
              v-model="newPage"
            />
          </UFormGroup>
          <template #footer>
            <UButton @click="handleSubmit"> Create Page </UButton>
          </template>
      </UCard>
    </div>
  </UModal>
</template>

<style scoped></style>
