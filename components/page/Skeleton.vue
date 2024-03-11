<script lang="ts" setup></script>

<template>
  <div>
    <UContainer>
      <div class="relative">

        <USkeleton class="h-64 " />
        <USkeleton class="size-36 border border-primary absolute bottom-0 translate-y-1/2 right-1/2 translate-x-1/2" :ui="{ rounded: 'rounded-full' }" />
      </div>
      <ul class="mt-20 space-y-4">
        <USkeleton class="h-12" />
        <USkeleton class="h-12" />
        <USkeleton class="h-12" />
        <USkeleton class="h-12" />
        <USkeleton class="h-12" />
      </ul>
      </UContainer>

  </div>
</template>

<style scoped></style>
