<template>
  <UApp class="min-h-[80vh]">
    <Header />
    <UMain>
      <NuxtPage class="py-4" />
    </UMain>
  </UApp>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";
  import UTC from "dayjs/plugin/utc";
  dayjs.extend(UTC);
</script>
