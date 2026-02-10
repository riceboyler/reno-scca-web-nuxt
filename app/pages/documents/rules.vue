f
<template>
  <UContainer>
    <SectionHeader>Rules</SectionHeader>
    <div
      v-for="pgm in rulePrograms"
      :key="pgm"
      class="my-8"
    >
      <SubHeader>
        <div class="text-center">{{ pgm }}</div>
      </SubHeader>
      <div
        v-for="rule in rules?.filter((rule) => rule.Program === pgm)"
        :key="rule.ID"
        class="rules-list mb-2 mt-4"
      >
        <NuxtLink
          :href="rule.Path"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-4 flex flex-row items-center"
        >
          {{ rule.LinkText }}
          <UIcon
            name="bx:link-external"
            class="inline-block ml-1"
          />
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  const { data: rules } = useFetch("/api/rules");
  const rulePrograms = ref<string[]>([]);

  watch(
    () => rules.value,
    (newData) => {
      if (newData) {
        rulePrograms.value = Array.from(
          new Set(newData.map((rule: { Program: string }) => rule.Program))
        );
      }
    },
    { immediate: true }
  );
</script>
