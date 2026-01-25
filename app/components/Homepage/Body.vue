<template>
  <div class="w-full">
    <SectionHeader>General Info</SectionHeader>
    <div class="my-4 mx-auto max-w-100">
      <NuxtImg
        src="/images/reno_scca_logo.jpg"
        alt="Reno SCCA Logo"
      />
    </div>
    <div v-if="!data || data.length === 0">Loading...</div>
    <div
      v-for="content in data"
      v-else
      :key="content.ID"
    >
      <div v-html="content.Text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const { data } = useFetch("/api/homeContent");
</script>

<style lang="postcss"></style>
