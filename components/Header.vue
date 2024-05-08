<script setup lang="ts">
const { session, signOut } = useAuth();

const user = computed(() => {
  return session.value?.user;
});

const handleSignOut = async () => {
  await signOut();
  navigateTo("/");
};
const guestLinks = [
  [],
  [
    {
      label: "Sign In",
      to: "/sign-in",
      icon: "i-heroicons-arrow-right-end-on-rectangle",
    },
  ],
];

const userLinks = [
  [
    {
      label: "Dashboard",
      to: "/dashboard/pages",
      icon: "mdi:view-dashboard",
    },
    {
      label: "Profile",
      to: "/dashboard/profile",
      icon: "mdi:account",
    },
  ],
  [
    {
      label: "sign out",
      icon: "i-heroicons-arrow-right-on-rectangle",
      click: handleSignOut,
      class: 'text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500'
    },
  ],
];

</script>

<template>
  <header class="border-b border-gray-200 dark:border-gray-800 w-full">
    <UContainer class="flex items-center justify-between gap-4 py-2">
      <NuxtLink :to="user ? `/dashboard/pages` : '/'">
        <Logo />
      </NuxtLink>
      <!-- <UHorizontalNavigation :links="user ? userLinks : guestLinks">
        <template #icon="{ link }" v-if="user">
          <Icon
            :name="link.icon"
            class="group-hover:text-white group-hover:invert group-hover:dark:text-black size-5"
          />
        </template>
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{
            link.label
          }}</span>
        </template>
      </UHorizontalNavigation> -->
      <UDropdown :items="userLinks" :popper="{ placement: 'bottom-end' }" class="z-[100]"  v-if="user">
        <UButton color="white" variant="link" class="underline underline-offset-4 hover:bg-gray-100 dark:hover:bg-gray-700">
          <UAvatar :src="user?.image"  class="border border-gray"/>
          <span>{{ user?.name }}</span>
        </UButton>
        <template #item="{ item }">
          <Icon
            :name="item.icon"
            class="size-5"
          />
          <span class="truncate">{{ item.label }}</span>
        </template>
      </UDropdown>
     <UHorizontalNavigation :links="guestLinks" v-if="!user">
        <template #icon="{ link }">
          <Icon
            :name="link.icon"
            class="group-hover:text-white group-hover:invert group-hover:dark:text-black size-5"
          />
        </template>
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{
            link.label
          }}</span>
        </template>
      </UHorizontalNavigation>
    </UContainer>
  </header>
</template>
