<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.experience.title"
    class="w-full"
    :ui="{
      container: '!p-0 !pt-6 gap-4 sm:gap-4  w-full',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-2 w-full">
        <div
          v-for="(experience, index) in page.experience.items"
          :key="index"
          class="w-full"
        >
          <div class="text-muted flex items-center text-nowrap gap-2 w-full">
            <p class="text-sm">
              {{ experience.startDate }} - {{ experience.endDate }}
            </p>
            <USeparator />
            <ULink
              class="flex items-center gap-1"
              :to="experience.company.url"
              target="_blank"
            >
              <span class="text-sm">
                {{ experience.position }}
              </span>
              <div
                class="inline-flex items-center gap-1"
                :style="{ color: experience.company.color }"
              >
                <span class="font-medium">{{ experience.company.name }}</span>
                <UIcon :name="experience.company.logo" />
              </div>
            </ULink>
          </div>
          <p class="mt-2 ml-4 text-sm text-left text-muted text-balance">
            {{ experience.description || 'No description available.' }}
          </p>
        </div>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped></style>
