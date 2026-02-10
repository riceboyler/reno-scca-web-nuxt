<template>
  <UTable
    v-if="documents?.length"
    :data="documents"
    :columns="columns"
    class="flex-1 body"
    @hover="onHover"
  >
    <template #LinkText-cell="{ row }">
      <NuxtLink
        :href="`https://renoscca.org${row.original.Path}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ row.original.LinkText }}
        <UIcon
          name="bx:link-external"
          class="inline-block ml-1"
        />
      </NuxtLink>
    </template>
  </UTable>
</template>

<script lang="ts" setup>
  import type { TableColumn, TableRow } from "@nuxt/ui";
  import dayjs from "dayjs";
  import type { DocumentModel } from "~/db/models/Document.model";

  type Props = {
    // eslint-disable-next-line vue/require-default-prop
    documents?: SerializeObject<DocumentModel>[];
  };

  const { documents } = defineProps<Props>();

  const columns: TableColumn<DocumentModel>[] = [
    {
      id: "select",
      maxSize: 0,
    },
    {
      accessorKey: "Date",
      header: "Date",
      minSize: 100,
      maxSize: 100,
      cell: ({ row }) => dayjs(row.original.Date).format("M/DD/YY"),
    },
    {
      accessorKey: "LinkText",
      header: "Document",
    },
    {
      accessorKey: "Text",
      header: "Description",
    },
  ];

  const selectedRow = ref<TableRow<DocumentModel> | null>(null);

  const onHover = (_e: Event, row: TableRow<DocumentModel> | null) => {
    selectedRow.value = row;
  };
</script>
