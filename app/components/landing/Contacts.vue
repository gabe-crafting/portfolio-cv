<script lang="ts" setup>
import { Icon, ULink, UPageSection } from '#components'
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <ul class="flex gap-5 text-sm sm:text-md lg:text-lg">
      <li class="flex items-center justify-center gap-1">
        <Icon name="material-symbols:phone-in-talk-watchface-indicator-sharp" />
        <ULink :href="'tel:' + page.contact.phone">{{ page.contact.phone }}</ULink>
      </li>
      <li class="flex items-center justify-center gap-1">
        <Icon name="material-symbols-light:mail-rounded" />
        <ULink :href="'mailto:' + page.contact.email">{{ page.contact.email }}</ULink>
      </li>
      <li class="flex items-center justify-center gap-1">
        <Icon name="mdi:linkedin" />
        <ULink
          :href="page.contact.linkedin"
          target="_blank"
        >Linkedin</ULink>
      </li>
      <li
        v-if="page.contact.github"
        class="flex items-center justify-center gap-1"
      >
        <Icon name="mdi:github" />
        <ULink
          :href="page.contact.github"
          target="_blank"
        >{{ page.contact.github }}</ULink>
      </li>
    </ul>
  </UPageSection>
</template>
