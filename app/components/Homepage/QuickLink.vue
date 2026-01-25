<template>
  <ULink
    :to="quickLink.Link"
    class="inline-flex flex-row items-start gap-1"
  >
    <div class="pt-1">
      <UIcon
        name="i-lucide-arrow-right"
        class="size-4"
      />
    </div>
    <div>{{ quickLink.LinkText }}</div>
  </ULink>
</template>

<script lang="ts" setup>
  import type { QuickLinkModel } from "~/db/models/QuickLink.model";
  type Props = {
    quickLink: QuickLinkModel;
  };

  const { quickLink } = defineProps<Props>();
</script>
