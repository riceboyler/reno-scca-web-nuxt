<template>
  <NuxtImg
    :src="imgSrc"
    alt="Program Icon"
    width="200"
    height="200"
  />
</template>

<script lang="ts" setup>
  import type { ScheduledEventModel } from "~/db/models/ScheduledEvent.model";

  type Props = {
    event: ScheduledEventModel;
  };

  const { event } = defineProps<Props>();

  const imgSrc = ref<string>();

  onMounted(() => {
    switch (event.Program) {
      case "Track":
        imgSrc.value = "/images/track.jpg";
        break;
      case "Solo":
        imgSrc.value = "/images/solo.jpg";
        break;
      case "Street Survival":
        imgSrc.value = "/images/street-survival.jpg";
        break;
      default:
        imgSrc.value = "/images/scca-logo.jpg";
        break;
    }
  });
</script>
