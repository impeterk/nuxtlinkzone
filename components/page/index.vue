<script lang="ts" setup>
const route = useRoute()
const pageId = route.params.userpage as string || route.params.page as string
const userPages = useUserPages()
const state = reactive({
  pending: false
})

const page = computed(() => {
  return userPages.value?.[pageId]
})


if (!userPages.value[pageId]) {
  const {pending, data: page} = await useFetch(`/api/page?id=${pageId}`, {lazy: true})
  userPages.value[pageId] = page
}


</script>

<template>

  <PageSkeleton v-if="!page" />
  <article v-if="page">
    <UContainer class="relative">
      <slot name="options"></slot>
      <PageHeader :name="page?.id" :image="page?.image!">
      <template #header>
        <slot name="headerEdit"></slot>
      </template>
      </PageHeader>
      <main class="mt-20">
        <ul class="space-y-6">
          <li v-if="page.links" v-for="({ href, name, icon }, index) in page.links" :key="index">
            <PageLink :href :name :icon />
          </li>
        </ul>
        <slot name="addLInk"></slot>
      </main>
    </UContainer>
  </article>
</template>

<style scoped></style>
