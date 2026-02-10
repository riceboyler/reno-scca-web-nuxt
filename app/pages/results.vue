<template>
  <UContainer>
    <SectionHeader>Results</SectionHeader>
    <UTabs :items="tabItems">
      <template #solo>
        <SubHeader>
          <div class="text-center w-full">Solo</div>
        </SubHeader>
        <SoloWrapper />
      </template>
      <template #track>
        <SubHeader>
          <div class="text-center w-full">Track</div>
        </SubHeader>
        <p class="body text-center">Results coming soon!</p>
      </template>
    </UTabs>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { TabsItem } from "@nuxt/ui";
  import SoloWrapper from "~/components/Results/SoloWrapper.vue";

  const tabItems = [
    { label: "Solo", slot: "solo" },
    { label: "Track", slot: "track" },
  ] satisfies TabsItem[];
</script>

<style lang="postcss"></style>
