<template>
  <div class="w-[75%] mx-auto my-4">
    <div class="grid grid-cols-1 my-2">
      <UButton
        size="lg"
        variant="solid"
        color="neutral"
        class="w-full text-center items-center justify-center"
        @click="onPaxClick"
      >
        Pax Championship
      </UButton>
    </div>
    <div class="grid grid-cols-2 gap-4 my-2">
      <UButton
        color="neutral"
        variant="soft"
        class="w-full text-center items-center justify-center"
        @click="onGroupClick"
      >
        Group Championship
      </UButton>
      <UButton
        color="neutral"
        variant="soft"
        class="w-full text-center items-center justify-center"
        @click="onRawClick"
      >
        Car-Based Raw Comparison
      </UButton>
    </div>
  </div>
  <div class="w-full mx-auto my-4">
    <div class="grid grid-cols-1 md:grid-cols-4 my-4 gap-2">
      <ResultsSoloEvent
        v-for="event in eventNumbers"
        :key="event"
        :event="event"
        :year="yearConfig.Year"
        class="bg-accented rounded-xl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { SoloYearConfig } from "~/db/models/Results.model";
  const router = useRouter();

  type Props = {
    yearConfig: SoloYearConfig;
  };
  const { yearConfig } = defineProps<Props>();

  const eventNumbers = Array.from({ length: yearConfig.NumOfEvents }, (_, i) => i + 1);

  const onPaxClick = (_e: Event) => {
    router.push(`/results/solo/year/${yearConfig.Year}/pax`);
  };

  const onGroupClick = (_e: Event) => {
    router.push(`/results/solo/year/${yearConfig.Year}/group`);
  };

  const onRawClick = (_e: Event) => {
    router.push(`/results/solo/year/${yearConfig.Year}/raw`);
  };
</script>

<style lang="postcss"></style>
