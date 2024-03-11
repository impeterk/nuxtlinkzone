<script lang="ts" setup>
// await new Promise((resolve) => setTimeout(resolve, 3000));
const route = useRoute()
const currentPage = useUserPages().value.filter((page) => page.name === (route.params.userpage || route.params.page)).at(0)

</script>

<template>
<article>
    <UContainer>
      <PageHeader :name="currentPage?.name" :image="currentPage?.image" />
      <main class="mt-20">
        <ul class="space-y-6">

          <li v-if="currentPage?.links" v-for="({href, name, icon}, index) in currentPage.links" :key="index">
            <PageLink :href :name :icon />
          </li>
        </ul>
      </main>
    </UContainer>
  </article>
</template>

<style scoped></style>
