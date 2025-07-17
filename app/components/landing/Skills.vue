<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    title="Skills"
    class="w-full"
    :ui="{
      container: '!p-0 !pt-6 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <div class=" grid grid-cols-2">
      <div class="text-center ">
        <h1 class="mb-2 text-xl">
          Technologies I worked with
        </h1>
        <div class=" flex flex-wrap items-center w-full gap-2 justify-center">
          <UBadge
            v-for="(skill, index) in page.skills"
            :key="index + skill.title"
            size="md"
            color="primary"
            variant="outline"
            :icon="skill.icon"
          >
            {{ skill.title }}
          </UBadge>
        </div>
      </div>

      <div class="text-center ">
        <h1 class="mb-2 text-xl">
          Worked most with
        </h1>
        <div class=" flex flex-wrap items-center w-full gap-2 justify-center">
          <UBadge
            v-for="(skill, index) in page.advancedSkills"
            :key="index + skill.title"
            size="md"
            color="primary"
            variant="outline"
            :icon="skill.icon"
          >
            {{ skill.title }}
          </UBadge>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<style></style>
