<!-- eslint-disable vue/no-v-html -->
<template>
  <UContainer>
    <div class="flex flex-col gap-4">
      <SectionHeader>About Our Races</SectionHeader>
      <UTabs :items="tabItems">
        <template #content="{ item }">
          <div class="m-8 bg-secondary/10">
            <SubHeader class="my-4">{{ item.label }}</SubHeader>
            <div
              v-if="isExpanded === item.label"
              class="p-4"
              v-html="item.content"
            />
            <div
              v-else
              class="p-4"
            >
              <div v-html="item.shortText" />
              <UButton
                variant="outline"
                class="mx-4 mb-4"
                @click="isExpanded = item.label?.toString() ?? ''"
              >
                Read More
              </UButton>
            </div>
          </div>
        </template>
      </UTabs>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { TabsItem } from "@nuxt/ui";

  const { data: programPages } = useFetch("/api/programPages");
  const tabItems = ref<TabsItem[]>([]);
  const isExpanded = ref("");

  watch(
    programPages,
    (value) => {
      if (value) {
        tabItems.value = value.map((pgm) => ({
          label: pgm.Program,
          content: pgm.PageContent,
          shortText: pgm.ShortText,
        })) satisfies TabsItem[];
      }
    },
    { immediate: true }
  );
</script>

<style lang="postcss"></style>
