<script setup lang="ts">

const route = useRoute()
const userPages = useUserPages()
const state = reactive({
    href: '',
    name: '',
    icon: null,
})


async function onSubmit() {
    const res = await $fetch('/api/page/link', {
        method: 'POST',
        body: {
            pageId: route.params.userpage,
            href: state.href,
            name: state.name,
            icon: state.icon
        }
    })
    if (res) {
        console.log(res)
        state.href = ''
        state.name = ''
        state.icon = null
        userPages.value[route.params.userpage as string].links.push(...res)
    }
}
</script>

<template>
    <UCard>
    <p class="text-lg">Add link
        <Icon name="mdi:link-plus" class="size-8"/>
    </p>

        <form class="flex gap-4 justify-center" @submit.prevent="onSubmit">
            <UFormGroup label="href" name="href">
                <UInput v-model="state.href" />
            </UFormGroup>
            
            <UFormGroup label="Name" name="name">
                <UInput v-model="state.name" type="text" />
            </UFormGroup>
            
            <UButton type="submit" class="h-max self-end">
                Add Link
            </UButton>
        </form>
    </UCard>
</template>