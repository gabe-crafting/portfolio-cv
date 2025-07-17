<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div>
    <h1
      class="tracking-tight font-bold text-pretty text-3xl sm:text-4xl lg:text-5xl text-shadow-md max-w-lg mx-auto text-center"
    >
      {{ page.title }}
    </h1>
    <p class="text-muted text-center mt-2 mb-8 text-sm sm:text-md lg:text-lg">
      {{ page.description }}
    </p>
  </div>
</template>
