<script lang="ts" setup>
const route = useRoute()
const pages = useUserPages()

if (route.name === 'dashboard-pages' && pages.value?.length > 0) {
  navigateTo(`/dashboard/pages/${pages.value[0].name}`)
}
</script>

<template>
  <div>
    <section class="container grid grid-cols-5 h-full">
      <section class="col-span-1 mr-8">
        <div class="border-b prose dark:prose-invert pb-1 mb-6">
          <h1 class="">Pages</h1>
        </div>
        <DashboardCreatePage :disabled="pages.length >= 5" />
        <ul class="space-y-4 mt-4 max-h-[60dvh] overflow-y-auto p-1">
          <li v-for="{ name } in pages">
            <DashboardPageCard :name />
          </li>
        </ul>
      </section>
      <section class="col-span-4 max-h-[80dvh] overflow-y-auto p-1">
        <span v-if="pages.length === 0" class="text-primary">You have not yet crated any page</span>
          <NuxtPage />
      </section>
    </section>
  </div>
</template>

<style scoped></style>
