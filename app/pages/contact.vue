<template>
  <UContainer>
    <SectionHeader>Contacts</SectionHeader>
    <div
      v-for="type in types"
      :key="type"
      class="text-center w-full my-3"
    >
      <SubHeader class="my-2">{{ type }}</SubHeader>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="contact in contacts.filter((c) => c.Type === type)"
          :key="contact.ID"
          class="border rounded-2xl p-4 hover:bg-accented"
        >
          <h3 class="text-lg font-bold">{{ contact.Name }}</h3>
          <p class="text-md font-bold">{{ contact.Title }}</p>
          <p class="body">
            <NuxtLink
              :to="`mailto:${contact.Email}`"
              target="_blank"
            >
              {{ contact.Email }}
            </NuxtLink>
          </p>
          <p>{{ contact.Phone }}</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
  const { data } = useFetch("/api/contacts");
  const contacts = computed(() => data.value?.contacts || []);
  const types: Ref<string[]> = computed(() => data.value?.types || []);
</script>

<style lang="postcss"></style>
