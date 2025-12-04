<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    v-if="page.landingDescription"
    :ui="{
      container: '!p-0',
      title: 'hidden',
      description: 'text-center mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #description>
      <p class="text-center text-muted text-balance">
        {{ page.landingDescription }}
      </p>
    </template>
  </UPageSection>
</template>
