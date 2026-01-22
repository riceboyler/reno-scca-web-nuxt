<template>
  <UHeader
    title=""
    class="h-[100] max-w-full! py-2.5"
    :toggle="{
      class: 'text-2xl md:text-3xl',
    }"
  >
    <template #left>
      <UColorModeImage
        light="/images/reno_scca_logo_transparent.png"
        dark="/images/reno_scca_logo_inverted_white_text.png"
        alt="Reno SCCA Region Logo"
        class="w-26 h-12 lg:w-51 lg:h-25"
      />
    </template>
    <UNavigationMenu
      :items="items"
      class="font-oswald hidden md:flex"
      variant="link"
      type="single"
    />
    <template #right>
      <UColorModeButton
        class="ml-2 text-2xl md:text-3xl cursor-pointer text-muted hover:text-default"
      />
    </template>
    <template #body class="transition-all-2s">
      <UNavigationMenu
        :items="items"
        class="font-oswald border-2 border-default rounded-2xl"
        orientation="vertical"
        type="single"
      />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Schedule",
    to: "/schedule",
    class: "text-xl lg:text-3xl",
  },
  {
    label: "Results",
    to: "/results",
    class: "text-xl lg:text-3xl",
  },
  {
    label: "Cars & Rules",
    to: "/documents/rules",
    class: "text-xl lg:text-3xl",
  },
  {
    label: "Club Docs",
    to: "/documents",
    class: "text-xl lg:text-3xl",
  },
  {
    label: "Our Events",
    to: "/program",
    class: "text-xl lg:text-3xl",
  },
  {
    label: "Photo Gallery",
    to: "/gallery",
    class: "text-xl lg:text-3xl",
  },
  {
    label: "Contact Us",
    to: "/contact",
    class: "text-xl lg:text-3xl",
  },
]);
</script>

<style lang="css"></style>
