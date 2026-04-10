<template>
  <UContainer>
    <SectionHeader>Photo Gallery</SectionHeader>

    <div class="my-4 flex flex-col gap-2">
      <SubHeader class="text-center">Random Gallery Images</SubHeader>
      <PhotoGalleryWithLightbox :images="randomImages" />
    </div>

    <div v-if="programs.length > 0">
      <div
        v-for="pgm in programs"
        :key="pgm"
      >
        <SubHeader class="uppercase">{{ pgm }}</SubHeader>
        <h3
          v-for="year in [
            ...new Set(
              galleryEvents
                .filter((evt) => evt.Program === pgm)
                .map((evt) => evt.EventYear)
                .sort((a, b) => b - a)
            ),
          ]"
          :key="year"
          class="py-2 cursor-pointer"
        >
          {{ year }}
        </h3>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  const { data: random } = useFetch("/api/gallery/random");

  const randomImages = computed(() => random.value || []);

  const { data } = useFetch("/api/gallery/events");

  const galleryEvents = computed(() => data.value || []);

  const programs = [...new Set(galleryEvents.value?.map((evt) => evt.Program))];
</script>

<style lang="css" scoped></style>
