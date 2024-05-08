<script lang="ts" setup>
import { PageDelete } from '#components';
const modal = useModal()
const userPages = useUserPages()

function openDeletePage() {
  modal.open(PageDelete)
}

const route = useRoute()
const pageId = route.params.userpage
const {pending, data: page} = await useFetch(`/api/page?id=${pageId}`, {lazy: true})


if (!page) throw createError({
  statusCode: 404,
  message: 'Page not found'
})
// links.value[page.value?.id] = page.value?.links
// console.log(links.value)

watch(page, (newValue) => {
  userPages.value[pageId] = newValue
})

</script>

<template>
  <Suspense>
    <!-- component with nested async dependencies -->
    <Page>
      <template #options>

        <UDropdown :items="[[{ label: 'Delete Page', icon: 'i-heroicons-trash', click: openDeletePage }]]" :popper="{ placement: 'bottom-end' } "
          class="absolute top-1 right-10 z-50">
          <UButton variant="ghost" color="white" trailing-icon="i-heroicons-ellipsis-vertical" />
        </UDropdown>
      </template>
      <template #headerEdit>
        <UButton icon="i-heroicons-pencil-square" color="primary" variant="outline" square />
      </template>
      <template #addLInk>
        <div class="mt-8">
        <PageAddLink />
      </div>
      </template>
    </Page>

    <!-- loading state via #fallback slot -->
    <template #fallback>
      <PageSkeleton />
    </template>
  </Suspense>
  <PageDelete/>
</template>

<style scoped></style>
