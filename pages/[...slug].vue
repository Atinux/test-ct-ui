<script setup>
import { UPageCard } from '#components'

const route = useRoute()
const { data } = await useAsyncData(() => queryContent(...(route.params.slug || ['/'])).findOne())

useSeoMeta({
  title: () => data.value?.title || 'Missing title',
  description: () => data.value?.description || 'Missing description',
})
</script>

<template>
  <UMain v-if="data">
    <UPageHeader :title="data.title" :description="data.description" />
    <UPageBody prose>
      <ContentRendererMarkdown :value="data" :components="{ PageCard: UPageCard }" />
    </UPageBody>
  </UMain>
  <UPageHeader title="Page not found" v-else />
</template>