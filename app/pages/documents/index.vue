f
<template>
  <SectionHeader>Rules</SectionHeader>
  <div
    v-for="pgm in rulePrograms"
    :key="pgm"
    class="my-8"
  >
    <SubHeader>
      <div class="text-center">{{ pgm }}</div>
    </SubHeader>
  </div>
</template>

<script lang="ts" setup>
  const { data } = useFetch("/api/rules");
  const rulePrograms = ref<string[]>([]);

  watch(
    () => data.value,
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

<style lang="postcss"></style>
