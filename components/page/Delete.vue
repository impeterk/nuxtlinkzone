<script setup lang="ts">
const route = useRoute()

const modal = useModal()


async function handleSubmit() {
  const res = await $fetch("/api/page", {
    method: "delete",
    body: {
      pageId: route.params.userpage,
    },
  });
  if (res) {
    console.log(res)
    modal.close()
    navigateTo(`/dashboard/pages`)
  }
}

const emits = defineEmits(['close'])
</script>
<template>

<UModal>
    <div class="p-4">
      <UCard>
        <template #header> <h2 class="text-xl font-semibold">
            Delete Page 
        </h2> 
    </template>

        
        <p class="text-lg">Are you sure, you want to delete this page?</p>
        <div class="flex justify-end gap-4 mt-4">

            <UButton @click="modal.close()" variant="solid" color="gray">Cancel</UButton>
            <UButton @click="handleSubmit" variant="solid" color="rose">Delete Page</UButton>
        </div>
      </UCard>
    </div>
  </UModal>
</template>