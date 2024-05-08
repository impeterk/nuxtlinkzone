<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})
const route = useRoute()
const {data: pages} = await useFetch('/api/pages')

if (route.name === 'dashboard-pages' && pages.value?.length! > 0) {
  navigateTo(`/dashboard/pages/${pages.value?.[0].id}`)
}

</script>

<template>
  <div>
    <section class="grid grid-cols-5 h-full">
      <section class="col-span-1 mr-8">
        <div class="border-b prose dark:prose-invert pb-1 mb-6">
          <h1 class="">Pages</h1>
        </div>
        <DashboardCreatePage :disabled="pages?.length! >= 5" />
        <ul class="space-y-4 mt-4 max-h-[60dvh] overflow-y-auto p-1">
          <li v-for="{ id:name } in pages">
            <DashboardPageCard :name />
          </li>
        </ul>
      </section>
      <section class="col-span-4 max-h-[80dvh] overflow-y-auto p-1">
        <span v-if="pages?.length === 0" class="text-primary">You have not yet crated any page</span>
        <ClientOnly>
          
          <NuxtPage :page-key="route => route.fullPath" />
          </ClientOnly>
      </section>
    </section>
  </div>
</template>

<style scoped></style>
