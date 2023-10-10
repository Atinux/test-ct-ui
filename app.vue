<script setup>
const { data: navigation } = await useAsyncData(() => fetchContentNavigation())
const links = mapContentNavigation(navigation.value)
</script>

<template>
  <UHeader :links="links" />
  <UContainer>
    <NuxtPage/>
  </UContainer>
</template>
