<!-- eslint-disable vue/no-v-html -->
<template>
  <UContainer>
    <div class="flex flex-col gap-4">
      <SectionHeader>About Our Races</SectionHeader>
      <ClientOnly>
        <UTabs
          v-if="tabItems.length"
          :items="tabItems"
          :size="isMobile ? 'xs' : 'lg'"
        >
          <template #content="{ item }">
            <div class="md:m-4 bg-secondary/10">
              <SubHeader class="my-4">{{ item.label }}</SubHeader>
              <div
                v-if="isExpanded === item.label"
                class="p-4 mx-4 mb-4 body"
                v-html="item.content"
              />
              <div
                v-else
                class="p-4"
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
      </ClientOnly>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { TabsItem } from "@nuxt/ui";

  const { isMobile } = useDevice();

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
