<script lang="ts" setup>
definePageMeta({
  layout: "user-page",
});
const route = useRoute();

const { data: page, pending } = useFetch(`/api/page?id=${route.params.page}`, {lazy: true});
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <PageSkeleton v-if="pending" />
    <article v-if="page">
      <UContainer class="relative">
        <PageHeader :name="page?.id" :image="page?.image!">
        </PageHeader>
        <main class="mt-20">
          <ul class="space-y-6">
            <li
              v-if="page.links"
              v-for="({ href, name, icon }, index) in page.links"
              :key="index"
            >
              <PageLink :href :name :icon />
            </li>
          </ul>
        </main>
      </UContainer>
    </article>
  </div>
</template>

<style scoped></style>
