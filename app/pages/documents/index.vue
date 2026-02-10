<template>
  <UContainer>
    <SectionHeader>Documents</SectionHeader>
    <UTabs :items="tabOpts">
      <template #general>
        <SubHeader>
          <div class="text-center w-full">General</div>
        </SubHeader>
        <UTable
          :data="
            documents
              ?.filter((document) => document.Path.includes('General/'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
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
      <template #minutes>
        <SubHeader>
          <div class="text-center w-full">Minutes</div>
        </SubHeader>
        <UTable
          :data="
            documents
              ?.filter((document) => document.Path.includes('Minutes'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
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
      <template #solo>
        <SubHeader>
          <div class="text-center w-full">Solo</div>
        </SubHeader>
        <UTable
          :data="
            documents
              ?.filter((document) => document.Path.includes('Solo/'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
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
      <template #track>
        <SubHeader>
          <div class="text-center w-full">Track</div>
        </SubHeader>
        <UTable
          :data="
            documents
              ?.filter((document) => document.Path.includes('Trials/'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
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
    </UTabs>
  </UContainer>
</template>

<script lang="ts" setup>
  import type { TableColumn, TableRow } from "@nuxt/ui";
  import dayjs from "dayjs";
  import type { DocumentModel } from "~/db/models/Document.model";

  const { data: documents } = useFetch("/api/documents");

  const tabOpts = [
    { slot: "general", label: "General", check: "General/" },
    { slot: "minutes", label: "Minutes", check: "Minutes" },
    { slot: "solo", label: "Solo", check: "Solo/" },
    { slot: "track", label: "Track", check: "Track/" },
  ];

  const columns: TableColumn<DocumentModel>[] = [
    {
      id: "select",
    },
    {
      accessorKey: "Date",
      header: "Date",
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
