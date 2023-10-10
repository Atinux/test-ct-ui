<script setup>
const route = useRoute()
const { data } = await useAsyncData(() => queryContent(route.params.slug).findOne())

useSeoMeta({
  title: () => data.value?.title || 'Missing title',
  description: () => data.value?.description || 'Missing description',
})
</script>

<template>
  <UMain>
    <UPageHeader :title="data.title" :description="data.description" />
    <UPageBody prose>
      <ContentRenderer :value="data" />
    </UPageBody>
  </UMain>
</template>