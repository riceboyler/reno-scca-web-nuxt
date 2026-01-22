<template>
  <div />
</template>

<script lang="ts" setup>
const { data: quickLinks } = await useFetch("/api/quickLinks");
</script>

<style></style>
