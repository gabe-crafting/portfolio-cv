<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <div class="flex flex-col items-center justify-center gap-4 px-4 py-8 sm:py-12 lg:py-16">
      <LandingHero :page />
      <LandingContacts :page />
      <LandingWorkExperience :page />
      <LandingSkills :page />
      <LandingProjects :page />
    </div>
  </UPage>
</template>
