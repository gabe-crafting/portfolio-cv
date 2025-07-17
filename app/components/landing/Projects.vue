<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    v-if="page.projects && page.projects.length"
    title="Projects"
    class="w-full"
    :ui="{
      container: '!p-0 !pt-6 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(project, index) in page.projects"
        :key="index"
        class="p-4 border rounded-lg"
      >
        <h3 class="text-lg font-semibold">
          {{ project.title }}
        </h3>
        <p class="text-sm text-muted">
          {{ project.description }}
        </p>
      </div>
    </div>
  </UPageSection>
</template>
