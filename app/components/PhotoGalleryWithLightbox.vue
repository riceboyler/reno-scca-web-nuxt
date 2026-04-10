<template>
  <div>
    <div
      v-if="images.length > 0"
      class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5 lg:gap-2"
    >
      <NuxtImg
        v-for="(img, index) in images"
        :key="`random-${img.ID}`"
        :src="`${GALLERY_DOMAIN}${img.ThumbnailImagePath}`"
        class="rounded-xl hover:scale-125 transition-transform hover:border-2"
        @click="() => showImg(index)"
      />
    </div>

    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script lang="ts" setup>
  import { GALLERY_DOMAIN } from "~/constants/gallery";
  import type { GalleryModel } from "~/db/models/Gallery.model";

  type Props = {
    images: GalleryModel[];
  };

  const props = defineProps<Props>();

  const visibleRef = ref(false);
  const indexRef = ref(0);

  const showImg = (index: number) => {
    indexRef.value = index;
    visibleRef.value = true;
  };

  const onHide = () => (visibleRef.value = false);

  const imgs = computed(() =>
    props.images.map((img) => `${GALLERY_DOMAIN}${img.FullSizeImagePath}`)
  );
</script>
