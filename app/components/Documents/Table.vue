<template>
  <div class="table w-full gap-2">
    <div class="table-header-group">
      <div class="table-row font-bold">
        <div class="table-cell text-left p-2 border-b border-secondary">Date</div>
        <div class="table-cell text-left p-2 border-b border-secondary">Document</div>
        <div class="hidden md:table-cell text-left p-2 border-b border-secondary">Description</div>
      </div>
    </div>
    <div class="table-row-group">
      <div
        v-for="document in documents"
        :key="document.ID"
        class="table-row text-sm md:text-md hover:bg-secondary/10 transition-colors duration-100"
      >
        <div class="table-cell p-2">{{ dayjs(document.Date).format("M/DD/YY") }}</div>
        <div class="table-cell p-2">
          <NuxtLink
            :href="`https://renoscca.org${document.Path}`"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-row items-center hover:underline hover:text-bold underline md:no-underline"
          >
            {{ document.LinkText }}
          </NuxtLink>
        </div>
        <div
          v-if="!isMobile"
          class="hidden md:table-cell md:p-2"
        >
          {{ document.Text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";
  import type { DocumentModel } from "~/db/models/Document.model";

  const { isMobile } = useDevice();

  type Props = {
    // eslint-disable-next-line vue/require-default-prop
    documents?: SerializeObject<DocumentModel>[];
  };

  const { documents } = defineProps<Props>();
</script>
