<template>
  <div
    :class="alignClass"
    class="flex flex-row w-full flex-wrap font-oswald text-2xl md:text-4xl bg-linear-180 from-indigo-600 to-indigo-300 dark:from-indigo-900 dark:to-indigo-500 p-2"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
  const { align: alignProp = "" } = defineProps<{
    align?: "" | "left" | "center" | "right";
  }>();
  const alignClass = computed(() => {
    switch (alignProp) {
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      case "left":
      default:
        return "justify-between";
    }
  });
</script>
