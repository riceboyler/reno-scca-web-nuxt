<template>
  <UContainer>
    <SectionHeader>Documents</SectionHeader>
    <UTabs :items="tabOpts">
      <template #general>
        <SubHeader>
          <div class="text-center w-full">General</div>
        </SubHeader>
        <DocumentsTable
          :documents="
            documents
              ?.filter((document) => document.Path.includes('General/'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
        />
      </template>
      <template #minutes>
        <SubHeader>
          <div class="text-center w-full">Minutes</div>
        </SubHeader>
        <DocumentsTable
          :documents="
            documents
              ?.filter((document) => document.Path.includes('Minutes'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
        />
      </template>
      <template #solo>
        <SubHeader>
          <div class="text-center w-full">Solo</div>
        </SubHeader>
        <DocumentsTable
          :documents="
            documents
              ?.filter((document) => document.Path.includes('Solo/'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
        />
      </template>
      <template #track>
        <SubHeader>
          <div class="text-center w-full">Track</div>
        </SubHeader>
        <DocumentsTable
          :documents="
            documents
              ?.filter((document) => document.Path.includes('Trials/'))
              .sort((a, b) => dayjs(b.Date).diff(dayjs(a.Date)))
          "
        />
      </template>
    </UTabs>
  </UContainer>
</template>

<script lang="ts" setup>
  import dayjs from "dayjs";

  const { data: documents } = useFetch("/api/documents");

  const tabOpts = [
    { slot: "general", label: "General", check: "General/" },
    { slot: "minutes", label: "Minutes", check: "Minutes" },
    { slot: "solo", label: "Solo", check: "Solo/" },
    { slot: "track", label: "Track", check: "Track/" },
  ];
</script>
