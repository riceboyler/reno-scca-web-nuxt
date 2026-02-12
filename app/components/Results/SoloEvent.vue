<template>
  <div class="bg-elevated hover:bg-accented rounded-xl p-2">
    <div class="text-left p-1">Event {{ event }}:</div>
    <div class="flex flex-row gap-2 w-full body justify-between">
      <NuxtLink :to="`results/solo/${year}/${event}/group`"> Class Results </NuxtLink>
      <NuxtLink :to="`results/solo/${year}/${event}/pax`"> Pax Times </NuxtLink>
      <NuxtLink :to="`results/solo/${year}/${event}/raw`"> Raw Times </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
  type Props = {
    event: number;
    year: number;
  };

  const { event, year } = defineProps<Props>();
</script>

<style lang="postcss"></style>
