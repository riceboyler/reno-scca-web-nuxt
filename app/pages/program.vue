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
              :class="
                isExpanded === item.label
                  ? 'max-h-full opacity-100'
                  : 'max-h-0! opacity-0 fixed left-[-100vw] top-[-100vh]'
              "
              class="p-4 mx-4 mb-4 body transition-all duration-500"
              v-html="item.content"
            />
            <div
              class="p-4 transition-all duration-500"
              :class="
                isExpanded === item.label
                  ? 'max-h-0! opacity-0 fixed left-[-100vw] top-[-100vh]'
                  : 'max-h-full opacity-100'
              "
            >
              <div v-html="item.shortText" />
              <UButton
                variant="outline"
                class="mx-4 mb-4 body"
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
