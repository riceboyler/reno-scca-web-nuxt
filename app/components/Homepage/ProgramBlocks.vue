<template>
  <div>
    <div v-if="!data">Loading...</div>
    <div
      v-for="page in data"
      v-else
      :key="page.ID"
    >
      <div :id="page.Program">
        <SectionHeader>{{ page.Program }}</SectionHeader>
        <div
          class="my-2"
          v-html="page.ShortText"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { data } = useFetch("/api/programPages");
</script>

<style lang="postcss"></style>
