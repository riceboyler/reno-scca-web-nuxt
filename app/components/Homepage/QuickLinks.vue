<template>
  <div class="relative md:sticky top-0 md:top-31.25">
    <div class="top-2.5 min-w-[350px]">
      <div class="border border-accented rounded-lg overflow-hidden">
        <div class="p-2 bg-accented font-oswald text-2xl uppercase text-center">Quick Links</div>
        <div
          v-if="data?.length"
          class="p-2"
        >
          <div v-for="quickLink in data">
            <QuickLink :quickLink="quickLink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import QuickLink from "~/components/Homepage/QuickLink.vue";

  const quickLinks = ref();
  const { data } = await useFetch("/api/quickLinks");
</script>

<style lang="postcss"></style>
